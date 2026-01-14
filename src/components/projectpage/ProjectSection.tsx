import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  body: string;
  centered?: boolean;
};

export default function ProjectSection({
  eyebrow,
  title,
  body,
  centered,
}: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={centered ? "text-center" : ""}
      >
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
            {eyebrow}
          </p>
        )}

        <h2 className="text-3xl md:text-4xl font-medium">
          {title}
        </h2>

        <p className="mt-6 text-zinc-400 leading-relaxed">
          {body}
        </p>
      </motion.div>
    </section>
  );
}
