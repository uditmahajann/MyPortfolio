"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    useRef,
    useEffect,
    useState,
} from "react";

type DetailStep = {
    label: string;
    title1: string;
    description1: string;
    title2?: string;
    description2?: string;
    title3?: string;
    description3?: string;
    image: string;
};

type Props = {
    eyebrow?: string;
    title: string;
    description: string;
    steps: DetailStep[];
};

export default function CaseStudyUserFlow({
    eyebrow,
    title,
    description,
    steps,
}: Props) {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        return scrollYProgress.on("change", (value) => {
            const index = Math.min(
                Math.floor(value * steps.length),
                steps.length - 1
            );

            setActiveStep(index);
        });
    }, [scrollYProgress, steps.length]);

    const current = steps[activeStep];



    return (
        <section className="mx-auto max-w-6xl px-5 sm:px-10 py-25">
            {/* Intro */}
            <div className="">
                {eyebrow && (
                    <p className="text-base tracking-[0.2em] font-google font-bold text-zinc-500 uppercase">
                        {eyebrow}
                    </p>
                )}

                <h2 className="mt-4 text-3xl md:text-5xl font-google font-semibold text-zinc-50 leading-tight tracking-wide">
                    {title}
                </h2>

                <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {description}
                </p>
            </div>

            <div
                ref={sectionRef}
                className="relative mt-20"
                style={{
                    height: `${steps.length * 100}vh`,
                }}
            >
                <div className="sticky top-25 h-[calc(100vh-120px)] flex items-center">

                    <div className="">

                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="grid lg:grid-cols-2 gap-15 items-center"
                        >

                            {/* LEFT CONTENT */}
                            <div>

                                <p className="text-lg uppercase tracking-[0.2em] font-google font-bold text-lime-300 leading-relaxed">
                                    {current.label}
                                </p>

                                <h3 className="mt-12 text-4xl md:text-2xl font-google font-semibold text-zinc-50 leading-tight">
                                    {current.title1}
                                </h3>

                                <p className="mt-3 text-zinc-400 text-lg leading-relaxed max-w-xl whitespace-pre-line">
                                    {current.description1}
                                </p>

                                <h3 className="mt-6 text-4xl md:text-2xl font-google font-semibold text-zinc-50 leading-tight">
                                    {current.title2}
                                </h3>

                                <p className="mt-3 text-zinc-400 text-lg leading-relaxed max-w-xl whitespace-pre-line">
                                    {current.description2}
                                </p>

                                <h3 className="mt-6 text-4xl md:text-2xl font-google font-semibold text-zinc-50 leading-tight">
                                    {current.title3}
                                </h3>

                                <p className="mt-3 text-zinc-400 text-lg leading-relaxed max-w-xl whitespace-pre-line">
                                    {current.description3}
                                </p>

                            </div>

                            

                            {/* RIGHT IMAGE */}
                            <div className="flex justify-center">

                                <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">

                                    <img
                                        src={current.image}
                                        alt={current.label}
                                        className="h-[580px] aspect-square object-contain"
                                    />

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}