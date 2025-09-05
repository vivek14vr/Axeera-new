import React, { useState, useEffect } from 'react';
import Layout from '../../components/common/Layout';
import RangeSelector from '../../components/common/RangeSelector';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaCreditCard } from 'react-icons/fa';
import { parsePriceRange, getPaymentDescription } from '../../utils/paymentUtils';
import { openPaymentPopup, setupPaymentListener } from '../../utils/paymentPopup';

const WebPricing = () => {
  const [showRangeSelector, setShowRangeSelector] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { name: 'Growth', price: '$299-699', period: 'one-time', features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Contact form', '1 revision'] },
    { name: 'Pro', price: '$699-1299', period: 'one-time', features: ['Up to 12 pages', 'CMS (Blog)', 'On-page SEO', 'Speed optimization', '3 revisions'], popular: true },
    { name: 'Scale', price: '$1299-1999', period: 'one-time', features: ['Up to 18 pages', 'CMS sections', 'Advanced SEO', 'Image/CDN optimization', '4 revisions'] },
    { name: 'Enterprise', price: '$1999-2999', period: 'one-time', features: ['Custom pages', 'Advanced animations', 'SEO + Analytics', '3rd-party integrations', '5 revisions'] }
  ];

  const handlePaymentClick = (plan) => {
    setSelectedPlan(plan);
    setShowRangeSelector(true);
  };

  const handleAmountSelect = (amount) => {
    const description = getPaymentDescription(selectedPlan.name, 'Web Development');
    
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
    Growth: [
      { title: 'Design', items: ['Custom homepage layout', 'Inner page templates', 'Mobile-first responsive', 'Brand color & typography', 'Basic icon set'] },
      { title: 'Development', items: ['Static pages (up to 5)', 'Contact form with validation', 'Basic components (header/footer)', 'Image optimization', 'Accessibility basics'] },
      { title: 'SEO & Performance', items: ['Meta titles/descriptions', 'XML sitemap', 'Robots.txt', 'Basic schema (Organization)', 'Core Web Vitals check'] },
      { title: 'Integrations', items: ['Google Analytics', 'Search Console', 'Basic social share', 'Newsletter capture (– 0)'] },
      { title: 'QA & Deployment', items: ['Cross-browser testing', 'Responsive testing', 'UAT round – 1', 'Deployment to hosting'] },
      { title: 'Support', items: ['Bug fixes – 14 days', 'Content updates – 2', 'Training handoff', 'Documentation summary'] }
    ],
    Pro: [
      { title: 'Design', items: ['Custom homepage + 2 hero variants', 'Inner page templates', 'Mobile-first responsive', 'Brand visuals & illustrations', 'Icon set + SVGs'] },
      { title: 'Development', items: ['Dynamic pages (up to 12)', 'CMS (Blog)', 'Reusable components library', 'Contact forms + spam protection', 'Image/CDN optimization'] },
      { title: 'SEO & Performance', items: ['Meta titles/descriptions', 'XML sitemap', 'Robots.txt', 'Expanded schema (Breadcrumb, Article)', 'Core Web Vitals improvements'] },
      { title: 'Integrations', items: ['Google Analytics', 'Search Console', 'Newsletter (Mailchimp/Sendgrid)', 'CRM/Webhooks (– 0)'] },
      { title: 'QA & Deployment', items: ['Cross-browser testing', 'Responsive testing', 'UAT rounds – 2', 'Staging + Production deploy'] },
      { title: 'Support', items: ['Bug fixes – 30 days', 'Content updates – 4', 'Editor training session', 'Documentation pack'] }
    ],
    Scale: [
      { title: 'Design', items: ['Custom homepage + variant', 'Section-based library', 'Mobile-first responsive', 'Illustrations & icons', 'Design accessibility pass'] },
      { title: 'Development', items: ['Dynamic pages (up to 18)', 'Advanced components', 'Reusable layouts', 'Contact forms + file upload', 'Image/CDN optimization + lazyload'] },
      { title: 'SEO & Performance', items: ['Advanced meta strategy', 'XML sitemap + robots', 'Schema (Breadcrumb/FAQ)', 'Core Web Vitals improvements', 'Preload/Prefetch tuning'] },
      { title: 'Integrations', items: ['Analytics + events', 'Search Console', 'Newsletter (Mailchimp/Sendgrid)', 'Basic CRM webhook (– 0)'] },
      { title: 'QA & Deployment', items: ['Cross-browser matrix', 'Responsive matrix', 'UAT rounds – 2', 'Staging + Production deploy'] },
      { title: 'Support', items: ['Bug fixes – 45 days', 'Content updates – 6', 'Editor training + docs', 'Handover session'] }
    ],
    Enterprise: [
      { title: 'Design', items: ['Full custom design system', 'Landing page variants (A/B)', 'Micro-interactions', 'Animations (Lottie/GSAP)', 'Design handoff files'] },
      { title: 'Development', items: ['Custom pages (unlimited within scope)', 'Advanced components', '3rd-party integrations', 'Forms: multi-step + file upload', 'Headless CMS (optional)'] },
      { title: 'SEO & Performance', items: ['Advanced on-page SEO', 'Schema (FAQ/HowTo/Product)', 'Image/asset pipelines', 'Core Web Vitals optimization', 'Caching & CDN setup'] },
      { title: 'Integrations', items: ['Analytics + events', 'Search Console', 'Newsletter + CRM', 'Payment gateway (– 0 if not e-com)'] },
      { title: 'QA & Deployment', items: ['Cross-browser/regression suite', 'Responsive matrix', 'UAT rounds – 3', 'Zero-downtime deployment'] },
      { title: 'Support', items: ['Bug fixes – 60 days', 'Content updates – 8', 'Team training – 1 workshop', 'Full documentation'] }
    ],
    // Enterprise: [
    //   { title: 'Design', items: ['Enterprise design system', 'Multi-brand theming', 'Localization-ready layouts', 'Motion design guidelines', 'Audit & compliance review'] },
    //   { title: 'Development', items: ['Complex pages & flows', 'Role-based components', 'Headless CMS setup', '3rd-party/ERP connectors', 'Security hardening'] },
    //   { title: 'SEO & Performance', items: ['Technical SEO roadmap', 'Extensive schema coverage', 'Advanced asset pipeline', 'Performance budget & monitoring', 'CDN rules & edge logic'] },
    //   { title: 'Integrations', items: ['Analytics + custom events', 'Search Console', 'Newsletter + CRM + Webhooks', 'SSO/SSO-like (– 0)'] },
    //   { title: 'QA & Deployment', items: ['Automation-ready QA plan', 'Regression suite', 'UAT rounds – 4', 'Blue/Green or rolling deploy'] },
    //   { title: 'Support', items: ['Bug fixes – 90 days', 'Content updates – 12', 'Admin training – 2 sessions', 'Complete documentation pack'] }
    // ]
  };

  return (
    <Layout>
      <section className="pricing-hero">
        <div className="hero-content">
          <div className="hero-badge">Web Development</div>
          <h1 className="hero-title">Web Development Pricing</h1>
          <p className="hero-subtitle">Transparent, one-time pricing for modern, high-performance websites</p>
        </div>
      </section>

      <section className="pricing-plans">
        <div className="container">
          <div className="section-header text-center mb-16">
            <p className="section-subtitle">Choose a plan</p>
            <h2 className="section-title">Built for different stages of your growth</h2>
          </div>
          <div className="plans-grid five-col compact">
            {plans.map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
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
          serviceType="Web Development"
        />
      )}
    </Layout>
  );
};

export default WebPricing; 