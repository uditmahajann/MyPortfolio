import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

const TOOLS = [
  { name: "Figma", logo: "/tools/figma.svg" },
  { name: "Framer", logo: "/tools/framer.svg" },
  { name: "Jitter", logo: "/tools/jitter.svg" },
  { name: "Illustrator", logo: "/tools/illustrator.svg" },
  { name: "Photoshop", logo: "/tools/photoshop.svg" },
  { name: "Canva", logo: "/tools/canva.svg" },
  { name: "GitHub", logo: "/tools/github.svg" },
  { name: "Slack", logo: "/tools/slack.svg" },
];

export default function DragDropTools() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative mx-auto max-w-7xl px-5 lg:px-10 py-28">
      {/* Heading */}
      <div className="mb-14 max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-50">
          Tools I think with
        </h2>
        <p className="mt-3 text-zinc-400 text-sm">
          Feel free to move things around.
        </p>
      </div>

      {/* Constraint container */}
      <div
        ref={containerRef}
        className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
      >
        {TOOLS.map((tool) => (
          <DragDropCard
            key={tool.name}
            tool={tool}
            constraintsRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
}

function DragDropCard({ tool, constraintsRef }: any) {
  const controls = useAnimation();

  const handleDragEnd = async () => {
    // gravity hint (small drop)
    await controls.start({
      y: 24,
      rotate: 0,
      transition: { duration: 0.18, ease: "easeOut" },
    });

    // return to original position
    controls.start({
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    });
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.12}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      animate={controls}
      whileHover={{ scale: 1.04 }}
      whileDrag={{
        scale: 1.06,
        rotate: 4,
        cursor: "grabbing",
        zIndex: 20,
      }}
      className="relative cursor-grab rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120px circle at center, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={tool.logo}
          alt={tool.name}
          className="mb-4 h-12 w-12 opacity-80"
        />
        <p className="text-sm font-medium text-zinc-200">
          {tool.name}
        </p>
      </div>
    </motion.div>
  );
}
