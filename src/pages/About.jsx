import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import {
  FaHeart,
  FaEye,
  FaHandshake,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaTrophy,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaAward,
  FaLightbulb,
  FaCode,
  FaPalette,
  FaBullseye,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaFileContract,
} from "react-icons/fa";

const About = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative approaches to deliver exceptional results for our clients.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: <FaHandshake />,
      title: "Transparency",
      description:
        "Open communication and honest reporting are at the core of our client relationships.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <FaHeart />,
      title: "Results-Driven",
      description:
        "Every strategy we implement is designed to deliver measurable growth and ROI for your business.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <FaEye />,
      title: "24/7 Support",
      description: "We are always here to help you with your business needs.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <FaClock />,
      title: "On Time Delivery",
      description:
        "We commit to delivering your projects within the agreed timeline, ensuring your business stays on track.",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "No Hassle",
      description:
        "Smooth project execution with minimal disruption to your daily operations and workflow.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: <FaDollarSign />,
      title: "No Hidden Charges",
      description:
        "Complete transparency in pricing with no surprise costs or additional fees during project execution.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: <FaFileContract />,
      title: "Flexible Contracts",
      description:
        "Choose between contract-based or project-based engagement models that suit your business needs.",
      color: "from-red-500 to-pink-600",
    },
  ];

  const teamMembers = [
    {
      name: "Rohit Raj",
      position: "Co-Founder & CEO",
      image: "/assets/Rohit.jpg",
      bio: "Visionary leader with 8+ years of experience in technology solutions. Has helped 500+ businesses achieve remarkable growth and establish strong online presence.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Client Relations",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rohit@bitofix.com",
      },
    },
    {
      name: "Ritik Gupta",
      position: "Co-Founder & CTO",
      image: null, // Remove photo
      bio: "Tech innovator and strategic thinker with deep expertise in modern web technologies, mobile development, and digital transformation.",
      expertise: [
        "Full-Stack Development",
        "Mobile Apps",
        "Cloud Architecture",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "shwetabh@bitofix.com",
      },
    },
    {
      name: "Vivek Raj",
      position: "Co-Founder & CMO",
      image: "/assets/Vivek.jpg",
      bio: "Marketing strategist and brand visionary who combines creative thinking with data-driven insights to build compelling brand experiences and growth strategies.",
      expertise: ["Marketing Strategy", "Brand Development", "Growth Hacking"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "vivek@bitofix.com",
      },
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <FaTrophy /> },
    { number: "150+", label: "Happy Clients", icon: <FaUsers /> },
    { number: "100%", label: "Client Satisfaction", icon: <FaHeart /> },
    { number: "3+", label: "Years Experience", icon: <FaGlobe /> },
  ];

  const achievements = [
    {
      icon: <FaAward />,
      title: "Industry Recognition",
      description:
        'Awarded "Best Tech Solutions Agency" by Global Business Awards 2023',
    },
    {
      icon: <FaChartLine />,
      title: "Proven Results",
      description:
        "Average 300% increase in client ROI within the first 6 months",
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "Successfully launched projects across 15+ countries",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Leader",
      description: "Pioneered AI-driven strategies for global market",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getIconColor = (title) => {
    switch (title) {
      case "Innovation":
        return "#4F46E5"; // Indigo 600
      case "Transparency":
        return "#10B981"; // Green 600
      case "Results-Driven":
        return "#F59E0B"; // Orange 600
      case "24/7 Support":
        return "#8B5CF6"; // Purple 600
      case "On Time Delivery":
        return "#2563EB"; // Blue 600
      case "No Hassle":
        return "#059669"; // Emerald 600
      case "No Hidden Charges":
        return "#D97706"; // Yellow 600
      case "Flexible Contracts":
        return "#DC2626"; // Red 600
      default:
        return "#6B7280"; // Gray 500
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaRocket />
              <span>About Axeera</span>
            </motion.div>
            <h1 className="hero-title">
              Transforming Businesses Through
              <span className="text-gradient"> Tech Innovation</span>
            </h1>
            <p className="hero-subtitle">
              Empowering global businesses to thrive in the digital landscape
              through innovative tech solutions, cutting-edge technology, and
              strategic growth initiatives.
            </p>
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <motion.div
              className="founder-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-subtitle">Our Story</p>
              <h2 className="section-title">
                Building Success Through Innovation Since 2021
              </h2>
              <p className="founder-message">
                "Axeera was born from a shared vision that global businesses
                deserved world-class technology solutions. Our team combines
                deep business strategy expertise, cutting-edge technical
                knowledge, and creative marketing insights to deliver
                exceptional results."
              </p>
              <p className="founder-message">
                "What started as passionate discussions about transforming
                businesses has grown into a company that has successfully helped
                over 50+ businesses achieve remarkable growth. Our integrated
                approach of business strategy, technology innovation, and
                marketing excellence creates a powerful synergy that drives
                sustainable success for our clients."
              </p>
              <p className="founder-message">
                "Today, we continue to blend global best practices with deep
                local market understanding, ensuring every solution we deliver
                truly matters for global businesses in the digital age."
              </p>
              <div className="founder-signature">
                <strong>The Axeera Team</strong>
                <span>Dedicated Professionals</span>
              </div>
            </motion.div>

            <motion.div
              className="founder-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="story-visual-container">
                <div className="timeline-element">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <h4>2021</h4>
                    <p>Company Founded</p>
                  </div>
                </div>
                <div className="timeline-element">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <h4>2022</h4>
                    <p>50+ Projects</p>
                  </div>
                </div>
                <div className="timeline-element">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2024</h4>
                    <p>Industry Leader</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Our Values</p>
            <h2 className="section-title">What Drives Us Forward</h2>
            <p className="section-description">
              These core values guide every decision we make and every strategy
              we implement for our clients.
            </p>
          </motion.div>

          <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div
                  className={`value-icon bg-gradient-to-r ${value.color} shadow-lg`}
                >
                  <span
                    className="text-2xl"
                    style={{ color: getIconColor(value.title) }}
                  >
                    {value.icon}
                  </span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="team-section" id="team">
        {/* <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Our Team</p>
            <h2 className="section-title">Meet the Experts Behind Your Success</h2>
            <p className="section-description">
              Our diverse team of marketing professionals, designers, and strategists work together 
              to deliver exceptional results for your business.
            </p>
          </motion.div>
          
          <motion.div 
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="team-image">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=FF6B35&color=fff&size=300`;
                      }}
                    />
                  ) : (
                    <div className="team-placeholder">
                      <div className="placeholder-avatar">
                        <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    </div>
                  )}
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-link">
                        <FaLinkedin />
                      </a>
                      <a href={member.social.twitter} className="social-link">
                        <FaTwitter />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="social-link">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-expertise">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div> */}
      {/* </section> */}

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Our Achievements</p>
            <h2 className="section-title">Milestones That Define Us</h2>
            <p className="section-description">
              Recognition and results that showcase our commitment to excellence
              and innovation.
            </p>
          </motion.div>

          <motion.div
            className="achievements-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-showcase">
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

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="cta-text">
              <h2>Ready to Start Your Growth Journey?</h2>
              <p>
                Let's discuss how we can help transform your business with
                strategic technology solutions and cutting-edge technology.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Consultation
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
