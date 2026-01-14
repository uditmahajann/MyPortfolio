import type React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Lottie from "lottie-react";

import comingSoonAnimation from "../../assets/Coming-Soon.json";

const PlayHero: React.FC = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const glowX = useTransform(mouseX, [0, 1], ["-20%", "30%"]);
  const glowY = useTransform(mouseY, [0, 1], ["-20%", "10%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background + glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />

        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute -inset-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.28),transparent_60%)] opacity-60"
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-zinc-950 to-transparent" />
      </div>

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center pl-40"
        onMouseMove={handleMouseMove}
      >
        
      {/* Lottie */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-[220px] sm:w-[260px] md:w-[450px] lg:w-[850px]"
        >
          <Lottie
            animationData={comingSoonAnimation}
            loop
            autoplay
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PlayHero;
