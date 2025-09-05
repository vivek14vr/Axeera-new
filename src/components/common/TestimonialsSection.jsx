import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TESTIMONIALS } from '../../constants/content';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.ITEMS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.ITEMS.length) % TESTIMONIALS.ITEMS.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants - SIMPLIFIED FOR PERFORMANCE
  const testimonialVariants = {
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3, // Reduced from 0.5
        ease: "easeOut"
      }
    },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3, // Reduced from 0.5
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -50, // Reduced from -100
      transition: {
        duration: 0.3, // Reduced from 0.5
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-16"
          initial={{ opacity: 0, y: 20 }} // Reduced from 30
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }} // Reduced trigger area
          transition={{ duration: 0.3 }} // Reduced from 0.6
        >
          <p className="section-subtitle">{TESTIMONIALS.SECTION_TITLE}</p>
          <h2 className="section-title">{TESTIMONIALS.SECTION_SUBTITLE}</h2>
          <p className="section-description">
            {TESTIMONIALS.SECTION_DESCRIPTION}
          </p>
        </motion.div>

        <div className="testimonials-container">
          <div className="testimonial-carousel">
            <motion.button 
              className="carousel-btn prev" 
              onClick={prevTestimonial}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-50px" }} // Reduced trigger area
              transition={{ duration: 0.3 }} // Reduced from 0.5
              // Removed whileHover and whileTap to reduce lag
            >
              <FaChevronLeft />
            </motion.button>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial}
                className="testimonial-card active"
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="testimonial-content">
                  <div className="stars">
                    {[...Array(TESTIMONIALS.ITEMS[currentTestimonial].RATING)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <p className="testimonial-text">
                    "{TESTIMONIALS.ITEMS[currentTestimonial].TEXT}"
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img 
                        src={TESTIMONIALS.ITEMS[currentTestimonial].IMAGE} 
                        alt={TESTIMONIALS.ITEMS[currentTestimonial].NAME}
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${TESTIMONIALS.ITEMS[currentTestimonial].NAME}&background=FF6B35&color=fff&size=60`;
                        }}
                      />
                    </div>
                    <div className="author-info">
                      <div className="author-name">{TESTIMONIALS.ITEMS[currentTestimonial].NAME}</div>
                      <div className="author-title">
                        {TESTIMONIALS.ITEMS[currentTestimonial].POSITION}, {TESTIMONIALS.ITEMS[currentTestimonial].COMPANY}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button 
              className="carousel-btn next" 
              onClick={nextTestimonial}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-50px" }} // Reduced trigger area
              transition={{ duration: 0.3 }} // Reduced from 0.5
              // Removed whileHover and whileTap to reduce lag
            >
              <FaChevronRight />
            </motion.button>
          </div>

          <div className="testimonial-dots">
            {TESTIMONIALS.ITEMS.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-50px" }} // Reduced trigger area
                transition={{ duration: 0.2, delay: index * 0.05 }} // Reduced durations
                // Removed whileHover to reduce lag
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 