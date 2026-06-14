import React, { useRef } from "react";
import SectionHeading from "../../components/Interface/Heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

type CaseStudy = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  href: string;
  metrics: string[];
  buttonText: string;
  isLocked?: boolean;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cosmo",
    label: "COSMO AI · HEALTH & WELLNESS MARKETPLACE",
    title: "Reducing Friction in Personalized Health Shopping",
    description:
      "Transforming overwhelming nutritional data into personalized, actionable shopping loops for COSMO App, to eliminate decision paralysis in healthy shopping and maximize conversion.",
    image: "/Banners/csbanner1.png",
    href: "/work/cosmo",
    metrics: ["Improved Healthy Product Ratio", "22% Reduction in PDP Drop-offs", "32% Increase in 'Smart Swap' Adoption"],
    buttonText: "View Case Study",
  },

  {
    id: "yelona",
    label: "YELONA · INVENTORY MANAGEMENT WEB APP",
    title: "Driving Operational Velocity in Inventory Management",
    description:
      "Designed a unified IOMS workflow that mitigates human error and streamlines complex inventory reconciliation — making errors visible immediately and reducing manual cross-checking.",
    image: "/Banners/csbanner2.png",
    href: "/work/yelona",
    metrics: ["Accelerated data entry by 27%", "Cut update errors by 48%", "100% Elimination of composite bundle blindspots."],
    buttonText: "View Case Study",
  },

  {
    id: "atmoon",
    label: "ATMOON PE · FINTECH ADMIN PORTAL",
    title: "Balancing Speed & Scrutiny in Merchant Lifecycle Design",
    description:
      "Transformed a fragmented backend auditing process into a unified command center for managing high-volume leads and KYC verification, that empowers internal risk teams to audit profiles with zero cognitive drag.",
    image: "/Images/Soon.jpg",
    href: "#",
    metrics: ["Introduced field-level audit logs", "Automated field review loops", "Unified lead-to-merchant lifecycle"],
    buttonText: "Case Study: Coming Soon",
    isLocked: true,
  },

  {
    id: "rise",
    label: "RISE · FITNESS & ACTIVITY TRACKING",
    title: "Boosted Monthly Active Runners with Loyalty Program",
    description:
      "Designed a loyalty and rewards flow for RISE App, that connects run consistency with visible progress and earned milestones—motivating runners to return weekly and stay active across the month instead of dropping off after short streaks.",
    image: "/Images/Soon.jpg",
    href: "#",
    metrics: ["Increased MAU's by 31%", "Improved User-engagement", "Boosted Overall Retention"],
    buttonText: "Case Study: Coming Soon",
    isLocked: true,
  },
];

type CardProps = {
  study: CaseStudy;
};

function CaseStudyCard({ study }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.article
      ref={cardRef}
      style={{ scale, y }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-900 bg-[#060608] transition-transform duration-500 ease-out hover:-translate-y-1 hover:border-zinc-700"
    >
      <div className="pointer-events-none absolute inset-px rounded-[1.45rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_95%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)]" /> */}

      <div className="relative grid md:grid-cols-2 p-5 sm:p-6 md:p-8 xl:p-12 gap-6 xl:gap-8">
        {/* IMAGE FIRST ON MOBILE */}

        <div className="order-1 flex items-center justify-center md:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 w-full h-full bg-black/25 md:aspect-video">
            <img
              src={study.image}
              alt={study.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          </div>
        </div>

        {/* TEXT SECOND ON MOBILE */}

        <div className="order-2 flex flex-col justify-center md:order-1">
          <p className="text-xs sm:text-sm font-semibold font-google uppercase tracking-[0.15em] text-zinc-400 leading-relaxed">
            {study.label}
          </p>

          <h2 className="mt-8 text-2xl font-google tracking-wide font-semibold text-zinc-50 sm:text-[2rem] md:text-3xl xl:text-[2rem]">
            {study.title}
          </h2>

          <p className="mt-6 font-google text-sm leading-relaxed text-zinc-300 sm:text-base">
            {study.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs sm:text-sm text-zinc-300 border border-zinc-800 font-google"
              >
                {metric}
              </span>
            ))}
          </div>

          <div>
            <a
              href={study.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm sm:text-base font-google font-medium text-zinc-50 transition hover:border-zinc-300 hover:bg-zinc-900"
            >
              <span>{study.buttonText}</span>

              {study.isLocked ? (
                <Lock size={18} />
              ) : (
                <ArrowUpRight size={18} />
              )}
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative mx-auto max-w-7xl px-5 lg:px-10"
    >
      {/* SECTION HEADING */}
       <div className="-mt-10 sm:mt-0 mb-15 sm:my-20">
        <SectionHeading
          prefix="long before they looked good..."
          mainBefore=""
          mainAfter="that felt Good,"
          highlightSvg="/Images/H1Bold.png"
          highlightAlt="designs"
          noteSvg="/Images/H1Note.png"
          punchline=""
          align="center"
        />
      </div>

      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-lime-400 border-2 border-emerald-400" /> My Selected work
        </div>
      </div>


      {/* STACKING CARDS */}

      <div className="relative space-y-6 md:space-y-0">
        {CASE_STUDIES.map((study, index) => (
          <div
            key={study.id}
            className="
                  relative
                  mb-6
              
                  md:sticky
                  md:top-25
              
                  lg:top-32
                  xl:top-36
                "
            style={{
              zIndex: index + 1,
            }}
          >
            <CaseStudyCard study={study} />
          </div>
        ))}
      </div>
    </section>
  );
}










