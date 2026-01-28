import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/Interface/Heading";

const projects = [
  {
    title: "Krityam Services & Solutions",
    image: "/Images/KrityamSnap.png",
    live: "https://rise.app",
  },
  {
    title: "AI Health & Wellness Marketplace",
    image: "/Images/KinderSnap.png",
    live: "https://health.ai",
  },
  {
    title: "Krityam Agency Website",
    image: "/Images/KLightSnap.png",
    live: "https://krityam.com",
  },
  {
    title: "Krityam Agency Website",
    image: "/Images/KLightSnap.png",
    live: "https://krityam.com",
  },
  {
    title: "Krityam Agency Website",
    image: "/Images/KLightSnap.png",
    live: "https://krityam.com",
  },
  {
    title: "Krityam Agency Website",
    image: "/Images/KLightSnap.png",
    live: "https://krityam.com",
  },
];

export default function WebsiteDesignShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-10 xl:px-0 py-25 my-25 overflow-hidden">
      <div className="mb-25">
                <SectionHeading
                    prefix="balancing usability, aesthetics, & technical reality."
                    mainBefore=""
                    mainAfter="I've Designed & Built"
                    highlightSvg="/Images/H4Bold.png"
                    highlightAlt="designs"
                    noteSvg="/Images/Note.png"
                    punchline=""
                    align="center"
                />
            </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-google font-semibold text-zinc-50">
                {project.title}
              </h3>
              
              {/* Actions */}
              <div className="mt-6 flex items-center gap-5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-50 hover:text-white transition"
                >
                  View Live
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-16 text-sm text-zinc-500">
        More projects available on request. Some work lives behind NDAs.
      </p>
    </section>
  );
}
