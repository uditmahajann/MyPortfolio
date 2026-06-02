"use client";

import {
    motion,
    useScroll,
    AnimatePresence,
} from "framer-motion";
import {
    useRef,
    useState,
    useEffect,
} from "react";

type ComparisonStep = {
    leftImage: string;
    leftTitle: string;
    leftDescription: string;

    rightImage: string;
    rightTitle: string;
    rightDescription: string;
};

type Props = {
    flowHeading?: string;
    flowDescription?: string;
    steps: ComparisonStep[];
};

export default function CaseStudyConceptComparison({
    flowHeading,
    flowDescription,
    steps,
}: Props) {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        return scrollYProgress.on("change", (value) => {
            const index = Math.min(
                Math.floor(value * steps.length),
                steps.length - 1
            );

            setActiveStep(index);
        });
    }, [scrollYProgress, steps.length]);

    const current = steps[activeStep];

    return (
        <>
            {/* Intro */}
            <section className="mx-auto max-w-6xl px-5 sm:px-10 pb-20">
                {(flowHeading || flowDescription) && (
                    <div>
                        {flowHeading && (
                            <h3 className="text-xl md:text-4xl font-caveat font-medium text-lime-300">
                                {flowHeading}
                            </h3>
                        )}

                        {flowDescription && (
                            <p className="mt-3 max-w-3xl text-zinc-400 text-base md:text-lg leading-relaxed">
                                {flowDescription}
                            </p>
                        )}
                    </div>
                )}
            </section>

            {/* Sticky Comparison */}
            <section
                ref={sectionRef}
                className="relative mb-25"
                style={{
                    height: `${steps.length * 120}vh`,
                }}
            >
                <div className="sticky top-21 h-[calc(100vh-96px)] flex items-center">

                    <div className="mx-auto max-w-7xl w-full px-5 sm:px-10">

                        <div className="grid lg:grid-cols-2 gap-12">

                            {/* LEFT CONCEPT */}
                            <div>
                                <div className="flex flex-col items-center">

                                    {/* PHONE */}
                                    <div className="relative w-50 md:w-62">

                                        <div className="relative rounded-[42px] border-8 border-zinc-700 bg-black overflow-hidden shadow-2xl">

                                            {/* Dynamic Island */}
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

                                            {/* SCREEN */}
                                            <img
                                                src={current.leftImage}
                                                alt={current.leftTitle}
                                                className="w-full"
                                            />
                                        </div>

                                        {/* Side Buttons */}
                                        <div className="absolute -left-1 top-24 w-1 h-12 bg-zinc-700 rounded-full" />
                                        <div className="absolute -left-1 top-40 w-1 h-10 bg-zinc-700 rounded-full" />
                                        <div className="absolute -right-1 top-32 w-1 h-16 bg-zinc-700 rounded-full" />
                                    </div>

                                    {/* Content */}
                                    <div className="mt-5 text-center max-w-md">
                                        <div className="flex items-center justify-center gap-4">
                                            <span className="text-sm uppercase font-google font-bold tracking-[0.15em] text-white">
                                                Flow A
                                            </span>

                                            <div className="h-4 w-0.5 bg-zinc-500" />

                                            <h4 className="text-lg font-google font-medium text-lime-300">
                                                {current.leftTitle}
                                            </h4>
                                        </div>

                                        <p className="mt-1 text-zinc-400 text-xl leading-normal">
                                            {current.leftDescription}
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT CONCEPT */}
                            <div>
                                <div className="flex flex-col items-center">

                                    {/* PHONE */}
                                    <div className="relative w-50 md:w-62">

                                        <div className="relative rounded-[42px] border-8 border-zinc-700 bg-black overflow-hidden shadow-2xl">

                                            {/* Dynamic Island */}
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

                                            {/* SCREEN */}
                                            <img
                                                src={current.rightImage}
                                                alt={current.rightTitle}
                                                className="w-full"
                                            />
                                        </div>

                                        {/* Side Buttons */}
                                        <div className="absolute -left-1 top-24 w-1 h-12 bg-zinc-700 rounded-full" />
                                        <div className="absolute -left-1 top-40 w-1 h-10 bg-zinc-700 rounded-full" />
                                        <div className="absolute -right-1 top-32 w-1 h-16 bg-zinc-700 rounded-full" />
                                    </div>

                                    {/* Content */}
                                    <div className="mt-5 text-center max-w-md">
                                        <div className="flex items-center justify-center gap-4">
                                            <span className="text-sm uppercase font-google font-bold tracking-[0.15em] text-white">
                                                Flow B
                                            </span>

                                            <div className="h-4 w-0.5 bg-zinc-500" />

                                            <h4 className="text-lg font-google font-medium text-lime-300">
                                                {current.rightTitle}
                                            </h4>
                                        </div>

                                        <p className="mt-1 text-zinc-400 text-xl leading-normal">
                                            {current.rightDescription}
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}








