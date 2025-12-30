import { motion } from "framer-motion";

const FadeMotion = ({
  children,
  duration = 0.5,
  delay = 0,
  y = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeMotion;
