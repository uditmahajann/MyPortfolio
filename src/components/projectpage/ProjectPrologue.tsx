import { motion } from "framer-motion";
import type React from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  note?: string;
  detail?: string;
};

const CaseStudyPrologue: React.FC<Props> = ({
  eyebrow = "PROLOGUE",
  title,
  description,
  image,
  imageAlt = "prologue visual",
  note,
  detail,
  
}) => {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10 py-25">
      
      {/* Top Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Eyebrow */}
        <p className="text-base tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">
          {eyebrow}
        </p>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-5xl font-google font-semibold text-zinc-50 leading-tight tracking-wide">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </motion.div>

      {/* Visual Section */}
      {image && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <div className="relative rounded-2xl overflow-hidden lg:aspect-video">
            
            {/* Image */}
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto object-contain lg:aspect-video"
            />

          </div>

          {/* Optional Note */}
          {note && (
            <p className="mt-2 text-sm sm:text-base font-google text-zinc-500 text-right">
              {note}
            </p>
          )}
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
        <p className="mt-8 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
          {detail}
        </p>
      </motion.div>

    </section>
  );
};

export default CaseStudyPrologue;