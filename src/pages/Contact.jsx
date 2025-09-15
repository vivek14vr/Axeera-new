import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import emailjs from "emailjs-com";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaGlobe,
  FaCopy,
} from "react-icons/fa";
import {
  COMPANY_INFO,
  CONTACT,
  FAQ,
  BUTTONS,
  MESSAGES,
} from "../constants/content";

// Constants
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "f1_0ZqocOhQIcLpWB",
  SERVICE_ID: "service_6xrl6bt",
  TEMPLATE_ID: "template_sssxsoz",
  TO_EMAIL: "rohitrajbharti91@gmail.com",
};

const FORM_FIELDS = {
  NAME: "name",
  EMAIL: "email",
  COMPANY: "company",
  PHONE: "phone",
  SERVICE: "service",
  MESSAGE: "message",
};

const INITIAL_FORM_STATE = {
  [FORM_FIELDS.NAME]: "",
  [FORM_FIELDS.EMAIL]: "",
  [FORM_FIELDS.COMPANY]: "",
  [FORM_FIELDS.PHONE]: "",
  [FORM_FIELDS.SERVICE]: [],
  [FORM_FIELDS.MESSAGE]: "",
};

const SERVICE_OPTIONS = [
  { value: "seo", label: "SEO Services" },
  { value: "ppc", label: "PPC Advertising" },
  { value: "social-media", label: "Social Media Marketing" },
  { value: "web-development", label: "Web Development" },
  { value: "branding", label: "Branding & UI/UX" },
  { value: "mobile-app", label: "Mobile App Development" },
  { value: "orm", label: "Online Reputation Management" },
  { value: "cro", label: "Conversion Rate Optimization" },
  { value: "virtual-assistant", label: "Virtual Assistant Services" },
  { value: "software-development", label: "Software Development" },
  { value: "other", label: "Other" },
];

const CONTACT_INFO = [
  // {
  //   icon: <FaPhone />,
  //   title: 'Call Us',
  //   details: [COMPANY_INFO.PHONE_PRIMARY, COMPANY_INFO.PHONE_SECONDARY],
  //   color: 'from-green-500 to-teal-500'
  // },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    details: [COMPANY_INFO.EMAIL[0],COMPANY_INFO.EMAIL[1],COMPANY_INFO.EMAIL[2]],
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    details: [COMPANY_INFO.ADDRESSES.NOIDA, COMPANY_INFO.ADDRESSES.PORTLAND],
    color: "from-orange-5COMPANY_INFOto-red-500",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    details: [
      COMPANY_INFO.WORKING_HOURS.WEEKDAYS,
      COMPANY_INFO.WORKING_HOURS.SATURDAY,
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, url: "#", label: "Facebook" },
  { icon: <FaTwitter />, url: "#", label: "Twitter" },
  { icon: <FaLinkedinIn />, url: "#", label: "LinkedIn" },
  { icon: <FaInstagram />, url: "#", label: "Instagram" },
  { icon: <FaYoutube />, url: "#", label: "YouTube" },
];

const FAQ_DATA = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive tech services including SEO, PPC, Social Media Marketing, Web Development, Branding, and more.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary by service, but typically you'll see initial improvements within 30-60 days for most campaigns.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely! We work with businesses of all sizes, from startups to enterprise companies.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is customized based on your specific needs and goals. Contact us for a personalized quote.",
  },
];

// Animation variants
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
};

// Utility functions
const createEmailBody = (formData) => {
  const servicesText = formData[FORM_FIELDS.SERVICE].length > 0 
    ? formData[FORM_FIELDS.SERVICE].join(', ')
    : 'Not specified';
    
  return `
Name: ${formData[FORM_FIELDS.NAME]}
Email: ${formData[FORM_FIELDS.EMAIL]}
Company: ${formData[FORM_FIELDS.COMPANY]}
Phone: ${formData[FORM_FIELDS.PHONE]}
Services of Interest: ${servicesText}
Message: ${formData[FORM_FIELDS.MESSAGE]}

---
This message was sent from the ${COMPANY_INFO.NAME} contact form.
  `.trim();
};

