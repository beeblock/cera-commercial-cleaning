import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import { useState } from "react";

export default function IndustriesPage() {
  const [industryFilter, setIndustryFilter] = useState("all");
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full bg-primary text-on-primary overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#d3e4ff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="relative w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="flex flex-col max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-secondary-fixed"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed">
                Industry-Specific Facility Management
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-primary tracking-tight mb-6">
              {" "}
              Clean Environments <br className="hidden sm:inline" />
              <span className="font-bold text-surface">
                for Every Industry.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
              {" "}
              Specialized cleaning protocols crafted to meet strict health,
              safety, and brand standards across diverse commercial sectors
              throughout the DMV region.{" "}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-4 border-t border-surface-variant/15 text-surface-container-low font-label-sm text-label-sm uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[18px] text-secondary-fixed"
                  aria-hidden="true"
                >
                  verified
                </span>
                <span className="">OSHA &amp; CDC Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[18px] text-secondary-fixed"
                  aria-hidden="true"
                >
                  security
                </span>
                <span className="">Security-Vetted Custodial Personnel</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[18px] text-secondary-fixed"
                  aria-hidden="true"
                >
                  fact_check
                </span>
                <span className="">Digital Quality Audits</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest shadow-sm sticky top-20 z-40">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none py-1">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mr-2 shrink-0">
              Filter:
            </span>
            <button
              type="button"
              className={`px-3.5 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider whitespace-nowrap transition-colors ${industryFilter === "all" ? "bg-primary-container text-on-primary" : "bg-surface-container-low hover:bg-surface-container text-on-surface"}`}
              onClick={() => setIndustryFilter("all")}
              aria-pressed={industryFilter === "all"}
            >
              All Sectors (9)
            </button>
            <button
              type="button"
              className={`px-3.5 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider whitespace-nowrap transition-colors ${industryFilter === "commercial" ? "bg-primary-container text-on-primary" : "bg-surface-container-low hover:bg-surface-container text-on-surface"}`}
              onClick={() => setIndustryFilter("commercial")}
              aria-pressed={industryFilter === "commercial"}
            >
              Commercial &amp; Corporate
            </button>
            <button
              type="button"
              className={`px-3.5 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider whitespace-nowrap transition-colors ${industryFilter === "public" ? "bg-primary-container text-on-primary" : "bg-surface-container-low hover:bg-surface-container text-on-surface"}`}
              onClick={() => setIndustryFilter("public")}
              aria-pressed={industryFilter === "public"}
            >
              High-Sanitization &amp; Public
            </button>
            <button
              type="button"
              className={`px-3.5 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider whitespace-nowrap transition-colors ${industryFilter === "industrial" ? "bg-primary-container text-on-primary" : "bg-surface-container-low hover:bg-surface-container text-on-surface"}`}
              onClick={() => setIndustryFilter("industrial")}
              aria-pressed={industryFilter === "industrial"}
            >
              Industrial &amp; Logistics
            </button>
          </div>
          <div className="hidden xl:flex items-center gap-6 shrink-0 text-on-surface-variant font-body-sm text-body-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="">9 Verified DMV Protocols</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-surface-tint"></span>
              <span className="">Zero Disruption Scheduling</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-secondary"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                  Verified Operational Framework
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Enterprise Facility Solutions
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {" "}
              Each domain requires specialized chemistry, trained personnel, and
              disciplined execution. Explore our targeted programs below.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={
                industryFilter !== "all" && industryFilter !== "commercial"
              }
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Modern architectural corporate headquarters interior with spotless glass conference rooms, reflective polished floors, warm architectural lighting, and bespoke minimalist furniture in a prestigious Washington DC office building"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-01.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  01 // Corporate{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    corporate_fare
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    Class-A Commercial
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Corporate Offices
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  High-prestige headquarters, tech campuses, and law firms
                  requiring discreet daytime porter services or comprehensive
                  after-hours precision upkeep.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Streak-free glass boardrooms &amp; executive suite
                      hygiene{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Silent daytime porters with confidentiality
                      clearances{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={industryFilter !== "all" && industryFilter !== "public"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Immaculate modern private school classroom with neat rows of wooden desks, sanitized bright linoleum flooring, sunlit clean windows, and organized state-of-the-art educational tech"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-02.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  02 // Education{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    school
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    K-12 &amp; Higher Ed
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Educational Institutions
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  K-12 private academies, universities, and early learning
                  centers demanding non-toxic, child-safe sanitization, strict
                  background screening, and audit compliance.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Green Seal certified non-toxic surface sanitization{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      High-touch classroom pathogen mitigation programs{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={industryFilter !== "all" && industryFilter !== "public"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="286"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Sterile clinical healthcare corridor with seamless epoxy flooring, modern reception station, recessed cool white LED lighting, architectural stainless steel details, and pristine examination rooms"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-03.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  03 // Healthcare{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    local_hospital
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    Clinical &amp; Surgical
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Healthcare Facilities
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  Outpatient clinics, dental practices, and physical therapy
                  centers adhering strictly to CDC, OSHA, and infection
                  prevention bio-safety protocols.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Hospital-grade EPA List N disinfectant deployment{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Terminal cleaning &amp; cross-contamination
                      containment{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={
                industryFilter !== "all" && industryFilter !== "commercial"
              }
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Upscale boutique hotel lounge and restaurant interior with dark oak floors, warm amber architectural illumination, polished marble bar surfaces, and perfectly aligned clean tables"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-04.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  04 // Hospitality{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    restaurant
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    Dining &amp; Boutiques
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Hospitality &amp; Restaurants
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  Dining rooms, hotel common spaces, boutique lobbies, and
                  front-of-house customer touchpoints engineered for impeccable
                  guest first impressions.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Deep floor degreasing &amp; architectural brass
                      restoration{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Nightly turnkey turnover for next-day dining service{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={
                industryFilter !== "all" && industryFilter !== "commercial"
              }
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Luxury commercial fitness club interior with pristine black rubber interlocking flooring, spotless chrome exercise machines, floor-to-ceiling clean mirrors, and clear panoramic windows"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-05.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  05 // Wellness{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    fitness_center
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    Athletics &amp; Spas
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Gyms &amp; Fitness Centers
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  High-perspiration workout zones, locker rooms, saunas, rubber
                  flooring, and multi-user equipment disinfection combating
                  bacterial build-up.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Antimicrobial misting &amp; heavy rubber floor scrub
                      cycles{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Locker room sauna &amp; wet-area bio-film elimination{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={industryFilter !== "all" && industryFilter !== "public"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Imposing neo-classical governmental building entrance and high-ceiling stone foyer with grand columns, gleaming marble floors, secure turnstiles, and flags under clean architectural downlights"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-06.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  06 // Public Sector{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    account_balance
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    Municipal &amp; Regional
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Government Buildings
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  Secure regional offices, municipal chambers, and civic
                  facilities demanding background-vetted personnel, strict
                  chain-of-custody, and protocol adherence.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Full background clearance &amp; badged access teams{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Council chamber &amp; civic gallery preservation{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={industryFilter !== "all" && industryFilter !== "public"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Serene modern sanctuary with warm natural wood pews, clean polished terrazzo central aisle, softly filtered architectural sunlight, orderly altar, and high vaulted ceilings"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-07.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  07 // Worship{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    church
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    Faith &amp; Fellowship
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Churches &amp; Houses of Worship
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  Sanctuaries, fellowship halls, multi-use community classrooms,
                  and event-ready gathering halls requiring respectful, flexible
                  weekend schedules.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Pre- and post-service rapid turnover scheduling{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Specialized wood pew, carpet, and brass surface care{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={
                industryFilter !== "all" && industryFilter !== "commercial"
              }
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="High-end organic supermarket wide aisle with mirror-polished concrete floors, illuminated display shelving, sanitized produce stations, and clean stainless architectural refrigeration cases"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-08.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  08 // Retail Grocery{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    local_grocery_store
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    Food Retail
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Supermarkets &amp; Grocery Stores
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  Polished retail aisles, food prep areas, refrigeration
                  perimeters, and customer checkout hygiene calibrated to
                  surpass USDA and local health audits.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Automated auto-scrubber polished concrete maintenance{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Food-safe prep surface &amp; deli sanitation
                      compliance{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300 group"
              hidden={
                industryFilter !== "all" && industryFilter !== "industrial"
              }
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Grand commercial logistics fulfillment warehouse interior with ultra-clean polished concrete central lane, towering multi-tier pallet racking, bright overhead industrial luminaires, and clean floor line markings"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/industries-09.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-primary font-label-sm text-label-sm uppercase tracking-wider">
                  {" "}
                  09 // Logistics{" "}
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    warehouse
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider">
                    Logistics &amp; Distribution
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  Warehouse &amp; Industrial
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {" "}
                  Distribution centers, logistics hubs, and fulfillment
                  facilities requiring heavy-duty concrete scrubbing, dust
                  management, and safety line upkeep.{" "}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-2.5 bg-surface-container-low/40 -mx-6 -mb-6 p-6">
                  <div className="text-[12px] font-semibold text-primary uppercase tracking-wider">
                    Tailored Protocols:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      High-bay overhead dust extraction &amp; ventilation
                      care{" "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-[15px] text-secondary"
                        aria-hidden="true"
                      >
                        check
                      </span>{" "}
                      Industrial ride-on sweeping for 50k+ sq.ft spans{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-16">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-4 shadow-sm">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  verified_user
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                100% Vetted Staff
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {" "}
                Full federal and local background checks, uniformed identity,
                and NDA compliance across all accounts.{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-4 shadow-sm">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  science
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Targeted Chemistry
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {" "}
                Zero cross-contamination policy utilizing color-coded microfiber
                and hospital-grade EPA registrations.{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-4 shadow-sm">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  schedule
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Zero Interruption
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {" "}
                Precision scheduling matched strictly to your shift patterns,
                weekend services, and operating lulls.{" "}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-4 shadow-sm">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  analytics
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Digital Inspections
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {" "}
                Real-time supervisor inspection scorecards accessible directly
                by your facility management desk.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-primary-container text-on-primary py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-secondary-fixed"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed">
                  DMV Commercial Coverage
                </span>
              </div>
              <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary mb-4 leading-tight">
                {" "}
                Need a custom specification for your industry?{" "}
              </h2>
              <p className="font-body-lg text-body-lg text-secondary-fixed-dim max-w-xl">
                {" "}
                Our facilities team develops customized scopes of work, chemical
                guidelines, and site inspection schedules tailored strictly to
                your building’s requirements.{" "}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-widest hover:bg-secondary-fixed transition-[color,background-color,box-shadow,transform] duration-200 group shadow-md"
                to="/request-a-proposal"
              >
                <span className="">Request a Proposal</span>
                <span
                  className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-surface-container-low/10 text-on-primary font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container-low/20 transition-[color,background-color,box-shadow,transform] duration-200"
                to="/contact"
              >
                <span className="">Speak with a Director</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
