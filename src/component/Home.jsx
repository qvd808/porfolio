import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className="loading-container">
      <motion.div className="glitch">Hello World</motion.div>
    </div>
  );
}
