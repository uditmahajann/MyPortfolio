import type React from "react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Lottie from "lottie-react";
import logoAnimation from "../../assets/Animations/Profile-Icon.json"; // adjust path if needed

interface SiteHeaderProps {
  currentPath: string;
}

const navItems = [
  { href: "/", label: "Work" },
  { href: "/play", label: "Play" },
  { href: "/self", label: "Self" },
];

const SiteHeader: React.FC<SiteHeaderProps> = ({ currentPath }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Left: logo + name */}
        <a href="/" className="">
            <div className="h-full w-50">
              <Lottie animationData={logoAnimation} loop autoplay />
            </div>
        </a>

        {/* Center: pill navigation */}
        <nav className="flex flex-1 justify-center">
          <div className="flex items-center p-3 gap-3 rounded-full border border-white/10 bg-gray-950/80 shadow-lg shadow-black/40 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-6 py-1 text-lg font-medium transition-all ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/40"
                      : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/70"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right: quick links */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/udit-mahajann/" // replace with your profile
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a
            href="/resume.pdf" // place your resume in /public as resume.pdf
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
