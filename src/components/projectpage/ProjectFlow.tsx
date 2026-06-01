"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  useRef,
  useEffect,
  useState,
} from "react";

type FlowStep = {
  image: string;
//   label?: string;
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description: string;

  flowHeading?: string;
  flowDescription?: string;

  steps: FlowStep[];
};

export default function CaseStudyUserFlow({
  eyebrow,
  title,
  description,
  flowHeading,
  flowDescription,
  steps,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxTranslate, setMaxTranslate] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const calculateWidth = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const translateAmount = Math.max(
        totalWidth - viewportWidth + 120,
        0
      );

      setMaxTranslate(translateAmount);
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener(
        "resize",
        calculateWidth
      );
    };
  }, [steps]);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxTranslate]
  );

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        height: `${steps.length * 90}vh`,
      }}
    >
      {/* Intro Content */}
      <div className="mx-auto max-w-6xl px-5 sm:px-10 pt-25 pb-15">

        {eyebrow && (
          <p className="text-base tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">
            {eyebrow}
          </p>
        )}

        <h2 className="mt-4 text-3xl md:text-5xl font-google font-semibold text-zinc-50 leading-tight tracking-wide">
          {title}
        </h2>

        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {description}
        </p>

        {(flowHeading || flowDescription) && (
          <div className="mt-20">
            {flowHeading && (
              <h3 className="text-xl md:text-4xl font-caveat font-medium text-lime-300">
                {flowHeading}
              </h3>
            )}

            {flowDescription && (
              <p className="mt-3 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed">
                {flowDescription}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Sticky Horizontal Flow */}
      <div className="sticky top-30 h-screen overflow-hidden ">

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex items-start gap-20 mx-auto max-w-6xl px-5 sm:px-10 will-change-transform"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-[280px] md:w-[320px] shrink-0"
            >
              {/* {step.label && (
                <div className="mb-6 inline-flex rounded-full border border-lime-900 bg-lime-950 px-4 py-2 text-sm text-lime-300">
                  {step.label}
                </div>
              )} */}

              {/* Phone */}
              <div className="shadow-2xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full"
                />
              </div>

              {/* Content */}
              <h4 className="mt-6 text-xl font-semibold text-zinc-50">
                {step.title}
              </h4>

              <p className="mt-3 text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}