import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaGlobe, FaMobile, FaCode, FaPalette, FaSearch, FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';
import Layout from '../components/common/Layout';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaRocket /> },
    { id: 'web', name: 'Web Development', icon: <FaGlobe /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <FaMobile /> },
    { id: 'software', name: 'Software', icon: <FaCode /> },
    // { id: 'design', name: 'UI/UX Design', icon: <FaPalette /> },
    { id: 'seo', name: 'SEO Projects', icon: <FaSearch /> }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "Inventory Management System",
      category: "web",
      description: "Modern inventory management system with advanced features including payment integration, inventory management, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      // client: "Tech Retail Co.",
      year: "2024",
      link: "#",
      github: "#",
      featured: true
    },
    // {
    //   id: 2,
    //   title: "Food Delivery App",
    //   category: "mobile",
    //   description: "Cross-platform mobile application for food delivery with real-time tracking, payment processing, and restaurant management.",
    //   image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
    //   technologies: ["React Native", "Firebase", "Google Maps", "Stripe"],
    //   // client: "FoodExpress",
    //   year: "2024",
    //   link: "#",
    //   github: "#",
    //   featured: true
    // },
    {
      id: 2,
      title: "Product Management System",
      category: "software",
      description: "Comprehensive product management software for businesses with product records, inventory management, and billing.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      technologies: ["React", "Node.js", "MongoDB"],
      // client: "Product Management Solutions",
      year: "2023",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 3,
      title: "Real Estate Website",
      category: "web",
      description: "Property listing website with advanced search filters, virtual tours, and lead management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
      // client: "RealEstate Pro",
      year: "2023",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce App",
      category: "mobile",
      description: "E-commerce app with advanced features including payment integration, inventory management, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      // client: "FitLife",
      year: "2023",
      link: "#",
      github: "#",
      featured: false
    },
    // {
    //   id: 5,
    //   title: "E-commerce App",
    //   category: "mobile",
    //   description: "E-commerce app with advanced features including payment integration, inventory management, and analytics dashboard.",
    //   image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    //   technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    //   // client: "Digital Bank",
    //   year: "2023",
    //   link: "#",
    //   github: "#",
    //   featured: false
    // },
    {
      id: 5,
      title: "Inventory Management System",
      category: "software",
      description: "Enterprise-level inventory management solution with barcode scanning, reporting, and analytics.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["Angular", "Java Spring", "Oracle", "Docker"],
      // client: "Manufacturing Corp",
      year: "2023",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 6,
      title: "Travel Blog Platforms",
      category: "web",
      description: "Content management system for travel bloggers with SEO optimization and social media integration.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      technologies: ["WordPress", "PHP", "MySQL", "SEO Tools"],
      // client: "Travel Writers",
      year: "2023",
      link: "#",
      github: "#",
      featured: false
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <FaRocket />
              <span>Our Work</span>
            </div>
            <h1 className="hero-title">Portfolio</h1>
            <p className="hero-subtitle">
              Discover our innovative solutions and successful projects that have transformed businesses across various industries.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{portfolioProjects.length}+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Industries Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="portfolio-categories">
        <div className="container">
          <motion.div 
            className="categories-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="categories-grid">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="portfolio-grid-section">
        <div className="container">
          <motion.div 
            className="portfolio-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`portfolio-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="overlay-buttons">
                      <button 
                        className="overlay-btn view-btn"
                        onClick={() => openProjectModal(project)}
                      >
                        <FaEye />
                        <span>View Details</span>
                      </button>
                      {/* <a href={project.link} className="overlay-btn live-btn" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-header">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <div className="portfolio-meta">
                      <span className="client">{project.client}</span>
                      <span className="year">{project.year}</span>
                    </div>
                  </div>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="portfolio-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => openProjectModal(project)}
                    >
                      View Details
                    </button>
                    {project.github && (
                      <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="cta-text">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.</p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Started</a>
              <a href="/services" className="btn btn-secondary">View Services</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <h2>{selectedProject.title}</h2>
                <div className="modal-meta">
                  <div className="meta-item">
                    <strong>Client:</strong> {selectedProject.client}
                  </div>
                  <div className="meta-item">
                    <strong>Year:</strong> {selectedProject.year}
                  </div>
                  <div className="meta-item">
                    <strong>Category:</strong> {categories.find(c => c.id === selectedProject.category)?.name}
                  </div>
                </div>
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-actions">
                  <a href={selectedProject.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    View Live Demo
                  </a>
                  {selectedProject.github && (
                    <a href={selectedProject.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Portfolio; 