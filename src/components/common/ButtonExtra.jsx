import { motion } from "framer-motion";

const ButtonExtra = ({ name }) => {
  return (
    <div>
      <motion.button className="button-extra" whileHover={{ scale: 0.8 }}>
        {name}
      </motion.button>
    </div>
  );
};
export default ButtonExtra;
