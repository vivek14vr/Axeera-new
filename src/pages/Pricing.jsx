import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { FaCheck, FaTimes, FaRocket, FaStar, FaCrown, FaArrowRight, FaShieldAlt, FaHeadset, FaChartLine } from 'react-icons/fa';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const pricingPlans = [
    {
      name: 'Starter',
      icon: <FaRocket />,
      description: 'Perfect for small businesses starting their digital journey',
      monthlyPrice: 25000,
      yearlyPrice: 250000,
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Basic SEO (5 keywords)',
        'Google My Business setup',
        'Social media management (2 platforms)',
        'Monthly analytics report',
        'Email support',
        'Basic website audit',
        'Content creation (4 posts/month)',
        'Local SEO optimization'
      ],
      notIncluded: [
        'PPC advertising',
        'Advanced analytics',
        'Custom landing pages',
        'A/B testing',
        'Priority support'
      ]
    },
    {
      name: 'Growth',
      icon: <FaStar />,
      description: 'Ideal for growing businesses ready to scale their marketing',
      monthlyPrice: 50000,
      yearlyPrice: 500000,
      popular: true,
      color: 'from-orange-500 to-red-500',
      features: [
        'Advanced SEO (15 keywords)',
        'PPC campaign management',
        'Social media management (4 platforms)',
        'Bi-weekly analytics reports',
        'Phone & email support',
        'Comprehensive website audit',
        'Content creation (12 posts/month)',
        'Local & technical SEO',
        'Basic conversion tracking',
        'Competitor analysis',
        'Google Ads management',
        'Facebook & Instagram ads'
      ],
      notIncluded: [
        'Custom development',
        'Advanced automation',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Enterprise',
      icon: <FaCrown />,
      description: 'Complete tech solution for established businesses',
      monthlyPrice: 100000,
      yearlyPrice: 1000000,
      popular: false,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Premium SEO (50+ keywords)',
        'Multi-platform PPC management',
        'Social media management (all platforms)',
        'Weekly analytics reports',
        'Priority phone & email support',
        'Advanced website audit & optimization',
        'Content creation (20+ posts/month)',
        'Complete SEO strategy',
        'Advanced conversion tracking',
        'In-depth competitor analysis',
        'Google, Facebook, LinkedIn ads',
        'Email marketing automation',
        'Custom landing pages',
        'A/B testing & optimization',
        'Dedicated account manager',
        'Monthly strategy calls',
        'Custom development support'
      ],
      notIncluded: []
    }
  ];

  const addOns = [
    {
      name: 'Website Development',
      description: 'Custom website design and development with modern UI/UX',
      price: 'Starting from ₹50,000',
      icon: <FaRocket />,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'E-commerce Setup',
      description: 'Complete online store setup with payment integration',
      price: 'Starting from ₹1,00,000',
      icon: <FaShieldAlt />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Mobile App Development',
      description: 'Native or cross-platform mobile app development',
      price: 'Starting from ₹3,00,000',
      icon: <FaHeadset />,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Branding Package',
      description: 'Logo design, brand guidelines, and marketing materials',
      price: 'Starting from ₹25,000',
      icon: <FaStar />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Video Production',
      description: 'Professional video content for marketing campaigns',
      price: 'Starting from ₹15,000/video',
      icon: <FaChartLine />,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Training & Consultation',
      description: 'One-on-one training for your team on technology solutions',
      price: '₹5,000/hour',
      icon: <FaCrown />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    const savings = monthlyCost - yearlyCost;
    return formatPrice(savings);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaRocket />
              <span>Pricing Plans</span>
            </motion.div>
            <h1 className="hero-title">
              Simple, Transparent 
              <span className="text-gradient"> Pricing</span>
            </h1>
            <p className="hero-subtitle">
              Choose the perfect plan for your business growth. No hidden fees, no surprises.
              All plans include our core tech expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="billing-section">
        <div className="container">
          <motion.div 
            className="billing-toggle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="toggle-container">
              <span className={`toggle-label ${billingCycle === 'monthly' ? 'active' : ''}`}>
                Monthly
              </span>
              <button 
                className="toggle-switch"
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              >
                <div className={`toggle-slider ${billingCycle === 'yearly' ? 'active' : ''}`}></div>
              </button>
              <span className={`toggle-label ${billingCycle === 'yearly' ? 'active' : ''}`}>
                Yearly 
                <span className="save-badge">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans">
        <div className="container">
          <motion.div 
            className="plans-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {plan.popular && (
                  <motion.div 
                    className="popular-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <FaStar /> Most Popular
                  </motion.div>
                )}
                
                <div className="plan-header">
                  <div className={`plan-icon bg-gradient-to-r ${plan.color}`}>
                    {plan.icon}
                  </div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">₹</span>
                    <span className="amount">
                      {billingCycle === 'yearly' 
                        ? (plan.yearlyPrice / 12).toLocaleString('en-IN', { maximumFractionDigits: 0 })
                        : plan.monthlyPrice.toLocaleString('en-IN')
                      }
                    </span>
                    <span className="period">/month</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <motion.div 
                      className="savings"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      💰 Save {getSavings(plan)} annually
                    </motion.div>
                  )}
                </div>

                <div className="plan-features">
                  <h4>What's included:</h4>
                  <ul className="features-list">
                    {plan.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="feature-included"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        viewport={{ margin: "-50px" }}
                      >
                        <FaCheck />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="feature-not-included"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (plan.features.length + idx) * 0.05 }}
                        viewport={{ margin: "-50px" }}
                      >
                        <FaTimes />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="plan-action">
                  <Link 
                    to="/contact" 
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-lg plan-btn`}
                  >
                    Get Started <FaArrowRight />
                  </Link>
                  <p className="trial-text">
                    <FaShieldAlt /> 14-day free trial • No credit card required
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons-section">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-subtitle">Add-On Services</p>
            <h2 className="section-title">Additional Services</h2>
            <p className="section-description">
              Enhance your package with these specialized services tailored to your business needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="addons-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {addOns.map((addon, index) => (
              <motion.div 
                key={index} 
                className="addon-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={`addon-icon bg-gradient-to-r ${addon.color}`}>
                  {addon.icon}
                </div>
                <h3 className="addon-name">{addon.name}</h3>
                <p className="addon-description">{addon.description}</p>
                <div className="addon-price">{addon.price}</div>
                <Link to="/contact" className="btn btn-secondary addon-btn">
                  Learn More <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-subtitle">Have Questions?</p>
            <h2 className="section-title">Pricing FAQs</h2>
            <p className="section-description">
              Common questions about our pricing and packages.
            </p>
          </motion.div>
          
          <motion.div 
            className="faq-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {[
              {
                question: "Can I switch plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "What's included in the free trial?",
                answer: "The 14-day free trial includes all features of your chosen plan with no limitations. No credit card required."
              },
              {
                question: "Do you offer custom packages?",
                answer: "Absolutely! We can create a custom package tailored to your specific business needs and budget."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, UPI, net banking, and can also arrange for monthly invoicing."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees. You only pay for your chosen plan and any additional services you select."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes, you can cancel your subscription at any time. We'll continue to provide services until the end of your billing period."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="faq-item"
                variants={itemVariants}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-text">
              <h2>Ready to Accelerate Your Growth?</h2>
              <p>
                Join 150+ businesses that trust us with their tech solutions. 
                Start your free trial today and see the difference we can make.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Free Trial <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing; 