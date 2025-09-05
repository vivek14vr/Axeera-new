import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const Button = ({
  name,
  dropdownId,
  activeDropdown,
  setActiveDropdown,
  dropdownItems = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isOpen = activeDropdown === dropdownId;

  const handleMouseEnter = () => {
    setActiveDropdown(dropdownId);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      if (!isHovered) setActiveDropdown(null);
    }, 200);
  };

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <motion.button className="button" whileHover={{ scale: 0.8 }}>
        {name}
        <FaAngleDown className="dropdown-icons" />
      </motion.button>

      {isOpen && dropdownItems.length > 0 && (
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActiveDropdown(null);
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="dropdown-menu"
        >
          {dropdownItems.map((item, index) => (
            <button key={index} className="dropdown-item">
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Button;
