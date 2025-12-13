import type React from "react";

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-6 text-xs text-slate-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <span>© {new Date().getFullYear()} Udit Mahajan.</span>
        <span className="hidden sm:inline">
          Senior Product Designer & Illustrator.
        </span>
      </div>
    </footer>
  );
};

export default SiteFooter;
