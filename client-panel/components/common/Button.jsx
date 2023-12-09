import { motion } from "framer-motion";

const Button = ({ value, onClick, className, btnCenter }) => {
  return (
    <div className={`flex ${btnCenter && "justify-center"}`}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={`bg-gray-900 text-white py-3 text-lg font-semibold rounded px-5 ${className}`}
        onClick={onClick}
      >
        {value}
      </motion.button>
    </div>
  );
};

export default Button;
