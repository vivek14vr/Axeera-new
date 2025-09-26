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
            <p className="footer-description" style={{padding:"0px 50px 0px 20px"}}>
              Empowering global businesses with innovative technology solutions.
              We drive growth through strategic planning, creative execution,
              and data-driven results.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61580652428485" target="_blank" rel="noopener noreferrer"> <FaFacebookF /> </a>
              <a href="https://www.instagram.com/aaxeera/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://wa.me/918826526768" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              </a>              
             
            </div>
          </div>

          {/* Quick Links Here*/}
          <div className="footer-section" style={{ width: window.innerWidth < 768 ? "100%" : "15%"}}>
            <h4>Quick Links</h4>
            <ul 
        className="footer-links" 
        style={{ fontSize: "clamp(14px, 2vw, 14px)" }}>

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
          <div className="footer-section" style={{width: window.innerWidth < 768 ? "100%" : "15%"}}>
            <h4>Our Services</h4>
            <ul 
        className="footer-links" 
        style={{ fontSize: "clamp(14px, 2vw, 14px)" }}>
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
          <div className="footer-section" style={{width: window.innerWidth < 768 ? "100%" : "40%"}}>
            <h4>Get in Touch</h4>
            <div className="contact-info" style={{ fontSize: "clamp(14px, 2vw, 14px)" }}>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <a href="https://maps.app.goo.gl/2HDTLQggUp15ELZx6"
                  style={{textDecoration:"none",color:"white"}}
                  >
                  2709 N Hayden Island Dr, STE 113775, Portland, Oregon, 97217, USA</a>
                </div>
              </div>
              <div className="contact-item" style={{paddingBottom:"10px"}}>
              <FaMapMarkerAlt />
                <div>
                  <a href="https://maps.app.goo.gl/a2TeNV1ad3poasE37"
                  style={{textDecoration:"none", color:"white"}}>Sector 62,Noida, Uttar Pradesh, India</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone />
                <div style={{paddingBottom:"10px"}}>
                  {/* <p>+91 6299764087</p> */}
                  <a href="tel:+918826526768" style={{ textDecoration: "none" , color:"white"}}> +91 8826526768</a>

                </div>
              </div>
              <div className="contact-item" style={{paddingBottom:"10px", fontSize:"16px"}}>
                <FaEnvelope />
                <div>
                  <a href="mailto:info@axeera.com" className="email-link">
                    info@axeera.com
                  </a>
                  <br />
                  
                  <a href="mailto:sales@axeera.com" className="email-link">
                    sales@axeera.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaClock />
                <div>
                  <p>Mon - Fri<br/>9:00 AM - 7:00 PM</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        {/* <div className="whatsapp-cta">
          <a
            href="https://wa.me/918826526768"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div> */}

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
