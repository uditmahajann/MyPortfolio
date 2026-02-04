import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function EpicFooter() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // Parallax motion
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const farMountainsY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentY = useTransform(scrollYProgress, [0.3, 1], [80, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[120vh] overflow-hidden"
    >
      {/* ===== CLOUDS (FRONT LAYER) ===== */}
      <motion.img
        src="/Images/Clouds.png"
        alt=""
        style={{ y: cloudsY }}
        className="pointer-events-none absolute inset-x-0 top-0 z-30 w-full"
      />

      {/* ===== FAR MOUNTAINS ===== */}
      <motion.img
        src="/Images/MountainB.png"
        alt=""
        style={{ y: farMountainsY }}
        className="pointer-events-none absolute inset-x-0 bottom-25 z-20 w-full"
      />

      {/* ===== MAIN MOUNTAIN ===== */}
      <img
        src="/Images/MountainF.png"
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 w-full"
      />

      {/* ===== CONTENT BEHIND MOUNTAIN ===== */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-end pb-130 text-center text-white"
      >
        <h2 className="mb-4 text-4xl md:text-6xl font-serif leading-tight">
          Still scrolling?  
          <br/>
          Guess we should talk.
        </h2>

        <p className="mb-8 max-w-xl text-lg text-white/70">
          Got an idea, a problem, or just curiosity?
          Email me at:
        </p>

        {/* Email CTA */}
        <a
          href="mailto:uditmahajan95@gmail.com"
          className="mb-8 inline-block rounded-full border border-white/30 px-6 py-4 font-google font-semibold text-lg tracking-wide transition hover:bg-white hover:text-black"
        >
        uditmahajan95@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex gap-6 font-google text-white/70">
          <a href="https://www.linkedin.com/in/udit-mahajann/" className="hover:text-white">LinkedIn</a>
          <a href="https://www.instagram.com/uditmahajann/" className="hover:text-white">Instagram</a>
          <a href="https://drive.google.com/file/d/1JoUMy_nRR7a-aZ2GlaL9WirM-n-KStpv/view?usp=sharing" className="hover:text-white">Resume</a>
        </div>

        {/* <span className="mt-10 text-xs text-white/40">
          © {new Date().getFullYear()} — Designed & built with intention
        </span> */}
      </motion.div>
    </section>
  );
}






// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Mail } from "lucide-react";

// type Props = {
//   variant?: "warm" | "confident" | "playful";
//   className?: string;
// };

// const COPY: Record<string, { heading: string; sub: string; cta: string }> = {
//   warm: {
//     heading: "Let’s make something people actually love.",
//     sub: "I design calm, useful products that surprise people by being easy. Want to build something together?",
//     cta: "Get in touch",
//   },
//   confident: {
//     heading: "Ready to ship less noise, more clarity?",
//     sub: "I design product experiences that move people. Let’s talk.",
//     cta: "Work with me",
//   },
//   playful: {
//     heading: "Hire me to make your product feel like a hug.",
//     sub: "I’ll bring logic, craft, and a tiny bit of mischief.",
//     cta: "Say hello",
//   },
// };

// export default function CTASection({ variant = "warm", className = "" }: Props) {
//   const { heading, sub, cta } = COPY[variant];

//   return (
//     <section
//       id="cta"
//       className={`relative mx-auto max-w-7xl px-6 py-20 ${className}`}
//       aria-labelledby="cta-heading"
//     >
//       {/* decorative floating gradient blob — subtle */}
//       <motion.div
//         aria-hidden
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="pointer-events-none absolute -top-8 right-8 h-56 w-56 rounded-[40%] blur-3xl opacity-30"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(125,58,255,0.18) 0%, rgba(255,45,184,0.14) 60%)",
//           mixBlendMode: "screen",
//         }}
//       />

//       <div className="relative z-10 mx-auto max-w-3xl text-center">
//         {/* entrance animation for text */}
//         <motion.div
//           initial={{ y: 18, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-50 leading-tight">
//             {heading}
//           </h2>

//           <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-xl mx-auto">
//             {sub}
//           </p>
//         </motion.div>

//         {/* buttons row */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ delay: 0.12, duration: 0.5 }}
//           className="mt-8 flex items-center justify-center gap-4"
//         >
//           {/* Primary CTA */}
//           <a
//             href="mailto:you@yourmail.com"
//             className="group relative inline-flex items-center gap-3 rounded-full px-6 py-3 bg-linear-to-r from-[#7D3AFF] to-[#FF2DB8] text-white text-sm font-medium shadow-lg shadow-black/50 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-purple-600 transition-transform"
//             aria-label={`${cta} — open mail client`}
//           >
//             <span className="relative z-10">{cta}</span>
//             <motion.span
//               className="flex items-center justify-center rounded-full bg-white/10 p-2"
//               whileHover={{ rotate: 12, x: 6 }}
//               transition={{ type: "spring", stiffness: 300, damping: 18 }}
//             >
//               <ArrowUpRight className="h-4 w-4 text-white/90" />
//             </motion.span>
//             {/* faint animated ring behind button */}
//             <span
//               aria-hidden
//               className="absolute -inset-0.5 rounded-full opacity-0 transition-opacity group-hover:opacity-60"
//               style={{
//                 background:
//                   "radial-gradient(closest-side, rgba(125,58,255,0.08), transparent 60%)",
//                 filter: "blur(18px)",
//               }}
//             />
//           </a>

//           {/* Secondary CTA: resume */}
//           <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 rounded-full border border-white/8 px-4 py-2 text-sm text-zinc-200 hover:border-white/20 transition"
//           >
//             <Mail className="h-4 w-4 text-zinc-200" />
//             <span>Resume</span>
//           </a>
//         </motion.div>

//         {/* small microcopy */}
//         <p className="mt-6 text-xs text-zinc-500">
//           Available for freelance & full-time roles · Remote-friendly
//         </p>
//       </div>
//     </section>
//   );
// }





// import type React from "react";
// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Anirudh Sharma",
//     role: "Founder, Cosmo",
//     quote:
//       "Udit thinks like a product strategist and draws like an illustrator. He rewrote the emotional tone of our entire app — it finally feels like something Gen-Z would love.",
//   },
//   {
//     id: 2,
//     name: "Rohan Verma",
//     role: "Head of Design, RISE",
//     quote:
//       "He has this rare ability to turn complexity into personality. The running experience feels warm, human, and beautifully intentional because of him.",
//   },
//   {
//     id: 3,
//     name: "Mansi Kulkarni",
//     role: "Product Lead",
//     quote:
//       "Udit brings clarity to chaos. He doesn't just design screens — he understands people, and he designs with empathy and sharp thinking.",
//   },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 16 },
//   visible: { opacity: 1, y: 0 },
// };

// const Testimonials: React.FC = () => {
//   return (
//     <section className="relative border-b border-white/5 bg-slate-950 py-20 sm:py-28 overflow-hidden">
//       {/* subtle background aura */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
//         <div className="absolute bottom-[-15%] left-[20%] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
//       </div>

//       <motion.div
//         className="relative mx-auto max-w-5xl px-4 text-center lg:px-0"
//         variants={container}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {/* section heading */}
//         <motion.h2
//           variants={item}
//           className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl"
//         >
//           People I’ve worked with.
//         </motion.h2>

//         <motion.p
//           variants={item}
//           className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base"
//         >
//           Real words from founders, designers and product leads I've built with.
//         </motion.p>

//         {/* testimonial cards */}
//         <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((t) => (
//             <motion.div
//               key={t.id}
//               variants={item}
//               className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-left shadow-xl backdrop-blur-sm"
//             >
//               {/* subtle glow */}
//               <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40">
//                 <div className="absolute -inset-20 bg-linear-to-br from-sky-400/20 via-fuchsia-400/15 to-emerald-400/20 blur-2xl" />
//               </div>

//               <Quote className="relative mb-3 h-5 w-5 text-slate-400" />

//               <p className="relative text-sm leading-relaxed text-slate-200">
//                 “{t.quote}”
//               </p>

//               <div className="relative mt-6">
//                 <p className="text-sm font-semibold text-slate-50">
//                   {t.name}
//                 </p>
//                 <p className="text-xs text-slate-400">{t.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Testimonials;
