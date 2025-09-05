import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-brand">
              <Link to="/">
                <img
                  src="/assets/axeera-logo-final.png"
                  // alt="Bitofix"
                  className="logo"
                  style={{ height: "90px" }}
                />
              </Link>
              {/* <h4>BitoFix</h4> */}
            </div>
            <p className="footer-description">
              Empowering global businesses with innovative technology solutions.
              We drive growth through strategic planning, creative execution,
              and data-driven results.
            </p>
            {/* <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div> */}
          </div>

          {/* Quick Links Here*/}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio">Our Work</Link>
              </li>
              {/* <li><Link to="/blog">Blog</Link></li> */}
              {/* <li><Link to="/faq">FAQs</Link></li> */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services/seo">SEO Services</Link>
              </li>
              <li>
                <Link to="/services/mobile_app">Mobile App Development</Link>
              </li>
              {/* <li><Link to="/services/social_media">Social Media Marketing</Link></li> */}
              <li>
                <Link to="/services/web_design">Web Development</Link>
              </li>
              <li>
                <Link to="/services/software_development">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services">View All Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <p>2709 N Hayden Island Dr, STE 113775, Portland, Oregon, 97217, USA</p>
                </div>
                <div>
                  <p>Noida, Uttar Pradesh, India</p>
                </div>
              </div>
              {/* <div className="contact-item">
                <FaPhone />
                <div>
                  <p>+91 6299764087</p>
                  <p>+91 8969718899</p>
                </div>
              </div> */}
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <a href="mailto:info@axeera.com" className="email-link">
                    info@axeera.com
                  </a>
                  <br />
                  <a href="mailto:info@axeera.in" className="email-link">
                    info@axeera.in
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaClock />
                <div>
                  <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="whatsapp-cta">
          <a
            href="https://wa.me/918969718899"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Axeera. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
