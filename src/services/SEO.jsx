import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import {
  FaSearch, FaChartLine, FaCode, FaLink, FaGlobe, FaRocket,
  FaMobileAlt, FaUsers, FaGoogle, FaBullhorn, FaMapMarkerAlt
} from 'react-icons/fa';

const SEO = () => {
  const features = [
    { icon: <FaSearch />, title: 'Keyword Research & Strategy', description: 'Identify high-intent, high-value keywords tailored to your audience and market.' },
    { icon: <FaCode />, title: 'Technical SEO', description: 'Site audits, Core Web Vitals, crawlability, indexing, schema, redirects, and sitemaps.' },
    { icon: <FaLink />, title: 'Authority & Link Building', description: 'White-hat link outreach to build domain authority and topical credibility.' },
    { icon: <FaGlobe />, title: 'Local SEO', description: 'Optimize Google Business Profile, local citations, and geo-targeted landing pages.' },
    { icon: <FaMobileAlt />, title: 'On‑Page Optimization', description: 'Optimized titles, meta tags, headings, internal linking, and content structure.' },
    { icon: <FaChartLine />, title: 'Analytics & Reporting', description: 'Transparent dashboards and monthly reports focused on growth KPIs and ROI.' },
  ];

  const benefits = [
    { icon: <FaRocket />, title: 'Sustained Organic Growth', description: 'Compounding visibility that reduces dependency on paid ads over time.' },
    { icon: <FaUsers />, title: 'Qualified Traffic', description: 'Reach people actively searching for your products and services.' },
    { icon: <FaGoogle />, title: 'Stronger Rankings', description: 'Climb the SERPs for competitive keywords and defend your positions.' },
    { icon: <FaBullhorn />, title: 'Brand Authority', description: 'Earn trust and credibility through authoritative content and links.' },
  ];

  const process = [
    { number: '01', title: 'Audit & Baseline', description: 'Technical, content, and backlink audit + analytics baseline to identify opportunities.' },
    { number: '02', title: 'Strategy', description: 'Roadmap of quick wins and long-term initiatives aligned to your goals and timelines.' },
    { number: '03', title: 'Execution', description: 'Implement on‑page, technical fixes, content production, and white‑hat link outreach.' },
    { number: '04', title: 'Measure & Scale', description: 'Track KPIs, iterate based on data, and scale what works across more pages/keywords.' },
  ];

  const technologies = [
    { name: 'Google Analytics', description: 'Traffic & conversion analytics', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Google Search Console', description: 'Indexing, coverage & queries', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'SEMrush', description: 'Competitive research & audits', logo: 'https://cdn.simpleicons.org/semrush/ff642d' },
    { name: 'Ahrefs', description: 'Backlinks & keyword research', logo: 'https://cdn.simpleicons.org/ahrefs/0d62ff' },
  ];

  const faqItems = [
    { question: 'How long until we see SEO results?', answer: 'Initial movement often appears in 6–12 weeks, with meaningful gains in 3–6 months. Timelines vary by competition, site health, and content velocity.' },
    { question: 'Do you use white‑hat SEO?', answer: 'Yes. We follow search engine guidelines and prioritize sustainable, long‑term growth over risky shortcuts.' },
    { question: 'Will you work with our developers?', answer: 'Absolutely. We collaborate with your dev/design teams to implement technical and on‑page improvements smoothly.' },
    { question: 'What will you deliver each month?', answer: 'A clear plan, executed tasks (content/technical/links), and transparent reporting with insights and next steps.' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="service-hero">
        <div className="hero-content">
          <div className="service-badge"><FaSearch /> SEO Services</div>
          <h1 className="hero-title">Boost Organic Growth with Strategic SEO</h1>
          <p className="hero-subtitle">Technical excellence, high‑intent content, and ethical link building to grow rankings, traffic, and revenue.</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Get Free SEO Audit</Link>
            <Link to="/contact" className="btn btn-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Win the Moments that Matter on Search</h2>
              <p>
                We help you dominate the SERPs with a balanced approach across technical SEO, high‑quality content, and white‑hat authority building. Our process is transparent, measurable, and aligned to your business goals.
              </p>
              <ul>
                <li>Technical fixes that unlock crawlability and speed</li>
                <li>Content strategy that targets high‑intent opportunities</li>
                <li>Ethical link acquisition from relevant, authoritative sites</li>
                <li>Clear analytics and KPI‑driven reporting</li>
              </ul>
            </div>
            <div className="overview-stats">
              <div className="stat-item"><span className="stat-number">200%</span><span className="stat-label">Avg. Traffic Uplift</span></div>
              <div className="stat-item"><span className="stat-number">90%</span><span className="stat-label">Client Retention</span></div>
              <div className="stat-item"><span className="stat-number">500+</span><span className="stat-label">Top‑3 Keywords</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>What Our SEO Covers</h2>
          <p>Everything required to build durable organic growth</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div key={i} className="feature-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="service-benefits">
        <div className="container">
          <h2>Why Choose Our SEO Team</h2>
          <p>Outcomes that matter to your business</p>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <motion.div key={i} className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process">
        <div className="container">
          <h2>Our SEO Process</h2>
          <p>Proven, transparent, and iterative</p>
          <div className="process-steps">
            {process.map((s, i) => (
              <motion.div key={i} className="process-step" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <div className="step-number">{s.number}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="service-technologies">
        <div className="container">
          <h2>Tools & Technologies</h2>
          <p>Best‑in‑class stack for insights and execution</p>
          <div className="technologies-grid">
            {technologies.map((t, i) => (
              <motion.div key={i} className="tech-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <div className="tech-logo-container">
                  <img src={t.logo} alt={t.name} className="tech-logo" />
                </div>
                <h3 className="tech-name">{t.name}</h3>
                <p className="tech-description">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to common questions about SEO</p>
          <div className="faq-grid">
            {faqItems.map((q, i) => (
              <motion.div key={i} className="faq-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <h3>{q.question}</h3>
                <p>{q.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Grow with SEO?</h2>
              <p>Request a free audit and get a prioritized roadmap tailored to your goals.</p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Free Audit</Link>
              <Link to="/contact" className="btn btn-secondary">Book a Call</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SEO; 