const createEmailSubject = (name) => `New Contact Form Submission - ${name}`;

const createMailtoUrl = (subject, body) => {
  return `mailto:${EMAILJS_CONFIG.TO_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailContent, setEmailContent] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === FORM_FIELDS.SERVICE && type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(service => service !== value)
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setIsSubmitted(false);
    setEmailContent("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Form submitted, starting EmailJS process...");
    // console.log('📝 Form data:', formData);
    setIsSubmitting(true);

    const emailSubject = createEmailSubject(formData[FORM_FIELDS.NAME]);
    const emailBody = createEmailBody(formData);
    setEmailContent(emailBody);
    // console.log('📧 Email content prepared:', emailBody);

    try {
      console.log("📤 Attempting to send email via EmailJS...");
      console.log('🔧 EmailJS Config:', EMAILJS_CONFIG);
      console.log('📝 Form data being sent:', formData);

      // Prepare template parameters for EmailJS - matching your template variables exactly
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        // Template variables that your EmailJS template expects
        title: createEmailSubject(formData[FORM_FIELDS.NAME]),
        name: formData[FORM_FIELDS.NAME],
        time: new Date().toLocaleString(),
        message: formData[FORM_FIELDS.MESSAGE],
        email: formData[FORM_FIELDS.EMAIL],
        // Additional fields for comprehensive information
        company: formData[FORM_FIELDS.COMPANY] || 'Not specified',
        phone: formData[FORM_FIELDS.PHONE] || 'Not specified',
        service: formData[FORM_FIELDS.SERVICE].length > 0 ? formData[FORM_FIELDS.SERVICE].join(', ') : 'Not specified',
        // Keep these for backward compatibility
        fromname: formData[FORM_FIELDS.NAME],
        fromemail: formData[FORM_FIELDS.EMAIL],
        replyto: formData[FORM_FIELDS.EMAIL],
      };

      console.log("📧 Template parameters being sent:", templateParams);

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        resetForm();
      }, 1000);
    } catch (error) {
      console.error("❌ EmailJS error:", error);
      console.error("🔍 Error details:", {
        message: error.message,
        status: error.status,
        response: error.response,
      });

      console.log("🔄 Attempting fallback to mailto...");
      const mailtoUrl = createMailtoUrl(emailSubject, emailBody);

      try {
        window.open(mailtoUrl, "_blank");
      } catch (mailtoError) {
        console.error("❌ Mailto error:", mailtoError);
      }

      setTimeout(() => {
        console.log("⚠️ Showing success message despite error...");
        setIsSubmitting(false);
        setIsSubmitted(true);
        resetForm();
      }, 1000);
    }
  };

  const copyEmailContent = () => {
    const fullEmail = `To: ${
      EMAILJS_CONFIG.TO_EMAIL
    }\nSubject: ${createEmailSubject(
      formData[FORM_FIELDS.NAME]
    )}\n\n${emailContent}`;

    navigator.clipboard
      .writeText(fullEmail)
      .then(() => {
        alert(
          "Email content copied to clipboard! You can now paste it in your email client."
        );
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        alert(
          "Failed to copy to clipboard. Please manually copy the email content."
        );
      });
  };

  const renderFormField = (
    fieldName,
    label,
    type = "text",
    required = false,
    placeholder = ""
  ) => (
    <div className="form-group">
      <label htmlFor={fieldName}>
        {getFieldIcon(fieldName)} {label} {required && "*"}
      </label>
      <input
        type={type}
        id={fieldName}
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );

  const getFieldIcon = (fieldName) => {
    const iconMap = {
      [FORM_FIELDS.NAME]: <FaUser />,
      [FORM_FIELDS.EMAIL]: <FaEnvelope />,
      [FORM_FIELDS.COMPANY]: <FaBuilding />,
      [FORM_FIELDS.PHONE]: <FaPhone />,
      [FORM_FIELDS.SERVICE]: <FaGlobe />,
      [FORM_FIELDS.MESSAGE]: <FaPaperPlane />,
    };
    return iconMap[fieldName] || <FaUser />;
  };

  const renderContactInfoCard = (info, index) => (
    <motion.div
      key={index}
      className="contact-info-card"
      variants={ANIMATION_VARIANTS.item}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="info-icon">{info.icon}</div>
      <div className="info-content">
        <h3>{info.title}</h3>
        {info.details.map((detail, idx) => (
          <p key={idx}>
            {info.title === "Email Us" && detail.includes("@") ? (
              <a href={`mailto:${detail}`} className="email-link">
                {detail}
              </a>
            ) : (
              detail
            )}
          </p>
        ))}
      </div>
    </motion.div>
  );

  const renderSocialLink = (social, index) => (
    <motion.a
      key={index}
      href={social.url}
      className="social-link"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {social.icon}
    </motion.a>
  );

  const renderFAQItem = (faq, index) => (
    <motion.div
      key={index}
      className="faq-item"
      variants={ANIMATION_VARIANTS.item}
      whileHover={{ y: -5 }}
    >
      <h3>{faq.QUESTION}</h3>
      <p>{faq.ANSWER}</p>
    </motion.div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">{CONTACT.HERO.TITLE}</h1>
            <p className="hero-subtitle">{CONTACT.HERO.SUBTITLE}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="form-header">
                <h2>{CONTACT.FORM.TITLE}</h2>
                <p>{CONTACT.FORM.DESCRIPTION}</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">✓</div>
                  <h3>{CONTACT.FORM.SUCCESS.TITLE}</h3>
                  <p>{CONTACT.FORM.SUCCESS.DESCRIPTION}</p>

                  <div className="email-options">
                    <div className="email-option">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="btn btn-primary"
                      >
                        <FaEnvelope /> {CONTACT.FORM.SUCCESS.SEND_ANOTHER}
                      </button>
                    </div>

                    <div className="email-option">
                      <button
                        onClick={copyEmailContent}
                        className="btn btn-secondary"
                      >
                        <FaCopy /> {CONTACT.FORM.SUCCESS.COPY_CONTENT}
                      </button>
                    </div>
                  </div>

                  <div className="email-details">
                    <h4>{CONTACT.FORM.SUCCESS.EMAIL_DETAILS}</h4>
                    <p>
                      <strong>To:</strong>{" "}
                      <a
                        href={`mailto:${EMAILJS_CONFIG.TO_EMAIL}`}
                        className="email-link"
                      >
                        {EMAILJS_CONFIG.TO_EMAIL}
                      </a>
                    </p>
                    <p>
                      <strong>From:</strong> {formData[FORM_FIELDS.NAME]} (
                      {formData[FORM_FIELDS.EMAIL]})
                    </p>
                    <p>
                      <strong>Subject:</strong>{" "}
                      {createEmailSubject(formData[FORM_FIELDS.NAME])}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary"
                  >
                    {CONTACT.FORM.SUCCESS.SEND_ANOTHER_MESSAGE}
                  </button>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    {renderFormField(
                      FORM_FIELDS.NAME,
                      CONTACT.FORM.FIELDS.NAME.LABEL,
                      "text",
                      CONTACT.FORM.FIELDS.NAME.REQUIRED,
                      CONTACT.FORM.FIELDS.NAME.PLACEHOLDER
                    )}
                    {renderFormField(
                      FORM_FIELDS.EMAIL,
                      CONTACT.FORM.FIELDS.EMAIL.LABEL,
                      "email",
                      CONTACT.FORM.FIELDS.EMAIL.REQUIRED,
                      CONTACT.FORM.FIELDS.EMAIL.PLACEHOLDER
                    )}
                  </div>

                  <div className="form-row">
                    {renderFormField(
                      FORM_FIELDS.COMPANY,
                      CONTACT.FORM.FIELDS.COMPANY.LABEL,
                      "text",
                      CONTACT.FORM.FIELDS.COMPANY.REQUIRED,
                      CONTACT.FORM.FIELDS.COMPANY.PLACEHOLDER
                    )}
                    {renderFormField(
                      FORM_FIELDS.PHONE,
                      CONTACT.FORM.FIELDS.PHONE.LABEL,
                      "tel",
                      CONTACT.FORM.FIELDS.PHONE.REQUIRED,
                      CONTACT.FORM.FIELDS.PHONE.PLACEHOLDER
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      <FaGlobe /> {CONTACT.FORM.FIELDS.SERVICE.LABEL}
                    </label>
                    <div className="checkbox-group">
                      {SERVICE_OPTIONS.map((option, index) => (
                        <label key={index} className="checkbox-item">
                          <input
                            type="checkbox"
                            name={FORM_FIELDS.SERVICE}
                            value={option.value}
                            checked={formData[FORM_FIELDS.SERVICE].includes(option.value)}
                            onChange={handleChange}
                          />
                          <span className="checkbox-label">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor={FORM_FIELDS.MESSAGE}>
                      <FaPaperPlane /> {CONTACT.FORM.FIELDS.MESSAGE.LABEL} *
                    </label>
                    <textarea
                      id={FORM_FIELDS.MESSAGE}
                      name={FORM_FIELDS.MESSAGE}
                      value={formData[FORM_FIELDS.MESSAGE]}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder={CONTACT.FORM.FIELDS.MESSAGE.PLACEHOLDER}
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting
                      ? CONTACT.FORM.SUBMITTING_BUTTON
                      : CONTACT.FORM.SUBMIT_BUTTON}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="info-header">
                <h2>{CONTACT.INFO.TITLE}</h2>
                <p>{CONTACT.INFO.DESCRIPTION}</p>
              </div>

              <motion.div
                className="contact-cards"
                variants={ANIMATION_VARIANTS.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px" }}
              >
                {CONTACT_INFO.map(renderContactInfoCard)}
              </motion.div>

              {/* WhatsApp Contact */}
              <motion.div
                className="whatsapp-contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="whatsapp-content">
                  <FaWhatsapp className="whatsapp-icon" />
                  <div>
                    <h3>{CONTACT.INFO.WHATSAPP.TITLE}</h3>
                    <p>{CONTACT.INFO.WHATSAPP.DESCRIPTION}</p>
                  </div>
                  <Link
                    to={`https://wa.me/${COMPANY_INFO.WHATSAPP.replace(
                      "+",
                      ""
                    )}`}
                    target="_blank"
                    className="btn btn-success"
                  >
                    {CONTACT.INFO.WHATSAPP.BUTTON}
                  </Link>
                </div>
              </motion.div>

              {/* Social Connect
              <motion.div 
                className="social-connect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3>{CONTACT.INFO.SOCIAL.TITLE}</h3>
                <div className="social-links">
                  {SOCIAL_LINKS.map(renderSocialLink)}
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            className="map-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>{CONTACT.MAP.TITLE}</h2>
            <p>{CONTACT.MAP.DESCRIPTION}</p>
          </motion.div>

          <motion.div
            className="map-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d174.4175822311201!2d-122.69207640626398!3d45.61704783566694!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757915513050!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${COMPANY_INFO.NAME} Office Location`}
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-preview">
        <div className="container">
          <motion.div
            className="faq-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2>{CONTACT.FAQ.TITLE}</h2>
            <p>{CONTACT.FAQ.DESCRIPTION}</p>
          </motion.div>

          <motion.div
            className="faq-grid"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {FAQ.ITEMS.slice(0, 6).map(renderFAQItem)}
          </motion.div>

          <motion.div
            className="faq-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/faq" className="btn btn-secondary">
              {CONTACT.FAQ.CTA}
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
