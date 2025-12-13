import type React from "react";
import { motion } from "framer-motion";

const HeroCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.2 }}
      className="relative z-10 mt-10 flex gap-4"
    >
      <a
        href="#work"
        className="
          rounded-full bg-cyan-400/20 px-8 py-3 text-white backdrop-blur-lg 
          transition hover:bg-cyan-400/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]
        "
      >
        View My Work
      </a>

      <a
        href="/contact"
        className="
          rounded-full border border-white/20 px-8 py-3 text-white 
          transition hover:border-cyan-300/40 hover:text-cyan-200
        "
      >
        Get in Touch
      </a>
    </motion.div>
  );
};

export default HeroCTA;
