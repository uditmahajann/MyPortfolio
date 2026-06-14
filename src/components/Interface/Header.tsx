import type React from "react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Lottie from "lottie-react";
import logoAnimation from "../../assets/Animations/Profile-Icon.json";

interface SiteHeaderProps {
  currentPath: string;
}

const navItems = [
  { href: "/", label: "Work" },
  { href: "/play", label: "Play" },
  { href: "/self", label: "Self" },
];

const SiteHeader: React.FC<SiteHeaderProps> = ({
  currentPath,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        {/* ========================= */}
        {/* MOBILE */}
        {/* ========================= */}
        <div className="md:hidden">

          {/* Top Row - Hide on Scroll */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              scrolled
                ? "max-h-0 opacity-0 mb-0"
                : "max-h-32 opacity-100 mb-6 sm:mb-4"
            }`}
          >
            <div className="flex items-center justify-between">

              {/* Logo */}
              <a href="/">
                <div className="w-36 sm:w-45">
                  <Lottie
                    animationData={logoAnimation}
                    loop
                    autoplay
                  />
                </div>
              </a>

              {/* Quick Links */}
              <div className="flex items-center gap-4 text-base sm:text-lg">
                <a
                  href="https://www.linkedin.com/in/udit-mahajann/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-white"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="https://drive.google.com/file/d/1JoUMy_nRR7a-aZ2GlaL9WirM-n-KStpv/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-white"
                >
                  <span>Resume</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

            </div>
          </div>

          {/* Navigation Pills */}
          <nav className="flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-gray-950/80 p-2 shadow-lg shadow-black/40 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(item.href);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-5 py-2 text-base font-medium transition-all ${
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

        </div>

        {/* ========================= */}
        {/* DESKTOP */}
        {/* ========================= */}
        <div className="hidden md:flex items-center justify-between">

          {/* Left */}
          <a href="/">
            <div className="md:w-45 lg:w-50">
              <Lottie
                animationData={logoAnimation}
                loop
                autoplay
              />
            </div>
          </a>

          {/* Center */}
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
                    className={`rounded-full px-6 py-1 md:text-base lg:text-lg font-medium transition-all ${
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

          {/* Right */}
          <div className="flex items-center gap-6 md:text-lg lg:text-xl">
            <a
              href="https://www.linkedin.com/in/udit-mahajann/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-5 w-5" />
            </a>

            <a
              href="https://drive.google.com/file/d/1JoUMy_nRR7a-aZ2GlaL9WirM-n-KStpv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300"
            >
              <span>Resume</span>
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default SiteHeader;














// import type React from "react";
// import { useEffect, useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import Lottie from "lottie-react";
// import logoAnimation from "../../assets/Animations/Profile-Icon.json"; // adjust path if needed

// interface SiteHeaderProps {
//   currentPath: string;
// }

// const navItems = [
//   { href: "/", label: "Work" },
//   { href: "/play", label: "Play" },
//   { href: "/self", label: "Self" },
// ];

// const SiteHeader: React.FC<SiteHeaderProps> = ({ currentPath }) => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 8);
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
//         scrolled
//           ? "border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl py-0.5"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
//         {/* Left: logo + name */}
//         <a href="/" className="">
//             <div className="h-full w-50">
//               <Lottie animationData={logoAnimation} loop autoplay />
//             </div>
//         </a>

//         {/* Center: pill navigation */}
//         <nav className="flex flex-1 justify-center">
//           <div className="flex items-center p-3 gap-3 rounded-full border border-white/10 bg-gray-950/80 shadow-lg shadow-black/40 backdrop-blur-md">
//             {navItems.map((item) => {
//               const isActive =
//                 item.href === "/"
//                   ? currentPath === "/"
//                   : currentPath.startsWith(item.href);

//               return (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className={`rounded-full px-6 py-1 text-lg font-medium transition-all ${
//                     isActive
//                       ? "bg-sky-500 text-white shadow-md shadow-sky-500/40"
//                       : "bg-gray-700/60 text-gray-300 hover:bg-gray-600/70"
//                   }`}
//                 >
//                   {item.label}
//                 </a>
//               );
//             })}
//           </div>
//         </nav>

//         {/* Right: quick links */}
//         <div className="flex items-center gap-6 text-xl">
//           <a
//             href="https://www.linkedin.com/in/udit-mahajann/" // replace with your profile
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 text-white hover:text-gray-300"
//           >
//             <span>LinkedIn</span>
//             <ArrowUpRight className="h-5 w-5" />
//           </a>
//           <a
//             href="https://drive.google.com/file/d/1JoUMy_nRR7a-aZ2GlaL9WirM-n-KStpv/view?usp=sharing" // place your resume in /public as resume.pdf
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 text-white hover:text-gray-300"
//           >
//             <span>Resume</span>
//             <ArrowUpRight className="h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default SiteHeader;
