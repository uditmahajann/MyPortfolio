import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type React from "react";

type DecisionFactor = {
  source: string;
  target: string;
  description: string;
};

type Props = {
  decisionHeading?: string;
  decisionDescription?: string;
  detail?: string;
  factors?: DecisionFactor[];
};

const CaseStudyDecisions: React.FC<Props> = ({
  decisionHeading,
  decisionDescription,
  detail,
  factors = [],
}) => {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10">
      {factors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-20"
        >
          {(decisionHeading || decisionDescription) && (
            <div className="mb-16">
              {decisionHeading && (
                <h3 className="text-xl md:text-4xl font-caveat font-medium text-amber-300">
                  {decisionHeading}
                </h3>
              )}

              {decisionDescription && (
                <p className="mt-3 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed">
                  {decisionDescription}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
            {factors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                {/* Premium Label */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-3

                    rounded-full

                    bg-zinc-900

                    px-6
                    py-3

                    ring-1
                    ring-white/10

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]

                    transition-all
                    duration-300

                    hover:ring-white/20
                  "
                >
                  <span className="font-google font-medium leading-snug text-zinc-100">
                    {factor.source}
                  </span>

                  <ArrowRight
                    size={14}
                    strokeWidth={2}
                    className="text-zinc-400"
                  />

                  <span className=" font-google font-medium leading-snug text-zinc-100">
                    {factor.target}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 font-google text-zinc-400 leading-relaxed">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {detail && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mt-10 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {detail}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default CaseStudyDecisions;