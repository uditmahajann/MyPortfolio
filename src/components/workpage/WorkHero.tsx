import type React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const WorkHero: React.FC = () => {
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
      {/* Cinematic background + glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute -inset-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.28),transparent_60%)] opacity-60"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-zinc-950 to-transparent" />
      </div>

      <div
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 lg:px-10"
        onMouseMove={handleMouseMove}
      >
        {/* Small intro line */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center font-caveat font-medium text-zinc-400 text-3xl"
        >
          👋 Hey! I'm Udit — UX Designer &amp; Developer
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-center font-google font-bold text-zinc-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          I <span className="text-sky-400/90"></span>design products
          <br className="hidden sm:block" />
          People{" "}
          <span className="inline-flex items-center align-middle">
            {/* <img
              src="/Images/heart.png"   // or /heart.png /heart.webp
              alt="love"
              className="mx-0.5 inline-block h-8 w-8 sm:h-20 sm:w-20"
            /> */}
            <motion.img
              src="/Images/heart.png"
              alt="love"
              className="mx-0.5 inline-block h-8 w-8 sm:h-20 sm:w-20"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </span>{" "}
          using & that make
          <br className="hidden sm:block" />
          <span className="text-sky-400/90">Business </span>sense.

        </motion.h1>


        {/* Minimal sub-hint */}
        {/* <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-8 text-center text-xs text-zinc-400 font-google sm:text-xl"
        >
          Thought through, well built, and done for the long run.
        </motion.p> */}

        {/* CTA row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
          >
            See the work
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="mailto:uditmahajann@gmail.com?subject=Let%27s%20work%20together"
            className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WorkHero;
