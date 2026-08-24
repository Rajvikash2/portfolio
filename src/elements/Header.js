import { useState, useEffect } from "react";
import SpecularButton from "../components/reactbits/SpecularButton";
import ShinyText from "../components/reactbits/ShinyText";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about-me", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skill-id", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`z-50 w-full sticky top-0 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-[#89F336]/20 shadow-lg shadow-black/40"
          : "bg-black backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="px-4 sm:px-8 lg:px-16 py-3 sm:py-4 lg:py-5 w-full">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-baseline gap-1">
            <img src="/icons8-developer-96.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="font-bold text-lg sm:text-xl lg:text-2xl text-white">
              <ShinyText
                text="Rajvikash"
                speed={2}
                delay={0}
                color="#ffffff"
                shineColor="#89F336"
                spread={120}
                direction="left"
                yoyo
                pauseOnHover={false}
                disabled={false}
              />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.href} className="relative group">
                  <a
                    href={link.href}
                    className="text-gray-300 group-hover:text-[#89F336] transition-colors duration-300 text-sm lg:text-base font-medium"
                  >
                    {link.label}
                  </a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#89F336] transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA button (desktop) */}
          <a href="#contact" className="hidden md:inline-block">
            <SpecularButton
              size="sm"
              radius={18}
              tint="#89F336"
              tintOpacity={0}
              blur={0}
              textColor="#f5f5f5"
              lineColor="#89F336"
              baseColor="#89F336"
              intensity={1}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate={false}
              onClick={() => console.log("clicked")}
            >
              Lets Talk
            </SpecularButton>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#89F336] focus:outline-none focus:ring-2 focus:ring-[#89F336]/50 rounded-lg p-1"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-72 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="border-t border-[#89F336]/10 pt-4">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-gray-300 hover:text-[#89F336] transition duration-300 py-2 px-2 rounded-lg hover:bg-[#89F336]/5 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block text-center px-5 py-2 rounded-full text-sm font-semibold bg-[#89F336] text-black"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
