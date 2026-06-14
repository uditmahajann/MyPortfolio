import { ArrowUpRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  href: string;
  ctaText?: string;
};

export default function NextProject({
  eyebrow = "Next Project",
  title,
  description,
  href,
  ctaText = "View Case Study",
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10 py-20 sm:py-32">

      <a
        href={href}
        className="group relative block overflow-hidden rounded-4xl border border-zinc-800 bg-zinc-950"
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-lime-300/10 blur-[120px]" />
        </div>

        <div className="relative px-8 py-12 sm:py-14 md:px-16 md:py-20">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-zinc-700 transition-colors duration-500 group-hover:bg-lime-300" />

            <p className="text-sm uppercase tracking-[0.2em] font-google font-bold text-zinc-500">
              {eyebrow}
            </p>
          </div>

          {/* Content */}
          <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div>
              <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-6xl font-google font-semibold text-zinc-50 leading-[1.05]">
                {title}
              </h2>

              {description && (
                <p className="mt-6 max-w-xl text-zinc-400 text-base sm:text-lg leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            <div className="flex items-center gap-5 text-zinc-400 transition-all duration-500 group-hover:text-lime-300">

              <span className="text-sm font-google uppercase tracking-[0.15em]">
                {ctaText}
              </span>

              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-zinc-700 transition-all duration-500 group-hover:border-lime-300 group-hover:translate-x-2">
                <ArrowUpRight
                  size={26}
                  strokeWidth={1.75}
                />
              </div>

            </div>

          </div>

        </div>
      </a>

    </section>
  );
}





// export default function NextProject() {
//   return (
//     <section className="mx-auto max-w-6xl px-6 py-32">
//       <a
//         href="/work/next-project"
//         className="group block rounded-2xl border border-zinc-800 p-10 hover:bg-zinc-900 transition"
//       >
//         <p className="text-zinc-400 mb-2">Next story</p>
//         <h3 className="text-3xl font-medium group-hover:translate-x-1 transition">
//           Designing calm in chaos →
//         </h3>
//       </a>
//     </section>
//   );
// }
