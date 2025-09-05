import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../../components/common/Layout';
import { 
  FaCode, FaMobile, FaDesktop, FaDatabase, FaShieldAlt, FaRocket, 
  FaCheckCircle, FaUsers, FaChartLine, FaCog, FaPalette, FaSearch,
  FaArrowRight, FaPhone, FaEnvelope, FaWhatsapp
} from 'react-icons/fa';

const WebDevelopment = () => {
  const features = [
    {
      icon: <FaDesktop />,
      title: "Responsive Design",
      description: "Websites that look perfect on all devices - desktop, tablet, and mobile."
    },
    {
      icon: <FaCode />,
      title: "Custom Development",
      description: "Tailored solutions built from scratch to meet your specific business needs."
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      description: "Robust backend systems with secure data management and storage."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "SSL certificates, secure coding practices, and regular security audits."
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimized",
      description: "Built with search engine optimization best practices for better visibility."
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimized",
      description: "Fast loading speeds and optimized performance for better user experience."
    }
  ];

  const benefits = [
    {
      icon: <FaUsers />,
      title: "Enhanced User Experience",
      description: "Intuitive navigation and engaging interfaces that keep visitors engaged."
    },
    {
      icon: <FaChartLine />,
      title: "Increased Conversions",
      description: "Strategic design and functionality that drives more leads and sales."
    },
    {
      icon: <FaMobile />,
      title: "Mobile-First Approach",
      description: "Websites optimized for mobile users who make up 60% of web traffic."
    },
    {
      icon: <FaCog />,
      title: "Easy Management",
      description: "User-friendly content management systems for easy updates and maintenance."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your business goals, target audience, and technical requirements."
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes for approval."
    },
    {
      number: "03",
      title: "Development",
      description: "Building the website using modern technologies and best practices."
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across devices, browsers, and performance optimization."
    },
    {
      number: "05",
      title: "Launch & Deployment",
      description: "Secure deployment with SSL certificates and performance monitoring."
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to develop a custom website?",
      answer: "Development time varies based on complexity. A simple website takes 2-4 weeks, while complex e-commerce sites may take 8-12 weeks. We'll provide a detailed timeline during the planning phase."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, and technical support to keep your website running smoothly."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We can redesign and modernize your existing website while preserving your content and SEO value. We'll improve design, functionality, and performance."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Next.js, Node.js, PHP, WordPress, and more. We choose the best technology stack based on your specific requirements."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we offer reliable hosting solutions and can help you register and manage domain names. We ensure fast loading speeds and 99.9% uptime for your website."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all our websites are built with a mobile-first approach. They're fully responsive and optimized for all devices, ensuring a great user experience on smartphones and tablets."
    }
  ];

  const technologies = [
    "React.js", "Next.js", "Node.js", "PHP", "WordPress", "Laravel", 
    "MySQL", "MongoDB", "AWS", "Docker", "Git", "REST APIs"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="service-badge">
              <FaCode />
              <span>Web Development</span>
            </div>
            <h1 className="hero-title">
              Custom Web Development Solutions
            </h1>
            <p className="hero-subtitle">
              We build modern, responsive, and high-performance websites that drive business growth. 
              From simple landing pages to complex web applications, we deliver solutions that exceed expectations.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Audit
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <motion.div 
              className="overview-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2>Transform Your Digital Presence</h2>
              <p>
                In today's digital-first world, your website is often the first impression potential customers have of your business. 
                We specialize in creating websites that not only look stunning but also drive real business results.
              </p>
              <p>
                Our web development process combines cutting-edge technology with strategic thinking to deliver websites that:
              </p>
              <ul>
                <li>Convert visitors into customers</li>
                <li>Rank higher in search engines</li>
                <li>Provide exceptional user experience</li>
                <li>Scale with your business growth</li>
              </ul>
            </motion.div>
            <motion.div 
              className="overview-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Websites Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>What We Deliver</h2>
            <p>Comprehensive web development services tailored to your business needs</p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Why Choose Our Web Development</h2>
            <p>Experience the difference with our comprehensive approach</p>
          </motion.div>
          
          <motion.div 
            className="benefits-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Development Process</h2>
            <p>A systematic approach to delivering exceptional websites</p>
          </motion.div>
          
          <motion.div 
            className="process-steps"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {process.map((step, index) => (
              <motion.div 
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="service-technologies">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Technologies We Use</h2>
            <p>Modern tech stack for building robust and scalable websites</p>
          </motion.div>
          
          <motion.div 
            className="technologies-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-faq">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about our web development services</p>
          </motion.div>
          
          <motion.div 
            className="faq-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="cta-text">
              <h2>Ready to Build Your Dream Website?</h2>
              <p>
                Let's discuss your project and create a website that drives real business results. 
                Get a free consultation and quote today.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <FaPhone /> Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDevelopment; 