import { motion } from "framer-motion";
import type React from "react";
import {
  TriangleAlert,
  FileText,
  Truck,
  Package,
  Boxes,
  Warehouse,
  Hash,
  Tag,
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react";

const iconMap = {
  TriangleAlert,
  Truck,
  FileText,
  Package,
  Boxes,
  Warehouse,
  Hash,
  Tag,
  ArrowDownToLine,
  ArrowUpFromLine,
};

type DecisionFactor = {
  icon: string;
  title: string;
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
            {/* Persona Grid */}
            {factors && factors.length > 0 && (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="pb-10 sm:pb-20"
  >
    {/* Section Intro */}
    {(decisionHeading || decisionDescription) && (
      <div className="mb-14">
        {decisionHeading && (
          <h3 className="text-2xl md:text-4xl font-caveat font-medium text-amber-300">
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

    {/* Decision Factors */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {factors.map((factor, index) => {
  const Icon = iconMap[factor.icon as keyof typeof iconMap];

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-4xl border border-zinc-700 bg-zinc-900 flex flex-col items-center justify-center p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.15)]">

        <div className="text-amber-300 mb-5">
          <Icon size={32} />
        </div>

        <h4 className="text-zinc-100 text-base sm:text-xl font-google font-medium leading-snug">
          {factor.title}
        </h4>

      </div>

      <p className="mt-5 font-google text-sm sm:text-base text-zinc-400 leading-relaxed max-w-[220px]">
        {factor.description}
      </p>
    </motion.div>
  );
})}
    </div>
  </motion.div>
)}

            {/* Bottom Content */}
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