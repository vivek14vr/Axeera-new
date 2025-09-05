import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { 
  FaCode, FaMobile, FaSearch, FaPalette, FaChartLine, FaShieldAlt,
  FaCogs, FaUsers, FaBullseye, FaRocket, FaArrowRight, FaCheckCircle,
  FaGlobe, FaLightbulb, FaMapMarkedAlt, FaTrophy, FaChartBar
} from 'react-icons/fa';

const Services = () => {
  const allServices = [
    {
      id: 1,
      title: "Website Design/Development",
      description: "Modern, responsive websites that engage users and drive business growth with cutting-edge technologies.",
      icon: <FaCode />,
      link: "/services/web_design",
      color: "from-green-500 to-teal-500",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
      featured: true
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: <FaMobile />,
      link: "/services/mobile_app",
      color: "from-cyan-500 to-blue-500", 
      features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Ready"],
      featured: true
    },
    {
      id: 3,
      title: "SEO Services",
      description: "Boost your organic visibility and drive quality traffic with our data-driven SEO strategies.",
      icon: <FaSearch />,
      link: "/services/seo",
      color: "from-orange-500 to-red-500",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics"],
      featured: false
    },
    {
      id: 4,
      title: "Software Development",
      description: "Custom software solutions and applications designed to streamline your business processes.",
      icon: <FaPalette />,
      link: "/services/software_development",
      color: "from-pink-500 to-rose-500",
      features: ["Custom Software", "API Development", "Database Design", "Cloud Solutions"],
      featured: false
    },
    // {
    //   id: 5,
    //   title: "Social Media Marketing",
    //   description: "Build your brand presence and engage audiences across all social platforms.",
    //   icon: <FaUsers />,
    //   link: "/services/social_media",
    //   color: "from-purple-500 to-indigo-500",
    //   features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
    //   featured: false
    // },
    // {
    //   id: 6,
    //   title: "PPC Advertising",
    //   description: "Maximize ROI with targeted Google Ads and Facebook campaigns that convert.",
    //   icon: <FaBullseye />,
    //   link: "/services/ppc",
    //   color: "from-blue-500 to-purple-500",
    //   features: ["Google Ads", "Facebook Ads", "Campaign Management", "ROI Optimization"],
    //   featured: false
    // },
    // {
    //   id: 7,
    //   title: "Branding & UI/UX",
    //   description: "Create memorable brand experiences with stunning design and user-friendly interfaces.",
    //   icon: <FaLightbulb />,
    //   link: "/services/ui_ux",
    //   color: "from-violet-500 to-purple-500",
    //   features: ["Brand Identity", "UI Design", "UX Research", "Prototyping"],
    //   featured: false
    // },
    // {
    //   id: 8,
    //   title: "Conversion Rate Optimization",
    //   description: "Turn more visitors into customers with strategic CRO techniques and testing.",
    //   icon: <FaChartLine />,
    //   link: "/services/cro",
    //   color: "from-yellow-500 to-orange-500",
    //   features: ["A/B Testing", "Landing Pages", "User Analytics", "Conversion Funnels"],
    //   featured: false
    // },
    // {
    //   id: 9,
    //   title: "Online Reputation Management",
    //   description: "Protect and enhance your brand reputation across digital channels.",
    //   icon: <FaShieldAlt />,
    //   link: "/services/orm",
    //   color: "from-gray-500 to-gray-700",
    //   features: ["Review Management", "Crisis Response", "Brand Monitoring", "Reputation Repair"],
    //   featured: false
    // }
  ];

  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: <FaTrophy /> },
    { number: '150+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '100%', label: 'Client Satisfaction', icon: <FaCheckCircle /> },
    { number: '24/7', label: 'Support Available', icon: <FaGlobe /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
            className="hero-content"
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
              <FaRocket />
              <span>Our Services</span>
            </motion.div>
            <h1 className="hero-title">
              Comprehensive Digital Solutions for 
              <span className="text-gradient"> Your Business Growth</span>
            </h1>
            <p className="hero-subtitle">
              From web development to tech solutions, we offer end-to-end solutions 
              that help your business thrive in the digital landscape.
            </p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Consultation
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm stats-section">
        <div className="container">
          <motion.div 
            className="grid grid-4 stats-grid"
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
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section services-section">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subtitle">What We Offer</p>
            <h2 className="section-title">Our Complete Service Portfolio</h2>
            <p className="section-description">
              We provide comprehensive digital solutions tailored to meet your specific business needs and drive measurable results.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-2 lg:grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }}
          >
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                className={`service-card ${service.featured ? 'featured-service' : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={`service-icon bg-gradient-to-r ${service.color}`}>
                  {service.icon}
                </div>
                <div className="service-number">0{service.id}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      <FaCheckCircle /> {feature}
                    </span>
                  ))}
                </div>
                
                <Link to={service.link} className="service-link">
                  Learn More <FaArrowRight />
                </Link>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-text">
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Let's discuss how our comprehensive digital solutions can help you achieve 
                remarkable growth and establish a strong online presence.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Audit
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
