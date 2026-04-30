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
    <section className="relative mx-auto max-w-6xl px-5 sm:px-10 py-25">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-25">

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

                <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (STICKY IMAGE) */}
        <div className="relative">
          <div className="sticky top-45">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
              
              {/* Image Switch */}
              <img
                key={activeIndex}
                src={insights[activeIndex].image}
                alt="insight visual"
                className="w-full h-[350px] md:h-[450px] object-cover transition-all duration-500"
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}







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