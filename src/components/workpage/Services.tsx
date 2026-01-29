
import type React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../../components/Interface/Heading";
import Lottie from "lottie-react";
import { ArrowUpRight } from "lucide-react";


// TODO: replace these with your actual Lottie JSON files
import webLottie from "../../../public/animations/Website.json";
import graphicLottie from "../../../public/animations/Graphic.json";
import uiuxLottie from "../../../public/animations/UXD.json";
import motionLottie from "../../../public/animations/Micro-Interaction.json";

type Corner = "tl" | "tr" | "bl" | "br";

type Service = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    lottie: any;
    corner: Corner;
    href: string;
};

const services: Service[] = [
    {
        id: "web",
        title: "Website Design & Development",
        subtitle: "Digital stages that feel cinematic, not template-y.",
        description:
            "Landing pages, product sites, and mini-experiences that look premium and load fast — from layout to build.",
        lottie: webLottie,
        corner: "tl",
        href: "/services/web-design",
    },
    {
        id: "visual",
        title: "Graphic & Visual Design",
        subtitle: "Posters, visuals, and brand moments that stick.",
        description:
            "Campaign assets, social visuals, and brand pieces that feel cohesive with your product, not disconnected.",
        lottie: graphicLottie,
        corner: "tr",
        href: "/web-design-&-development",
    },
    {
        id: "uiux",
        title: "UI / UX Design",
        subtitle: "Calm, intuitive interfaces for real people.",
        description:
            "Flows, screens, and systems that make it easy for users to get what they came for — without fighting the UI.",
        lottie: uiuxLottie,
        corner: "bl",
        href: "/services/website-design",
    },
    {
        id: "motion",
        title: "Interaction & Motion Design",
        subtitle: "Micro-interactions that make the product feel alive.",
        description:
            "Subtle motion, transitions, and feedback that guide attention and make the experience feel thoughtfully crafted.",
        lottie: motionLottie,
        corner: "br",
        href: "/services/website-design",
    },
];

// Offsets for the "from corners" effect (desktop-ish values)
const cornerOffsets: Record<Corner, { x: number; y: number }> = {
    tl: { x: -460, y: -80 },
    tr: { x: 460, y: -80 },
    bl: { x: -460, y: 80 },
    br: { x: 460, y: 80 },
};

