import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValue } from "framer-motion";
import HangingIDBadge from "../../components/HangingIDBadge";
import SectionHeading from "../../components/Interface/Heading";

type Experience = {
  year: string;
  role: string;
  line1: string;
  line2: string;
  line3: string;
  text: string;
  image: string;
  tag1: string;
  tag2: string;
  tag3: string;
};

const experiences: Experience[] = [
  {
    year: "During Childhood",
    role: "The Boy Who Drew Too Much",
    line1: "I grew up as the kind of kid",
    line2: "not because anyone told me to, but because my brain refused to stay still.",
    line3: "I just liked making things look good & make sense",
    text: "who was always making something —",
    tag1: "Putting posters on my walls",
    tag2: "Building castle from cardboard",
    tag3: "Collecting Magzine cuttings for scrap book",
    image: "/Images/Journey1.png",
  },
  {
    year: "Right After School (2020)",
    role: "When Udit Met UX Design",
    line1: "I started as a developer in my Engineering College while pursuing B.tech in Computer Science. When Covid hit, while searching for 'Dalgona coffee' and 'Ramayan' on YouTube,",
    line2: "",
    line3: "Suddenly, everything I naturally cared about — behaviour, colours, patterns, decisions, emotions — had a home. So, I started learning",
    text: "I accidently discovered digital design in 2021.",
    tag1: "User Interface Design",
    tag2: "User behaviour & psychology",
    tag3: "Typography & Design Systems",
    image: "/Images/Journey2.png",
  },
  {
    year: "In College years (2022)",
    role: "Hum Clients Ke Hain Kaun?",
    line1: "What began as curiosity eventually became craft, and that craft slowly became a career where I genuinely feel like myself.",
    line2: "—confused founders, rushed timelines, unclear briefs, and high expectations.",
    line3: "I learned that good design wasn’t about making things pretty; it was about asking the right questions. This taught me to",
    text: "I started working with real clients",
    tag1: "Decoding vague ideas",
    tag2: "Designing with feedback",
    tag3: "Understanding effort vs impact",
    image: "/Images/Journey3.jpg",
  },
  {
    year: "My First Intenship (2023)",
    role: "Intern No. 1",
    line1: "My first full-time role wasn’t glamorous — but it was real. I learned how products are actually built: handoffs, trade-offs, feedback loops, and shipping under pressure.",
    line2: "I designed alongside engineers, founders, and PMs — not in isolation.",
    line3: "It taught me that Design wasn’t just about design thinking — it was also about execution. This is where I learned about",
    text: "This was my first internship.",
    tag1: "Speed",
    tag2: "Ownership & accountability",
    tag3: "Trade-off's & Constraints",
    image: "/Images/Journey4.png",
  },
  {
    year: "Where I Am Now (2025)",
    role: "Rise of the Design Manager",
    line1: "I moved from internships and freelance work into a full-time job at Krityam in 2024— initially wearing multiple hats across design and development. Over time, my role evolved.",
    line2: "leading UX end-to-end while collaborating closely with founders, engineers, and product teams.",
    line3: "Today, I focus on systems, decisions, and alignment — helping teams design with clarity and intention",
    text: "Today, I work as a Design Manager at Krityam,",
    tag1: "Still learning",
    tag2: "Want to switch back to core designing",
    tag3: "Looking for newer opportunities",
    image: "/Images/Journey5.png",
  },
];

const AboutExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // map progress [0..1] -> [0 .. experiences.length)
  const floatIndex = useTransform(scrollYProgress, [0, 1], [0, experiences.length]);
  // make a motion value we can subscribe to
  const snapped = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // subscribe to floatIndex changes and snap to integer indices (hard snap)
  useEffect(() => {
    const unsub = floatIndex.on("change", (v: number) => {
      // clamp and compute index
      const raw = Math.floor(v); // hard snap: floor
      const index = Math.max(0, Math.min(experiences.length - 1, raw));
      // update motion value and state only when it changes
      if (snapped.get() !== index) {
        snapped.set(index);
        setCurrentIndex(index);
      }
    });
    return () => unsub();
  }, [floatIndex, snapped]);

  // Section height: create enough scrollable space to allow snapping
  const sectionHeightVh = experiences.length * 100 + 100; // extra buffer
  // You can tweak the top sticky position (top offset) as needed
  return (
    <section ref={sectionRef} className="relative my-10 py-10">
      {/* Container is taller to allow segmented scroll */}
      <div style={{ height: `${sectionHeightVh}vh` }} className="relative mx-auto max-w-7xl px-5 sm:px-10">


        <div className="my-25">
          <SectionHeading
            prefix="Short version: I grew a lot."
            mainBefore=""
            mainAfter="that built me"
            highlightSvg="/Images/H3Bold.png"
            highlightAlt="designs"
            noteSvg="/Images/H3Note.png"
            punchline=""
            align="center"
          />
        </div>

        {/* <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-lime-400 border-2 border-emerald-400" /> My Work Experience
            </div>
        </div> */}

        <div className="flex flex-col mx-6 max-w-xl gap-6 items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-lime-400 border-2 border-emerald-400"/> My Work Experience
          </div>
        <p className="text-2xl font-google tracking-wide text-zinc-50">Hey, I'm <span className="text-lime-400"> Udit</span> 👋</p>
        <p className="text-lg font-google tracking-wide leading-relaxed text-zinc-400">In <span className="bg-blue-500/50 p-1 rounded-md text-zinc-50">3 years of design,</span> working closely with Founders & engineers, I have focused on only one thing: <span className="bg-emerald-400/50 p-1 rounded-md text-zinc-50">Understanding the “why”</span> behind the product, clarifying problems, designing UI that feels intuitive, reducing friction and shaping flows that help users make confident decisions. <span className="text-zinc-50">Here's my journey:</span></p>
        </div>


        {/* Sticky viewport area */}
        <div className="sticky top-20 flex items-start justify-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
              {/* Left: text column */}
              <div className="py-15">
                
                <div className="mt-6 space-y-4">
                  {/* Hard-snap content: only current item is visible */}
                  <div>
                    <p className="font-google font-semibold tracking-wide text-xl text-zinc-50">{experiences[currentIndex].year}:</p>
                    <h4 className="my-6 text-3xl font-caveat font-semibold text-zinc-100 tracking-wide">
                      "{experiences[currentIndex].role}"
                    </h4>
                    <p className="mt-2 text-lg font-google tracking-wide leading-relaxed text-zinc-400">{experiences[currentIndex].line1} <span className="text-lg font-google tracking-wide leading-relaxed text-zinc-50 bg-yellow-400/50 p-1 rounded-md">
                      {experiences[currentIndex].text}
                    </span> {experiences[currentIndex].line2}</p>
                    <p className="mt-5 text-lg font-google tracking-wide leading-relaxed text-zinc-50">{experiences[currentIndex].line3}:</p>
                    
                  </div>

                  {/* small CTA or badges */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-zinc-900 px-4 py-1 text-base text-zinc-300 border border-zinc-800 font-google">
                      {experiences[currentIndex].tag1}
                    </span>
                    <span className="rounded-full bg-zinc-900 px-4 py-1 text-base text-zinc-300 border border-zinc-800 font-google">
                      {experiences[currentIndex].tag2}
                    </span>
                    <span className="rounded-full bg-zinc-900 px-4 py-1 text-base text-zinc-300 border border-zinc-800 font-google">
                      {experiences[currentIndex].tag3}
                    </span>
                  </div>
                </div>

                {/* Progress hint (optional) */}
            <div className="mt-20 inline-flex items-center gap-3">
              {experiences.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-8 rounded-full ${i === currentIndex ? "bg-zinc-300" : "bg-zinc-700"}`}
                />
              ))}
            </div>
              </div>

              {/* Right: sticky badge (hanging) */}
              <div className="relative">
                <div className="sticky flex justify-end">
                  <HangingIDBadge
                    imageSrc={experiences[currentIndex].image}
                    caption={experiences[currentIndex].role}
                    swingKey={currentIndex} // triggers swing when index changes
                    width={480}
                    className=""
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperienceSection;





// import type React from "react";
// import { motion } from "framer-motion";
// import { Sparkles, PenTool, MonitorSmartphone } from "lucide-react";

// const MiniAbout: React.FC = () => {
//   return (
//     <section
//       id="about-mini"
//       className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 lg:px-10"
//     >
//       {/* subtle divider from previous section */}
//       <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent lg:inset-x-10" />

//       <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] md:items-start">
//         {/* Left: Copy / story */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="space-y-4"
//         >
//           <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
//             A bit about me
//           </p>

//           <h2 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
//             Product designer with a thing for stories and sharp visuals.
//           </h2>

//           <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
//             I design products, interfaces, and visuals that feel calm on the
//             surface but have a lot of thought packed underneath. My sweet spot
//             sits somewhere between product thinking, tidy UX, and illustration –
//             using visuals to make decisions feel obvious, not overwhelming.
//           </p>

//           <p className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
//             I enjoy working with teams who care about craft, clarity, and
//             numbers in equal measure – the ones who want their product to look
//             good, behave better, and actually move metrics.
//           </p>

//           <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-300">
//             <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1">
//               <MonitorSmartphone className="h-3.5 w-3.5" />
//               Product design · Web & mobile
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1">
//               <PenTool className="h-3.5 w-3.5" />
//               Illustration & visual systems
//             </span>
//           </div>
//         </motion.div>

//         {/* Right: mini profile / stats card */}
//         <motion.div
//           initial={{ opacity: 0, y: 32 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
//           className="relative"
//         >
//           <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.45),transparent_70%)] opacity-70" />

//           <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#050509]/95 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
//             <div className="mb-4 flex items-center justify-between gap-3">
//               <div>
//                 <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
//                   Currently
//                 </p>
//                 <p className="mt-1 text-sm font-medium text-zinc-100">
//                   Designing calm, story-led product experiences.
//                 </p>
//               </div>
//               <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80">
//                 <Sparkles className="h-4 w-4 text-zinc-100" />
//               </div>
//             </div>

//             <div className="grid grid-cols-3 gap-3 text-xs text-zinc-300">
//               <div>
//                 <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
//                   Experience
//                 </p>
//                 <p className="mt-1 text-sm font-semibold text-zinc-50">
//                   4+ yrs
//                 </p>
//               </div>
//               <div>
//                 <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
//                   Focus
//                 </p>
//                 <p className="mt-1 text-sm font-semibold text-zinc-50">
//                   Product & UX
//                 </p>
//               </div>
//               <div>
//                 <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
//                   Also
//                 </p>
//                 <p className="mt-1 text-sm font-semibold text-zinc-50">
//                   Illustration
//                 </p>
//               </div>
//             </div>

//             <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-xs text-zinc-300">
//               <p className="font-medium text-zinc-100">
//                 Where I fit best:
//               </p>
//               <p className="mt-1 text-[12px] text-zinc-400">
//                 Early-stage teams, product revamps, and projects where design
//                 has to pull its weight in both storytelling and performance.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MiniAbout;





// import type React from "react";
// import { motion } from "framer-motion";
// import { Search, Sparkles, PenTool, Rocket } from "lucide-react";

// const steps = [
//   {
//     id: "discover",
//     label: "Phase 01",
//     title: "Listen, audit, and untangle",
//     icon: Search,
//     summary:
//       "We unpack where the product is today – goals, constraints, and the messy reality behind them.",
//     details:
//       "I look at your product, data, and team context to understand what’s actually blocking progress, not just what’s written in the brief.",
//   },
//   {
//     id: "frame",
//     label: "Phase 02",
//     title: "Frame the problem clearly",
//     icon: Sparkles,
//     summary:
//       "We define sharp problem statements and success criteria so design doesn’t drift into vibes-only territory.",
//     details:
//       "Lightweight journeys, flows, and priorities – enough structure to move fast, not a 60-page UX report.",
//   },
//   {
//     id: "design",
//     label: "Phase 03",
//     title: "Design, iterate, pressure-test",
//     icon: PenTool,
//     summary:
//       "From low-fi flows to polished UI and illustration, we quickly cycle through options that users can actually react to.",
//     details:
//       "I share work-in-progress early, test assumptions, and keep things honest with clickable prototypes – not just pretty Figma frames.",
//   },
//   {
//     id: "ship",
//     label: "Phase 04",
//     title: "Prepare to ship (and learn)",
//     icon: Rocket,
//     summary:
//       "We stress-test edge cases, tidy handoff, and line up metrics so the launch isn’t just aesthetic – it’s measurable.",
//     details:
//       "Dev-ready specs, motion guidance where needed, and a clear view on what to watch after release.",
//   },
// ];

// const Process: React.FC = () => {
//   return (
//     <section
//       id="process"
//       className="relative mx-auto max-w-7xl px-5 pb-28 pt-12 lg:px-10"
//     >
//       {/* subtle top separator that visually links from case studies */}
//       <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent lg:inset-x-10" />

//       {/* Section header */}
//       <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//         <div>
//           <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
//             How I work
//           </p>
//           <h2 className="mt-2 text-2xl font-semibold text-zinc-50 sm:text-3xl">
//             A calm, collaborative process — start to ship.
//           </h2>
//         </div>
//         <p className="max-w-md text-sm text-zinc-400">
//           No 80-slide decks. Just a clear path from messy brief to a product
//           your users actually want to spend time with.
//         </p>
//       </div>

//       {/* Steps */}
//       <div className="relative">
//         {/* connecting line (desktop) */}
//         <div className="pointer-events-none absolute inset-x-6 top-10 hidden h-px bg-gradient-to-r from-zinc-700/60 via-zinc-600/60 to-zinc-700/60 md:block" />

//         <div className="grid gap-4 md:grid-cols-4">
//           {steps.map((step, index) => {
//             const Icon = step.icon;
//             return (
//               <motion.div
//                 key={step.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.08 }}
//                 viewport={{ once: true, amount: 0.4 }}
//                 className="group relative"
//               >
//                 {/* glow */}
//                 <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.26),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                 <div className="relative flex h-full flex-col gap-4 rounded-3xl border border-zinc-800 bg-[#040509]/95 px-4 py-5 shadow-[0_22px_60px_rgba(0,0,0,0.75)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-zinc-300/70 sm:px-5 sm:py-6">
//                   <div className="flex items-center justify-between gap-2">
//                     <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
//                       {step.label}
//                     </p>
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80">
//                       <Icon className="h-4 w-4 text-zinc-200" />
//                     </div>
//                   </div>

//                   <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
//                     {step.title}
//                   </h3>

//                   <p className="text-sm text-zinc-300">{step.summary}</p>

//                   <p className="mt-1 text-xs text-zinc-500">{step.details}</p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;