// import type React from "react";
// import { useRef } from "react";
// import SectionHeading from "../../components/Interface/Heading";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowUpRight, Lock } from "lucide-react";

// type CaseStudy = {
//   id: string;
//   label: string;
//   title: string;
//   teaser: string;
//   href: string;
//   image: string;
//   tags: string[];

//   buttonText: string;
//   isLocked?: boolean;
// };

// const CASE_STUDIES: CaseStudy[] = [
//   {
//     id: "cosmo",
//     label: "Cosmo AI- AI Health & Wellness Marketplace",
//     title:
//       "Reducing Friction in Personalized Health Shopping",
//     teaser:
//       "Transforming overwhelming nutritional data into personalized, actionable shopping loops for COSMO App, to eliminate decision paralysis in healthy shopping and maximize conversion.",
//     href: "work/cosmo",
//     image: "/Banners/csbanner1.png",
//     tags: ["Improved Healthy Product Ratio", "22% Reduction in PDP Drop-offs", "32% Increase in 'Smart Swap' Adoption"],
//     buttonText: "View Case Study",
//     isLocked: false,
//   },
//   {
//     id: "yelona",
//     label: "Yelona's Inventory Management Web App",
//     title:
//       "Driving Operational Velocity in Inventory Management",
//     teaser:
//       "Designed a unified IOMS workflow that mitigates human error and streamlines complex inventory reconciliation — making errors visible immediately and reducing manual cross-checking.",
//     href: "work/yelona",
//     image: "/Banners/csbanner2.png",
//     tags: ["Accelerated data entry by 27%", "Cut update errors by 48%", "100% Elimination of composite bundle blindspots."],
//     buttonText: "View Case Study",
//     isLocked: false,
//   },
//   {
//     id: "atmoon",
//     label: "AtMoon Pe's Fintech Admin Portal",
//     title:
//       "Balancing Speed & Scrutiny in Merchant Lifecycle Design",
//     teaser:
//       "Transformed a fragmented backend auditing process into a unified command center for managing high-volume leads and KYC verification, that empowers internal risk teams to audit profiles with zero cognitive drag.",
//     href: "#",
//     image: "/Images/Soon.jpg",
//     tags: ["Introduced field-level audit logs", "Automated field review loops", "Unified lead-to-merchant lifecycle"],
//     buttonText: "Case Study: Coming Soon",
//     isLocked: true,
//   },
//   {
//     id: "rise",
//     label: "RISE- Fitness & Activity Tracking",
//     title:
//       "Boosted Monthly Active Runners with Loyalty Program",
//     teaser:
//       "Designed a loyalty and rewards flow for RISE App, that connects run consistency with visible progress and earned milestones—motivating runners to return weekly and stay active across the month instead of dropping off after short streaks.",
//     href: "#",
//     image: "/Images/Soon.jpg",
//     tags: ["Increased MAU's by 31%", "Improved User-engagement", "Boosted Overall Retention"],
//     buttonText: "Case Study: Coming Soon",
//     isLocked: true,
//   },
  
// ];

// const CaseStudies: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const total = CASE_STUDIES.length;

//   return (
//     <section
//       id="case-studies"
//       ref={sectionRef}
//       className="relative mx-auto max-w-7xl px-5 lg:px-10"
//     >


//       <div className="mt-0 mb-15 sm:my-20 lg:my-30">
//         <SectionHeading
//           prefix="long before they looked good..."
//           mainBefore=""
//           mainAfter="that felt Good,"
//           highlightSvg="/Images/H1Bold.png"
//           highlightAlt="designs"
//           noteSvg="/Images/H1Note.png"
//           punchline=""
//           align="center"
//         />
//       </div>


