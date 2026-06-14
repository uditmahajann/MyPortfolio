"use client";

import { motion } from "framer-motion";
import type React from "react";

type ImpactMetric = {
  value: string;
  label: string;
  trend?: "up" | "down";
};

type Props = {
  decisionHeading?: string;
  decisionDescription?: string;
  detail?: string;
  impacts?: ImpactMetric[];
};

const CaseStudyDecisions: React.FC<Props> = ({
  decisionHeading,
  decisionDescription,
  detail,
  impacts = [],
}) => {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10 py-10">

      {/* Impact Section */}
      {impacts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          {(decisionHeading || decisionDescription) && (
            <div className="mb-10 sm:mb-20">

              {decisionHeading && (
                <h3 className="text-2xl md:text-4xl font-caveat font-medium text-lime-300">
                  {decisionHeading}
                </h3>
              )}

              {decisionDescription && (
                <p className="mt-3 max-w-3xl text-zinc-400 text-base md:text-lg leading-relaxed">
                  {decisionDescription}
                </p>
              )}

            </div>
          )}

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`
                  relative overflow-hidden rounded-3xl border p-8 min-h-[220px]
                  transition-all duration-300
                  ${
                    impact.trend === "down"
                      ? "border-red-950 bg-zinc-950"
                      : "border-green-950 bg-zinc-950"
                  }
                `}
              >
                {/* Trend Indicator */}
                <div
                  className={`
                    absolute top-6 right-6 text-xl font-bold
                    ${
                      impact.trend === "down"
                        ? "text-red-400"
                        : "text-lime-300"
                    }
                  `}
                >
                  {impact.trend === "down" ? "▼" : "▲"}
                </div>

                {/* Label */}
                <p className="max-w-[220px] text-zinc-300 text-xl font-google font-medium leading-tight">
                  {impact.label}
                </p>

                {/* Value */}
                <h3 className="mt-10 text-6xl md:text-7xl font-google font-bold text-white">
                  {impact.value}
                </h3>
              </motion.div>
            ))}

          </div>
        </motion.div>
      )}

      {/* Optional Detail */}
      {detail && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mt-12 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {detail}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default CaseStudyDecisions;