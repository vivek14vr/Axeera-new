import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { useModal } from '../components/common/ModalContext';
import { 
  FaPalette, FaDesktop, FaMobile, FaCode, FaSearch, FaRocket, 
  FaCheckCircle, FaUsers, FaChartLine, FaCog, FaShieldAlt, FaDatabase,
  FaArrowRight, FaPhone, FaEnvelope, FaWhatsapp, FaLaptop, FaEye
} from 'react-icons/fa';

const Web_Design = () => {
  const features = [
    {
      icon: <FaPalette />,
      title: "Creative Design",
      description: "Unique, modern, and visually stunning designs that capture your brand's essence and engage your audience."
    },
    {
      icon: <FaDesktop />,
      title: "Responsive Design",
      description: "Websites that look perfect and function flawlessly on all devices - desktop, tablet, and mobile."
    },
    {
      icon: <FaUsers />,
      title: "User Experience (UX)",
      description: "Intuitive navigation, clear call-to-actions, and seamless user journeys that convert visitors into customers."
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimized",
      description: "Designs built with search engine optimization in mind for better visibility and higher rankings."
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Optimized designs that load quickly and provide smooth interactions for better user satisfaction."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Focused",
      description: "Secure design practices with SSL certificates and protection against common vulnerabilities."
    }
  ];

  const benefits = [
    {
      icon: <FaEye />,
      title: "Professional Brand Image",
      description: "A well-designed website establishes credibility and trust with your potential customers."
    },
    {
      icon: <FaChartLine />,
      title: "Increased Conversions",
      description: "Strategic design elements that guide users toward your business goals and objectives."
    },
    {
      icon: <FaMobile />,
      title: "Mobile-First Approach",
      description: "Designs optimized for mobile users who make up the majority of web traffic today."
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
      title: "Discovery & Research",
      description: "Understanding your business, target audience, competitors, and design requirements."
    },
    {
      number: "02",
      title: "Wireframing & Planning",
      description: "Creating site structure, user flows, and wireframes to plan the user experience."
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description: "Creating visual designs, mockups, and interactive prototypes for client approval."
    },
    {
      number: "04",
      title: "Development & Coding",
      description: "Converting designs into functional websites using modern technologies and best practices."
    },
    {
      number: "05",
      title: "Testing & Optimization",
      description: "Comprehensive testing across devices, browsers, and performance optimization."
    },
    {
      number: "06",
      title: "Launch & Support",
      description: "Website deployment, monitoring, and ongoing support for continued success."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to design a website?",
      answer: "Design time varies based on complexity. Simple websites take 2-3 weeks, while complex e-commerce sites may take 6-8 weeks. We'll provide a detailed timeline during the planning phase."
    },
    {
      question: "Do you provide website redesign services?",
      answer: "Yes, we specialize in redesigning existing websites to improve design, functionality, and performance while preserving your content and SEO value."
    },
    {
      question: "What design styles do you offer?",
      answer: "We offer various design styles including modern, minimalist, corporate, creative, e-commerce, and custom designs tailored to your brand and industry."
    },
    {
      question: "Do you provide ongoing design support?",
      answer: "Yes, we offer ongoing design support including updates, maintenance, and design improvements to keep your website current and effective."
    },
    {
      question: "Can you design for specific industries?",
      answer: "Absolutely! We have experience designing websites for various industries including healthcare, finance, education, e-commerce, and more."
    },
    {
      question: "Do you provide logo and branding design?",
      answer: "Yes, we offer comprehensive branding services including logo design, brand guidelines, and visual identity development to complement your website design."
    }
  ];

  const technologies = [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description: "Semantic markup"
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      description: "Styling & animations"
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "Interactive functionality"
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Component library"
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      description: "Progressive framework"
    },
    {
      name: "WordPress",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      description: "CMS platform"
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      description: "Design & prototyping"
    },
    {
      name: "Adobe XD",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
      description: "UI/UX design"
    },
    {
      name: "Sketch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
      description: "Design toolkit"
    },
    {
      name: "Photoshop",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      description: "Image editing"
    },
    {
      name: "Illustrator",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      description: "Vector graphics"
    },
    {
      name: "InVision",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg",
      description: "Prototyping tool"
    }
  ];

  const designTypes = [
    {
      title: "Corporate Websites",
      description: "Professional designs for businesses, showcasing services, team, and company information."
    },
    {
      title: "E-commerce Websites",
      description: "Online stores with product catalogs, shopping carts, and secure payment integration."
    },
    {
      title: "Portfolio Websites",
      description: "Showcase designs for creative professionals, artists, and service providers."
    },
    {
      title: "Landing Pages",
      description: "High-converting single-page designs focused on specific campaigns and goals."
    }
  ];

  const { openContactModal } = useModal();
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
              <FaPalette />
              <span>Web Design</span>
            </div>
            <h1 className="hero-title">
              Creative Web Design Solutions
            </h1>
            <p className="hero-subtitle">
              We create stunning, user-friendly websites that not only look amazing but also drive business results. 
              From concept to launch, we deliver designs that engage, convert, and grow your business.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" onClick={() => openContactModal('audit')}>
                Get Free Audit
              </button>
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
                In today's digital world, your website is often the first impression potential customers have of your business. 
                We specialize in creating web designs that not only look stunning but also drive real business results.
              </p>
              <p>
                Our web design process combines creativity with strategy to deliver websites that:
              </p>
              <ul>
                <li>Engage and captivate your audience</li>
                <li>Convert visitors into customers</li>
                <li>Build trust and credibility</li>
                <li>Drive business growth and success</li>
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
                <div className="stat-number">300+</div>
                <div className="stat-label">Websites Designed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Design Support</div>
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
            <p>Comprehensive web design services tailored to your business needs</p>
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

      {/* Design Types Section */}
      <section className="service-app-types">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Types of Websites We Design</h2>
            <p>Specialized web design solutions for various business needs</p>
          </motion.div>
          
          <motion.div 
            className="app-types-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {designTypes.map((type, index) => (
              <motion.div 
                key={index}
                className="app-type-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3>{type.title}</h3>
                <p>{type.description}</p>
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
            <h2>Why Choose Our Web Design</h2>
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
            <h2>Our Design Process</h2>
            <p>A systematic approach to delivering exceptional web designs</p>
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
            <h2>Design Tools & Technologies</h2>
            <p>Modern tools and technologies for creating stunning web designs</p>
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
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="tech-logo-container">
                  <img src={tech.logo} alt={tech.name} className="tech-logo" />
                </div>
                <h4 className="tech-name">{tech.name}</h4>
                <p className="tech-description">{tech.description}</p>
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
            <p>Get answers to common questions about our web design services</p>
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
              <h2>Ready to Design Your Dream Website?</h2>
              <p>
                Let's discuss your project and create a website design that drives real business results. 
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

export default Web_Design;
