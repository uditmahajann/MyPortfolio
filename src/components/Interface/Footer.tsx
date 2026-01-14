import type React from "react";

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-6 font-google text-slate-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <span>{new Date().getFullYear()} Udit Mahajan.</span>
        <span className="hidden sm:inline">
          Product Designer & Developer.
        </span>
      </div>
    </footer>
  );
};

export default SiteFooter;
