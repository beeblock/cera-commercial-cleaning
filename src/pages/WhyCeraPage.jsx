import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

export default function WhyCeraPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full -mt-20 overflow-hidden bg-primary-container text-on-primary">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-35"
          data-alt="Modern architectural glass facade of a premier high-rise office headquarters at dusk. Spotless polished stone plaza in the foreground reflecting warm interior ambient lighting. Clean geometric steel mullions, deep navy evening sky, pristine corporate environment conveying excellence and order."
          style={{
            backgroundImage: "url('" + asset("images/why-cera-01.webp") + "')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/90 to-transparent"></div>
        <div className="relative w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg pt-36 pb-24 md:pb-28">
          <div className="max-w-3xl flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-sm text-secondary-fixed">
              <span className="w-8 h-[2px] bg-secondary-fixed"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed">
                Why Choose CERA Commercial Cleaning
              </span>
            </div>
            <h1 className="font-display-hero text-headline-xl md:text-display-hero tracking-tight leading-tight">
              {" "}
              A Higher Standard <br />
              <span className="font-medium text-white">For Your Business.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl mt-space-xs leading-relaxed">
              {" "}
              Commercial cleaning is often plagued by turnover, missed spots,
              and poor communication. CERA was built to solve these industry
              pain points through active on-site leadership, radical
              transparency, and unrelenting accountability.{" "}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-lg max-w-xl">
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-lg flex flex-col gap-1">
                <span className="font-headline-lg text-headline-lg text-white">
                  99.4%
                </span>
                <span className="font-label-sm text-label-sm text-surface-container-high uppercase tracking-wider">
                  Client Retention
                </span>
              </div>
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-lg flex flex-col gap-1">
                <span className="font-headline-lg text-headline-lg text-white">
                  &lt;2 Hrs
                </span>
                <span className="font-label-sm text-label-sm text-surface-container-high uppercase tracking-wider">
                  Manager Response
                </span>
              </div>
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-lg col-span-2 sm:col-span-1 flex flex-col gap-1">
                <span className="font-headline-lg text-headline-lg text-white">
                  100%
                </span>
                <span className="font-label-sm text-label-sm text-surface-container-high uppercase tracking-wider">
                  DMV Dedicated
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md pt-space-md">
              <Link
                className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider shadow-md hover:bg-secondary-fixed transition-colors"
                to="/request-a-proposal"
              >
                <span className="">Request a Facility Proposal</span>
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
      <section className="w-full bg-surface py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-xl">
              <div className="inline-flex items-center gap-space-sm text-secondary">
                <span className="w-6 h-[2px] bg-secondary"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                  The CERA Difference
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                {" "}
                Four Core Pillars Built on Systematic Accountability{" "}
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {" "}
              We replace reactive janitorial compromises with structured
              operational standards, experienced supervisory staff, and
              verifiable results.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    aria-hidden="true"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    groups
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Pillar 01
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    People First
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Rigorous background screening, competitive living wages,
                  hands-on architectural chemical training, and uniformed
                  professionals who take personal pride in their work.{" "}
                </p>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low/50 p-space-sm rounded-lg flex items-center gap-space-sm">
                <span
                  className="material-symbols-outlined text-secondary text-[18px]"
                  aria-hidden="true"
                >
                  verified
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  Low Staff Turnover
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    aria-hidden="true"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    checklist
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Pillar 02
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Consistent Quality
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Multi-point electronic inspection rubrics, time-stamped
                  digital reporting logs, and unscheduled quality assurance
                  audits executed directly by assigned regional directors.{" "}
                </p>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low/50 p-space-sm rounded-lg flex items-center gap-space-sm">
                <span
                  className="material-symbols-outlined text-secondary text-[18px]"
                  aria-hidden="true"
                >
                  fact_check
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  50-Point Auditing
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    aria-hidden="true"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    tune
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Pillar 03
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Tailored Solutions
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Cleaning schedules, hospital-grade or eco-certified chemical
                  specifications, and service cadences aligned directly with
                  your high-traffic zones and shifts.{" "}
                </p>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low/50 p-space-sm rounded-lg flex items-center gap-space-sm">
                <span
                  className="material-symbols-outlined text-secondary text-[18px]"
                  aria-hidden="true"
                >
                  architecture
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  Bespoke Scope
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
                  <span
                    className="material-symbols-outlined text-[28px]"
                    aria-hidden="true"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    handshake
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Pillar 04
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Long-Term Partner
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Direct cell access to operations managers, recurring quarterly
                  business reviews, and agile scaling capacity across
                  multi-building enterprise asset portfolios.{" "}
                </p>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low/50 p-space-sm rounded-lg flex items-center gap-space-sm">
                <span
                  className="material-symbols-outlined text-secondary text-[18px]"
                  aria-hidden="true"
                >
                  timeline
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  Scalable Portfolios
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-20">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-6 grid grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-space-md">
                <div className="rounded-xl overflow-hidden shadow-sm h-64 relative bg-surface-container">
                  <img
                    width="512"
                    height="279"
                    className="w-full h-full object-cover"
                    alt="Uniformed CERA professional cleaning technician in navy attire meticulously sanitizing a modern corporate board room glass table with microfiber cloth"
                    loading="lazy"
                    decoding="async"
                    src={asset("images/why-cera-02.webp")}
                  />
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                  <span className="font-headline-md text-headline-md text-primary-container">
                    100%
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Direct supervision on every key facility onboarding program.
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-space-md pt-8">
                <div className="p-space-md rounded-xl bg-primary-container text-on-primary shadow-sm flex flex-col gap-1">
                  <span className="font-headline-md text-headline-md text-white">
                    Zero
                  </span>
                  <span className="font-body-sm text-body-sm text-surface-container-high">
                    Surprise billings, hidden chemical fees, or unlogged
                    absences.
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm h-64 relative bg-surface-container">
                  <img
                    width="512"
                    height="279"
                    className="w-full h-full object-cover"
                    alt="Gleaming architectural marble entrance atrium in a commercial high-rise building after evening sanitization"
                    loading="lazy"
                    decoding="async"
                    src={asset("images/why-cera-03.webp")}
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs">
                <div className="inline-flex items-center gap-space-sm text-secondary">
                  <span className="w-6 h-[2px] bg-secondary"></span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                    Transparent Operations
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  {" "}
                  Designed to Eliminate the Headaches of Conventional
                  Cleaning{" "}
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {" "}
                Most commercial cleaners compete purely on thin pricing margins,
                resulting in underpaid staff, high turnover, and uninspected
                corner-cutting. CERA operates on an architectural management
                model: we equip teams with calibrated equipment, clear digital
                protocols, and immediate management presence.{" "}
              </p>
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-start gap-space-md bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <span
                    className="material-symbols-outlined text-error text-[22px] mt-0.5"
                    aria-hidden="true"
                  >
                    cancel
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">
                      The Typical Vendor Issue
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Rotating sub-contractors, unaddressed tenant complaints,
                      and vague invoices.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-md bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                  <span
                    className="material-symbols-outlined text-secondary text-[22px] mt-0.5"
                    aria-hidden="true"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary-container font-semibold">
                      The CERA Approach
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Dedicated, W-2 certified teams, daily digital log
                      submissions, and proactive manager calls.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex flex-col gap-space-xl">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs items-center">
            <div className="inline-flex items-center gap-space-sm text-secondary">
              <span className="w-6 h-[2px] bg-secondary"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                Methodical Onboarding
              </span>
              <span className="w-6 h-[2px] bg-secondary"></span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              {" "}
              Our Four-Stage Execution Process{" "}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {" "}
              From first walkthrough to ongoing performance oversight, our
              structured operational cadence ensures zero disruption and
              guaranteed standard fulfillment.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-surface-container-high group-hover:bg-primary-container transition-colors"></div>
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-label-md text-label-md text-primary-container font-bold">
                    01
                  </span>
                  <span
                    className="material-symbols-outlined text-secondary text-[24px]"
                    aria-hidden="true"
                  >
                    visibility
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-widest">
                    Stage 01
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    We Listen
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Comprehensive on-site facility walkthrough, identifying
                  high-wear traffic paths, previous janitorial bottlenecks, and
                  architectural material sensitivities.{" "}
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex flex-col gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary"
                    aria-hidden="true"
                  >
                    check
                  </span>{" "}
                  Square footage calculation
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary"
                    aria-hidden="true"
                  >
                    check
                  </span>{" "}
                  Surface material review
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-surface-container-high group-hover:bg-primary-container transition-colors"></div>
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-label-md text-label-md text-primary-container font-bold">
                    02
                  </span>
                  <span
                    className="material-symbols-outlined text-secondary text-[24px]"
                    aria-hidden="true"
                  >
                    assignment_turned_in
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-widest">
                    Stage 02
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    We Plan
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Customized specifications engineered for your shift hours,
                  dedicated eco/EPA chemical staging, badge security clearance,
                  and customized crew allocation.{" "}
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex flex-col gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary"
                    aria-hidden="true"
                  >
                    check
                  </span>{" "}
                  Scope of work design
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary"
                    aria-hidden="true"
                  >
                    check
                  </span>{" "}
                  Security badging setup
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-surface-container-high group-hover:bg-primary-container transition-colors"></div>
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-label-md text-label-md text-primary-container font-bold">
                    03
                  </span>
                  <span
                    className="material-symbols-outlined text-secondary text-[24px]"
                    aria-hidden="true"
                  >
                    engineering
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-widest">
                    Stage 03
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    We Execute
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Uniformed, badge-verified technicians commence scheduled
                  duties with strict task checklists, backed by area supervisors
                  present during initial launch phases.{" "}
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex flex-col gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary"
                    aria-hidden="true"
                  >
                    check
                  </span>{" "}
                  Uniformed badge crews
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary"
                    aria-hidden="true"
                  >
                    check
                  </span>{" "}
                  Supervisor site launch
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-surface-container-high group-hover:bg-primary-container transition-colors"></div>
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-label-md text-label-md text-primary-container font-bold">
                    04
                  </span>
                  <span
                    className="material-symbols-outlined text-secondary text-[24px]"
                    aria-hidden="true"
                  >
                    sync
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase text-secondary tracking-widest">
                    Stage 04
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    We Stay Involved
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {" "}
                  Regular manager audit reports, digital ticketing for ad-hoc
                  tenant needs, quarterly operational reviews, and constant
                  quality iteration over time.{" "}
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex flex-col gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary"
                    aria-hidden="true"
                  >
                    check
                  </span>{" "}
                  Dedicated direct phone line
                </span>
                <span className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary"
                    aria-hidden="true"
                  >
                    check
                  </span>{" "}
                  Real-time ticket escalation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-highest/40 py-20">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <div className="inline-flex items-center gap-space-sm text-secondary">
              <span className="w-6 h-[2px] bg-secondary"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                Compliance &amp; Compliance
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              {" "}
              Trust &amp; Corporate Assurance{" "}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {" "}
              Built to satisfy the highest risk-management criteria of
              institutional owners and REIT portfolio directors.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
              <div className="w-10 h-10 rounded bg-primary-container text-white flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  domain
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                100% Commercial Focus
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                We do not service residential apartments or casual cleanings.
                Our entire operational apparatus, machinery, training modules,
                and chemicals are specialized strictly for commercial real
                estate facilities.{" "}
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
              <div className="w-10 h-10 rounded bg-primary-container text-white flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  security
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Licensed, Bonded &amp; Insured
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                Fully certified across Washington D.C., Maryland, and Virginia.
                Comprehensive general liability and workers' compensation
                policies with $5M+ coverage umbrella capability.{" "}
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
              <div className="w-10 h-10 rounded bg-primary-container text-white flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  bolt
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Rapid Response Guarantee
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                Emergency spill support, critical event clean-ups, or immediate
                facility adjustments guaranteed within a 2-hour response window,
                managed directly by your assigned local coordinator.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-20">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col gap-space-md max-w-xl">
              <div className="inline-flex items-center gap-space-sm text-secondary">
                <span className="w-6 h-[2px] bg-secondary"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                  DMV Regional Coverage
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                {" "}
                Institutional Coverage Across D.C., Maryland, and Virginia{" "}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {" "}
                With centralized distribution hubs in Arlington, Bethesda, and
                Downtown D.C., CERA ensures punctual deployment, synchronized
                supply chains, and rapid supervisor dispatching to Class-A
                facilities across the metropolitan corridor.{" "}
              </p>
              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md uppercase">
                  District of Columbia
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md uppercase">
                  Montgomery County
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md uppercase">
                  Northern Virginia
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md uppercase">
                  Tysons &amp; Reston
                </span>
              </div>
            </div>
            <div className="w-full lg:w-96 h-64 rounded-xl overflow-hidden shadow-sm relative">
              <div
                className="w-full h-full bg-cover bg-center"
                data-location="Washington DC Commercial District, USA"
                style={{
                  backgroundImage:
                    "url('" + asset("images/why-cera-04.webp") + "')",
                }}
              ></div>
              <div className="absolute inset-0 bg-primary/20 pointer-events-none flex items-end p-space-md">
                <div className="bg-surface-container-lowest/90 backdrop-blur-sm px-space-md py-space-xs rounded-lg text-primary font-label-sm text-label-sm uppercase flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[16px] text-secondary"
                    aria-hidden="true"
                  >
                    pin_drop
                  </span>
                  <span className="">Metropolitan Service Corridor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-12 pb-24">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="relative overflow-hidden rounded-xl bg-primary-container text-on-primary shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
              data-alt="Modern architectural executive office suite interior with expansive floor-to-ceiling glass panoramic city views, pristine carpet, polished surfaces and luxury minimal furnishing, lit by bright architectural daylight."
              style={{
                backgroundImage:
                  "url('" + asset("images/why-cera-05.webp") + "')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container to-secondary/30"></div>
            <div className="relative p-space-xl md:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl">
              <div className="flex flex-col gap-space-sm max-w-2xl">
                <div className="inline-flex items-center gap-space-sm text-secondary-fixed">
                  <span className="w-6 h-[2px] bg-secondary-fixed"></span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed">
                    Take The Next Step
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-white tracking-tight">
                  {" "}
                  Ready to Upgrade Your Facility Standards?{" "}
                </h2>
                <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                  {" "}
                  Connect with our facility assessment team for a confidential
                  walkthrough and receive a customized, itemized commercial
                  cleaning proposal within 24 hours.{" "}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
                <Link
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-4 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed transition-[color,background-color,box-shadow,transform] duration-200 group shadow-md"
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
                <Link
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-4 rounded-lg bg-transparent text-white font-label-md text-label-md uppercase tracking-wider hover:bg-white/10 transition-colors"
                  to="/contact"
                >
                  <span className="">Contact Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
