import { motion } from "framer-motion";
import type React from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  points?: string[];

  role: string[];
  duration: string;
  team: string[];
};

const CaseStudyIntro: React.FC<Props> = ({
  eyebrow = "INTRO",
  title,
  description,
  points = [],
  role,
  duration,
  team,
}) => {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10 py-25">
      
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-30">
        
        {/* LEFT: Problem / Intro */}
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

          {/* Optional Points */}
          {/* {points.length > 0 && (
            <ul className="mt-8 space-y-3 text-zinc-400">
              {points.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          )} */}
        </motion.div>

        {/* RIGHT: Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10 py-6"
        >
          {/* Role */}
          <div>
            <p className="mb-2 text-sm tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">Role</p>
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
              {role.map((r, i) => (
                <span key={i}>
                  {r}
                  {i !== role.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Duration */}
          <div>
            <p className="mb-2 text-sm tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">Duration</p>
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed">{duration}</p>
          </div>

          {/* Team */}
          <div>
            <p className="mb-2 text-sm tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">Team</p>
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
              {team.map((member, i) => (
                <span key={i}>
                  {member}
                  {i !== team.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudyIntro;