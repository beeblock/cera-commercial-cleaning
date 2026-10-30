import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Brand from "./Brand";

export const navigation = [
  ["/services", "Services"],
  ["/industries", "Industries"],
  ["/why-cera", "Why CERA"],
  ["/our-standards", "Our Standards"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => setMenuOpen(false), [location.pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const handleOutside = (event) => {
      if (
        !menuRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      )
        setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-4 md:px-8 xl:px-12">
        <Brand />
        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label="Main navigation"
        >
          {navigation.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `whitespace-nowrap border-b-2 py-2 text-[11px] font-semibold uppercase tracking-wider transition-colors ${isActive ? "border-primary-container text-primary-container" : "border-transparent text-on-surface-variant hover:text-primary-container"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/request-a-proposal"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary-container px-3 py-3 text-[10px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-tertiary-container sm:px-5 sm:text-[12px]"
          >
            <span className="sm:hidden">Get a quote</span>
            <span className="hidden sm:inline">Request a Proposal</span>
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-container hover:bg-surface-container-low xl:hidden"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          ref={menuRef}
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-surface-container bg-white p-4 shadow-lg xl:hidden"
        >
          <NavLink
            to="/"
            className="block rounded px-4 py-3 text-sm font-semibold hover:bg-surface-container-low"
          >
            Home
          </NavLink>
          {navigation.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block rounded px-4 py-3 text-sm font-semibold ${isActive ? "bg-surface-container-low text-primary-container" : "text-on-surface-variant hover:bg-surface-container-low"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
