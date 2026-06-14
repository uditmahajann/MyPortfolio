import SectionHeading from "../../components/Interface/Heading";

export default function WebsiteDesignShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-10 xl:px-0 py-25 mt-30">
      <div className="mb-10 sm:mb-25">
                <SectionHeading
                    prefix="conceptualized to guide attention and signal intent."
                    mainBefore=""
                    mainAfter="& Interaction Design"
                    highlightSvg="/Images/H7Bold.png"
                    highlightAlt="designs"
                    noteSvg="/Images/H7Note.png"
                    punchline=""
                    align="center"
                />
            </div>

      {/* Grid */}
      <div className="flex items-center justify-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-zinc-300">
                    <span className="h-2 w-2 rounded-full bg-lime-400 border-2 border-emerald-400" /> Portfolio under construction. Motion Design Projects Coming Soon...
                </div>
      </div>
    </section>
  );
}




// import { motion } from "framer-motion";
// import SectionHeading from "../../components/Interface/Heading";

// const projects = [
//   {
//     video: "/Videos/Motion1.mp4",
//   },
//   {
//     video: "/Videos/Motion1.mp4",
//   },
//   {
//     video: "/Videos/Motion1.mp4",
//   },
//   {
//     video: "/Videos/Motion1.mp4",
//   },
//   {
//     video: "/Videos/Motion1.mp4",
//   },
//   {
//     video: "/Videos/Motion1.mp4",
//   },
// ];

// export default function MotionDesignShowcase() {
//   return (
//     <section className="mx-auto max-w-7xl px-5 lg:px-10 xl:px-0 py-25 mt-30">
//       {/* Heading */}
//       <div className="mb-25">
//         <SectionHeading
//           prefix="conceptualized to guide attention and signal intent."
//           mainBefore=""
//           mainAfter="& Interaction Design"
//           highlightSvg="/Images/H7Bold.png"
//           highlightAlt="designs"
//           noteSvg="/Images/H7Note.png"
//           punchline=""
//           align="center"
//         />
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project, i) => (
//           <motion.article
//             key={i}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.08 }}
//             className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
//           >
//             {/* Video */}
//             <div className="relative aspect-video overflow-hidden">
//               <video
//                 src={project.video}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="h-full w-full object-fit transition-transform duration-500 group-hover:scale-[1.05]"
//               />
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </section>
//   );
// }
