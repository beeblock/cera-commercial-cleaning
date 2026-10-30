import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand";
import { navigation } from "./Header";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-on-surface">
      <div className="mx-auto max-w-[1280px] px-4 pb-6 pt-12 md:px-8 lg:px-16">
        <div className="flex flex-col justify-between gap-10 pb-12 lg:flex-row">
          <div className="flex max-w-sm flex-col items-start gap-4">
            <Brand />
            <p className="text-eyebrow-accent uppercase tracking-widest text-secondary">
              CERA Cleaning Services LLC
            </p>
            <p className="text-body-sm text-on-surface-variant">
              Architectural hygiene management, sterile facility maintenance,
              and Class-A property services engineered for commercial real
              estate portfolio leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <p className="mb-4 text-label-sm uppercase tracking-widest">
                Navigation
              </p>
              <nav
                aria-label="Footer navigation"
                className="flex flex-col items-start gap-1"
              >
                {navigation.map(([to, label]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className="py-1 text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div>
              <p className="mb-4 text-label-sm uppercase tracking-widest">
                Connect
              </p>
              <div className="flex flex-col items-start gap-3 text-body-sm text-on-surface-variant">
                <a
                  href="tel:+15715010927"
                  className="flex items-center gap-2 hover:text-secondary"
                >
                  <span
                    className="material-symbols-outlined text-[17px]"
                    aria-hidden="true"
                  >
                    phone
                  </span>
                  +1 (571) 501 0927
                </a>
                <a
                  href="mailto:contact@ceraccs.com"
                  className="flex items-center gap-2 hover:text-secondary"
                >
                  <span
                    className="material-symbols-outlined text-[17px]"
                    aria-hidden="true"
                  >
                    mail
                  </span>
                  contact@ceraccs.com
                </a>
                <a
                  href="https://www.ceraccs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-secondary"
                >
                  <span
                    className="material-symbols-outlined text-[17px]"
                    aria-hidden="true"
                  >
                    language
                  </span>
                  www.ceraccs.com
                </a>
                <Link
                  to="/request-a-proposal"
                  className="flex items-center gap-2 text-secondary"
                >
                  <span
                    className="material-symbols-outlined text-[17px]"
                    aria-hidden="true"
                  >
                    description
                  </span>
                  Request Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-surface-container pt-6 text-center md:flex-row md:text-left">
          <p className="text-label-sm uppercase text-on-surface-variant">
            © {new Date().getFullYear()} CERA Cleaning Services LLC. All rights
            reserved.
          </p>
          <p className="text-label-sm uppercase tracking-widest text-secondary">
            Cleaner environments. Stronger businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
