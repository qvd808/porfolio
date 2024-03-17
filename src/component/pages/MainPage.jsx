import { animate, motion } from "framer-motion";

export default function MainPage() {

  const text=["Welcome"];
  const index = [0];

  return (
    <motion.div
      className="about"
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "100vw",
      }}
      transition={{
        duration: 1,
      }}
    >
       <div>
      
       </div>
    </motion.div>
  );
}
