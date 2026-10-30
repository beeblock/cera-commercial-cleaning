import SectionLink from "../components/SectionLink";
import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import { useState } from "react";

export default function ServicesPage() {
  const [filter, setFilter] = useState("all");
  const [squareFeet, setSquareFeet] = useState(25000);
  const [frequency, setFrequency] = useState(5);
  let crew = Math.max(1, Math.round(squareFeet / 10000));
  if (frequency === 7) crew = Math.round(crew * 1.5);
  if (frequency === 3) crew = Math.max(1, Math.round(crew * 0.7));
  const auditFrequency =
    squareFeet >= 60000 || frequency === 7
      ? "Weekly"
      : squareFeet >= 20000
        ? "Bi-Weekly"
        : "Monthly";
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 z-0 opacity-25">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Ultra-clean architectural commercial interior of a Class-A corporate office building lobby with polished terrazzo floors, floor-to-ceiling glass facades, disciplined geometric lighting fixtures, and pristine reflective surfaces in subtle navy and cool white tones."
            style={{
              backgroundImage:
                "url('" + asset("images/services-01.webp") + "')",
            }}
          ></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col items-start gap-space-lg">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-[2px] bg-secondary-container"></span>
            <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-container">
              Commercial Facility Solutions
            </span>
          </div>
          <div className="max-w-3xl flex flex-col gap-space-md">
            <h1 className="font-display-hero text-display-hero text-on-primary tracking-tight">
              {" "}
              Comprehensive Cleaning Solutions{" "}
              <span className="font-bold block mt-1">for Every Business.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl">
              {" "}
              Tailored commercial janitorial and facility maintenance programs
              engineered for consistency, compliance, and pristine workplace
              presentation across Washington DC, Maryland, and Virginia.{" "}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <Link
              className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-container transition-[color,background-color,box-shadow,transform] duration-200 group shadow-sm"
              to="/request-a-proposal"
            >
              <span className="">Request a Proposal</span>
              <span
                className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
            <SectionLink
              className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container-lowest/10 text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-lowest/20 backdrop-blur-sm transition-[color,background-color,box-shadow,transform] duration-200"
              href="#service-catalog"
            >
              <span className="">View All Capabilities</span>
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden="true"
              >
                expand_more
              </span>
            </SectionLink>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest shadow-sm">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface hover:bg-surface-container-low transition-colors duration-150">
              <div className="flex items-center gap-2 text-primary-container">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  100% Insured
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Comprehensive $5M liability and full worker bonding.
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface hover:bg-surface-container-low transition-colors duration-150">
              <div className="flex items-center gap-2 text-primary-container">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  schedule
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  24/7 Dispatch
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Rapid response operations desk across DMV metros.
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface hover:bg-surface-container-low transition-colors duration-150">
              <div className="flex items-center gap-2 text-primary-container">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  medical_services
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  EPA &amp; CDC Compliant
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Hospital-grade disinfectants and OSHA-tested protocol.
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface hover:bg-surface-container-low transition-colors duration-150">
              <div className="flex items-center gap-2 text-primary-container">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  checklist
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Digital Audit Trail
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Cloud-based supervisor sign-offs and punch-list records.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-20" id="service-catalog">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-space-lg">
            <div className="flex flex-col gap-space-xs max-w-xl">
              <div className="flex items-center gap-space-sm">
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                  Specialized Scope
                </span>
                <span className="w-8 h-[1px] bg-secondary-container"></span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Interactive Service Catalog
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                Explore dedicated operational capabilities configured for
                commercial environments, institutional complexes, and clinical
                settings.{" "}
              </p>
            </div>
            <div
              className="flex flex-wrap items-center gap-space-xs bg-surface-container p-1 rounded-lg self-start md:self-auto"
              id="filter-container"
            >
              <button
                data-filter="all"
                type="button"
                className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors duration-150 ${filter === "all" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest"}`}
                onClick={() => setFilter("all")}
                aria-pressed={filter === "all"}
              >
                All (8)
              </button>
              <button
                data-filter="routine"
                type="button"
                className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors duration-150 ${filter === "routine" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest"}`}
                onClick={() => setFilter("routine")}
                aria-pressed={filter === "routine"}
              >
                Janitorial
              </button>
              <button
                data-filter="clinical"
                type="button"
                className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors duration-150 ${filter === "clinical" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest"}`}
                onClick={() => setFilter("clinical")}
                aria-pressed={filter === "clinical"}
              >
                Specialty
              </button>
              <button
                data-filter="heavy"
                type="button"
                className={`filter-btn px-4 py-2 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors duration-150 ${filter === "heavy" ? "bg-primary-container text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest"}`}
                onClick={() => setFilter("heavy")}
                aria-pressed={filter === "heavy"}
              >
                Industrial
              </button>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg"
            id="services-grid"
          >
            <article
              className="service-card group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-200 overflow-hidden"
              data-category="routine"
              hidden={filter !== "all" && filter !== "routine"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Immaculate modern office interior with polished minimalist desks, ergonomic task seating, glass partitions, and gleaming reflective floors under bright architectural ambient ceiling light in cool navy and white hues"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/services-02.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                    Class-A Commercial
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-space-lg gap-space-md justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      business
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Facility Janitorial
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                    Office Cleaning
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Routine janitorial, desk sanitization, conference rooms,
                    trash disposal, restock, and day porter staffing.{" "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 mb-space-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Cadence
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Daily / Weekly / Custom
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Staffing
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Day Porters &amp; Night Crew
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center justify-between w-full p-2 rounded-lg text-primary-container hover:bg-surface-container-low font-label-md text-label-md uppercase tracking-wider transition-colors"
                    to="/request-a-proposal"
                  >
                    <span className="">Configure Scope</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
            <article
              className="service-card group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-200 overflow-hidden"
              data-category="routine"
              hidden={filter !== "all" && filter !== "routine"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Upscale luxury retail storefront with spotless glass display cases, pristine gleaming marble floors, designer track lighting, and perfectly aligned apparel racks in a pristine high-end shopping district"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/services-03.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                    Customer-Facing
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-space-lg gap-space-md justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      storefront
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Showroom Quality
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                    Retail Store Cleaning
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Customer-ready floor maintenance, display dusting, fitting
                    room hygiene, and high-traffic sparkle.{" "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 mb-space-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Cadence
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Pre-Opening / Off-Hours
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Focus
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Glass, Flooring, Cash Wraps
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center justify-between w-full p-2 rounded-lg text-primary-container hover:bg-surface-container-low font-label-md text-label-md uppercase tracking-wider transition-colors"
                    to="/request-a-proposal"
                  >
                    <span className="">Configure Scope</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
            <article
              className="service-card group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-200 overflow-hidden"
              data-category="clinical"
              hidden={filter !== "all" && filter !== "clinical"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Sterile clinical hospital corridor and modern examination suites with immaculate seamless vinyl flooring, medical-grade cabinetry, bright recessed LED illumination, and flawless hygiene standards"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/services-04.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-error">
                    Sterile &amp; Compliant
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-space-lg gap-space-md justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      local_hospital
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Healthcare Grade
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                    Medical Facility Cleaning
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Terminal cleaning protocols, sanitized patient waiting
                    areas, exam room compliance, and bio-hazard
                    consciousness.{" "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 mb-space-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Compliance
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        HIPAA, CDC, OSHA Rigor
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Sanitization
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Hospital Broad-Spectrum
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center justify-between w-full p-2 rounded-lg text-primary-container hover:bg-surface-container-low font-label-md text-label-md uppercase tracking-wider transition-colors"
                    to="/request-a-proposal"
                  >
                    <span className="">Configure Scope</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
            <article
              className="service-card group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-200 overflow-hidden"
              data-category="routine"
              hidden={filter !== "all" && filter !== "routine"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Sunlit modern educational campus classroom with spotless organized desks, clean natural wood textures, spotless tiled floors, and pristine whiteboards under bright daylight"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/services-05.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                    Safe &amp; Non-Toxic
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-space-lg gap-space-md justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      school
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Educational Campus
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                    School &amp; Daycare Cleaning
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Child-safe disinfectant protocols, classroom hygiene,
                    restrooms, cafeterias, and high-touch surface
                    disinfection.{" "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 mb-space-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Formulations
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Green Seal Certified
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Security
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Background Checked Staff
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center justify-between w-full p-2 rounded-lg text-primary-container hover:bg-surface-container-low font-label-md text-label-md uppercase tracking-wider transition-colors"
                    to="/request-a-proposal"
                  >
                    <span className="">Configure Scope</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
            <article
              className="service-card group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-200 overflow-hidden"
              data-category="heavy"
              hidden={filter !== "all" && filter !== "heavy"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Massive high-bay industrial distribution center with sealed glossy concrete floors, towering organized pallet racks, immaculate yellow safety demarcations, and uniform industrial LED luminaires"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/services-06.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                    Heavy Duty
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-space-lg gap-space-md justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      warehouse
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Logistics &amp; Plants
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                    Warehouse &amp; Industrial
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Heavy-duty floor scrubbing, warehouse aisle sweeping, staff
                    breakrooms, loading dock janitorial, and industrial safety
                    compliance.{" "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 mb-space-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Equipment
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Ride-on Auto-Scrubbers
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Scale
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Up to 1,000,000+ sq ft
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center justify-between w-full p-2 rounded-lg text-primary-container hover:bg-surface-container-low font-label-md text-label-md uppercase tracking-wider transition-colors"
                    to="/request-a-proposal"
                  >
                    <span className="">Configure Scope</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
            <article
              className="service-card group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-200 overflow-hidden"
              data-category="heavy"
              hidden={filter !== "all" && filter !== "heavy"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Newly completed architectural building interior during turnover with floor-to-ceiling clean glass windows, pristine drywalls, dust-free custom architectural millwork, and bright sunlight streaming through pristine glass"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/services-07.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                    Turnover Ready
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-space-lg gap-space-md justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      construction
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Phase Turnover
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                    Post-Construction Cleaning
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Rough, final, and touch-up cleans, paint splatter removal,
                    dust extraction, window washing, and punch-list
                    readiness.{" "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 mb-space-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Stages
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Rough, Final &amp; Touch-up
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Deliverable
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Tenant Punch-List Cleared
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center justify-between w-full p-2 rounded-lg text-primary-container hover:bg-surface-container-low font-label-md text-label-md uppercase tracking-wider transition-colors"
                    to="/request-a-proposal"
                  >
                    <span className="">Configure Scope</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
            <article
              className="service-card group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-200 overflow-hidden"
              data-category="clinical"
              hidden={filter !== "all" && filter !== "clinical"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Gleaming commercial office lobby floor with mirrored wax finish, pristine polished terrazzo and deep-cleaned commercial carpet tiles under bright overhead modern lighting with spotless reflection"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/services-08.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                    Surface Restoration
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-space-lg gap-space-md justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      layers
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Deep Restoration
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                    Carpet &amp; Floor Care
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Stripping, waxing, buffing, deep hot water extraction, tile
                    and grout scrub, and preventative floor sealants.{" "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 mb-space-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Processes
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Strip, Wax, Seal &amp; Extract
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Longevity
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        Protective Clear Sealers
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center justify-between w-full p-2 rounded-lg text-primary-container hover:bg-surface-container-low font-label-md text-label-md uppercase tracking-wider transition-colors"
                    to="/request-a-proposal"
                  >
                    <span className="">Configure Scope</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
            <article
              className="service-card group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-200 overflow-hidden"
              data-category="clinical"
              hidden={filter !== "all" && filter !== "clinical"}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="High-tech facility sanitization using precision electrostatic misting equipment in a sleek commercial corporate workspace with pristine ambient glass and immaculate surfaces"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/services-09.webp")}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">
                    Bio-Defense
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-space-lg gap-space-md justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      sanitizer
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Pathogen Elimination
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                    Disinfection &amp; Sanitization
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Electrostatic spraying, EPA-registered hospital-grade
                    disinfectants, outbreak mitigation, and routine touch-point
                    sterilization.{" "}
                  </p>
                </div>
                <div className="pt-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1 mb-space-sm">
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Technology
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        360° Electrostatic Charge
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span className="font-label-sm text-label-sm uppercase">
                        Efficacy
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-secondary">
                        99.999% Pathogen Kill Rate
                      </span>
                    </div>
                  </div>
                  <Link
                    className="inline-flex items-center justify-between w-full p-2 rounded-lg text-primary-container hover:bg-surface-container-low font-label-md text-label-md uppercase tracking-wider transition-colors"
                    to="/request-a-proposal"
                  >
                    <span className="">Configure Scope</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-16">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-md flex flex-col lg:flex-row items-center gap-space-xl">
            <div className="flex flex-col gap-space-sm lg:w-1/2">
              <div className="flex items-center gap-space-sm">
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                  Rapid Configuration
                </span>
                <span className="w-6 h-[1px] bg-secondary-container"></span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Estimate Your Maintenance Footprint
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                Select your square footage and service frequency to instantly
                see our recommended operational staffing model and dedicated
                oversight structure.{" "}
              </p>
              <div className="flex flex-col gap-space-md mt-space-sm">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-md text-label-md text-on-surface">
                      Facility Size
                    </span>
                    <span
                      className="font-label-md text-label-md text-primary-container font-bold"
                      id="sqft-display"
                    >
                      {squareFeet.toLocaleString("en-US")} sq ft
                    </span>
                  </div>
                  <input
                    className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-[#071F38]"
                    id="sqft-slider"
                    max="100000"
                    min="5000"
                    step="5000"
                    type="range"
                    aria-label="Facility size in square feet"
                    value={squareFeet}
                    onChange={(event) =>
                      setSquareFeet(Number(event.target.value))
                    }
                  />
                </div>
                <div>
                  <span className="font-label-md text-label-md text-on-surface block mb-2">
                    Service Frequency
                  </span>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm"
                    id="freq-buttons"
                  >
                    <button
                      data-freq="3"
                      type="button"
                      className={`freq-btn py-2 px-3 rounded-lg text-center font-label-md text-label-md uppercase transition-colors ${frequency === 3 ? "bg-primary-container text-on-primary font-bold shadow-sm" : "bg-surface-container-low text-on-surface hover:bg-secondary-container"}`}
                      onClick={() => setFrequency(3)}
                      aria-pressed={frequency === 3}
                    >
                      3x Weekly
                    </button>
                    <button
                      data-freq="5"
                      type="button"
                      className={`freq-btn py-2 px-3 rounded-lg text-center font-label-md text-label-md uppercase transition-colors ${frequency === 5 ? "bg-primary-container text-on-primary font-bold shadow-sm" : "bg-surface-container-low text-on-surface hover:bg-secondary-container"}`}
                      onClick={() => setFrequency(5)}
                      aria-pressed={frequency === 5}
                    >
                      5x Daily (M-F)
                    </button>
                    <button
                      data-freq="7"
                      type="button"
                      className={`freq-btn py-2 px-3 rounded-lg text-center font-label-md text-label-md uppercase transition-colors ${frequency === 7 ? "bg-primary-container text-on-primary font-bold shadow-sm" : "bg-surface-container-low text-on-surface hover:bg-secondary-container"}`}
                      onClick={() => setFrequency(7)}
                      aria-pressed={frequency === 7}
                    >
                      7x 24/7 Ops
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-space-sm">
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  Recommended Allocation
                </span>
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>{" "}
                  CERA Standard{" "}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Recommended Crew
                  </span>
                  <span
                    className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1"
                    id="crew-count"
                  >
                    {crew} {crew === 1 ? "Specialist" : "Specialists"}
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary mt-1">
                    Vetted &amp; Badged
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Dedicated Supervisor
                  </span>
                  <span
                    className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1"
                    id="audit-freq"
                  >
                    {auditFrequency}
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary mt-1">
                    Direct Point of Contact
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-space-xs">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-[18px] text-secondary"
                    aria-hidden="true"
                  >
                    verified
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    Includes Full Consumables Logistics
                  </span>
                </div>
                <Link
                  className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-wider text-primary-container font-semibold hover:text-secondary transition-colors"
                  to="/request-a-proposal"
                >
                  <span className="">Lock in Quote</span>
                  <span
                    className="material-symbols-outlined text-[16px]"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-20">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex flex-col gap-space-xl">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto">
            <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
              Architectural Hygiene Protocol
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Service Delivery Framework
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {" "}
              We treat facility maintenance as a high-precision operational
              science with four disciplined pillars that eliminate variability
              and ensure accountability.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="flex flex-col p-space-lg rounded-xl bg-surface hover:bg-surface-container transition-[color,background-color,box-shadow,transform] duration-200 shadow-sm relative overflow-hidden group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary-container flex items-center justify-center mb-space-md shadow-sm group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  assignment_turned_in
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">
                01 / Foundation
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                Custom Scope of Work
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                {" "}
                Engineered architectural site mapping tailored specifically to
                your building footprint, traffic patterns, security clearances,
                and surface materials.{" "}
              </p>
              <div className="mt-space-md pt-space-sm flex items-center gap-2 text-secondary">
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  check_circle
                </span>
                <span className="font-label-sm text-label-sm">
                  Bespoke SLA Documentation
                </span>
              </div>
            </div>
            <div className="flex flex-col p-space-lg rounded-xl bg-surface hover:bg-surface-container transition-[color,background-color,box-shadow,transform] duration-200 shadow-sm relative overflow-hidden group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary-container flex items-center justify-center mb-space-md shadow-sm group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  supervisor_account
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">
                02 / Leadership
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                Dedicated Operations Supervisors
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                {" "}
                A single, experienced operational manager assigned directly to
                your property portfolio to coordinate schedules, audits, and
                emergency dispatches.{" "}
              </p>
              <div className="mt-space-md pt-space-sm flex items-center gap-2 text-secondary">
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  check_circle
                </span>
                <span className="font-label-sm text-label-sm">
                  Single Line of Accountability
                </span>
              </div>
            </div>
            <div className="flex flex-col p-space-lg rounded-xl bg-surface hover:bg-surface-container transition-[color,background-color,box-shadow,transform] duration-200 shadow-sm relative overflow-hidden group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary-container flex items-center justify-center mb-space-md shadow-sm group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  fact_check
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">
                03 / Verification
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                Quality Inspection Checklists
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                {" "}
                Standardized, multi-point digital scoring audits conducted
                unannounced and shared via real-time customer dashboards for
                complete transparency.{" "}
              </p>
              <div className="mt-space-md pt-space-sm flex items-center gap-2 text-secondary">
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  check_circle
                </span>
                <span className="font-label-sm text-label-sm">
                  Real-time Digital Scoring
                </span>
              </div>
            </div>
            <div className="flex flex-col p-space-lg rounded-xl bg-surface hover:bg-surface-container transition-[color,background-color,box-shadow,transform] duration-200 shadow-sm relative overflow-hidden group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary-container flex items-center justify-center mb-space-md shadow-sm group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[24px]"
                  aria-hidden="true"
                >
                  inventory_2
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">
                04 / Logistics
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                Transparent Supply Management
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                {" "}
                Automated monitoring, proactive ordering, and precise restocking
                of hand soaps, towels, sanitizers, and heavy janitorial
                chemicals without stockouts.{" "}
              </p>
              <div className="mt-space-md pt-space-sm flex items-center gap-2 text-secondary">
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  check_circle
                </span>
                <span className="font-label-sm text-label-sm">
                  Automated Inventory Replenish
                </span>
              </div>
            </div>
          </div>
          <div className="mt-space-md p-space-lg rounded-xl bg-surface-container flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  sync
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  Seamless 14-Day Transition Guarantee
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Switching commercial providers is effortless. We assume
                  operational responsibilities without tenant disruption.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-md shrink-0">
              <Link
                className="font-label-md text-label-md uppercase tracking-wider text-primary-container hover:text-secondary flex items-center gap-1 transition-colors"
                to="/our-standards"
              >
                <span className="">Read Audit Standards</span>
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-16">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="relative bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col md:flex-row items-center gap-space-xl overflow-hidden">
            <div className="w-full md:w-1/3 aspect-[4/3] rounded-lg overflow-hidden shrink-0">
              <img
                width="512"
                height="279"
                className="w-full h-full object-cover"
                alt="Immaculate glass corporate headquarters atrium in Washington DC with clean granite pillars, minimalist architectural finishes, and gleaming spotless polished floors under morning sunshine"
                loading="lazy"
                decoding="async"
                src={asset("images/services-10.webp")}
              />
            </div>
            <div className="flex flex-col gap-space-md flex-1">
              <div className="flex items-center gap-1 text-secondary">
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  aria-hidden="true"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface italic font-normal leading-relaxed">
                {" "}
                "CERA brought institutional precision back to our multi-tenant
                portfolio. Their digital checklists, responsive supervisors, and
                spotless floor care set a standard our tenants noticed in week
                one."{" "}
              </p>
              <div className="flex items-center justify-between pt-space-xs">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface block font-bold">
                    Marcus Sterling
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Director of Asset Management, Capital Towers DC
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                  420,000 SQ FT UNDER CARE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#071F38] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Architectural exterior of a prestigious commercial glass and steel office high-rise building at dusk with illuminated offices and spotless pristine courtyard grounds in deep navy twilight tones."
            style={{
              backgroundImage:
                "url('" + asset("images/services-11.webp") + "')",
            }}
          ></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex flex-col md:flex-row md:items-center md:justify-between gap-space-xl">
          <div className="flex flex-col gap-space-sm max-w-2xl">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-[2px] bg-secondary-container"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-container">
                Commercial Real Estate &amp; Facilities
              </span>
            </div>
            <h2 className="font-display-hero text-display-hero tracking-tight text-white">
              {" "}
              Ready to elevate your facility's standards?{" "}
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high max-w-xl">
              {" "}
              Get a tailored walkthrough, detailed scope mapping, and a
              transparent commercial proposal designed around your building's
              operational needs.{" "}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-space-md shrink-0">
            <Link
              className="inline-flex items-center justify-center gap-space-xs px-8 py-4 rounded-lg bg-white text-[#071F38] font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-container hover:text-[#071F38] transition-[color,background-color,box-shadow,transform] duration-200 group shadow-lg"
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
            <div className="flex items-center gap-space-sm text-surface-container-high">
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                verified_user
              </span>
              <span className="font-body-sm text-body-sm">
                Complimentary Site Audit • Rapid 24h Turnaround
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
