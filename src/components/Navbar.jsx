import React, { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const navDesktopRef = useRef(null);
  const navMobileRef = useRef(null);
  const highlightDesktopRef = useRef(null);
  const highlightMobileRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const links = [
    { label: "Home Page", href: "#home" },
    { label: "Profile", href: "#profile" },
    { label: "Ekstrakurikuler", href: "#ekstrakurikuler" },
    { label: "Berita", href: "#berita" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const moveDesktopHighlight = (el) => {
    const hl = highlightDesktopRef.current;
    const nav = navDesktopRef.current;
    if (!hl || !nav || !el) return;

    const rect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const offsetLeft = rect.left - navRect.left;
    hl.style.width = `${rect.width}px`;
    hl.style.transform = `translateX(${offsetLeft}px)`;
    hl.style.opacity = "1";
  };

  const moveMobileHighlight = (el) => {
    const hl = highlightMobileRef.current;
    const nav = navMobileRef.current;
    if (!hl || !nav || !el) return;

    const rect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const offsetLeft = rect.left - navRect.left;
    hl.style.width = `${rect.width}px`;
    hl.style.transform = `translateX(${offsetLeft}px)`;
    hl.style.opacity = "1";
  };

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDesktopClick = (idx, el, href, e) => {
    handleScrollTo(e, href);
    setActiveIndex(idx);
    moveDesktopHighlight(el);
  };

  const handleMobileClick = (idx, href, e) => {
    handleScrollTo(e, href);
    setActiveIndex(idx);
    setMobileOpen(false);
  };

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <style>{`
        @keyframes navGlow {
          0% { box-shadow: 0 8px 18px rgba(3,255,240,0.02); }
          50% { box-shadow: 0 10px 28px rgba(3,255,240,0.045); }
          100% { box-shadow: 0 8px 18px rgba(3,255,240,0.02); }
        }

        .nav-slide {
          transform: translateY(-10px);
          opacity: 0;
          pointer-events: none;
          transition: all .25s cubic-bezier(.2,.9,.2,1);
        }
        .nav-slide.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .nav-highlight {
          transition: transform 300ms cubic-bezier(.2,.9,.2,1),
                      width 300ms cubic-bezier(.2,.9,.2,1),
                      opacity 300ms ease;
          opacity: 0;
        }
      `}</style>

      <header className="w-full fixed top-0 left-0 z-50">
        <div
          className="backdrop-blur-lg bg-[#0a0f1f]/80 border-b border-white/5"
          style={{ animation: "navGlow 6s ease-in-out infinite" }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="h-16 flex items-center justify-between">

              <div className="flex items-center">
                <a href="#home" onClick={(e) => handleScrollTo(e, "#home")}>
                  <img
                    src={`${process.env.PUBLIC_URL}/Logo.png`}
                    alt="Logo"
                    className="h-10 w-10 object-contain rounded-full hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>

              <nav
                ref={navDesktopRef}
                className="hidden md:flex relative items-center gap-2 h-[50px] px-2"
              >
                <span
                  ref={highlightDesktopRef}
                  className="nav-highlight absolute top-1 left-0 h-[46px] rounded-lg bg-linear-to-r from-[#194b4f] to-[#33fffc]"
                />

                {links.map((link, idx) => (
                  <a
                    key={link.label}
                    data-nav-link
                    href={link.href}
                    onMouseEnter={(e) =>
                      activeIndex !== null && moveDesktopHighlight(e.currentTarget)
                    }
                    onClick={(e) =>
                      handleDesktopClick(idx, e.currentTarget, link.href, e)
                    }
                    className={`relative z-10 px-5 text-white/90 font-medium uppercase leading-[50px]
                      transition-colors duration-200 hover:text-black
                      ${idx === activeIndex ? "text-white" : ""}`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <button
                onClick={toggleMobile}
                className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded hover:bg-white/10 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d={
                      mobileOpen
                        ? "M6 6L18 18M6 18L18 6"
                        : "M3 6H21M3 12H21M3 18H21"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        <div className="md:hidden fixed top-16 left-0 w-full flex justify-center z-50">
          <nav
            ref={navMobileRef}
            className={`nav-slide w-[92%] max-w-lg rounded-lg border border-white/10 bg-[#0a0f1f]/95 ${
              mobileOpen ? "open" : ""
            }`}
          >
            <div className="relative py-3">
              <span
                ref={highlightMobileRef}
                className="nav-highlight absolute top-[9px] left-0 h-9 rounded bg-linear-to-r from-[#11303a]/50 to-[#06f0e7]/14"
              />
              {links.map((link, idx) => (
                <button
                  key={link.label}
                  data-nav-link
                  onMouseEnter={(e) =>
                    activeIndex !== null && moveMobileHighlight(e.currentTarget)
                  }
                  onTouchStart={(e) =>
                    activeIndex !== null && moveMobileHighlight(e.currentTarget)
                  }
                  onClick={(e) => handleMobileClick(idx, link.href, e)}
                  className={`relative z-10 w-full text-left px-5 py-2 text-white/90 font-medium uppercase transition-colors ${
                    idx === activeIndex ? "text-white" : ""
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}