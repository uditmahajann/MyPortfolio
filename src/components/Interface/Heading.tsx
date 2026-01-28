import type React from "react";
import { motion } from "framer-motion";

type Align = "left" | "center" | "right";

interface SectionHeadingProps {
  /** Small script-style line above the main heading */
  prefix?: string;
  /** Text before the highlighted SVG word in the main line */
  mainBefore?: string;
  /** Text after the highlighted SVG word in the main line */
  mainAfter?: string;
  /** SVG for the highlighted word (e.g. blue design box) */
  highlightSvg: string;
  highlightAlt?: string;
  /** Optional note SVG that pops up from behind on hover */
  noteSvg?: string;
  /** Optional tiny punchline line under heading */
  punchline?: string;
  /** Alignment for the whole block */
  align?: Align;
  /** Extra classes if needed */
  className?: string;
}

const alignClasses: Record<Align, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

const punchlineAlignClasses: Record<Align, string> = {
  left: "mr-auto text-left",
  center: "mx-auto text-center",
  right: "ml-auto text-right",
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  prefix,
  mainBefore,
  mainAfter,
  highlightSvg,
  highlightAlt = "",
  noteSvg,
  punchline,
  align = "center",
  className = "",
}) => {
  const headingAlign = alignClasses[align];
  const punchlineAlign = punchlineAlignClasses[align];

  return (
    <div
      className={`mx-auto max-w-7xl ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex flex-col ${headingAlign}`}
      >
        
        {/* Main bold line with SVG highlight */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-zinc-50 uppercase">
          {mainBefore && <span>{mainBefore} </span>}

          <motion.span
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="relative inline-block align-middle"
          >
            {/* Highlight SVG */}
            <motion.img
              src={highlightSvg}
              alt={highlightAlt}
              className="inline-block h-10 w-auto sm:h-12 md:h-32 cursor-pointer"
              variants={{
                rest: { y: 0, rotate: 0 },
                hover: { y: 2, rotate: -2 },
              }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            />

            {/* Optional note SVG */}
            {noteSvg && (
              <motion.img
                src={noteSvg}
                alt=""
                className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-60 w-auto -translate-x-1/2"
                variants={{
                  rest: { opacity: 0, y: -20, scale: 0.6, rotate: 0 },
                  hover: { opacity: 1, y: -80, scale: 1, rotate: 0 },
                }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              />
            )}
          </motion.span>

          {mainAfter && <span> {mainAfter}</span>}
        </h2>
        
        {/* Prefix / script-ish line */}
        {prefix && (
          <p className="-mt-5 text-2xl sm:text-4xl text-zinc-300 font-caveat">
            {prefix}
          </p>
        )}
      </motion.div>

      {/* Optional punchline */}
      {punchline && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className={`max-w-md text-sm text-zinc-400 ${punchlineAlign}`}
        >
          {punchline}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;



// import type React from "react";
// import { motion } from "framer-motion";

// const FancyHeadingSection: React.FC = () => {
//   return (
//     <section className="mx-auto max-w-5xl px-5 py-20">
//       {/* Top + main heading block */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.6 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="text-center"
//       >
//         {/* Handwritten-style line (sub-heading part of the sentence) */}
//         <p className="text-xl text-zinc-300 sm:text-2xl md:text-[1.6rem] md:leading-tight italic">
//           Where ideas run wild
//         </p>

//         {/* Bold main line with SVG-highlight word */}
//         <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
//           This is my{" "}
//           {/* Highlighted word as SVG with hover note */}
//           <motion.span
//             initial="rest"
//             animate="rest"
//             whileHover="hover"
//             className="relative inline-block align-middle"
//           >
//             {/* The blue-box “design” SVG */}
//             <motion.img
//               src="/Images/Bold.png"
//               alt="design"
//               className="inline-block h-10 w-auto sm:h-12 md:h-20"
//               variants={{
//                 rest: { y: 0, rotate: 0 },
//                 hover: { y: -2, rotate: -1.5 },
//               }}
//               transition={{ duration: 0.18, ease: "easeOut" }}
//             />

//             {/* Note SVG that slides up from behind */}
//             <motion.img
//               src="/Images/Note.png"
//               alt="note"
//               className="pointer-events-none absolute left-1/2 bottom-0 -z-20 h-30 w-auto -translate-x-1/2"
//               variants={{
//                 rest: { opacity: 0, y: 60, scale: 0.9, rotate: 0 },
//                 hover: { opacity: 1, y: 120, scale: 1, rotate: 30 },
//               }}
//               transition={{ duration: 0.24, ease: "easeOut" }}
//             />
//           </motion.span>{" "}
//           playground.
//         </h2>
//       </motion.div>

//       {/* Optional small punchline on the bottom-right */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.7 }}
//         transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
//         className="mt-5 max-w-md ml-auto text-right text-xs text-zinc-400 sm:text-[13px]"
//       >
//         Little experiments, half-baked ideas, and things I’m still figuring out.
//       </motion.p>
//     </section>
//   );
// };

// export default FancyHeadingSection;

