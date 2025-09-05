import React, { useState, useEffect } from 'react';
import Layout from '../../components/common/Layout';
import RangeSelector from '../../components/common/RangeSelector';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaCreditCard } from 'react-icons/fa';
import { parsePriceRange, getPaymentDescription } from '../../utils/paymentUtils';
import { openPaymentPopup, setupPaymentListener } from '../../utils/paymentPopup';

const SEOPricing = () => {
  const [showRangeSelector, setShowRangeSelector] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { name: 'Launch', price: '$500', period: 'per month', features: ['30 Keywords', '6 Landing Pages', '50 Backlinks', 'GBP (GMB)', 'Social Media', 'Video Marketing', 'Marketing Automation'] },
    { name: 'Grow', price: '$700', period: 'per month', features: ['50 Keywords', '10 Landing Pages', '90 Backlinks', 'GBP (GMB)', 'Social Media', 'Video Marketing', 'Marketing Automation'], popular: true },
    { name: 'Scale', price: '$1000', period: 'per month', features: ['75 Keywords', '15 Landing Pages', '150 Backlinks', 'GBP (GMB)', 'Social Media', 'Video Marketing', 'Marketing Automation'] },
    { name: 'Dominate', price: '$1500', period: 'per month', features: ['100 Keywords', '20 Landing Pages', '250 Backlinks', 'GBP (GMB)', 'Social Media', 'Video Marketing', 'Marketing Automation'] },
    { name: 'Elite', price: '$2000', period: 'per month', features: ['150 Keywords', '30 Landing Pages', '350 Backlinks', 'GBP (GMB)', 'Social Media', 'Video Marketing', 'Marketing Automation'] }
  ];

  const handlePaymentClick = (plan) => {
    setSelectedPlan(plan);
    setShowRangeSelector(true);
  };

  const handleAmountSelect = (amount) => {
    const description = getPaymentDescription(selectedPlan.name, 'SEO Services');
    
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

  const renderBullet = (text, idx) => {
    const isZero = /[-–]\s*0\b/.test(text);
    return (
      <li key={`bullet-${idx}-${text}`} className={isZero ? 'feature-not-included' : 'feature-included'}>
        {isZero ? <FaTimesCircle /> : <FaCheckCircle />}
        {text}
      </li>
    );
  };

  const planDeliverables = {
    Launch: [
      {
        title: 'SEO Audit & Website Analysis',
        items: [
          'Initial Website Analysis',
          'Pre-optimization site audit',
          'Keyword Research & Analysis',
          'Duplicate Content Check',
          'Competitors Backlink Analysis',
          'Baseline Ranking Check',
          'Google Penalty Check',
          'Backlink Analysis',
          'Backlink Strategy Gap Analysis',
          'Brand Mention Audit'
        ]
      },
      {
        title: 'OnPage SEO',
        items: [
          'Title Tag Optimization',
          'Meta Description Optimization',
          'Image Alt Tags Optimization',
          'Content Optimization',
          'URL Optimization',
          'Robots.txt Creation',
          '404 Page Implementation',
          'Website Loading Speed Analysis',
          'Google Indexed Pages Check',
          'Website Canonical Check',
          'Broken Links Analysis',
          'Site Navigation Tree Analysis',
          'HTML Sitemap Creation',
          'Header Tags Optimization',
          'XML Sitemap Creation'
        ]
      },
      {
        title: 'Technical SEO',
        items: [
          'HTTPS Security Analysis',
          'Site Structure Analysis',
          'Internal Links Analysis',
          'Structured Data Setup',
          'Google Knowledge Panel Optimization'
        ]
      },
      { title: 'Measurement & Tracking', items: ['Google Search Console Integration', 'Google Analytics Integration'] },
      {
        title: 'Off Page Optimization',
        items: [
          'Classified Submissions – 20',
          'Business Listing',
          'Social Bookmarking – 20',
          'Article Writing – 1',
          'Article Submissions – 1',
          'Article Marketing – 1',
          'PDF Submissions – 2',
          'Podcast Submissions – 1',
          'Image Submissions – 2',
          'Blog Creation (One-Time) – 1',
          'Blog Writing – 1',
          'Blog Posting – 1',
          'Blog Marketing – 5',
          'Product Listing',
          'Profile Creation – 4',
          'PPT Submissions'
        ]
      },
      {
        title: 'Content Marketing',
        items: [
          'On-site Blog Creation – 1',
          'On-site Blog Posting – 1',
          'On-site blog optimization – 1',
          'Featured Image Creation – 1',
          'Blog Promotion – 4'
        ]
      },
      {
        title: 'Social Media Marketing',
        items: [
          'Facebook Profile Creation',
          'Facebook Fan Page Creation',
          'Facebook Posts – 0',
          'Facebook Group Sharing – 0',
          'Instagram Profile Creation',
          'Posting/Updates – 0',
          'Hashtag Marketing',
          'Twitter Profile Creation',
          'Twitter Posting – 0',
          'Retweets, likes and comments',
          'Trending hashtag promotion',
          'Pinterest: Account Creation/Management',
          'Pinterest Followers',
          'Pin boards updation',
          'Pins (Images to be provided by the client)'
        ]
      },
      { title: 'Brand Building', items: ['Citations', 'Brand Name Promotion', 'Brand Mentions Tracking'] },
      { title: 'Video Marketing', items: ['YT Shorts', 'Insta Reels', 'Video Promotion', 'Video Search Optimization'] },
      { title: 'Marketing Automation', items: ['AIDA Optimization', 'Lead Magnet', 'CTA Optimization', 'AI Automation Tool Integration', 'Lead Nurturing', 'Conversion Rate Optimization'] },
      { title: 'Reporting', items: ['Monthly Keyword Ranking Report', 'Monthly Traffic Report', 'Monthly SEO Optimization Report'] },
      { title: 'Support', items: ['Email', 'Chat', 'Phone'] }
    ]
  };

  const cloneWith = (base, overrides) => ({ ...base, items: overrides || base.items });
  const launchBlocks = planDeliverables.Launch;
  planDeliverables.Grow = [
    ...launchBlocks.slice(0, 4),
    cloneWith(launchBlocks[4], [
      'Classified Submissions – 25',
      'Business Listing',
      'Social Bookmarking – 25',
      'Article Writing – 2',
      'Article Submissions – 2',
      'Article Marketing – 2',
      'PDF Submissions – 3',
      'Podcast Submissions – 2',
      'Image Submissions – 4',
      'Blog Creation (One-Time) – 2',
      'Blog Writing – 2',
      'Blog Posting – 2',
      'Blog Marketing – 10',
      'Product Listing',
      'Profile Creation – 8',
      'PPT Submissions – 1'
    ]),
    cloneWith(launchBlocks[5], [
      'On-site Blog Creation – 2',
      'On-site Blog Posting – 2',
      'On-site blog optimization – 2',
      'Featured Image Creation – 2',
      'Blog Promotion – 8'
    ]),
    cloneWith(launchBlocks[6], [
      'Facebook Profile Creation',
      'Facebook Fan Page Creation',
      'Facebook Posts – 0',
      'Facebook Group Sharing – 0',
      'Instagram Profile Creation',
      'Posting/Updates – 0',
      'Hashtag Marketing',
      'Twitter Profile Creation',
      'Twitter Posting – 0',
      'Retweets, likes and comments',
      'Trending hashtag promotion',
      'Pinterest: Account Creation/Management',
      'Pinterest Followers',
      'Pin boards updation',
      'Pins (Images to be provided by the client)'
    ]),
    ...launchBlocks.slice(7)
  ];

  planDeliverables.Scale = [
    ...launchBlocks.slice(0, 4),
    planDeliverables.Grow[4],
    cloneWith(launchBlocks[5], [
      'On-site Blog Creation – 3',
      'On-site Blog Posting – 3',
      'On-site blog optimization – 3',
      'Featured Image Creation – 3',
      'Blog Promotion – 12'
    ]),
    cloneWith(launchBlocks[6], [
      'Facebook Profile Creation',
      'Facebook Fan Page Creation',
      'Facebook Posts – 4',
      'Facebook Group Sharing – 4',
      'Instagram Profile Creation',
      'Posting/Updates – 4',
      'Hashtag Marketing',
      'Twitter Profile Creation',
      'Twitter Posting – 4',
      'Retweets, likes and comments',
      'Trending hashtag promotion',
      'Pinterest: Account Creation/Management',
      'Pinterest Followers',
      'Pin boards updation',
      'Pins (Images to be provided by the client)'
    ]),
    ...launchBlocks.slice(7)
  ];

  planDeliverables.Dominate = [
    ...launchBlocks.slice(0, 4),
    cloneWith(launchBlocks[4], [
      'Classified Submissions – 60',
      'Business Listing',
      'Social Bookmarking – 80',
      'Article Writing – 8',
      'Article Submissions – 8',
      'Article Marketing – 8',
      'PDF Submissions – 8',
      'Podcast Submissions – 8',
      'Image Submissions – 10',
      'Blog Creation (One-Time) – 6',
      'Blog Writing – 6',
      'Blog Posting – 6',
      'Blog Marketing – 30',
      'Product Listing',
      'Profile Creation – 20',
      'PPT Submissions – 2'
    ]),
    cloneWith(launchBlocks[5], [
      'On-site Blog Creation – 4',
      'On-site Blog Posting – 4',
      'On-site blog optimization – 4',
      'Featured Image Creation – 4',
      'Blog Promotion – 16'
    ]),
    cloneWith(launchBlocks[6], [
      'Facebook Profile Creation',
      'Facebook Fan Page Creation',
      'Facebook Posts – 12',
      'Facebook Group Sharing – 16',
      'Instagram Profile Creation',
      'Posting/Updates – 12',
      'Hashtag Marketing',
      'Twitter Profile Creation',
      'Twitter Posting – 12',
      'Retweets, likes and comments',
      'Trending hashtag promotion',
      'Pinterest: Account Creation/Management',
      'Pinterest Followers',
      'Pin boards updation – 6',
      'Pins (Images to be provided by the client)'
    ]),
    ...launchBlocks.slice(7)
  ];

  planDeliverables.Elite = [
    ...launchBlocks.slice(0, 4),
    cloneWith(launchBlocks[4], [
      'Classified Submissions – 80',
      'Business Listing',
      'Social Bookmarking – 100',
      'Article Writing – 8',
      'Article Submissions – 8',
      'Article Marketing – 8',
      'PDF Submissions – 8',
      'Podcast Submissions – 8',
      'Image Submissions – 10',
      'Blog Creation (One-Time) – 6',
      'Blog Writing – 6',
      'Blog Posting – 6',
      'Blog Marketing – 30',
      'Product Listing',
      'Profile Creation – 20',
      'PPT Submissions – 2'
    ]),
    cloneWith(launchBlocks[5], [
      'On-site Blog Creation – 6',
      'On-site Blog Posting – 6',
      'On-site blog optimization – 6',
      'Featured Image Creation – 6',
      'Blog Promotion – 24'
    ]),
    cloneWith(launchBlocks[6], [
      'Facebook Profile Creation',
      'Facebook Fan Page Creation',
      'Facebook Posts – 16',
      'Facebook Group Sharing – 16',
      'Instagram Profile Creation',
      'Posting/Updates – 16',
      'Hashtag Marketing',
      'Twitter Profile Creation',
      'Twitter Posting – 16',
      'Retweets, likes and comments',
      'Trending hashtag promotion',
      'Pinterest: Account Creation/Management',
      'Pinterest Followers',
      'Pin boards updation – 8',
      'Pins (Images to be provided by the client)'
    ]),
    ...launchBlocks.slice(7)
  ];

  return (
    <Layout>
      <section className="pricing-hero">
        <div className="hero-content">
          <div className="hero-badge">SEO</div>
          <h1 className="hero-title">SEO Pricing</h1>
          <p className="hero-subtitle">Clear monthly plans focused on outcomes and ROI</p>
        </div>
      </section>

      <section className="pricing-plans">
        <div className="container">
          <div className="section-header text-center mb-16">
            <p className="section-subtitle">Choose a plan</p>
            <h2 className="section-title">Grow organic traffic with the right tier</h2>
          </div>
          <div className="plans-grid five-col">
            {plans.map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Chosen</div>}
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
                  {plan.features.map((f, idx) => (
                    <li key={`${plan.name}-feature-${idx}-${f}`} className="feature-included"><FaCheckCircle />{f}</li>
                  ))}
                </ul>
                <div className="plan-features">
                  {planDeliverables[plan.name].map((block) => (
                    <div key={block.title} style={{ marginTop: '0.75rem' }}>
                      <h4 style={{ marginBottom: '0.25rem' }}>{block.title}</h4>
                      <ul className="features-list">
                        {block.items.map((it, idx) => renderBullet(it, idx))}
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
          serviceType="SEO Services"
        />
      )}
    </Layout>
  );
};

export default SEOPricing; 