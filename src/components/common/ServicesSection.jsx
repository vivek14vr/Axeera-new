import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaAd, 
  FaCode, 
  FaPalette, 
  FaChartLine,
  FaShareAlt,
  FaShieldAlt,
  FaMobileAlt 
} from 'react-icons/fa';
import { SERVICES, BUTTONS } from '../../constants/content';

const ServicesSection = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'search': <FaSearch />,
      'ad': <FaAd />,
      'code': <FaCode />,
      'palette': <FaPalette />,
      'chart': <FaChartLine />,
      'share': <FaShareAlt />,
      'shield': <FaShieldAlt />,
      'mobile': <FaMobileAlt />
    };
    return iconMap[iconName] || <FaCode />;
  };

  // Animation variants - SIMPLIFIED FOR PERFORMANCE
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3, // Reduced
        staggerChildren: 0.05 // Reduced from 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, // Reduced from 30
      scale: 0.95 // Reduced from 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3, // Reduced from 0.5
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section services-section">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-16"
          initial={{ opacity: 0, y: 20 }} // Reduced from 30
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }} // Reduced trigger area
          transition={{ duration: 0.3 }} // Reduced from 0.6
        >
          <p className="section-subtitle">{SERVICES.SECTION_TITLE}</p>
          <h2 className="section-title">{SERVICES.SECTION_SUBTITLE}</h2>
          <p className="section-description">
            {SERVICES.SECTION_DESCRIPTION}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-2 lg:grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }} // Reduced trigger area
        >
          {SERVICES.ITEMS.map((service, index) => (
            <motion.div
              key={service.ID}
              className={`service-card ${service.FEATURED ? 'featured-service' : ''}`}
              variants={itemVariants}
              // Removed whileHover to reduce lag
            >
              <div className="service-icon">
                {getIcon(service.ICON)}
              </div>
              <div className="service-number">0{service.ID}</div>
              <h3 className="service-title">{service.TITLE}</h3>
              <p className="service-description">{service.DESCRIPTION}</p>
              <Link to={service.LINK} className="service-link">
                {BUTTONS.LEARN_MORE}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/services" className="btn btn-primary">
            {SERVICES.CTA_TEXT}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 