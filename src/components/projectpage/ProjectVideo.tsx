import { motion } from "framer-motion";
import type React from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;

  video?: string;
  note?: string;
  detail?: string;
};

const CaseStudyFinalFlow: React.FC<Props> = ({
  eyebrow = "FINAL EXPERIENCE",
  title,
  description,

  video,
  note,
  detail,
}) => {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10 py-10 sm:py-25">

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 sm:gap-20 items-center">

        {/* LEFT CONTENT */}
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

          {detail && (
            <p className="mt-8 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {detail}
            </p>
          )}
        </motion.div>

        {/* RIGHT VIDEO */}
        {video && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />

            </div>

            {/* {note && (
              <p className="mt-3 text-sm text-zinc-500 text-right">
                {note}
              </p>
            )} */}
          </motion.div>
        )}

      </div>

    </section>
  );
};

export default CaseStudyFinalFlow;