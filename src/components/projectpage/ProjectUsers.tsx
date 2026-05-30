import { motion } from "framer-motion";
import type React from "react";

type Persona = {
    image: string;
    title: string;
    description: string;
};

type Props = {
    personaHeading?: string;
    personaDescription?: string;
    detail?: string;
    note?: string;
    personas?: Persona[];
};

const CaseStudyPrologue: React.FC<Props> = ({
    personaHeading,
    personaDescription,

    detail,
    note,
    personas = [],
}) => {
    return (
        <section className="mx-auto max-w-6xl px-5 sm:px-10 py-25">
            {/* Persona Grid */}
            {personas.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-10"
                >
                    {/* Persona Intro */}
                    {(personaHeading || personaDescription) && (
                        <div className="mb-10">

                            {personaHeading && (
                                <h3 className="text-xl md:text-4xl font-caveat font-medium text-lime-300">
                                    {personaHeading}
                                </h3>
                            )}

                            {personaDescription && (
                                <p className="mt-3 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed">
                                    {personaDescription}
                                </p>
                            )}

                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {personas.map((persona, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">

                                    <img
                                        src={persona.image}
                                        alt={persona.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Halo / Fog Effect */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background:
                                                "radial-gradient(circle at center, transparent 40%, rgba(24,24,27,0.15) 60%, rgba(24,24,27,0.95) 100%)",
                                        }}
                                    />

                                    {/* Bottom Gradient */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-zinc-900 to-transparent" />
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-google font-semibold text-zinc-50">
                                        {persona.title}
                                    </h3>

                                    <p className="mt-3 text-zinc-400 text-base leading-relaxed">
                                        {persona.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {note && (
                        <p className="mt-4 text-sm text-zinc-500 text-right">
                            {note}
                        </p>
                    )}
                </motion.div>
            )}

            {/* Bottom Content */}
            {detail && (
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                        {detail}
                    </p>
                </motion.div>
            )}
        </section>
    );
};

export default CaseStudyPrologue;







// import { motion } from "framer-motion";
// import type React from "react";

// type Persona = {
//   image: string;
//   title: string;
//   description: string;
// };

// type Props = {
//   eyebrow?: string;
//   title: string;
//   description: string;
//   detail?: string;
//   note?: string;
//   personas?: Persona[];
// };

// const CaseStudyPrologue: React.FC<Props> = ({
//   eyebrow = "PROLOGUE",
//   title,
//   description,
//   detail,
//   note,
//   personas = [],
// }) => {
//   return (
//     <section className="mx-auto max-w-6xl px-5 sm:px-10 py-25">
      
//       {/* Top Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Eyebrow */}
//         <p className="text-base tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">
//           {eyebrow}
//         </p>

//         {/* Title */}
//         <h2 className="mt-4 text-3xl md:text-5xl font-google font-semibold text-zinc-50 leading-tight tracking-wide">
//           {title}
//         </h2>

//         {/* Description */}
//         <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
//           {description}
//         </p>
//       </motion.div>

//       {/* Persona Grid */}
//       {personas.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mt-14"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {personas.map((persona, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//                 className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300"
//               >
//                 {/* Image */}
//                 <div className="relative h-72 overflow-hidden">

//                   <img
//                     src={persona.image}
//                     alt={persona.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />

//                   {/* Halo / Fog Effect */}
//                   <div
//                     className="absolute inset-0 pointer-events-none"
//                     style={{
//                       background:
//                         "radial-gradient(circle at center, transparent 40%, rgba(24,24,27,0.15) 60%, rgba(24,24,27,0.95) 100%)",
//                     }}
//                   />

//                   {/* Bottom Gradient */}
//                   <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-zinc-900 to-transparent" />
//                 </div>

//                 {/* Card Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-google font-semibold text-zinc-50">
//                     {persona.title}
//                   </h3>

//                   <p className="mt-3 text-zinc-400 text-base leading-relaxed">
//                     {persona.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {note && (
//             <p className="mt-4 text-sm text-zinc-500 text-right">
//               {note}
//             </p>
//           )}
//         </motion.div>
//       )}

//       {/* Bottom Content */}
//       {detail && (
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <p className="mt-10 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
//             {detail}
//           </p>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default CaseStudyPrologue;