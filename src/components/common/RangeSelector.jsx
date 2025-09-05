import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const RangeSelector = ({ 
  planName, 
  priceRange, 
  onAmountSelect, 
  onCancel,
  serviceType = 'Service'
}) => {
  const [selectedAmount, setSelectedAmount] = useState(priceRange.average);
  const [customAmount, setCustomAmount] = useState('');
  const [useCustom, setUseCustom] = useState(false);

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setUseCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setUseCustom(true);
    if (value && !isNaN(value)) {
      setSelectedAmount(parseFloat(value));
    }
  };

  const handleProceed = () => {
    const finalAmount = useCustom ? parseFloat(customAmount) || selectedAmount : selectedAmount;
    onAmountSelect(finalAmount);
  };

  const presetAmounts = [
    priceRange.min,
    Math.round(priceRange.min + (priceRange.max - priceRange.min) * 0.25),
    priceRange.average,
    Math.round(priceRange.min + (priceRange.max - priceRange.min) * 0.75),
    priceRange.max
  ];

  return (
    <div className="range-selector-modal">
      <div className="range-selector-content">
        <div className="range-selector-header">
          <h3>Choose Payment Amount</h3>
          <p className="plan-info">{planName} - {serviceType}</p>
          <p className="range-info">Range: ${priceRange.min} - ${priceRange.max}</p>
        </div>

        <div className="amount-selection">
          <h4>Select Amount:</h4>
          
          <div className="preset-amounts">
            {presetAmounts.map((amount, index) => (
              <button
                key={amount}
                className={`preset-amount-btn ${selectedAmount === amount && !useCustom ? 'selected' : ''}`}
                onClick={() => handleAmountChange(amount)}
              >
                <span className="amount">${amount}</span>
                <span className="label">
                  {index === 0 && 'Minimum'}
                  {index === 1 && 'Low'}
                  {index === 2 && 'Average'}
                  {index === 3 && 'High'}
                  {index === 4 && 'Maximum'}
                </span>
              </button>
            ))}
          </div>

          <div className="custom-amount-section">
            <h4>Or enter custom amount:</h4>
            <div className="custom-input-group">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder={`${priceRange.min} - ${priceRange.max}`}
                min={priceRange.min}
                max={priceRange.max}
                className="custom-amount-input"
              />
            </div>
            {useCustom && customAmount && (
              <div className="custom-amount-preview">
                <FaCheckCircle className="check-icon" />
                <span>Custom amount: ${customAmount}</span>
              </div>
            )}
          </div>
        </div>

        <div className="range-selector-actions">
          <button 
            className="btn btn-secondary" 
            onClick={onCancel}
          >
            Cancel
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleProceed}
            disabled={!selectedAmount || (useCustom && (!customAmount || isNaN(customAmount)))}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RangeSelector;