const Services: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // scrollYProgress: 0 when section just enters, 1 near the end
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative mx-auto max-w-7xl px-5 lg:px-10 pb-15 my-15"
        >

            {/* subtle divider from previous section */}
            {/* <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-zinc-700/60 to-transparent lg:inset-x-10" /> */}

            <div className="mb-25">
                <SectionHeading
                    prefix="for teams who care about thoughtful design"
                    mainBefore=""
                    mainAfter="that i do"
                    highlightSvg="/Images/H2Bold.png"
                    highlightAlt="designs"
                    noteSvg="/Images/H2Note.png"
                    punchline=""
                    align="center"
                />
            </div>


            {/* Cards grid (centered) */}
            <div className="relative z-10 py-10 overflow-hidden">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                    {services.map((service, index) => {
                        const offsets = cornerOffsets[service.corner];

                        // 0 → cards at corners, 1 → cards in grid center
                        const x = useTransform(
                            scrollYProgress,
                            [0, 0.3, 0.9],
                            [offsets.x, 0, 0]
                        );
                        const y = useTransform(
                            scrollYProgress,
                            [0, 0.3, 0.9],
                            [offsets.y, 0, 0]
                        );
                        const scale = useTransform(
                            scrollYProgress,
                            [0, 0, 0.9],
                            [0.9, 1, 1]
                        );
                        const opacity = useTransform(
                            scrollYProgress,
                            [0, 0.25, 0.35],
                            [1, 1, 1]
                        );

                        return (
                            <motion.article
                                key={service.id}
                                style={{ x, y, scale, opacity }}
                                transition={{ type: "spring", stiffness: 110, damping: 18 }}
                                className="relative"
                            >
                                <motion.a
                                    href={service.href}
                                    className="relative block overflow-hidden cursor-pointer rounded-2xl border border-zinc-800 bg-[#060608] hover:border-zinc-700 transition-transform"
                                    whileHover={{ scale: 1.02 }}
                                >

                                    {/* Lottie cover */}

                                    <Lottie
                                        animationData={service.lottie}
                                        loop
                                        autoplay
                                        className="h-full w-full object-cover"
                                    />

                                    {/* Content */}
                                    <div className="flex p-4.5 justify-between items-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_100%)]">
                                        
                                        <div>
                                            <h3 className="text-xl font-google font-semibold text-zinc-50 tracking-wide">
                                                {service.title}
                                            </h3>
                                            {/* <p className="mt-1 text-sm font-google text-zinc-300">
                                                {service.subtitle}
                                            </p> */}
                                        </div>

                                        <motion.div
                                            variants={{
                                                initial: { rotate: 0 },
                                                hover: { rotate: -45 },
                                            }}
                                            initial="initial"
                                            transition={{ duration: 0.25 }}
                                            className="p-2 rounded-full"
                                        >
                                            <ArrowUpRight className="w-6 h-6 text-zinc-300" />
                                        </motion.div>

                                    </div>

                                </motion.a>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;






// import type React from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import { ArrowUpRight } from "lucide-react";

// import webLottie from "../../../public/animations/Frontend.json";
// import graphicLottie from "../../../public/animations/Graphic.json";
// import uiuxLottie from "../../../public/animations/UXD.json";
// import motionLottie from "../../../public/animations/Content.json";

// type Service = {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   lottie: any;
//   href: string;
// };

// const services: Service[] = [
//   {
//     id: "web",
//     title: "Website Design & Development",
//     subtitle: "Digital stages that feel cinematic, not template-y.",
//     description:
//       "Landing pages, product sites, and mini-experiences that look premium and load fast — from layout to build.",
//     lottie: webLottie,
//     href: "/services/website-design",
//   },
//   {
//     id: "visual",
//     title: "Graphic & Visual Design",
//     subtitle: "Posters, visuals, and brand moments that stick.",
//     description:
//       "Campaign assets, social visuals, and brand pieces that feel cohesive with your product, not disconnected.",
//     lottie: graphicLottie,
//     href: "/services/visual-design",
//   },
//   {
//     id: "uiux",
//     title: "UI / UX Design",
//     subtitle: "Calm, intuitive interfaces for real people.",
//     description:
//       "Flows, screens, and systems that make it easy for users to get what they came for — without fighting the UI.",
//     lottie: uiuxLottie,
//     href: "/services/ui-ux-design",
//   },
//   {
//     id: "motion",
//     title: "Interaction & Motion Design",
//     subtitle: "Micro-interactions that make the product feel alive.",
//     description:
//       "Subtle motion, transitions, and feedback that guide attention and make the experience feel thoughtfully crafted.",
//     lottie: motionLottie,
//     href: "/services/motion-design",
//   },
// ];

// const Services: React.FC = () => {
//   return (
//     <section
//       id="services"
//       className="relative mx-auto max-w-7xl px-5 pb-28 pt-20 lg:px-10"
//     >
//       {/* Header */}
//       <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//         <div>
//           <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
//             Services
//           </p>
//           <h2 className="mt-2 text-2xl font-semibold text-zinc-50 sm:text-3xl md:text-4xl">
//             Ways I can plug into your product.
//           </h2>
//         </div>
//         <p className="max-w-md text-sm text-zinc-400 sm:text-[15px]">
//           You don&apos;t have to pick just one — most projects blend a couple of
//           these together depending on where the product is.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 mx-auto">
//         {services.map((service, index) => (
//           <motion.a
//             key={service.id}
//             href={service.href}
//             className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#050509]/95 shadow-[0_26px_80px_rgba(0,0,0,0.9)]"
//             initial={{ opacity: 0, y: 40, scale: 0.98 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: true, amount: 0.35 }}
//             transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
//             whileHover={{ y: -8 }}
//           >
//             {/* Glow on hover */}
//             <div className="pointer-events-none absolute inset-px rounded-[1.3rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.3),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//             {/* Lottie cover */}
//             <div className="relative h-40 w-full overflow-hidden rounded-t-2xl sm:h-44">
//               <Lottie
//                 animationData={service.lottie}
//                 loop
//                 autoplay
//                 className="h-full w-full object-cover"
//               />
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
//             </div>

//             {/* Content */}
//             <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
//               <div className="min-w-0">
//                 <h3 className="truncate text-lg font-semibold text-zinc-50 sm:text-xl">
//                   {service.title}
//                 </h3>
//                 <p className="mt-1 text-sm text-zinc-300 line-clamp-2">
//                   {service.subtitle}
//                 </p>
//               </div>

//               {/* Lucide arrow reacting to card hover */}
//               <motion.div
//                 variants={{
//                   initial: { rotate: 0 },
//                   hover: { rotate: -45 },
//                 }}
//                 initial="initial"
//                 animate="initial"
//                 whileHover="hover"
//                 className="shrink-0 rounded-full border border-zinc-700 bg-zinc-900/70 p-2"
//               >
//                 <ArrowUpRight className="h-5 w-5 text-zinc-200" />
//               </motion.div>
//             </div>

//             {/* Small description band at bottom */}
//             <div className="border-t border-zinc-800/80 px-5 py-3 text-xs text-zinc-400 sm:px-6">
//               {service.description}
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;




