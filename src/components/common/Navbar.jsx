import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleDropdownEnter = (index) => {
    console.log("🟢 Dropdown Enter - Index:", index);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(index);
    console.log("🟢 Active dropdown set to:", index);
  };

  const handleDropdownLeave = () => {
    console.log("🔴 Dropdown Leave");
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      console.log("🔴 Active dropdown cleared");
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleMobileDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavClick = (path) => {
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      if (location.pathname !== route) {
        navigate(route);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about" },
        // { name: 'Our Team', path: '/about#team' }
      ],
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "SEO Services", path: "/services/seo" },
        // { name: 'PPC Advertising', path: '/services/ppc' },
        // { name: 'Social Media Marketing', path: '/services/social_media' },
        { name: "Web Development", path: "/services/web_design" },
        {
          name: "Software Development",
          path: "/services/software_development",
        },
        { name: "Mobile App Development", path: "/services/mobile_app" },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
      dropdown: [
        { name: "Web Development Pricing", path: "/pricing/web" },
        { name: "App Development Pricing", path: "/pricing/app" },
        { name: "SEO Pricing", path: "/pricing/seo" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    // { name: 'Blog', path: '/blog' },
    { name: "Contact", path: "/contact" },
  ];

  console.log("🔍 Current activeDropdown state:", activeDropdown);
  
  // Function to calculate dropdown position
  const getDropdownPosition = (index) => {
    const navItem = document.querySelector(`[data-nav-index="${index}"]`);
    if (navItem) {
      const rect = navItem.getBoundingClientRect();
      return {
        top: rect.bottom + 5,
        left: rect.left
      };
    }
    return { top: 80, left: 0 };
  };
  
  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="main-navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="/assets/axeera-logo-final.png"
              alt="Bitofix"
              className="logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-content desktop-nav">

          

          

          {navItems.map((item, index) => (
            <div key={item.name} className="nav-item" data-nav-index={index}>
              {item.dropdown ? (
                <div
                  className="dropdown-wrapper"
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="nav-link dropdown-toggle">
                    {item.name}
                    <FaChevronDown className="dropdown-icon" />
                  </button>
                  {activeDropdown === index && (
                    <div
                      className="dropdown-menu"
                      style={{
                        position: 'fixed',
                        top: `${getDropdownPosition(index).top}px`,
                        left: `${getDropdownPosition(index).left}px`,
                        zIndex: 9999,
                        background: 'white',
                        border: '1px solid #ddd',
                        minWidth: '200px',
                        padding: '8px 0',
                        borderRadius: '8px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                        marginTop: '5px'
                      }}
                    >
                      {item.dropdown.map((subItem) =>
                        subItem.path.includes("#") ? (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem.path)}
                            className="dropdown-item"
                          >
                            {subItem.name}
                          </button>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="dropdown-item"
                          >
                            {subItem.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="navbar-cta desktop-nav">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          style={{
            zIndex: '999999',
            position: 'relative',
            pointerEvents: 'auto'
          }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mobile-nav"
        >
          {navItems.map((item, index) => (
            <div key={item.name} className="mobile-nav-item">
              {item.dropdown ? (
                <>
                  <button
                    className="mobile-nav-link"
                    onClick={() => handleMobileDropdownToggle(index)}
                  >
                    {item.name}
                    <FaChevronDown
                      className={`dropdown-icon ${
                        activeDropdown === index ? "rotated" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === index && (
                    <div className="mobile-dropdown">
                      {item.dropdown.map((subItem) =>
                        subItem.path.includes("#") ? (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem.path)}
                            className="mobile-dropdown-item"
                          >
                            {subItem.name}
                          </button>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="mobile-dropdown-item"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mobile-cta">
            <Link to="/contact" className="btn btn-primary btn-sm">
              Get Quote
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
