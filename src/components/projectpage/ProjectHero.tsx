import { motion } from "framer-motion";

export default function ProjectHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left */}
      <div>
        <p className="text-xs tracking-widest text-zinc-400 mb-4">
          PRODUCT · MOBILE · EXPERIENCE
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Rise — a running companion that feels like a story,
          <span className="text-zinc-400"> not a tracker</span>
        </h1>

        <p className="mt-6 text-zinc-400 max-w-lg">
          Designing a calm, cinematic running experience that nudges
          athletes to see training as chapters, not checklists.
        </p>

        <div className="mt-8 flex gap-3">
          {["Mobile", "Sports", "Behaviour"].map(tag => (
            <span
              key={tag}
              className="rounded-full border border-zinc-800 px-4 py-1 text-sm text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden border border-zinc-800"
      >
        <img
          src="/images/rise-cover.png"
          alt="Rise app preview"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