// "use client";

// import { motion, useScroll } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// type ComparisonStep = {
//   leftImage: string;
//   leftTitle: string;
//   leftDescription: string;

//   rightImage: string;
//   rightTitle: string;
//   rightDescription: string;
// };

// type Props = {
//   flowHeading?: string;
//   flowDescription?: string;
//   steps: ComparisonStep[];
// };

// export default function CaseStudyConceptComparison({
//   flowHeading,
//   flowDescription,
//   steps,
// }: Props) {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const [activeStep, setActiveStep] = useState(0);

//   useEffect(() => {
//     return scrollYProgress.on("change", (value) => {
//       const index = Math.min(
//         Math.floor(value * steps.length),
//         steps.length - 1
//       );

//       setActiveStep(index);
//     });
//   }, [scrollYProgress, steps.length]);

//   const current = steps[activeStep];

//   return (
//     <>
//       {/* Intro */}
//       <section className="mx-auto max-w-6xl px-5 sm:px-10 pb-20">
//         {(flowHeading || flowDescription) && (
//           <div>
//             {flowHeading && (
//               <h3 className="text-xl md:text-4xl font-caveat font-medium text-lime-300">
//                 {flowHeading}
//               </h3>
//             )}

//             {flowDescription && (
//               <p className="mt-3 max-w-3xl text-zinc-400 text-base md:text-lg leading-relaxed">
//                 {flowDescription}
//               </p>
//             )}
//           </div>
//         )}
//       </section>

//       {/* Sticky Comparison */}
//       <section
//         ref={sectionRef}
//         className="relative"
//         style={{
//           height: `${steps.length * 120}vh`,
//         }}
//       >
//         <div className="sticky top-21 h-[calc(100vh-96px)] flex items-center">

//           <div className="mx-auto max-w-7xl w-full px-5 sm:px-10">

//             <div className="grid lg:grid-cols-2 gap-12">

//               {/* LEFT CONCEPT */}
//               <motion.div
//                 key={`left-${activeStep}`}
//                 initial={{ opacity: 0, y: 0 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <div className="flex flex-col items-center">

//                   <img
//                     src={current.leftImage}
//                     alt={current.leftTitle}
//                     className="w-50 md:w-62"
//                   />

//                   <div className="mt-5 text-center max-w-md">
//                     <div className="flex items-center justify-center gap-4">
//                       <span className="text-sm uppercase font-google font-bold tracking-[0.15em] text-white">
//                         Flow A
//                       </span>
                      
//                       <div className="h-4 w-0.5 bg-zinc-500" />
                      
//                       <h4 className="text-lg font-google font-medium text-lime-300">
//                         {current.leftTitle}
//                       </h4>
//                     </div>

//                     <p className="mt-2 text-zinc-400 text-xl leading-normal">
//                       {current.leftDescription}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* RIGHT CONCEPT */}
//               <motion.div
//                 key={`right-${activeStep}`}
//                 initial={{ opacity: 0, y: 0 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <div className="flex flex-col items-center">

//                   <img
//                     src={current.rightImage}
//                     alt={current.rightTitle}
//                     className="w-50 md:w-62"
//                   />

//                   <div className="mt-5 text-center max-w-md">
//                     <div className="flex items-center justify-center gap-4">
//                       <span className="text-sm uppercase font-google font-bold tracking-[0.15em] text-white">
//                         Flow B
//                       </span>
                      
//                       <div className="h-4 w-0.5 bg-zinc-500" />
                      
//                       <h4 className="text-lg font-google font-medium text-lime-300">
//                         {current.rightTitle}
//                       </h4>
//                     </div>

//                     <p className="mt-2 text-zinc-400 text-xl leading-normal">
//                       {current.rightDescription}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }