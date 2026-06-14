import { motion } from "framer-motion";
import type React from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  images?: string[];
  imageAlt?: string;
  detail?: string;
};

const CaseStudyIdeation: React.FC<Props> = ({
  eyebrow = "",
  title,
  description,
  images = [],
  imageAlt = "",
  detail,
}) => {
  
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10 py-10 sm:py-25">

      {/* Top Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-base tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">
          {eyebrow}
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-google font-semibold text-zinc-50 leading-tight tracking-wide">
          {title}
        </h2>

        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </motion.div>

      {/* Visual Grid */}
      {images.length > 0 && (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="my-12"
  >
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl">
      
      {images.map((img, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl"
        >
          <img
            src={img}
            alt={`${imageAlt}-${i}`}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
      ))}

    </div>
  </motion.div>
)}

{/* Bottom Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Details */}
        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {detail}
        </p>
      </motion.div>
    </section>
  );
};

export default CaseStudyIdeation;