import React, { useEffect, useId, useRef } from "react";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";

type Props = {
  imageSrc: string;
  swingKey?: string | number;
  width?: number;
  caption?: string;
  className?: string;
};

const HangingIDBadge: React.FC<Props> = ({
  imageSrc,
  swingKey,
  caption,
  width = 480,
  className = "",
}) => {
  const controls = useAnimation();
  const id = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(rootRef, { amount: 0.45 });

  const svgHeight = Math.round(width * 1.35);
  const cardX = 20;
  const cardY = 140;
  const cardW = width - cardX * 2;
  const cardH = svgHeight - 200;
  const photoX = cardX + 70;
  const photoY = cardY - 140;
  const photoW = cardW - 140;
  const photoH = Math.round(cardH * 1.54);
  const pivotX = width / 2;
  const pivotY = 120;

  // typed variants + easing as cubic-bezier array (valid Easing type)
  const variants: Variants = {
    out: {
      y: -150,
      rotate: 0,
      opacity: 0,
      transition: {
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1], // <- numeric cubic-bezier array fixes the TS error
      },
    },
    in: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  useEffect(() => {
    if (inView) controls.start("in");
    else controls.start("out");
  }, [inView, controls]);

  useEffect(() => {
    if (swingKey === undefined || swingKey === null) return;
    const swing = async () => {
      await controls.start({ rotate: -8, transition: { duration: 0.14, ease: [0.22, 1, 0.36, 1] } });
      await controls.start({ rotate: 6, transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] } });
      await controls.start({ rotate: -3.5, transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] } });
      await controls.start({ rotate: 0, transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] } });
    };
    swing();
  }, [swingKey, controls]);

  const clipId = `photoClip-${id}`;

  return (
    <div ref={rootRef} style={{ width }} className={className}>
      <svg
        viewBox={`0 0 ${width} ${svgHeight}`}
        width={width}
        height={svgHeight}
        style={{ display: "block", overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.g
          id="card"
          style={{ transformOrigin: `${pivotX}px ${pivotY}px` }}
          initial="out"
          animate={controls}
          variants={variants}
        >
          <image
            href="/Images/Card.svg"
            x={cardX}
            y={cardY}
            width={cardW}
            height={cardH}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          />
          <defs>
            <clipPath id={clipId}>
              <rect x={photoX} y={photoY} rx={12} ry={12} width={photoW} height={photoH} />
            </clipPath>
          </defs>
          <image
            href={imageSrc}
            x={photoX}
            y={photoY}
            width={photoW}
            height={photoH}
            preserveAspectRatio="xMidYCover"
            clipPath={`url(#${clipId})`}
            role="img"
          />

          {/* a small sticker / badge on the card (example) */}
          <g transform={`translate(${photoX + 6}, ${photoY + 560})`}>
            {/* <rect x={0} y={0} rx={8} ry={8} width={photoW-20} height={32} fill="#000"/> */}
            <text x={0} y={0} fontSize="28" fill="#fff" fontWeight={700} textAnchor="start" fontFamily="Caveat Variable, cursive">
             ~{caption}
            </text>
          </g>


        </motion.g>

        <image
          href="/Images/Rope.svg"
          x={pivotX - 105}
          y={-196}
          width={200}
          height={360}
          preserveAspectRatio="xMidYMax slice"
          style={{ pointerEvents: "none" }}
          aria-hidden="true"
        />
      </svg>
    </div>
  );
};

export default HangingIDBadge;






// import React, { useEffect, useId } from "react";
// import { motion, useAnimation } from "framer-motion";

// type Props = {
//   imageSrc: string; // photo to show inside card
//   role?: string;
//   year?: string;
//   swingKey?: string | number; // change this to trigger swing
//   width?: number; // width of the entire SVG area
//   className?: string;
// };

// const HangingIDBadge: React.FC<Props> = ({
//   imageSrc,
//   role,
//   year,
//   swingKey,
//   width = 480,
//   className = "",
// }) => {
//   const controls = useAnimation();
//   const id = useId();

//   // sizes
//   const svgHeight = Math.round(width * 1.35);
//   // these are tuned to match card-frame.svg design; adjust if your frame differs
//   const cardX = 20;
//   const cardY = 140;
//   const cardW = width - cardX * 2;
//   const cardH = svgHeight - 200;

//   // photo area inside the frame - tune these to match your card-frame.svg photo slot
//   // If your SVG frame has a different slot area, change these numbers to match visually.
//   const photoX = cardX + 70; // left inset of photo in the frame
//   const photoY = cardY - 140; // top inset of photo in the frame
//   const photoW = cardW - 140; // photo width inside frame
//   const photoH = Math.round(cardH * 1.54); // photo height inside frame (tweakable)

//   // pivot point where the rope visually connects to the card (must align with rope.svg)
//   // These should be tuned so the rope ring in rope.svg matches this pivot visually.
//   // pivotX is measured in the same coordinate space as the SVG (0..width)
//   const pivotX = width / 2; // center horizontal
//   const pivotY = 120; // y coordinate where rope ring is located

//   // animate in on mount
//   useEffect(() => {
//     controls.start("in");
//   }, [controls]);

//   // swing animation when swingKey changes
//   useEffect(() => {
//     if (swingKey === undefined || swingKey === null) return;
//     const swing = async () => {
//       // physics-like swing sequence
//       await controls.start({ rotate: -8, transition: { duration: 0.14, ease: "easeOut" } });
//       await controls.start({ rotate: 6, transition: { duration: 0.26, ease: "easeInOut" } });
//       await controls.start({ rotate: -3.5, transition: { duration: 0.16, ease: "easeOut" } });
//       await controls.start({ rotate: 0, transition: { duration: 0.12, ease: "easeOut" } });
//     };
//     swing();
//   }, [swingKey, controls]);

//   // unique clip path id for photo
//   const clipId = `photoClip-${id}`;

//   return (
//     <div style={{ width }} className={className}>
//       <svg
//         viewBox={`0 0 ${width} ${svgHeight}`}
//         width={width}
//         height={svgHeight}
//         style={{ display: "block", overflow: "visible" }}
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
        

//         {/* 2) Motion group for card (swing pivot must match rope ring coordinates) */}
//         <motion.g
//           id="card"
//           // IMPORTANT: transformOrigin must match the rope ring coordinates
//           style={{ transformOrigin: `${pivotX}px ${pivotY}px` }}
//           initial={{ y: -260, rotate: 0, opacity: 0 }}
//           animate={controls}
//           variants={{
//             in: {
//               y: 0,
//               opacity: 1,
//               transition: { type: "spring", stiffness: 90, damping: 16 },
//             },
//           }}
//         >
//           {/* subtle shadow under card */}
//           {/* <ellipse
//             cx={width / 2}
//             cy={svgHeight - 26}
//             rx={70}
//             ry={12}
//             fill="rgba(255,255,255,0.04)"
//             opacity="0.45"
//           /> */}

//           {/* Card frame external SVG */}
//           <image
//             href="/Images/Card.svg"
//             x={cardX}
//             y={cardY}
//             width={cardW}
//             height={cardH}
//             preserveAspectRatio="xMidYMid meet"
//             aria-hidden="true"
//           />

//           {/* Photo clip path: coordinates should match the slot inside your card-frame.svg */}
//           <defs>
//             <clipPath id={clipId}>
//               <rect
//                 x={photoX}
//                 y={photoY}
//                 rx={8}
//                 ry={8}
//                 width={photoW}
//                 height={photoH}
//               />
//             </clipPath>
//           </defs>

//           {/* Photo placed inside the clip path */}
//           <image
//             href={imageSrc}
//             x={photoX}
//             y={photoY}
//             width={photoW}
//             height={photoH}
//             preserveAspectRatio="xMidYCover"
//             clipPath={`url(#${clipId})`}
//             role="img"
            
//           />

//           {/* Role & year text positioned below the photo inside the card */}
//           {/* <g transform={`translate(${photoX}, ${photoY + photoH + 14})`}>
//             <text
//               x={0}
//               y={0}
//               fill="#0f172a"
//               fontSize="12"
//               fontFamily="Inter, Arial, sans-serif"
//               fontWeight={700}
//             >
//               {role ?? "Product Designer"}
//             </text>
//             {year && (
//               <text
//                 x={0}
//                 y={16}
//                 fill="#374151"
//                 fontSize="11"
//                 fontFamily="Inter, Arial, sans-serif"
//               >
//                 {year}
//               </text>
//             )}
//           </g> */}

//           {/* a small sticker / badge on the card (example) */}
//           {/* <g transform={`translate(${cardX + cardW - 92}, ${photoY + 8})`}>
//             <rect x={0} y={0} rx={8} ry={8} width={48} height={22} fill="#6d28d9" />
//             <text x={24} y={14} fontSize="11" fill="#fff" fontWeight={700} textAnchor="middle">
//               ME
//             </text>
//           </g> */}
//         </motion.g>

//         {/* 1) Static rope image (placed visually so its ring matches pivot) */}
//         {/* place rope image so that the ring/loop aligns at pivotX,pivotY */}
//         <image
//           href="/Images/Rope.svg"
//           x={pivotX - 105} // adjust horizontal alignment (half of rope image width)
//           y={-196}
//           width={200}
//           height={360} // ensure rope covers until pivot point
//           preserveAspectRatio="xMidYMax slice"
//         />

//       </svg>
//     </div>
//   );
// };

// export default HangingIDBadge;






// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// type Props = {
//   imageSrc: string;
//   role?: string;
//   year?: string;
//   swingKey?: string | number; // change this to trigger swing
//   width?: number;
//   className?: string;
// };

// const HangingIDBadge: React.FC<Props> = ({
//   imageSrc,
//   role,
//   year,
//   swingKey,
//   width = 320,
//   className = "",
// }) => {
//   const controls = useAnimation();
//   const svgHeight = Math.round(width * 1.35);
//   const photoHeight = Math.round((svgHeight - 240) * 0.62);

//   // drop-in on mount
//   useEffect(() => {
//     controls.start("in");
//   }, [controls]);

//   // swing when swingKey changes
//   useEffect(() => {
//     if (!swingKey) return;
//     const swing = async () => {
//       // small physics-y swing sequence
//       await controls.start({ rotate: -8, transition: { duration: 0.16, ease: "easeOut" } });
//       await controls.start({ rotate: 7, transition: { duration: 0.26, ease: "easeInOut" } });
//       await controls.start({ rotate: -3, transition: { duration: 0.18, ease: "easeOut" } });
//       await controls.start({ rotate: 0, transition: { duration: 0.12, ease: "easeOut" } });
//     };
//     swing();
//   }, [swingKey, controls]);

//   return (
//     <div style={{ width }} className={className}>
//       <svg
//         viewBox={`0 0 320 ${svgHeight}`}
//         width={width}
//         height={svgHeight}
//         style={{ display: "block", overflow: "visible" }}
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >


//       {/* Rope as external SVG image (fixed anchor) */}
// <image
//   href="/Images/Rope.svg"
//   x={width/2 - 40}   // adjust so rope anchor aligns visually
//   y={0}
//   width={80}
//   height={140}
//   preserveAspectRatio="xMidYMax slice" 
//   aria-hidden="true"
// />

// {/* Motion group for card (swing pivot must match rope's end point) */}
// <motion.g
//   id="card"
//   style={{ transformOrigin: `${width / 2}px 120px` }} // pivot = rope end
//   initial={{ y: -260, rotate: 0, opacity: 0 }}
//   animate={controls}
//   variants={{ in: { y: 0, opacity: 1, transition:{type:'spring',stiffness:90,damping:16}} }}
// >
//   {/* If your card art is an SVG file (frame + decorations), render it here */}
//   <image
//     href="/Images/Card.svg"
//     x={20}
//     y={140}
//     width={width - 40}
//     height={svgHeight - 200}
//     preserveAspectRatio="xMidYMid slice"
//   />

//   {/* Use a clipPath to mask the photo inside the card frame */}
//   <defs>
//     <clipPath id="photoClip">
//       {/* coordinates must match the photo slot in your card SVG */}
//       <rect x={36} y={156} rx={8} ry={8} width={width - 72} height={photoHeight} />
//     </clipPath>
//   </defs>

//   {/* the actual photo placed and clipped */}
//   <image
//     href={imageSrc}
//     x={36}
//     y={156}
//     width={width - 72}
//     height={photoHeight}
//     preserveAspectRatio="xMidYCover"
//     clipPath="url(#photoClip)"
//   />
// </motion.g>
//       </svg>
//     </div>
//   );
// };

// export default HangingIDBadge;
