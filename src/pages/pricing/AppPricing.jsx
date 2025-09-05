import React, { useState, useEffect } from 'react';
import Layout from '../../components/common/Layout';
import RangeSelector from '../../components/common/RangeSelector';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaCreditCard } from 'react-icons/fa';
import { parsePriceRange, getPaymentDescription } from '../../utils/paymentUtils';
import { openPaymentPopup, setupPaymentListener } from '../../utils/paymentPopup';

const AppPricing = () => {
  const [showRangeSelector, setShowRangeSelector] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { name: 'Grow', price: '$599-1999', period: 'project', features: ['Single platform (iOS or Android)', 'Core features (2-3)', 'Basic UI kit', 'API integration', '4-6 weeks'] },
    { name: 'Scale', price: '$1999-3999', period: 'project', features: ['Single platform', 'Custom UI/UX', 'Auth & forms', 'Analytics baseline', '6-8 weeks'], popular: true },
    { name: 'Dominate', price: '$3999-9999', period: 'project', features: ['Cross-platform (iOS & Android)', 'Custom flows (4-6)', 'Payments integration', 'Crashlytics/Analytics', '8-12 weeks'] },
    { name: 'Elite', price: '$9999-11999', period: 'project', features: ['Enterprise-ready', 'Role-based access', 'Offline-first', 'Observability', '12-20 weeks'] }
  ];

  const handlePaymentClick = (plan) => {
    setSelectedPlan(plan);
    setShowRangeSelector(true);
  };

  const handleAmountSelect = (amount) => {
    const description = getPaymentDescription(selectedPlan.name, 'Mobile App Development');
    
    openPaymentPopup(
      selectedPlan.name,
      amount,
      'USD',
      description
    );
    
    setShowRangeSelector(false);
    setSelectedPlan(null);
  };

  const handleRangeSelectorCancel = () => {
    setShowRangeSelector(false);
    setSelectedPlan(null);
  };

  const handlePaymentSuccess = (details, data, planName, amount) => {
    console.log('Payment successful:', { details, data, planName, amount });
    alert(`Payment successful! Thank you for choosing the ${planName} plan.`);
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
    alert('Payment failed. Please try again.');
  };

  const handlePaymentCancel = (data) => {
    console.log('Payment canceled:', data);
  };

  // Setup payment message listener
  useEffect(() => {
    const cleanup = setupPaymentListener(
      handlePaymentSuccess,
      handlePaymentError,
      handlePaymentCancel
    );

    return cleanup;
  }, []);

  const renderBullet = (text) => {
    const isZero = /[-–]\s*0\b/.test(text) || /\(not included\)$/i.test(text);
    return (
      <li className={isZero ? 'feature-not-included' : 'feature-included'}>
        {isZero ? <FaTimesCircle /> : <FaCheckCircle />}{text}
      </li>
    );
  };

  const planDeliverables = {
    Grow: [
      { title: 'Architecture', items: ['Single platform (iOS or Android)', 'REST API integration', 'Local storage', 'Basic error handling', 'Monorepo (– 0)'] },
      { title: 'Features', items: ['Auth (email/OTP)', 'Core flows (2-3)', 'Push notifications (– 0)', 'In-app feedback (– 0)', 'Versioning & releases'] },
      { title: 'UI/UX', items: ['Basic UI kit', 'Essential screens', 'Adaptive layouts', 'Light theme only', 'Accessibility basics'] },
      { title: 'Quality', items: ['Unit tests (core)', 'Basic logging', 'Crash reporting', 'UAT – 1 round', 'Testflight/Alpha deploy'] },
      { title: 'Ops & Handoff', items: ['Store listing setup', 'Release notes', 'Developer handoff', 'Docs summary'] }
    ],
    Scale: [
      { title: 'Architecture', items: ['Single platform', 'Secure storage', 'Feature flags (– 0)', 'REST/GraphQL APIs', 'Monorepo (– 0)'] },
      { title: 'Features', items: ['Auth (email/social)', 'Core flows (4-5)', 'Payments (– 0)', 'Deep linking', 'Push notifications (– 0)'] },
      { title: 'UI/UX', items: ['Custom UI kit', 'Design tokens', 'Dark mode (– 0)', 'Micro-interactions', 'Onboarding flows'] },
      { title: 'Quality', items: ['Unit + integration tests', 'Analytics events', 'Crashlytics/Sentry', 'UAT – 2 rounds', 'Beta deploys'] },
      { title: 'Ops & Handoff', items: ['App Store / Play Store', 'Basic CI for builds (– 0)', 'Release notes + changelogs', 'Team training (– 0)', 'Docs pack'] }
    ],
    Dominate: [
      { title: 'Architecture', items: ['Cross-platform (iOS & Android)', 'GraphQL + REST', 'Secure storage + encryption', 'Feature flags', 'Modular code structure'] },
      { title: 'Features', items: ['Auth (email/social)', 'Payments (Stripe/Razorpay)', 'Core flows (4-6)', 'Offline caching', 'Deep links'] },
      { title: 'UI/UX', items: ['Custom design system', 'Light/Dark themes', 'Animations & micro-interactions', 'Accessibility AA (– 0)', 'Design handoff'] },
      { title: 'Quality', items: ['Unit + integration tests', 'Analytics & events', 'Crash monitoring', 'UAT – 2 rounds', 'Staged beta deploys'] },
      { title: 'Ops & Handoff', items: ['Store listings', 'CI for builds', 'Release process docs', 'Team training session', 'Docs pack'] }
    ],
    Elite: [
      { title: 'Architecture', items: ['Enterprise-ready modules', 'Role-based architecture', 'Secure storage + encryption', 'Feature flags + A/B', 'Observability hooks'] },
      { title: 'Features', items: ['SSO/Enterprise auth', 'Role-based flows', 'Subscriptions', 'Offline-first', 'Campaign deep links'] },
      { title: 'UI/UX', items: ['Full design system', 'Accessibility AA', 'Advanced animations', 'Theming (Light/Dark)', 'Design handoff'] },
      { title: 'Quality', items: ['Unit + integration + e2e', 'Logs/metrics/traces', 'Crash & performance budget', 'UAT – 3 rounds', 'Staged rollouts'] },
      { title: 'Ops & Handoff', items: ['CI/CD pipelines', 'Infra as code (– 0)', 'Runbooks & playbooks', 'Admin training', 'Full documentation'] }
    ],
    // Elite: [
    //   { title: 'Architecture', items: ['Advanced multi-module', 'Cross-platform + web (– 0)', 'GraphQL federation (– 0)', 'Security hardening', 'Performance budget'] },
    //   { title: 'Features', items: ['Enterprise SSO', 'RBAC & audit trails', 'Advanced subscriptions', 'Offline sync engine', 'Experiments & flags'] },
    //   { title: 'UI/UX', items: ['Enterprise design system', 'Accessibility AA+', 'Motion design library', 'Custom theming', 'Design tokens & docs'] },
    //   { title: 'Quality', items: ['Extensive test pyramid', 'Observability suite', 'Perf tracing & budgets', 'UAT – 4 rounds', 'Phased rollouts'] },
    //   { title: 'Ops & Handoff', items: ['Full CI/CD with gates', 'IaC + secrets management', 'Operational runbooks', 'Admin + dev training', 'Complete documentation'] }
    // ]
  };

  return (
    <Layout>
      <section className="pricing-hero">
        <div className="hero-content">
          <div className="hero-badge">Mobile Apps</div>
          <h1 className="hero-title">App Development Pricing</h1>
          <p className="hero-subtitle">From MVPs to enterprise apps — clear, outcome-driven pricing</p>
        </div>
      </section>

      <section className="pricing-plans">
        <div className="container">
          <div className="section-header text-center mb-16">
            <p className="section-subtitle">Choose a plan</p>
            <h2 className="section-title">Momentum for every product stage</h2>
          </div>
          <div className="plans-grid five-col compact">
            {plans.map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Best Value</div>}
                <div className="plan-header">
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-pricing">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price.replace('$','')}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>
                <div className="plan-action">
                  <button 
                    onClick={() => handlePaymentClick(plan)}
                    className="btn btn-primary flex items-center justify-center gap-2 w-full"
                  >
                    <FaCreditCard />
                    Pay Now
                  </button>
                </div>
                <h4 style={{marginTop: '0.5rem'}}>Highlights</h4>
                <ul className="features-list">
                  {plan.features.map((f) => (
                    <li key={f} className="feature-included"><FaCheckCircle />{f}</li>
                  ))}
                </ul>
                <div className="plan-features">
                  {planDeliverables[plan.name].map((block) => (
                    <div key={block.title} style={{ marginTop: '0.75rem' }}>
                      <h4 style={{ marginBottom: '0.25rem' }}>{block.title}</h4>
                      <ul className="features-list">
                        {block.items.map((it) => renderBullet(it))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showRangeSelector && selectedPlan && (
        <RangeSelector
          planName={selectedPlan.name}
          priceRange={parsePriceRange(selectedPlan.price)}
          onAmountSelect={handleAmountSelect}
          onCancel={handleRangeSelectorCancel}
          serviceType="Mobile App Development"
        />
      )}
    </Layout>
  );
};

export default AppPricing;