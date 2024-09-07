import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TypingEffectProps {
  text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const textArray = text.split('');

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.01 }}
      className="text-xl mt-5"
    >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.03, duration: 0.01 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingEffect;
