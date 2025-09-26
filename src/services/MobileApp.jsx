import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { useModal } from '../components/common/ModalContext';
import { 
  FaMobile, FaCode, FaAndroid, FaApple, FaDatabase, FaShieldAlt, FaRocket, 
  FaCheckCircle, FaUsers, FaChartLine, FaCog, FaPalette, FaSearch,
  FaArrowRight, FaPhone, FaEnvelope, FaWhatsapp, FaCloud, FaSync, FaLaptop
} from 'react-icons/fa';

const MobileApp = () => {
  const features = [
    {
      icon: <FaMobile />,
      title: "Native & Cross-Platform",
      description: "iOS and Android apps built with native performance or cross-platform solutions like React Native and Flutter."
    },
    {
      icon: <FaCode />,
      title: "Custom App Development",
      description: "Tailored mobile applications designed specifically for your business needs and user requirements."
    },
    {
      icon: <FaDatabase />,
      title: "Backend Integration",
      description: "Seamless integration with APIs, databases, and cloud services for robust app functionality."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Privacy",
      description: "Enterprise-grade security with data encryption, secure authentication, and privacy compliance."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Cloud-based solutions for scalability, data synchronization, and real-time updates."
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimized",
      description: "Lightning-fast apps with optimized code, efficient memory usage, and smooth user experience."
    }
  ];

  const benefits = [
    {
      icon: <FaUsers />,
      title: "Enhanced User Engagement",
      description: "Mobile apps provide 24/7 access to your services, increasing user engagement and retention."
    },
    {
      icon: <FaChartLine />,
      title: "Increased Revenue",
      description: "Direct sales channel with in-app purchases, subscriptions, and mobile commerce capabilities."
    },
    {
      icon: <FaMobile />,
      title: "Brand Recognition",
      description: "Your app icon on users' home screens keeps your brand top-of-mind and accessible."
    },
    {
      icon: <FaCog />,
      title: "Operational Efficiency",
      description: "Streamline business processes with custom mobile solutions for your team and customers."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "Understanding your business goals, target audience, and defining app requirements and features."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and seamless user experiences with wireframes and prototypes."
    },
    {
      number: "03",
      title: "Development",
      description: "Building the app using modern frameworks and best practices for optimal performance."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across devices, platforms, and performance optimization."
    },
    {
      number: "05",
      title: "App Store Submission",
      description: "Preparing and submitting to Apple App Store and Google Play Store with proper optimization."
    },
    {
      number: "06",
      title: "Launch & Support",
      description: "App launch, monitoring, updates, and ongoing support to ensure continued success."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Development time varies based on complexity. Simple apps take 6-8 weeks, while complex apps may take 12-20 weeks. We'll provide a detailed timeline during the planning phase."
    },
    {
      question: "Do you develop for both iOS and Android?",
      answer: "Yes, we develop for both platforms. We can create native apps for each platform or use cross-platform solutions like React Native and Flutter for cost-effective development."
    },
    {
      question: "How much does mobile app development cost?",
      answer: "Cost depends on features, complexity, and platforms. Simple apps start from ₹2-5 lakhs, while complex enterprise apps can range from ₹10-25 lakhs. We provide detailed quotes after understanding your requirements."
    },
    {
      question: "Do you provide app maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, feature updates, OS compatibility updates, and performance monitoring to keep your app running smoothly."
    },
    {
      question: "Can you help with app store optimization (ASO)?",
      answer: "Absolutely! We provide ASO services including keyword optimization, app store listings, screenshots, descriptions, and ratings management to improve your app's visibility and downloads."
    },
    {
      question: "What technologies do you use for app development?",
      answer: "We use React Native, Flutter, Swift (iOS), Kotlin (Android), Node.js, Firebase, and other modern technologies. We choose the best stack based on your specific requirements."
    }
  ];

  const technologies = [
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Cross-platform mobile development"
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      description: "Google's UI toolkit"
    },
    {
      name: "Swift",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      description: "iOS development"
    },
    {
      name: "Kotlin",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      description: "Android development"
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      description: "Backend & database"
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      description: "Cloud infrastructure"
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "Backend development"
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "NoSQL database"
    },
    {
      name: "REST APIs",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "API integration"
    },
    {
      name: "GraphQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      description: "Query language"
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      description: "Containerization"
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description: "Version control"
    }
  ];

  const appTypes = [
    {
      title: "E-commerce Apps",
      description: "Online shopping platforms with payment integration, inventory management, and user accounts."
    },
    {
      title: "Social Media Apps",
      description: "Networking platforms with user profiles, messaging, content sharing, and community features."
    },
    {
      title: "Business Apps",
      description: "Enterprise solutions for internal processes, customer management, and team collaboration."
    },
    {
      title: "Utility Apps",
      description: "Tools and utilities for productivity, health, finance, education, and lifestyle management."
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
              <FaMobile />
              <span>Mobile App Development</span>
            </div>
            <h1 className="hero-title">
              Custom Mobile App Development
            </h1>
            <p className="hero-subtitle">
              We create innovative mobile applications that engage users and drive business growth. 
              From concept to launch, we deliver apps that users love and businesses rely on.
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
              <h2>Transform Your Business with Mobile Apps</h2>
              <p>
                In today's mobile-first world, having a mobile app is no longer optional - it's essential for business growth. 
                We specialize in creating mobile applications that not only look great but also deliver real business value.
              </p>
              <p>
                Our mobile app development process combines cutting-edge technology with user-centered design to deliver apps that:
              </p>
              <ul>
                <li>Engage and retain users effectively</li>
                <li>Generate new revenue streams</li>
                <li>Improve operational efficiency</li>
                <li>Strengthen brand presence</li>
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
                <div className="stat-number">150+</div>
                <div className="stat-label">Apps Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.8★</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Downloads</div>
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
            <p>Comprehensive mobile app development services for iOS and Android</p>
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

      {/* App Types Section */}
      <section className="service-app-types">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Types of Apps We Build</h2>
            <p>Specialized mobile applications for various business needs</p>
          </motion.div>
          
          <motion.div 
            className="app-types-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {appTypes.map((type, index) => (
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
            <h2>Why Choose Our Mobile App Development</h2>
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
            <p>A systematic approach to delivering exceptional mobile apps</p>
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
            <p>Modern tech stack for building robust and scalable mobile applications</p>
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
            <p>Get answers to common questions about our mobile app development services</p>
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
              <h2>Ready to Build Your Mobile App?</h2>
              <p>
                Let's discuss your app idea and create a mobile application that drives real business results. 
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

export default MobileApp; 