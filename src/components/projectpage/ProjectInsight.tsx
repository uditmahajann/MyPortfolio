import { useEffect, useState } from "react";

type Insight = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  insights: Insight[];
};

export default function ProblemInsights({ insights }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".insight-block");

      let current = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.4) {
          current = index;
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-5 sm:px-10 py-10 sm:py-20">
      {/* ======================================== */}
      {/* MOBILE VERSION */}
      {/* ======================================== */}

      <div className="lg:hidden space-y-8">
        {insights.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
          >
            {/* IMAGE */}

            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-4/3 object-cover"
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 35%, rgba(24,24,27,0.15) 60%, rgba(24,24,27,0.85) 100%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-zinc-950 to-transparent" />
            </div>

            {/* CONTENT */}

            <div className="p-5">
              <h3 className="text-2xl font-semibold text-zinc-50 font-google leading-tight tracking-wide">
                {item.title}
              </h3>

              <p className="mt-4 text-base font-google text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ======================================== */}
      {/* DESKTOP VERSION */}
      {/* ======================================== */}

      <div className="hidden lg:grid lg:grid-cols-2 gap-25">
        {/* LEFT SIDE (SCROLLING TEXT) */}

        <div className="relative">
          {insights.map((item, index) => (
            <div
              key={index}
              className="insight-block min-h-[50vh] flex items-center"
            >
              <div
                className={`transition-all duration-500 ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-10"
                }`}
              >
                <h3 className="text-3xl md:text-5xl font-semibold text-zinc-50 font-google leading-tight tracking-wide">
                  {item.title}
                </h3>

                <p className="mt-6 text-zinc-400 font-google text-base md:text-lg max-w-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (STICKY IMAGE) */}

        <div className="relative">
          <div className="sticky top-45">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative">
              <img
                key={activeIndex}
                src={insights[activeIndex].image}
                alt="insight visual"
                className="w-full h-[350px] md:h-[450px] object-cover transition-all duration-500"
              />

              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 40%, rgba(24,24,27,0.15) 60%, rgba(24,24,27,0.95) 100%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-zinc-900 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






// import { useEffect, useState } from "react";

// type Insight = {
//   title: string;
//   description: string;
//   image: string;
// };

// type Props = {
//   insights: Insight[];
// };

// export default function ProblemInsights({ insights }: Props) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll(".insight-block");

//       let current = 0;

//       sections.forEach((section, index) => {
//         const rect = section.getBoundingClientRect();

//         if (rect.top <= window.innerHeight * 0.4) {
//           current = index;
//         }
//       });

//       setActiveIndex(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative mx-auto max-w-6xl px-5 sm:px-10 py-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-25">

//         {/* LEFT SIDE (SCROLLING TEXT) */}
//         <div className="relative">
//           {insights.map((item, index) => (
//             <div
//               key={index}
//               className="insight-block min-h-[50vh] flex items-center"
//             >
//               <div
//                 className={`transition-all duration-500 ${activeIndex === index
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-30 translate-y-10"
//                   }`}
//               >
//                 <h3 className="text-3xl md:text-5xl font-semibold text-zinc-50 font-google leading-tight tracking-wide">
//                   {item.title}
//                 </h3>

//                 <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SIDE (STICKY IMAGE) */}
//         <div className="relative">
//           <div className="sticky top-45">
//             <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">

//               {/* Image Switch */}
//               <img
//                 key={activeIndex}
//                 src={insights[activeIndex].image}
//                 alt="insight visual"
//                 className="w-full h-[350px] md:h-[450px] object-cover transition-all duration-500"
//               />
//               <div
//                 className="absolute inset-0 pointer-events-none rounded-2xl"
//                 style={{
//                   background:
//                     "radial-gradient(circle at center, transparent 40%, rgba(24,24,27,0.15) 60%, rgba(24,24,27,0.95) 100%)",
//                 }}
//               />
//               {/* Bottom Gradient */}
//               <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-zinc-900 to-transparent rounded-2xl" />

//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }







// import React, { useRef, useState, useEffect } from "react";

// type Insight = {
//   title: string;
//   description: string;
//   image: string;
// };

// type Props = {
//   insights: Insight[];
// };

// const CaseStudyInsights: React.FC<Props> = ({ insights }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const sections = Array.from(
//         containerRef.current.querySelectorAll(".insight-block")
//       );

//       let newIndex = 0;

//       sections.forEach((section, index) => {
//         const rect = section.getBoundingClientRect();

//         if (rect.top < window.innerHeight * 0.4) {
//           newIndex = index;
//         }
//       });

//       setActiveIndex(newIndex);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="bg-zinc-950">
//       <div
//         ref={containerRef}
//         className="mx-auto max-w-6xl px-5 sm:px-10 py-25 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16"
//       >
//         {/* LEFT: Insights */}
//         <div className="space-y-40">
//           {insights.map((item, index) => {
//             const isActive = index === activeIndex;

//             return (
//               <div
//                 key={index}
//                 className={`insight-block transition-opacity duration-500 ${
//                   isActive ? "opacity-100" : "opacity-30"
//                 }`}
//               >
//                 <h3
//                   className={`text-3xl md:text-5xl font-semibold transition-colors duration-500 ${
//                     isActive ? "text-white" : "text-zinc-600"
//                   }`}
//                 >
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 max-w-md text-zinc-400 text-base md:text-lg leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* RIGHT: Sticky Image */}
//         <div className="relative">
//           <div className="sticky top-32">
//             <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              
//               {insights.map((item, index) => (
//                 <img
//                   key={index}
//                   src={item.image}
//                   alt={item.title}
//                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
//                     index === activeIndex
//                       ? "opacity-100 scale-100"
//                       : "opacity-0 scale-95"
//                   }`}
//                 />
//               ))}

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudyInsights;