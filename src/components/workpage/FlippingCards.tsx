// components/FlippingCards.tsx
import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";

type CardItem = {
  id: string;
  frontSrc: string;
  backSrc: string;
  hoverText: string; // unique pill text per card
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

/**
 * itemVariants is a function-style variants object:
 * it accepts "custom" (the card index) so each card can animate to a unique offset.
 */
const itemVariants = (index: number): Variants => {
  // tweak these arrays to change the fan direction and spread
  const offsetsX = [120, 50, -50, -120]; // final x offset for each card (px)
  const offsetsY = [20, -60, -60, 20]; // final y offset for each card (px)
  const rotates = [-30, -20, 20, 30]; // slight rotation for fan effect

  return {
    hidden: {
      // start overlapped at center (no offset)
      x: offsetsX[index] ?? 0,
      y: offsetsY[index] ?? 0,
      rotate: rotates[index] ?? 0,
      opacity: 1,
      scale: 0.92,
    },
    show: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
    exit: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 0,
      scale: 0.92,
      transition: { duration: 0.18 },
    },
  };
};

export default function FlippingCards({ cards }: { cards: CardItem[] }) {
  // cursor = pill state that follows mouse and shows the card-specific message
  const [cursor, setCursor] = useState<{
    visible: boolean;
    text: string;
    x: number;
    y: number;
  }>({ visible: false, text: "", x: 0, y: 0 });

  return (
    <section
      id="play-cards"
      className="relative mx-auto max-w-7xl px-5 lg:px-10 -top-10"
      // track mouse globally inside the section so the pill can follow
      onMouseMove={(e) =>
        setCursor((c) => ({
          ...c,
          x: e.clientX,
          y: e.clientY,
        }))
      }
      // don't hide the default cursor — we want the native pointer to remain
    >
      {/* Floating Cursor Pill (follows mouse, but DOES NOT hide native cursor) */}
      {/* pointer-events none ensures it doesn't block the real cursor or clicks */}
      {cursor.visible && (
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed pointer-events-none z-9999 rounded-full bg-white text-black text-sm font-medium px-4 py-2 shadow-lg"
          style={{
            top: cursor.y + 18,
            left: cursor.x + 18,
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            // small blur/glow optional:
            boxShadow: "0 20px 50px rgba(0,0,0,0.45), 0 6px 18px rgba(0,0,0,0.35)",
          }}
        >
          {cursor.text}
        </motion.div>
      )}

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.8 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl items-center justify-center"
      >
        <div className="relative flex items-center justify-center">
          {/* center stack container used for fan-out visuals */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
            // keep it visible while animation fans out
          >
            {cards.map((c, i) => (
              <FlipCard
                key={c.id}
                item={c}
                index={i}
                setCursor={setCursor}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------
   FlipCard (single card)
   - Fires setCursor on hover enter/leave
   - Uses motion.animate rotateY to flip
   ------------------------- */

function FlipCard({
  item,
  index,
  setCursor,
}: {
  item: CardItem;
  index: number;
  setCursor: React.Dispatch<
    React.SetStateAction<{ visible: boolean; text: string; x: number; y: number }>
  >;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      variants={itemVariants(index)}
      // custom not needed now; we used index to create a variants closure
      className="relative"
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={() => setFlipped((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((v) => !v);
          }
        }}
        onMouseEnter={(ev) =>
          setCursor({
            visible: true,
            text: item.hoverText,
            // initial x,y — will be updated by parent onMouseMove as well
            x: (ev as React.MouseEvent).clientX,
            y: (ev as React.MouseEvent).clientY,
          })
        }
        onMouseLeave={() =>
          setCursor((c) => ({ ...c, visible: false }))
        }
        whileHover={{ scale: 1.03 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1200,
          width: 240,
          height: 340,
          cursor: "pointer", // show pointer to indicate clickability
        }}
        className="mx-auto"
      >
        {/* front face */}
        <div
          aria-hidden={flipped}
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            borderRadius: 14,
            overflow: "hidden",
            zIndex: 2,
            background: "#0b0b0b",
          }}
        >
          <img
            src={item.frontSrc}
            alt={item.frontSrc}
            className="w-full h-full object-cover"
          />
        </div>

        {/* back face */}
        <div
          aria-hidden={!flipped}
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 14,
            overflow: "hidden",
            zIndex: 1,
            background: "#0b0b0b",
          }}
        >
          <img
            src={item.backSrc}
            alt={item.backSrc}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}






// import type React from "react";
// import { motion } from "framer-motion";
// import { LayoutDashboard, PenTool, Sparkles } from "lucide-react";

// const services = [
//   {
//     id: 1,
//     icon: <LayoutDashboard className="h-5 w-5 text-sky-300" />,
//     name: "Product & UX Design",
//     tagline: "From fuzzy idea to shippable product.",
//     description:
//       "I partner with founders and product teams to shape end-to-end experiences — from discovery and flows to high-fidelity UI ready for engineering.",
//     points: [
//       "Product & UX strategy",
//       "User journeys & flows",
//       "High-fidelity UI & design systems",
//       "Design handoff & collaboration",
//     ],
//     idealFor: "Early-stage products, redesigns, new feature bets.",
//   },
//   {
//     id: 2,
//     icon: <PenTool className="h-5 w-5 text-fuchsia-300" />,
//     name: "Illustration & Visual Worlds",
//     tagline: "Give your product a visual voice.",
//     description:
//       "I create illustration systems, characters and scenes that weave through your product — from onboarding to empty states and marketing.",
//     points: [
//       "Illustration systems & styles",
//       "Onboarding & narrative moments",
//       "Spot illustrations & scenes",
//       "Brand-aligned visual direction",
//     ],
//     idealFor: "Products that want to feel more human, playful or expressive.",
//   },
//   {
//     id: 3,
//     icon: <Sparkles className="h-5 w-5 text-emerald-300" />,
//     name: "Product Stories & Case Studies",
//     tagline: "Turn your work into a narrative.",
//     description:
//       "I help founders and teams articulate the story behind a product — for decks, landing pages, portfolios and launches.",
//     points: [
//       "Structure & storytelling",
//       "Visual narrative & key frames",
//       "Case-study layouts",
//       "Design for decks & landing pages",
//     ],
//     idealFor: "Teams preparing for launches, hiring, or fund-raising.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: { opacity: 1, y: 0 },
// };

// const Services: React.FC = () => {
//   return (
//     <section className="relative border-b border-white/5 bg-slate-950 py-20 sm:py-24">
//       {/* soft background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-[5%] left-[15%] h-72 w-72 rounded-full bg-sky-500/20 blur-[120px]" />
//         <div className="absolute bottom-[0%] right-[10%] h-80 w-80 rounded-full bg-fuchsia-500/18 blur-[130px]" />
//       </div>

//       <div className="relative mx-auto max-w-6xl px-4 lg:px-0">
//         {/* heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
//             Services
//           </p>
//           <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
//             How we can work together.
//           </h2>
//           <p className="mt-3 text-sm text-slate-400 sm:text-base">
//             Whether you need a product shaped from scratch, a visual world for
//             your app, or a story for what you’ve already built — this is where
//             I usually come in.
//           </p>
//         </motion.div>

//         {/* cards */}
//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {services.map((service, index) => (
//             <motion.article
//               key={service.id}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.5, delay: index * 0.08 }}
//               className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm"
//             >
//               {/* glow */}
//               <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40">
//                 <div className="absolute -inset-20 bg-linear-to-br from-sky-400/25 via-fuchsia-400/20 to-emerald-400/20 blur-2xl" />
//               </div>

//               <div className="relative flex h-full flex-col">
//                 <div className="flex items-center gap-2">
//                   {service.icon}
//                   <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
//                     {service.name}
//                   </h3>
//                 </div>

//                 <p className="mt-2 text-xs font-medium text-slate-300 sm:text-[13px]">
//                   {service.tagline}
//                 </p>

//                 <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
//                   {service.description}
//                 </p>

//                 <ul className="mt-4 space-y-1 text-xs text-slate-300 sm:text-[13px]">
//                   {service.points.map((point) => (
//                     <li key={point} className="flex gap-2">
//                       <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-slate-400" />
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <p className="mt-4 text-[11px] text-slate-500 sm:text-xs">
//                   <span className="text-slate-300">Good fit for:</span>{" "}
//                   {service.idealFor}
//                 </p>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
