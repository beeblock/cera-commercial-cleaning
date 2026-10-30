import SectionLink from "../components/SectionLink";
import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

export default function StandardsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-primary-container text-on-primary -mt-20 pt-32 pb-24 lg:pb-32 px-margin-sm md:px-margin lg:px-margin-lg">
        <div
          className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none"
          data-alt="High-end pristine architectural glass skyscraper atrium with polished granite floors, bright ambient natural daylighting, reflections, structural symmetry, clean corporate minimalism in deep navy and cool steel tones."
          style={{
            backgroundImage:
              "url('" + asset("images/our-standards-01.webp") + "')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/90 to-primary-container/60 z-0"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto w-full flex flex-col items-start gap-space-lg">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-[2px] bg-secondary-fixed"></span>
            <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed">
              Systematic Hygiene Management
            </span>
          </div>
          <div className="max-w-4xl space-y-space-md">
            <h1 className="font-display-hero text-display-hero text-on-primary">
              {" "}
              A Higher Standard{" "}
              <span className="font-semibold block sm:inline text-secondary-fixed">
                You Can See.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl leading-relaxed">
              {" "}
              Systematic quality management that turns routine janitorial work
              into a verifiable science of cleanliness, health, and facility
              preservation.{" "}
            </p>
          </div>
          <div className="pt-space-md flex flex-wrap items-center gap-space-md">
            <Link
              className="inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-lg bg-surface text-primary-container font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed transition-[color,background-color,box-shadow,transform] duration-200 group shadow-md"
              to="/request-a-proposal"
            >
              <span className="">Request an Audit &amp; Proposal</span>
              <span
                className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
            <SectionLink
              className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-md text-on-primary font-label-md text-label-md uppercase tracking-wider transition-[color,background-color,box-shadow,transform] duration-200"
              href="#four-pillars"
            >
              <span className="">Explore Pillars</span>
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                south
              </span>
            </SectionLink>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest text-on-surface py-space-xl shadow-sm">
        <div className="max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg">
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  Inspection Protocol
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-[20px]"
                  aria-hidden="true"
                >
                  verified
                </span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary-container">
                100%
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Documented supervisor audits on every active facility contract.
              </p>
            </div>
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  Air Quality
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-[20px]"
                  aria-hidden="true"
                >
                  air
                </span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary-container">
                99.97%
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Particle capture efficiency via standardized multi-stage HEPA
                filtration.
              </p>
            </div>
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  Cross-Contamination
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-[20px]"
                  aria-hidden="true"
                >
                  sanitizer
                </span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary-container">
                0-Zone
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Strict 4-tier color-coded microfiber compartmentalization.
              </p>
            </div>
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  SLA Resolution
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-[20px]"
                  aria-hidden="true"
                >
                  timer
                </span>
              </div>
              <span className="font-headline-lg text-headline-lg text-primary-container">
                &lt; 60m
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Escalation turnaround guaranteed by dedicated client executives.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-24 bg-surface text-on-surface"
        id="four-pillars"
      >
        <div className="max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
            <div className="max-w-2xl space-y-space-xs">
              <div className="flex items-center gap-space-sm">
                <span className="w-6 h-[2px] bg-secondary"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                  Institutional Governance
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary-container">
                The Four Pillars of Quality
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {" "}
                Our operational infrastructure transforms commercial facility
                sanitization from an unpredictable service into an engineered
                standard.{" "}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-space-sm bg-surface-container-low p-1.5 rounded-lg text-secondary">
              <span className="font-label-sm text-label-sm uppercase px-space-sm py-1 rounded bg-surface-container-lowest shadow-sm text-primary-container">
                Audited Protocol
              </span>
              <span className="font-label-sm text-label-sm uppercase px-space-sm py-1 text-on-surface-variant">
                ISO Rigor
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Pillar 01
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span
                      className="material-symbols-outlined text-[20px]"
                      aria-hidden="true"
                    >
                      badge
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-space-xs">
                    People
                  </h3>
                  <p className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                    Vetted &amp; Trained Specialists
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Every facility technician undergoes comprehensive multi-tier
                  background screening, national ID verification, and rigorous
                  safety vetting prior to placement.{" "}
                </p>
                <ul className="space-y-space-sm pt-space-xs">
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      Standardized uniform &amp; visible badging code
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      OSHA 10/30-compliant hazardous chemical training
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      Class-A corporate etiquette &amp; silent operational
                      protocol
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-low/40 -mx-space-xl -mb-space-xl p-space-md rounded-b-xl">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  Retention Index: 94.2%
                </span>
              </div>
            </div>
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Pillar 02
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span
                      className="material-symbols-outlined text-[20px]"
                      aria-hidden="true"
                    >
                      science
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-space-xs">
                    Processes
                  </h3>
                  <p className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                    Scientific Methodology
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Engineered cleaning sequencing eliminates microbial path
                  transfers through precise spatial zoning, verified dilution,
                  and equipment standards.{" "}
                </p>
                <ul className="space-y-space-sm pt-space-xs">
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      Color-coded microfiber cross-contamination barrier
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      True HEPA-filtration backpack vacuum equipment
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      Automated proportioned chemical dispensing units
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-low/40 -mx-space-xl -mb-space-xl p-space-md rounded-b-xl">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  Protocol Version: CERA-STD v4
                </span>
              </div>
            </div>
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Pillar 03
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span
                      className="material-symbols-outlined text-[20px]"
                      aria-hidden="true"
                    >
                      fact_check
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-space-xs">
                    Quality
                  </h3>
                  <p className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                    Verified Verification
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Every shift concludes with verifiable telemetry. Supervisors
                  utilize standardized scoring checklists tied directly to
                  facility service-level contracts.{" "}
                </p>
                <ul className="space-y-space-sm pt-space-xs">
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      On-site field supervisor inspections every shift
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      Documented numerical audit scores logged digitally
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      GPS time-stamped arrival &amp; room completion logs
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-low/40 -mx-space-xl -mb-space-xl p-space-md rounded-b-xl">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  Target Audit Minimum: 98.5%
                </span>
              </div>
            </div>
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Pillar 04
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                    <span
                      className="material-symbols-outlined text-[20px]"
                      aria-hidden="true"
                    >
                      handshake
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-space-xs">
                    Accountability
                  </h3>
                  <p className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                    Transparent Governance
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Commercial property managers avoid bureaucratic runarounds.
                  You maintain a direct escalation hierarchy anchored by an
                  assigned dedicated liaison.{" "}
                </p>
                <ul className="space-y-space-sm pt-space-xs">
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      Single dedicated Point of Contact (Account Manager)
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      Rapid escalation matrix with direct supervisor dispatch
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="">
                      Quarterly executive operational SLA reviews
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-low/40 -mx-space-xl -mb-space-xl p-space-md rounded-b-xl">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                  Escalation Response: 15 Mins
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-28 bg-surface-container-low text-on-surface relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-5 space-y-space-lg">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>{" "}
                Zero-Tolerance Hygiene Focus{" "}
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary-container leading-tight">
                {" "}
                Micro-Precision in Macroscopic Workplaces.{" "}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                Standard janitorial services clean surfaces that catch the
                immediate eye. CERA architects sanitize the exact vectors where
                cross-contamination, airborne dust colonies, and high-frequency
                tactile exposure occur.{" "}
              </p>
              <div className="space-y-space-sm pt-space-sm">
                <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                    Door Hardware &amp; Push Plates
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent text-secondary font-bold">
                    100% DISINFECTED
                  </span>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                    Baseboard Edge &amp; Corner Fillets
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent text-secondary font-bold">
                    DETAIL VACUUMED
                  </span>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                    Ceiling Air Return Diffusers
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent text-secondary font-bold">
                    MICRO-CLEARED
                  </span>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                    Faucet Aerators &amp; Drain Trim
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent text-secondary font-bold">
                    DESCALED &amp; STERILIZED
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="p-space-xl md:p-14 rounded-2xl bg-surface-container-lowest shadow-md relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-secondary-fixed/50 blur-2xl pointer-events-none"></div>
                <div className="flex items-center gap-space-xs text-secondary mb-space-lg">
                  <span
                    className="material-symbols-outlined text-[24px]"
                    aria-hidden="true"
                  >
                    architecture
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest">
                    Architectural Manifesto
                  </span>
                </div>
                <blockquote className="font-headline-lg text-headline-lg md:text-headline-xl text-primary-container font-light leading-snug tracking-tight">
                  {" "}
                  “The difference between clean and{" "}
                  <span className="font-semibold text-secondary">
                    truly hygienic
                  </span>{" "}
                  lies in the unseen details: door hardware touchpoints,
                  baseboard corners, air return grilles, and faucet
                  aerators.”{" "}
                </blockquote>
                <div className="mt-space-xl pt-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                  <div>
                    <span className="block font-headline-sm text-headline-sm text-on-surface font-semibold">
                      CERA Quality Engineering Council
                    </span>
                    <span className="block font-body-sm text-body-sm text-on-surface-variant">
                      Class-A Commercial Property Standards Division
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs text-secondary">
                    <span
                      className="material-symbols-outlined text-[20px]"
                      aria-hidden="true"
                    >
                      verified_user
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      Zero-Defect Goal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-surface text-on-surface">
        <div className="max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="max-w-3xl space-y-space-xs mb-space-xl">
            <div className="flex items-center gap-space-sm">
              <span className="w-6 h-[2px] bg-secondary"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                Micro-Zoned Operational Rigor
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary-container">
              Core Service Quality Focus Areas
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {" "}
              Explore the exacting physical standards applied to each zone
              within your commercial envelope.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300 flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="Corporate office glass double entrance doors, flawless floor-to-ceiling glass, pristine granite lobby floor reflection, gleaming modern reception desk with warm minimalist lighting, architectural photography"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/our-standards-02.webp")}
                />
                <span className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-sm text-on-primary font-label-sm text-label-sm uppercase px-space-sm py-1 rounded">
                  Zone 01
                </span>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-wider block mb-1">
                    First Impressions
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary-container">
                    Entrances &amp; Lobbies
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    {" "}
                    Creating an immaculate, high-prestige arrival environment
                    that reinforces your tenant and guest experience every
                    single morning.{" "}
                  </p>
                </div>
                <ul className="space-y-space-xs pt-space-xs text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Flawless, streak-free glass doors and side-lights
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Immaculate recessed walk-off matting
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Gleaming stone surfaces and polished reception consoles
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Fingerprint-free brass and steel touchpoints
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300 flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="High-end corporate commercial modern restroom with polished chrome faucets, pristine white quartz vanity counters, backlit mirrors, spotless subway tile grout, perfectly clean, architectural lighting"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/our-standards-03.webp")}
                />
                <span className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-sm text-on-primary font-label-sm text-label-sm uppercase px-space-sm py-1 rounded">
                  Zone 02
                </span>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-wider block mb-1">
                    Aseptic Sanitation
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary-container">
                    Restrooms &amp; Sanitary
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    {" "}
                    Hospital-grade pathogen control, zero biological residue,
                    active odor neutralizing, and spotless visual
                    presentation.{" "}
                  </p>
                </div>
                <ul className="space-y-space-xs pt-space-xs text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Hospital-grade quaternary disinfection systems
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Continuous molecular odor neutralizing agents
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Buffed chrome spigots, flushometers, and mirrors
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Deep antimicrobial grout restoration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300 flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="Clean corporate open plan workplace with rows of clean desks, organized ergonomic chairs, spotless monitors, orderly conference rooms behind glass partitions, peaceful and tidy environment"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/our-standards-04.webp")}
                />
                <span className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-sm text-on-primary font-label-sm text-label-sm uppercase px-space-sm py-1 rounded">
                  Zone 03
                </span>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-wider block mb-1">
                    Productivity Spaces
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary-container">
                    Workspaces &amp; Offices
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    {" "}
                    Quiet, non-invasive sanitization of executive suites, open
                    floor plans, and technology-dense meeting zones.{" "}
                  </p>
                </div>
                <ul className="space-y-space-xs pt-space-xs text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Electrostatic dust removal from monitors and desktops
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Sanitized shared peripheral contact surfaces
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Lined waste &amp; recyclables emptied without disruption
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Boardroom whiteboards cleaned and chairs aligned
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300 flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="Modern corporate cafeteria breakroom with stainless steel appliances, spotless quartz kitchen island, clean dining seating, warm pendant lamps, spotless hygienic finish, architectural photography"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/our-standards-05.webp")}
                />
                <span className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-sm text-on-primary font-label-sm text-label-sm uppercase px-space-sm py-1 rounded">
                  Zone 04
                </span>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                <div>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-wider block mb-1">
                    Culinary Hygiene
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary-container">
                    Breakrooms &amp; Kitchens
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    {" "}
                    Food-contact safe sanitization preventing
                    cross-contamination, grease film accumulation, and organic
                    odor generation.{" "}
                  </p>
                </div>
                <ul className="space-y-space-xs pt-space-xs text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      EPA-registered surface sanitization for preparation tables
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Microwave, refrigerator exterior &amp; coffee bar
                      degreasing
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Stainless sink descaling and disposal purification
                    </span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[16px]"
                      aria-hidden="true"
                    >
                      check
                    </span>
                    <span className="">
                      Spill removal and crumb extraction around dining chairs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-[color,background-color,box-shadow,transform] duration-300 flex flex-col lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-full w-full overflow-hidden bg-surface-container">
                  <img
                    width="512"
                    height="286"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt="Long Class-A corporate hallway corridor with high-gloss polished terrazzo floor reflecting linear architectural ceiling LED lights, clean spotless walls, architectural perspective, perfect symmetry"
                    loading="lazy"
                    decoding="async"
                    src={asset("images/our-standards-06.webp")}
                  />
                  <span className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-sm text-on-primary font-label-sm text-label-sm uppercase px-space-sm py-1 rounded">
                    Zone 05
                  </span>
                </div>
                <div className="p-space-lg md:p-space-xl flex flex-col justify-between space-y-space-md">
                  <div>
                    <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-wider block mb-1">
                      Substrate Longevity
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary-container">
                      Floors &amp; High-Traffic Surfaces
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                      {" "}
                      Targeted maintenance cycles protecting your capital real
                      estate investments across carpet tile, terrazzo, VCT,
                      engineered hardwoods, and polished concrete.{" "}
                    </p>
                  </div>
                  <ul className="space-y-space-xs pt-space-xs text-on-surface font-body-sm text-body-sm">
                    <li className="flex items-center gap-space-xs">
                      <span
                        className="material-symbols-outlined text-secondary text-[16px]"
                        aria-hidden="true"
                      >
                        check
                      </span>
                      <span className="">
                        Deep upright and backpack vacuuming with micro-crevice
                        wanding
                      </span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span
                        className="material-symbols-outlined text-secondary text-[16px]"
                        aria-hidden="true"
                      >
                        check
                      </span>
                      <span className="">
                        High-speed burnishing &amp; protective seal maintenance
                      </span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span
                        className="material-symbols-outlined text-secondary text-[16px]"
                        aria-hidden="true"
                      >
                        check
                      </span>
                      <span className="">
                        Scuff removal, black heel extraction, and edge detailing
                      </span>
                    </li>
                    <li className="flex items-center gap-space-xs">
                      <span
                        className="material-symbols-outlined text-secondary text-[16px]"
                        aria-hidden="true"
                      >
                        check
                      </span>
                      <span className="">
                        Certified wet-slip coefficient safety verification
                      </span>
                    </li>
                  </ul>
                  <div className="pt-space-sm">
                    <span className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        aria-hidden="true"
                      >
                        shield
                      </span>{" "}
                      Preserving Asset Depreciation Schedules{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-surface-container-lowest text-on-surface">
        <div className="max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="p-space-xl lg:p-space-xl rounded-2xl bg-surface-container-low shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg mb-space-lg">
              <div>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary block mb-1">
                  Audit Protocol Sample
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary-container">
                  Supervisor Shift Inspection Standard
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                {" "}
                Click through our active supervisor checklist criteria to
                preview how your facility is scored every single evening before
                lockup.{" "}
              </p>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-space-md"
              id="checklist-container"
            >
              <div
                className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm cursor-pointer select-none checklist-item transition-[color,background-color,box-shadow,transform]"
                onclick="this.classList.toggle('bg-secondary-fixed/30')"
              >
                <span
                  className="material-symbols-outlined text-secondary text-[22px] mt-0.5"
                  aria-hidden="true"
                >
                  check_box
                </span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary-container block">
                    Threshold Verification
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Zero grit under entrance mats; glass free of all hand oil
                    halos within 180cm plane.
                  </p>
                </div>
              </div>
              <div
                className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm cursor-pointer select-none checklist-item transition-[color,background-color,box-shadow,transform]"
                onclick="this.classList.toggle('bg-secondary-fixed/30')"
              >
                <span
                  className="material-symbols-outlined text-secondary text-[22px] mt-0.5"
                  aria-hidden="true"
                >
                  check_box
                </span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary-container block">
                    Restroom ATP Assay
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Randomized bioluminescence surface test on flush valves,
                    dispensers, and handle levers.
                  </p>
                </div>
              </div>
              <div
                className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm cursor-pointer select-none checklist-item transition-[color,background-color,box-shadow,transform]"
                onclick="this.classList.toggle('bg-secondary-fixed/30')"
              >
                <span
                  className="material-symbols-outlined text-secondary text-[22px] mt-0.5"
                  aria-hidden="true"
                >
                  check_box
                </span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-primary-container block">
                    Air Grille Static Check
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Inspection of return registers to guarantee negative dust
                    cling and clean filter perimeter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-primary-container text-on-primary py-24 lg:py-32 px-margin-sm md:px-margin lg:px-margin-lg relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="w-8 h-[2px] bg-secondary-fixed"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed">
                  Immediate Facility Elevation
                </span>
              </div>
              <h2 className="font-headline-xl md:font-display-hero text-headline-xl md:text-display-hero text-on-primary leading-tight">
                {" "}
                Ready to Experience the CERA Standard?{" "}
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl">
                {" "}
                Upgrade your facility portfolio to verified institutional
                standards. Our leadership team will conduct a comprehensive
                walk-through assessment and provide a tailored scope of work
                with transparent SLA benchmarks.{" "}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-space-md">
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-4 rounded-lg bg-surface text-primary-container font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed transition-[color,background-color,box-shadow,transform] duration-200 group shadow-lg"
                to="/request-a-proposal"
              >
                <span className="">Request a Proposal</span>
                <span
                  className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1.5"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
              <Link
                className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-surface-variant hover:text-on-primary transition-colors"
                to="/contact"
              >
                <span className="">Speak with an Operations Director</span>
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
