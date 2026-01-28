import { motion } from "framer-motion";

export default function WorkHero() {
  return (
    <section className="relative min-h-screen bg-black px-6 lg:px-24 flex items-center">
      
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />
      </div>

      <div className="relative max-w-5xl">
        
        {/* Identity */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50"
        >
          Udit Mahajan · Product Designer & Illustrator
        </motion.p>

        {/* Main statement */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] font-medium text-white"
        >
          Designing work
          <br />
          that earns attention,
          <br />
          not demands it.
        </motion.h1>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 max-w-xl text-base text-white/60"
        >
          A selection of product, visual, and interface work —
          shaped with care, restraint, and a strong point of view.
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center gap-3 text-white/40 text-sm"
        >
          <span className="h-px w-12 bg-white/30" />
          Scroll to explore
        </motion.div>

      </div>
    </section>
  );
}
