import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const screens = [
  "/images/rise-1.png",
  "/images/rise-2.png",
  "/images/rise-3.png",
];

export default function StickyScreens() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const index = useTransform(scrollYProgress, [0, 1], [0, screens.length - 1]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.img
          src={screens[0]}
          style={{
            opacity: scrollYProgress,
          }}
          className="w-[320px] md:w-[420px] rounded-xl border border-zinc-800"
        />
      </div>
    </section>
  );
}
