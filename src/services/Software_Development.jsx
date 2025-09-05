import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { 
  FaCode, FaDatabase, FaCloud, FaMobile, FaDesktop, FaServer, 
  FaShieldAlt, FaRocket, FaUsers, FaChartLine, FaCogs, FaLaptopCode,
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaGit,
  FaCheckCircle, FaArrowRight, FaPlay, FaStopwatch, FaHeadset
} from 'react-icons/fa';

const Software_Development = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Custom Software Development",
      description: "Tailored solutions designed specifically for your business requirements and workflow."
    },
    {
      icon: <FaDatabase />,
      title: "Database Design & Management",
      description: "Robust database architecture and efficient data management systems."
    },
    {
      icon: <FaCloud />,
      title: "Cloud-Native Applications",
      description: "Scalable applications built for cloud infrastructure and deployment."
    },
    {
      icon: <FaMobile />,
      title: "Cross-Platform Development",
      description: "Applications that work seamlessly across multiple devices and platforms."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Powerful server-side applications with robust APIs and business logic."
    },
    {
      icon: <FaDesktop />,
      title: "Desktop Applications",
      description: "Native desktop applications for Windows, macOS, and Linux systems."
    }
  ];

  const benefits = [
    {
      icon: <FaRocket />,
      title: "Scalable Solutions",
      description: "Applications that grow with your business needs and user base."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Reliable",
      description: "Built with security best practices and robust error handling."
    },
    {
      icon: <FaUsers />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with end-user experience in mind."
    },
    {
      icon: <FaChartLine />,
      title: "Performance Optimized",
      description: "Fast, efficient applications that deliver exceptional user experience."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Requirements Analysis",
      description: "Deep dive into your business needs and technical requirements."
    },
    {
      number: "02",
      title: "System Design",
      description: "Architecture planning and technical specification development."
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with regular updates and feedback cycles."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across multiple scenarios and environments."
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth deployment with minimal downtime and disruption."
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and system maintenance."
    }
  ];

  const technologies = [
    { name: 'React.js', logo: <FaReact />, description: 'Modern frontend framework' },
    { name: 'Node.js', logo: <FaNodeJs />, description: 'Server-side JavaScript' },
    { name: 'Python', logo: <FaPython />, description: 'Versatile programming language' },
    { name: 'Java', logo: <FaJava />, description: 'Enterprise-grade development' },
    { name: 'AWS', logo: <FaAws />, description: 'Cloud infrastructure' },
    { name: 'Docker', logo: <FaDocker />, description: 'Containerization platform' },
    { name: 'Git', logo: <FaGit />, description: 'Version control system' },
    { name: 'MongoDB', logo: <FaDatabase />, description: 'NoSQL database' }
  ];

  const faqs = [
    {
      question: "What programming languages do you use?",
      answer: "We use a wide range of technologies including JavaScript (React, Node.js), Python, Java, C#, and more. We choose the best technology stack based on your specific requirements."
    },
    {
      question: "How long does software development take?",
      answer: "Development time varies based on complexity. Simple applications take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during planning."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support packages including bug fixes, updates, security patches, and feature enhancements to ensure your software continues to perform optimally."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! We specialize in integrating new software with your existing infrastructure, databases, and third-party applications to create seamless workflows."
    }
  ];

  const stats = [
    { number: "200+", label: "Software Projects", icon: <FaCode /> },
    { number: "50+", label: "Technologies Used", icon: <FaCogs /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <FaServer /> },
    { number: "24/7", label: "Support Available", icon: <FaHeadset /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="service-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaCode />
              <span>Software Development</span>
            </motion.div>
            <h1 className="hero-title">
              Custom Software Solutions
              <span className="text-gradient"> That Drive Growth</span>
            </h1>
            <p className="hero-subtitle">
              Transform your business with bespoke software applications designed to streamline operations, 
              enhance productivity, and deliver measurable results. From concept to deployment, we build 
              scalable solutions that evolve with your business.
            </p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
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
              <h2>Comprehensive Software Development Services</h2>
              <p>
                Our software development expertise spans across multiple platforms and technologies, 
                enabling us to create solutions that perfectly align with your business objectives. 
                Whether you need a web application, mobile app, desktop software, or enterprise system, 
                we have the skills and experience to deliver exceptional results.
              </p>
              <p>
                We follow industry best practices and agile methodologies to ensure transparent communication, 
                regular updates, and on-time delivery. Our development process is designed to minimize risks 
                and maximize the value of your investment.
              </p>
              <ul>
                <li>Custom application development</li>
                <li>Legacy system modernization</li>
                <li>API development and integration</li>
                <li>Database design and optimization</li>
                <li>Cloud migration and deployment</li>
                <li>Performance optimization and scaling</li>
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
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="service-features">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Our Expertise</p>
            <h2 className="section-title">Comprehensive Development Solutions</h2>
            <p className="section-description">
              From frontend to backend, we cover every aspect of software development to deliver 
              complete, scalable solutions that drive business growth.
            </p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
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
            <p className="section-subtitle">Technologies</p>
            <h2 className="section-title">Modern Tech Stack</h2>
            <p className="section-description">
              We leverage cutting-edge technologies and frameworks to build robust, scalable, 
              and future-proof software solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="technologies-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index} 
                className="tech-item"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="tech-logo-container">
                  {tech.logo}
                </div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
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
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">Benefits of Our Development Approach</h2>
            <p className="section-description">
              Our development methodology ensures high-quality, maintainable software that 
              delivers long-term value for your business.
            </p>
          </motion.div>
          
          <motion.div 
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="benefit-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
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
            <p className="section-subtitle">Our Process</p>
            <h2 className="section-title">Development Methodology</h2>
            <p className="section-description">
              Our proven development process ensures transparency, quality, and timely delivery 
              while maintaining flexibility to adapt to changing requirements.
            </p>
          </motion.div>
          
          <motion.div 
            className="process-steps"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                className="process-step"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
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
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Get answers to common questions about our software development services.
            </p>
          </motion.div>
          
          <motion.div 
            className="faq-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="faq-item"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
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
              <h2>Ready to Build Your Custom Software?</h2>
              <p>
                Let's discuss your project requirements and create a software solution that 
                transforms your business operations and drives growth.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Consultation
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Software_Development; 