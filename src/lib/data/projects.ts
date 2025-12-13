export type Project = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  summary: string;
  image: string; // path under /public
  link: string;
  palette: string; // tailwind gradient class
};

export const featuredProjects: Project[] = [
  {
    id: "cosmo",
    title: "Cosmo",
    subtitle: "AI-powered wellness for Gen-Z",
    role: "Product design · UX · Illustration",
    year: "2024",
    summary:
      "Designing a playful, data-driven wellness companion that feels like a friend, not a dashboard.",
    image: "/images/projects/cosmo-cover.jpg",
    link: "/work/cosmo",
    palette: "from-sky-400/60 via-violet-400/50 to-emerald-400/60",
  },
  {
    id: "rise",
    title: "RISE",
    subtitle: "Running as a ritual, not a streak",
    role: "Product design · Brand · Motion",
    year: "2024",
    summary:
      "A race companion that turns sunrises, routes and small progress into a narrative runners want to return to.",
    image: "/images/projects/rise-cover.jpg",
    link: "/work/rise",
    palette: "from-amber-300/70 via-rose-400/60 to-sky-400/60",
  },
  {
    id: "editors",
    title: "Editors’ Room",
    subtitle: "A stage for video editors’ work",
    role: "Product design · Design system",
    year: "2023",
    summary:
      "Building a Dribbble-meets-reel space where editors can showcase rhythm, timing and story in motion.",
    image: "/images/projects/editors-cover.jpg",
    link: "/work/editors-room",
    palette: "from-fuchsia-400/60 via-slate-900 to-indigo-400/60",
  },
];
