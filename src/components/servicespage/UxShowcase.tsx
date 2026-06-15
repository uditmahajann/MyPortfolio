import { motion } from "framer-motion";
import { Lock, ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/Interface/Heading";


type CaseStudy = {
  id: string;
  label: string;
  title: string;
  teaser: string;
  href: string;
  image: string;
  tags: string[];

  buttonText: string;
  isLocked?: boolean;
};

const caseStudies: CaseStudy[] = [
   {
    id: "cosmo",
    label: "COSMO AI · HEALTH & WELLNESS MARKETPLACE",
    title:
      "Reducing Friction in Personalized Health Shopping",
    teaser:
      "Transforming overwhelming nutritional data into personalized, actionable shopping loops for COSMO App, to eliminate decision paralysis in healthy shopping and maximize conversion.",
    href: "/work/cosmo",
    image: "/Banners/csbanner1.png",
    tags: ["Improved Healthy Product Ratio", "22% Reduction in PDP Drop-offs", "32% Increase in 'Smart Swap' Adoption"],
    buttonText: "View Case Study",
    isLocked: false,
  },
  {
    id: "yelona",
    label: "YELONA · INVENTORY MANAGEMENT WEB APP",
    title:
      "Driving Operational Velocity in Inventory Management",
    teaser:
      "Designed a unified IOMS workflow that mitigates human error and streamlines complex inventory reconciliation — making errors visible immediately and reducing manual cross-checking.",
    href: "/work/yelona",
    image: "/Banners/csbanner2.png",
    tags: ["Accelerated data entry by 27%", "Cut update errors by 48%", "100% Elimination of composite bundle blindspots."],
    buttonText: "View Case Study",
    isLocked: false,
  },
  {
    id: "atmoon",
    label: "ATMOON PE · FINTECH ADMIN PORTAL",
    title:
      "Balancing Speed & Scrutiny in Merchant Lifecycle Design",
    teaser:
      "Transformed a fragmented backend auditing process into a unified command center for managing high-volume leads and KYC verification, that empowers internal risk teams to audit profiles with zero cognitive drag.",
    href: "#",
    image: "/Banners/csbanner3.png",
    tags: ["Introduced field-level audit logs", "Automated field review loops", "Unified lead-to-merchant lifecycle"],
    buttonText: "Case Study: Coming Soon",
    isLocked: true,
  },
  {
    id: "medico",
    label: "MEDICO · DIGITAL HEALTHCARE APP",
    title:
      "Solving Healthcare Fragmentation: A Unified Ecosystem",
    teaser:
      "I designed Medico to solve the pervasive challenges of poor service discoverability and disorganized medical information, providing patients with a comprehensive, low-friction platform.",
    href: "https://www.behance.net/gallery/188921395/Medico-A-Healthcare-Mobile-App-(UX-Case-Study)",
    image: "/Banners/csbanner5.png",
    tags: ["Unified Patient Lifecycle", "Centralized Record Management", "Eliminated prolonged discoverability"],
    buttonText: "View Case Study",
    isLocked: false,
  },
  {
    id: "rise",
    label: "RISE · FITNESS & ACTIVITY TRACKING",
    title:
      "Boosted Monthly Active Runners with Loyalty Program",
    teaser:
      "Designed a loyalty and rewards flow for RISE App, that connects run consistency with visible progress and earned milestones—motivating runners to return weekly and stay active across the month instead of dropping off after short streaks.",
    href: "#",
    image: "/Images/Soon.jpg",
    tags: ["Increased MAU's by 31%", "Improved User-engagement", "Boosted Overall Retention"],
    buttonText: "Case Study: Coming Soon",
    isLocked: true,
  },
];

export default function UXDesignShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-10 xl:px-0 py-25 mt-30">
      {/* Heading */}
      <div className="mb-10 sm:mb-25">
        <SectionHeading
          prefix="grounded in behaviour, clarity, and real-world use."
          mainBefore=""
          mainAfter="Problems I’ve Solved"
          highlightSvg="/Images/H6Bold.png"
          highlightAlt="designs"
          noteSvg="/Images/H6Note.png"
          punchline=""
          align="center"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {caseStudies.map((cs, i) => (
          <motion.article
            key={cs.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-3xl overflow-hidden border border-zinc-900 bg-[#060608]/99 transition-transform duration-500 ease-out hover:-translate-y-1 hover:border-zinc-700"
          >
            <div className="pointer-events-none absolute inset-px rounded-[1.45rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_95%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative grid h-full p-6 gap-8">
              {/* Top visual */}
              <div className="relative h-56 md:h-120 overflow-hidden rounded-2xl border border-zinc-800">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tl from-black/75 via-transparent to-black/20" />
              </div>


              {/* Bottom content */}
              <div className="relative z-1 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <p className="text-xs font-semibold font-google uppercase tracking-[0.15em] text-zinc-400">
                    {cs.label}
                  </p>

                  <h2 className="text-2xl font-google tracking-wide font-semibold text-zinc-50 line-clamp-2">
                    {cs.title}
                  </h2>

                  <p className="max-w-xl font-google text-sm leading-relaxed text-zinc-300 sm:text-base line-clamp-5">
                    {cs.teaser}
                  </p>


                  <div className="mt-3 flex flex-wrap gap-2">
                    {cs.tags.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-zinc-900 px-4 py-1 text-sm text-zinc-300 border border-zinc-800 font-google"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col text-sm text-zinc-300">
                  <div className="">
                    <a
                      href={cs.href}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm sm:text-base font-google font-medium text-zinc-50 transition hover:border-zinc-300 hover:bg-zinc-900"
                    >
                      <span>{cs.buttonText}</span>

                      {cs.isLocked ? (
                        <Lock className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}










// import { motion } from "framer-motion";
// import { Lock } from "lucide-react";
// import SectionHeading from "../../components/Interface/Heading";

// const caseStudies = [
//   {
//     id: "yelona",
//     label: "Yelona's Inventory Management Web App",
//     title:
//       "Reducing Stock Errors in Day-to-Day Inventory Operations",
//     teaser:
//       "Designed a single, guided inventory workflow for YELONA's IMS, that brings stock updates, system validation, and reconciliation into one continuous flow — making errors visible immediately and reducing manual cross-checking.",
//     href: "#",
//     image: "/Images/Soon.jpg",
//     tags: ["Reduced Stock Update Errors by 48%", "Increased Speed by 27%", "Introduced Composite Set Inventory Model"],
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
//   },
//   {
//     id: "cosmo",
//     label: "Cosmo AI- AI Health & Wellness Marketplace",
//     title:
//       "Reduced Friction in Personalized Health Shopping",
//     teaser:
//       "Designed an AI-powered marketplace for COSMO App, that helps users understand products via health score, build habits & make confident wellness choices with personalized recommendations — without overwhelming them, otherwise leading to drop-offs & abandoned flows.",
//     href: "#",
//     image: "/Images/Soon.jpg",
//     tags: ["Improved Progression Rate by 28%", "Reduced Task-friction by 48%", "Personalization Logic Optimized"],
//   },
// ];

// export default function UXDesignShowcase() {
//   return (
//     <section className="mx-auto max-w-7xl px-5 lg:px-10 xl:px-0 py-25 mt-30">
//       {/* Heading */}
//       <div className="mb-25">
//         <SectionHeading
//           prefix="grounded in behaviour, clarity, and real-world use."
//           mainBefore=""
//           mainAfter="Problems I’ve Solved"
//           highlightSvg="/Images/H6Bold.png"
//           highlightAlt="designs"
//           noteSvg="/Images/H6Note.png"
//           punchline=""
//           align="center"
//         />
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         {caseStudies.map((cs, i) => (
//           <motion.article
//             key={cs.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.08 }}
//             className="group relative rounded-3xl overflow-hidden border border-zinc-900 bg-[#060608]/99 transition-transform duration-500 ease-out hover:-translate-y-1 hover:border-zinc-700"
//           >
//             <div className="pointer-events-none absolute inset-px rounded-[1.45rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_95%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
//             <div className="relative grid h-full p-6 gap-8">
//               {/* Top visual */}
//               <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-800">
//                   <img
//                     src={cs.image}
//                     alt={cs.title}
//                     className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
//                   />
                
//                 <div className="pointer-events-none absolute inset-0 bg-linear-to-tl from-black/75 via-transparent to-black/20" />
//               </div>


//               {/* Bottom content */}
//               <div className="relative z-1 flex flex-col justify-between gap-6">
//                 <div className="space-y-4">
//                   <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
//                     {cs.label}
//                   </p>

//                   <h2 className="text-2xl font-google tracking-wide font-semibold text-zinc-50 line-clamp-2">
//                     {cs.title}
//                   </h2>

//                   <p className="max-w-xl font-google text-sm leading-relaxed text-zinc-300 sm:text-base line-clamp-5">
//                     {cs.teaser}
//                   </p>


//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {cs.tags.map((m) => (
//                       <span
//                         key={m}
//                         className="rounded-full bg-zinc-900 px-4 py-1 text-sm text-zinc-300 border border-zinc-800 font-google"
//                       >
//                         {m}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex flex-col text-sm text-zinc-300">
//                   <div className="">
//                     <a
//                       href={cs.href}
//                       className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm sm:text-base font-google font-medium text-zinc-50 transition hover:border-zinc-300 hover:bg-zinc-900"
//                     >
//                       <span>Case Study: Coming Soon</span>
//                       <Lock className="h-4 w-4" />
//                     </a>
//                   </div>
//                 </div>

//               </div>

//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </section>
//   );
// }




