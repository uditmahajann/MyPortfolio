import type React from "react";
import { motion } from "framer-motion";

const HeroText: React.FC = () => {
  return (
    <div className="relative z-10 max-w-3xl space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold leading-tight text-white sm:text-6xl"
      >
        Designing products.<br />
        Illustrating ideas.<br />
        Crafting experiences people actually feel.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mx-auto max-w-xl text-slate-300 text-lg"
      >
        I help teams shape clear interfaces, visual stories, and meaningful
        moments inside digital products — with equal love for structure and
        creativity.
      </motion.p>
    </div>
  );
};

export default HeroText;
