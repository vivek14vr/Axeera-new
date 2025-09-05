import React, { useState } from 'react';
import { FaCreditCard, FaTimes, FaDollarSign } from 'react-icons/fa';
import { openPaymentPopup } from '../../utils/paymentPopup';

const StickyPayment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedService, setSelectedService] = useState('Web Development');

  const services = [
    'Web Development',
    'Mobile App Development', 
    'SEO Services',
    'Digital Marketing',
    'UI/UX Design',
    'Other Services'
  ];

  const handleCustomPayment = () => {
    const amount = parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const description = `Custom payment for ${selectedService} - $${amount}`;
    
    openPaymentPopup(
      'Custom Payment',
      amount,
      'USD',
      description
    );

    setIsOpen(false);
    setCustomAmount('');
  };

  const togglePayment = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sticky Payment Button */}
      <div className="sticky-payment-btn" onClick={togglePayment}>
        <FaCreditCard />
        <span>Quick Pay</span>
      </div>

      {/* Payment Modal */}
      {isOpen && (
        <div className="sticky-payment-modal">
          <div className="sticky-payment-content">
            <div className="sticky-payment-header">
              <h3>Quick Payment</h3>
              <button className="close-btn" onClick={togglePayment}>
                <FaTimes />
              </button>
            </div>

            <div className="sticky-payment-body">
              <div className="service-selection">
                <label>Select Service:</label>
                <select 
                  value={selectedService} 
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="service-select"
                >
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="amount-input-section">
                <label>Enter Amount:</label>
                <div className="amount-input-group">
                  <FaDollarSign className="currency-icon" />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    className="amount-input"
                  />
                </div>
              </div>

              <div className="quick-amounts">
                <p>Quick amounts:</p>
                <div className="quick-amount-buttons">
                  {[50, 100, 250, 500, 1000].map(amount => (
                    <button
                      key={amount}
                      className="quick-amount-btn"
                      onClick={() => setCustomAmount(amount.toString())}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky-payment-actions">
              <button 
                className="btn btn-secondary" 
                onClick={togglePayment}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleCustomPayment}
                disabled={!customAmount || parseFloat(customAmount) <= 0}
              >
                <FaCreditCard />
                Pay ${customAmount || '0'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyPayment;

