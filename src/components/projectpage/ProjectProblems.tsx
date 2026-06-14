import { motion } from "framer-motion";

type Problem = {
  number?: string;
  before: string;
  highlight: string;
  after: string;
  highlightColor?: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  problems: Problem[];
};

export default function ProblemGrid({
  eyebrow,
  title,
  description,
  problems,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10 py-10 sm:py-25">

      {/* Top Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow && (
          <p className="text-base tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">
            {eyebrow}
          </p>
        )}

        <h2 className="mt-4 text-3xl md:text-5xl font-google font-semibold text-zinc-50 leading-tight tracking-wide">
          {title}
        </h2>

        {description && (
          <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
      </motion.div>

      {/* Problems Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-8 md:p-10"
          >
            {/* Number */}
            <p className="pt-1 text-2xl sm:text-3xl md:text-3xl font-google font-semibold text-zinc-300 tracking-wide">
              {problem.number}
            </p>

            {/* Text */}
            <p className="mt-6 text-zinc-300 text-lg md:text-xl font-google leading-relaxed whitespace-pre-line">
              {problem.before}{" "}
              <span
                className="font-medium"
                style={{
                  color: problem.highlightColor || "#bef264",
                }}
              >
                {problem.highlight}
              </span>{" "}
              {problem.after}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Content */}
      {/* <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {detail}
        </p>
      </motion.div> */}
    </section>
  );
}

















// import { motion } from "framer-motion";

// type Problem = {
//   number: string;
//   before: string;
//   highlight: string;
//   after: string;
// };

// type Props = {
//   eyebrow?: string;
//   title: string;
//   description?: string;
//   problems: Problem[];
// };

// export default function ProblemGrid({
//   eyebrow,
//   title,
//   description,
//   problems,
// }: Props) {
//   return (
//     <section className="mx-auto max-w-6xl px-5 sm:px-10 py-25">

//       {/* Top Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         {eyebrow && (
//           <p className="text-base tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">
//             {eyebrow}
//           </p>
//         )}

//         <h2 className="mt-4 text-3xl md:text-5xl font-google font-semibold text-zinc-50 leading-tight tracking-wide">
//           {title}
//         </h2>

//         {description && (
//           <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
//             {description}
//           </p>
//         )}
//       </motion.div>

//       {/* Problems Grid */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {problems.map((problem, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-8 md:p-10"
//           >
//             {/* Number */}
//             {/* <p className="text-3xl md:text-4xl lg:text-6xl font-caveat font-black text-zinc-300">
//               {problem.number}
//             </p> */}

//             {/* Text */}
//             <p className="mt-6 text-zinc-300 text-lg md:text-xl font-google leading-relaxed whitespace-pre-line">
//               {problem.before}{" "}
//               <span className="text-lime-300 font-medium">
//                 {problem.highlight}
//               </span>{" "}
//               {problem.after}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom Content */}
//       {/* <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <p className="text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
//           {detail}
//         </p>
//       </motion.div> */}
//     </section>
//   );
// }