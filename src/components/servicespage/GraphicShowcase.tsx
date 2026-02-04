import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/Interface/Heading";

const projects = [
    {
        image: "/Images/Post10.png"
    }, 
    {
        image: "/Images/Post1.png"
    },
    {
        image: "/Images/Post2.png"
    },
    {
        image: "/Images/Post3.png"
    },
    {
        image: "/Images/Post4.png"
    },
    {
        image: "/Images/Post9.png"
    },
    {
        image: "/Images/Post0.png"
    }, 
    {
        image: "/Images/Post5.png"
    },
    {
        image: "/Images/Post6.png"
    },
    {
        image: "/Images/Post7.png"
    },   
    {
        image: "/Images/Post11.png"
    }, 
    {
        image: "/Images/Post12.png"
    },
    {
        image: "/Images/Post13.png"
    }, 
];

export default function WebsiteDesignShowcase() {
    return (
        <section className="mx-auto max-w-7xl px-5 lg:px-10 xl:px-0 py-25 mt-30">
            <div className="mb-25">
                <SectionHeading
                    prefix="designed to communicate before you read."
                    mainBefore=""
                    mainAfter="that tell stories"
                    highlightSvg="/Images/H5Bold.png"
                    highlightAlt="designs"
                    noteSvg="/Images/H5Note.png"
                    punchline=""
                    align="center"
                />
            </div>

            <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-zinc-300">
                    <span className="h-2 w-2 rounded-full bg-lime-400 border-2 border-emerald-400" /> Social Media Posts Designs
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {projects.map((project, i) => (
                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="group relative overflow-hidden border border-zinc-800 bg-zinc-950"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                            />

                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