//       <div className="flex items-center justify-between gap-4 mb-6 xl:ml-6">
//         <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-zinc-300">
//           <span className="h-2 w-2 rounded-full bg-lime-400 border-2 border-emerald-400" /> My Selected work
//         </div>
//       </div>

//       {/* Sticky stack container */}
//       <div className="relative h-[280vh]">
//         <div className="sticky top-25 lg:top-32 xl:top-36 flex h-[90vh] lg:h-[72vh] items-center justify-center">
//           <div className="relative h-full w-full max-w-6xl">
//             {CASE_STUDIES.map((cs, index) => {
//               const segmentStart = index / total;
//               const segmentEnd = (index + 1) / total;

//               let y;
//               let scale;

//               if (index === 0) {
//                 // First card is always in place
//                 y = useTransform(scrollYProgress, [0, 1], [0, 0]);
//                 scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
//               } else {
//                 // Later cards start off-screen below, then slide up and stay
//                 y = useTransform(
//                   scrollYProgress,
//                   [0, segmentStart, segmentEnd, 1],
//                   [600, 600, 0, 0]
//                 );
//                 scale = useTransform(
//                   scrollYProgress,
//                   [0, segmentStart, segmentEnd, 1],
//                   [0.96, 0.96, 1, 1]
//                 );
//               }

//               const opacity = 1; // no fading
//               const zIndex = index + 1; // later cards above earlier ones

//               return (
//                 <motion.article
//                   key={cs.id}
//                   style={{ y, scale, opacity, zIndex }}
//                   className="absolute inset-0"
//                 >
//                   <CaseStudyCard caseStudy={cs} />
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
//   return (
//     <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-900 bg-[#060608]/99 transition-transform duration-500 ease-out hover:-translate-y-1 hover:border-zinc-700">

//       <div className="pointer-events-none absolute inset-px rounded-[1.45rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_95%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

//       <div className="relative grid h-full p-5 sm:p-6 md:p-8 xl:p-12 gap-6 xl:gap-10 lg:grid-cols-[minmax(0,2.5fr)_minmax(0,2.25fr)] xl:grid-cols-[minmax(0,2.25fr)_minmax(0,2.5fr)]">
//         {/* Left: content */}
//         <div className="relative z-1 flex flex-col justify-between gap-0.5 lg:gap-6">
//           <div className="space-y-5 sm:space-y-6">
//             <p className="text-xs sm:text-sm font-semibold font-google uppercase tracking-[0.15em] text-zinc-400 leading-relaxed">
//               {caseStudy.label}
//             </p>

//             <h2 className="text-2xl font-google tracking-wide font-semibold text-zinc-50 sm:text-[2rem] md:text-3xl xl:text-[2rem]">
//               {caseStudy.title}
//             </h2>

//             <p className=" font-google text-sm leading-relaxed text-zinc-300 sm:text-base">
//               {caseStudy.teaser}
//             </p>

//             <div className="mt-3 flex flex-wrap gap-2 space-y-1">
//               {caseStudy.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="hidden lg:block rounded-full bg-zinc-900 px-4 py-1.5 text-xs sm:text-sm text-zinc-300 border border-zinc-800 font-google"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col text-sm text-zinc-300">
//             <div className="">
//               <a
//                 href={caseStudy.href}
//                 className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm lg:text-base font-google font-medium text-zinc-50 transition hover:border-zinc-300 hover:bg-zinc-900"
//               >
//                 <span>{caseStudy.buttonText}</span>

//                 {caseStudy.isLocked ? (
//                   <Lock className="h-4 w-4" />
//                 ) : (
//                   <ArrowUpRight className="h-4 w-4" />
//                 )}
//               </a>
//               {/* <a
//                 href={caseStudy.href}
//                 className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm sm:text-base font-google font-medium text-zinc-50 transition hover:border-zinc-300 hover:bg-zinc-900"
//               >
//                 <span>Case Study: Coming Soon</span>
//                 <Lock className="h-4 w-4" />
//               </a> */}
//             </div>
//           </div>
//         </div>

//         {/* Right: image */}
//         <div className="relative overflow-hidden rounded-2xl border border-zinc-800 h-full w-full">
//           <div className="absolute inset-0">
//             <img
//               src={caseStudy.image}
//               alt={caseStudy.title}
//               className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
//             />
//           </div>
//           {/* <div className="pointer-events-none absolute inset-0 bg-linear-to-tl from-black/75 via-transparent to-black/20" /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudies;
