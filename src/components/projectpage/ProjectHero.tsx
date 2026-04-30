import { motion } from "framer-motion";
import type React from "react";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

const CaseStudyHero: React.FC<Props> = ({ title, subtitle, image }) => {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient (like your reference) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(30,64,175,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/40 to-zinc-950" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen top-40 max-w-7xl flex-col items-center justify-center px-5 lg:px-10 text-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-zinc-50"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-zinc-400"
        >
          {subtitle}
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-16"
        >
          <img
            src={image}
            alt="product preview"
            className="w-[340px] sm:w-[480px] md:w-[620px] lg:w-[720px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudyHero;






// import { motion } from "framer-motion";

// export default function ProjectHero() {
//   return (
//     <section className="relative mx-auto max-w-7xl px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12">
//       {/* Left */}
//       <div>
//         <p className="text-xs tracking-widest text-zinc-400 mb-4">
//           PRODUCT · MOBILE · EXPERIENCE
//         </p>

//         <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
//           Rise — a running companion that feels like a story,
//           <span className="text-zinc-400"> not a tracker</span>
//         </h1>

//         <p className="mt-6 text-zinc-400 max-w-lg">
//           Designing a calm, cinematic running experience that nudges
//           athletes to see training as chapters, not checklists.
//         </p>

//         <div className="mt-8 flex gap-3">
//           {["Mobile", "Sports", "Behaviour"].map(tag => (
//             <span
//               key={tag}
//               className="rounded-full border border-zinc-800 px-4 py-1 text-sm text-zinc-300"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Right */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative rounded-2xl overflow-hidden border border-zinc-800"
//       >
//         <img
//           src="/images/rise-cover.png"
//           alt="Rise app preview"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>
//     </section>
//   );
// }
