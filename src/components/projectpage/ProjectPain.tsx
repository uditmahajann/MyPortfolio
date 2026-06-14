import type React from "react";

type Challenge = {
  title: string;
  notes: string[];
};

type Props = {
  title: string;
  description: string;
  challenges: Challenge[];
};

export default function PainPointsSection({
  title,
  description,
  challenges,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-10 py-10 sm:py-25">
      <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1.35fr] gap-15">
        
        {/* LEFT STICKY */}
        <div>
          <div className="sticky top-40">
            <h2 className="mt-4 text-3xl font-google font-semibold text-zinc-50 leading-tight tracking-wide">
              {title}
            </h2>

            <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-15 sm:space-y-30">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className=""
            >
              <h3 className="text-2xl md:text-3xl font-caveat font-medium text-amber-300">
                {challenge.title}
              </h3>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-2">
                {challenge.notes.map((note, noteIndex) => (
                  <div
                    key={noteIndex}
                    className=""
                  >
                    <img
                      src={note}
                      alt={`${challenge.title} note ${noteIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}