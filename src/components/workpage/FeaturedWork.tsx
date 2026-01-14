import type React from "react";
import { useRef } from "react";
import SectionHeading from "../../components/Interface/Heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type CaseStudy = {
  id: string;
  label: string;
  title: string;
  teaser: string;
  role: string;
  result: string;
  href: string;
  image: string;
  tags: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "rise",
    label: "Product · Mobile · Experience",
    title:
      "Rise – a running companion that feels like a story, not a stats dump.",
    teaser:
      "Designing a calm, cinematic running experience that nudges athletes to see their training as seasons, chapters, and satisfying arcs instead of random scattered runs.",
    role: "Product design · UX · UI · Interaction",
    result:
      "Helped runners understand their progress emotionally, not just numerically.",
    href: "/project",
    image: "/Images/Sample.png",
    tags: ["Mobile", "Sports", "Behaviours"],
  },
  {
    id: "dashboard",
    label: "Product · Web · Strategy",
    title:
      "Turning a dense dashboard into a place people actually want to work in.",
    teaser:
      "Restructuring an overgrown interface into a focused control center so teams could see what matters in seconds — without hunting through filters, tabs, and tooltips.",
    role: "UX audit · IA · UI design",
    result:
      "Made everyday workflows feel lighter, faster, and less mentally noisy.",
    href: "#",
    image: "/Images/Sample2.png",
    tags: ["B2B", "Complex UX", "Interface clarity"],
  },
  {
    id: "illustration-system",
    label: "Illustration · System · Visual",
    title:
      "An illustration system that looked bespoke, not “from the same 3 libraries”.",
    teaser:
      "Creating a flexible illustration language that could stretch across onboarding, empty states, and marketing without losing its personality or feeling repetitive.",
    role: "Art direction · Illustration · Visual system",
    result:
      "Gave the product a recognisable face that teams could reuse confidently.",
    href: "#",
    image: "/Images/Sample.jpg",
    tags: ["Illustration", "Design systems", "Brand"],
  },
];

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const total = CASE_STUDIES.length;

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-5 lg:px-10"
    >


    <div className="my-25">
      <SectionHeading
        prefix="long before they looked good..."
        mainBefore=""
        mainAfter="that felt Good,"
        highlightSvg="/Images/H1Bold.png"
        highlightAlt="designs"
        noteSvg="/Images/Note.png"
        punchline=""
        align="center"
      />
    </div>


      <div className="flex items-center justify-between gap-4 mb-6 ml-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-lime-400 border-2 border-emerald-400" /> My Selected work
        </div>
      </div>

      {/* Sticky stack container */}
      <div className="relative h-[280vh]">
        <div className="sticky top-36 flex h-[72vh] items-center justify-center">
          <div className="relative h-full w-full max-w-6xl">
            {CASE_STUDIES.map((cs, index) => {
              const segmentStart = index / total;
              const segmentEnd = (index + 1) / total;

              let y;
              let scale;

              if (index === 0) {
                // First card is always in place
                y = useTransform(scrollYProgress, [0, 1], [0, 0]);
                scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
              } else {
                // Later cards start off-screen below, then slide up and stay
                y = useTransform(
                  scrollYProgress,
                  [0, segmentStart, segmentEnd, 1],
                  [600, 600, 0, 0]
                );
                scale = useTransform(
                  scrollYProgress,
                  [0, segmentStart, segmentEnd, 1],
                  [0.96, 0.96, 1, 1]
                );
              }

              const opacity = 1; // no fading
              const zIndex = index + 1; // later cards above earlier ones

              return (
                <motion.article
                  key={cs.id}
                  style={{ y, scale, opacity, zIndex }}
                  className="absolute inset-0"
                >
                  <CaseStudyCard caseStudy={cs} />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-900 bg-[#060608]/99 transition-transform duration-500 ease-out hover:-translate-y-1 hover:border-zinc-700">
      
      <div className="pointer-events-none absolute inset-px rounded-[1.45rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_95%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative grid h-full p-5 sm:p-6 md:p-12 gap-6 md:gap-10 md:grid-cols-[minmax(0,2.25fr)_minmax(0,2.5fr)]">
        {/* Left: content */}
        <div className="relative z-1 flex flex-col justify-between gap-6">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {caseStudy.label}
            </p>

            <h2 className="text-2xl font-google tracking-wide font-semibold text-zinc-50 sm:text-[2rem] line-clamp-2">
              {caseStudy.title}
            </h2>

            <p className="max-w-xl font-google text-sm leading-relaxed text-zinc-300 sm:text-base">
              {caseStudy.teaser}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-900 px-4 py-1 text-sm text-zinc-300 border border-zinc-800 font-google"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col text-sm text-zinc-300">
            {/* <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                Role
              </p>
              <p className="mt-1">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                Outcome
              </p>
              <p className="mt-1 text-zinc-200">{caseStudy.result}</p>
            </div> */}

            <div className="">
              <a
                href={caseStudy.href}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm sm:text-base font-google font-medium text-zinc-50 transition hover:border-zinc-300 hover:bg-zinc-900"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative h-56 overflow-hidden rounded-2xl border border-zinc-800 md:h-full">
          <div className="absolute inset-0">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-tl from-black/75 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
