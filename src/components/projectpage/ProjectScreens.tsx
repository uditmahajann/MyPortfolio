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
  title: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description: string;

  flowHeading?: string;
  flowDescription?: string;

  flowAccentColor?: string;


  steps: FlowStep[];
};

export default function CaseStudyUserFlow({
  eyebrow,
  title,
  description,
  flowHeading,
  flowDescription,
  flowAccentColor = "#A3E635", // default lime
  steps,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [maxTranslate, setMaxTranslate] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const calculateWidth = () => {
      if (!trackRef.current || !wrapperRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const styles = getComputedStyle(
        wrapperRef.current
      );

      const paddingLeft = parseFloat(
        styles.paddingLeft
      );

      const paddingRight = parseFloat(
        styles.paddingRight
      );

      setMaxTranslate(
        Math.max(
          totalWidth -
            viewportWidth +
            paddingLeft +
            paddingRight,
          0
        )
      );
    };

    calculateWidth();

    window.addEventListener(
      "resize",
      calculateWidth
    );

    return () =>
      window.removeEventListener(
        "resize",
        calculateWidth
      );
  }, [steps]);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxTranslate]
  );

  return (
    <section>
      {/* Intro */}
      <div className="mx-auto max-w-6xl px-5 sm:px-10 py-10 sm:py-25">
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
          <div className="mt-10 sm:mt-20">
            {flowHeading && (
              <h3
                className="text-2xl md:text-4xl font-caveat font-medium"
                style={{ color: flowAccentColor }}
              >
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

      {/* Scroll Area */}
      <div
        ref={sectionRef}
        className="relative"
        style={{
          height: `${steps.length * 65}vh`,
        }}
      >
        <div className="sticky top-32 h-[calc(100vh-120px)] overflow-hidden">

          <div
            ref={wrapperRef}
            className="px-6 sm:px-10 lg:px-60"
          >
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex items-center gap-15 sm:gap-25 will-change-transform"
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="w-auto shrink-0 flex items-center gap-8 sm:gap-10 pr-10"
                >
                  {/* Phone */}
                  <div className="w-[650px] sm:w-[800px] shrink-0">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full"
                    />
                  </div>

                  {/* Description */}
                  <div className="max-w-sm">
                    {/* <div className="mb-4 h-px w-12 bg-lime-300" /> */}
                    <div
                      className="mb-4 h-px w-12"
                      style={{ backgroundColor: flowAccentColor }}
                    />

                    <h4 className="text-2xl sm:text-3xl font-google font-semibold text-zinc-50 leading-tight">
                      {step.title}
                    </h4>

                    <p className="mt-4 text-zinc-400 text-base font-google sm:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

