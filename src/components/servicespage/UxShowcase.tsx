import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/Interface/Heading";

const projects = [
  {
    title: "Krityam Solutions (Dark Theme)",
    image: "/Images/KrityamSnap.png",
    live: "https://rise.app",
  },
  {
    title: "MCS-Kindergaten Theme Page",
    image: "/Images/KinderSnap.png",
    live: "https://health.ai",
  },
  {
    title: "Krityam Solutions (Light Theme)",
    image: "/Images/KLightSnap.png",
    live: "https://krityam.com",
  },
  {
    title: "RISE-Running Club Landing Page",
    image: "/Images/RiseSnap.png",
    live: "https://krityam.com",
  },
  {
    title: "Product Designer's Portfolio",
    image: "/Images/PortfolioSnap.png",
    live: "https://krityam.com",
  },
  
  {
    title: "Montessori Cambridge School",
    image: "/Images/OrospacesSnap.png",
    live: "https://krityam.com",
  },
   {
    title: "Orospaces Landing Page",
    image: "/Images/OrospacesSnap.png",
    live: "https://www.orospaces.com/",
  },
  {
    title: "Linnaea Ventures Website",
    image: "/Images/LinnaeaSnap.png",
    live: "https://www.linnaea.in/",
  },
   {
    title: "VS Pharmatech Website",
    image: "/Images/VspharmaSnap.png",
    live: "https://www.vspharmatech.com/",
  },
];

export default function WebsiteDesignShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-10 xl:px-0 py-25 mt-30">
      <div className="mb-25">
                <SectionHeading
                    prefix="grounded in behaviour, clarity, and real-world use."
                    mainBefore=""
                    mainAfter="Problems I've Solved"
                    highlightSvg="/Images/H6Bold.png"
                    highlightAlt="designs"
                    noteSvg="/Images/H6Note.png"
                    punchline=""
                    align="center"
                />
            </div>

      {/* Grid */}
      <div className="flex items-center justify-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-zinc-300">
                    <span className="h-2 w-2 rounded-full bg-lime-400 border-2 border-emerald-400" /> Portfolio under construction. Projects Coming Soon...
                </div>
      </div>
    </section>
  );
}





// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import SectionHeading from "../../components/Interface/Heading";

// const projects = [
//   {
//     title: "Krityam Solutions (Dark Theme)",
//     image: "/Images/KrityamSnap.png",
//     live: "https://rise.app",
//   },
//   {
//     title: "MCS-Kindergaten Theme Page",
//     image: "/Images/KinderSnap.png",
//     live: "https://health.ai",
//   },
//   {
//     title: "Krityam Solutions (Light Theme)",
//     image: "/Images/KLightSnap.png",
//     live: "https://krityam.com",
//   },
//   {
//     title: "RISE-Running Club Landing Page",
//     image: "/Images/RiseSnap.png",
//     live: "https://krityam.com",
//   },
//   {
//     title: "Product Designer's Portfolio",
//     image: "/Images/PortfolioSnap.png",
//     live: "https://krityam.com",
//   },
  
//   {
//     title: "Montessori Cambridge School",
//     image: "/Images/OrospacesSnap.png",
//     live: "https://krityam.com",
//   },
//    {
//     title: "Orospaces Landing Page",
//     image: "/Images/OrospacesSnap.png",
//     live: "https://www.orospaces.com/",
//   },
//   {
//     title: "Linnaea Ventures Website",
//     image: "/Images/LinnaeaSnap.png",
//     live: "https://www.linnaea.in/",
//   },
//    {
//     title: "VS Pharmatech Website",
//     image: "/Images/VspharmaSnap.png",
//     live: "https://www.vspharmatech.com/",
//   },
// ];

// export default function WebsiteDesignShowcase() {
//   return (
//     <section className="mx-auto max-w-7xl px-5 lg:px-10 xl:px-0 py-25 mt-30">
//       <div className="mb-25">
//                 <SectionHeading
//                     prefix="grounded in behaviour, clarity, and real-world use."
//                     mainBefore=""
//                     mainAfter="Problems I've Solved"
//                     highlightSvg="/Images/H6Bold.png"
//                     highlightAlt="designs"
//                     noteSvg="/Images/H6Note.png"
//                     punchline=""
//                     align="center"
//                 />
//             </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {projects.map((project, i) => (
//           <motion.article
//             key={project.title}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.08 }}
//             className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
//           >
//             {/* Image */}
//             <div className="relative overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
//               />
              
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <h3 className="text-xl font-google font-medium tracking-wide text-zinc-50">
//                 {project.title}
//               </h3>
              
//               {/* Actions */}
//               <div className="mt-2 flex items-center gap-5">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1 font-google text-sky-400 hover:text-sky-300 hover:underline transition"
//                 >
//                   View Live Project
//                   <ArrowUpRight className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </section>
//   );
// }
