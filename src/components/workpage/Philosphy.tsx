import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT =
  "Speed gets you to market. Experience decides if people stay. Clarity, trust, and intent are what make products stand out. AND I TRY TO DO THAT WITH DESIGN.";

export default function ScrollRevealText() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const words = TEXT.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh]"
    >
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <p className="max-w-5xl text-center text-2xl sm:text-3xl md:text-4xl font-google font-medium leading-relaxed">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            // Opacity reveal per word
            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.15, 1]
            );

            return (
              <motion.span
                key={i}
                style={{ opacity }}
                className="mx-1 inline-block text-white transition-colors"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}




// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TEXT = {
//   heading: "Sometimes, I dive deep.",
//   body:
//     "I enjoy digging into complex systems — whether it’s a design library or a product workflow — and figuring out what makes them tick. It’s fun understanding the why before touching the how.",
// };

// const TypewriterSection: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start 80%", "end 40%"],
//   });

//   /**
//    * Convert scroll progress (0 → 1)
//    * into number of visible characters
//    */
//   const headingCount = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, TEXT.heading.length]
//   );

//   const bodyCount = useTransform(
//     scrollYProgress,
//     [0.2, 1],
//     [0, TEXT.body.length]
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-6 py-32"
//     >
//       <div className="text-center">
//         {/* Heading */}
//         <motion.h2
//           className="mx-auto max-w-4xl font-serif text-white"
//           style={{
//             fontSize: "clamp(2.2rem, 6vw, 4.6rem)",
//             lineHeight: 0.95,
//             letterSpacing: "-0.02em",
//           }}
//         >
//           <motion.span>
//             {TEXT.heading.split("").map((char, index) => (
//               <motion.span
//                 key={index}
//                 style={{
//                   opacity: useTransform(
//                     headingCount,
//                     (latest) => (index < latest ? 1 : 0)
//                   ),
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </motion.span>
//         </motion.h2>

//         {/* Body */}
//         <motion.p
//           className="mx-auto mt-8 max-w-2xl text-zinc-300"
//           style={{
//             fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
//             lineHeight: 1.75,
//           }}
//         >
//           {TEXT.body.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               style={{
//                 opacity: useTransform(
//                   bodyCount,
//                   (latest) => (index < latest ? 1 : 0)
//                 ),
//               }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default TypewriterSection;
