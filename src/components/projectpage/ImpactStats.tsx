const stats = [
  { label: "Usability score", value: "86%" },
  { label: "Task friction reduced", value: "42%" },
  { label: "Design–dev inconsistencies", value: "−40%" },
];

export default function ImpactStats() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-10">
      {stats.map(stat => (
        <div
          key={stat.label}
          className="rounded-xl border border-zinc-800 p-6 text-center"
        >
          <p className="text-4xl font-semibold">{stat.value}</p>
          <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
