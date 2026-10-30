import SectionLink from "../components/SectionLink";
import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-primary text-on-primary">
        <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Modern architectural headquarters atrium with floor-to-ceiling glass windows, clean polished stone flooring, sleek corporate interior design in deep navy and warm twilight hues with professional lighting."
            style={{
              backgroundImage: "url('" + asset("images/about-01.webp") + "')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-xl md:py-24">
          <div className="max-w-3xl flex flex-col items-start gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-[2px] bg-secondary-container"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-container">
                About CERA Commercial Services
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-primary font-light tracking-tight leading-tight">
              {" "}
              People Behind{" "}
              <span className="font-semibold block text-surface-bright">
                Cleaner Environments.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl mt-space-xs font-normal">
              {" "}
              Dedicated commercial cleaning specialists supporting
              high-performance businesses, healthcare facilities, and premier
              institutions across Washington DC, Maryland, and Northern
              Virginia.{" "}
            </p>
            <div className="flex flex-wrap items-center gap-space-md mt-space-md pt-space-xs">
              <Link
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-low transition-[color,background-color,box-shadow,transform] duration-200 group shadow-md"
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
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-primary-container/80 text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-[color,background-color,box-shadow,transform] duration-200"
                href="#philosophy"
              >
                <span className="">Our Philosophy</span>
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  south
                </span>
              </SectionLink>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest shadow-sm">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="flex flex-col items-start p-space-md rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-[color,background-color,box-shadow,transform]">
              <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  calendar_today
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Experience
                </span>
              </div>
              <span className="font-headline-xl text-headline-xl text-primary font-bold">
                3+ Years
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Enterprise Facility Management Track Record
              </span>
            </div>
            <div className="flex flex-col items-start p-space-md rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-[color,background-color,box-shadow,transform]">
              <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  business_center
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Focus
                </span>
              </div>
              <span className="font-headline-xl text-headline-xl text-primary font-bold">
                100%
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Commercial &amp; Institutional Scope
              </span>
            </div>
            <div className="flex flex-col items-start p-space-md rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-[color,background-color,box-shadow,transform]">
              <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  domain
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Footprint
                </span>
              </div>
              <span className="font-headline-xl text-headline-xl text-primary font-bold">
                DMV
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                DC Metro, Maryland &amp; Northern Virginia
              </span>
            </div>
            <div className="flex flex-col items-start p-space-md rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-[color,background-color,box-shadow,transform]">
              <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  verified_user
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Compliance
                </span>
              </div>
              <span className="font-headline-xl text-headline-xl text-primary font-bold">
                Class-A
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Fully Licensed, Bonded &amp; Insured
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-surface" id="philosophy">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="flex flex-col lg:flex-row items-stretch gap-space-xl">
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <span className="w-6 h-[2px] bg-secondary"></span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                    Our Story &amp; Methodology
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface font-light tracking-tight mt-space-xs mb-space-lg">
                  {" "}
                  Commercial hygiene should{" "}
                  <span className="font-semibold block text-primary">
                    never be an afterthought.
                  </span>
                </h2>
                <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md">
                  <p className="">
                    {" "}
                    At CERA, we believe physical workplace environments are
                    strategic assets. A pristine, impeccably sanitised facility
                    directly elevates team productivity, protects stakeholder
                    health, and projects immediate authority from the second a
                    tenant, guest, or partner steps across your threshold.{" "}
                  </p>
                  <p className="">
                    {" "}
                    We established CERA to end the era of inconsistent,
                    unaccountable janitorial work. Modern corporate real estate
                    and regulated industries require predictable precision,
                    audited checklists, and teams who understand strict
                    chain-of-custody protocols.{" "}
                  </p>
                </div>
              </div>
              <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="flex items-center gap-space-sm mb-space-sm">
                  <span className="p-2 rounded-lg bg-secondary-container text-on-tertiary-fixed">
                    <span
                      className="material-symbols-outlined text-[20px]"
                      aria-hidden="true"
                    >
                      corporate_fare
                    </span>
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Why 100% Commercial Focus Matters
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {" "}
                  Unlike residential cleaning providers who occasionally take on
                  office jobs on weekends, CERA operates with industrial-grade
                  equipment, stringent EPA-registered sanitation chemicals, OSHA
                  safety certifications, and workforce infrastructure
                  architected exclusively for corporate campuses, sterile
                  healthcare, and high-foot-traffic facilities.{" "}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mt-space-md pt-space-sm">
                  <div className="flex items-start gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[20px] mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Hospital-Grade Disinfection Standards
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[20px] mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Uniformed, Badged &amp; Screened Crews
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[20px] mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Off-Hours &amp; Shift-Based Scalability
                    </span>
                  </div>
                  <div className="flex items-start gap-space-xs">
                    <span
                      className="material-symbols-outlined text-secondary text-[20px] mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Electronic Shift Logging &amp; Audits
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 flex flex-col gap-space-md">
              <div className="relative w-full h-[380px] lg:h-[480px] rounded-xl overflow-hidden shadow-md">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover"
                  alt="Uniformed professional commercial cleaning technicians operating state-of-the-art floor scrubbers in an expansive, gleaming commercial office lobby with modern architectural glass walls and soft morning daylight"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/about-02.webp")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-container">
                    Quality Assurance
                  </span>
                  <p className="font-headline-sm text-headline-sm font-semibold mt-1">
                    Supervised operations with rigorous quality control rubrics.
                  </p>
                </div>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-high flex items-center justify-between">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span
                      className="material-symbols-outlined text-[24px]"
                      aria-hidden="true"
                    >
                      verified
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">
                      Institutional Credentials
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Full liability policies meeting Class-A property
                      covenants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-surface-container-lowest">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="max-w-2xl mb-space-xl">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="w-6 h-[2px] bg-secondary"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                The Operational Pillars
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-light tracking-tight mt-space-xs">
              {" "}
              Our Core{" "}
              <span className="font-semibold text-primary">Commitments.</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              {" "}
              We eliminate the friction common in building services through
              transparent oversight, modern communication channels, and
              responsible environmental hygiene.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="p-space-xl rounded-xl bg-surface-container-low hover:bg-surface-container transition-[color,background-color,box-shadow,transform] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center mb-space-md">
                  <span
                    className="material-symbols-outlined text-[26px]"
                    aria-hidden="true"
                  >
                    alarm_on
                  </span>
                </div>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  Pillar 01
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-xs">
                  Unwavering Reliability
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  We show up on time, every single shift, fully staffed,
                  uniformed, and comprehensively briefed on site parameters. Our
                  automated attendance telemetry and substitute reserves
                  guarantee your schedule is never compromised.{" "}
                </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t-0 flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase">
                <span className="">Zero Unexcused Downtime</span>
              </div>
            </div>
            <div className="p-space-xl rounded-xl bg-surface-container-low hover:bg-surface-container transition-[color,background-color,box-shadow,transform] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center mb-space-md">
                  <span
                    className="material-symbols-outlined text-[26px]"
                    aria-hidden="true"
                  >
                    support_agent
                  </span>
                </div>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  Pillar 02
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-xs">
                  Professional Communication
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  Direct access to dedicated Operations Managers. No outsourced
                  ticketing portals, robotic voicemails, or endless bureaucratic
                  runarounds. You possess the direct cell and messaging line to
                  your facility lead.{" "}
                </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t-0 flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase">
                <span className="">Rapid Response SLA Under 30 Mins</span>
              </div>
            </div>
            <div className="p-space-xl rounded-xl bg-surface-container-low hover:bg-surface-container transition-[color,background-color,box-shadow,transform] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center mb-space-md">
                  <span
                    className="material-symbols-outlined text-[26px]"
                    aria-hidden="true"
                  >
                    map
                  </span>
                </div>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  Pillar 03
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-xs">
                  Local DMV Regional Focus
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  Serving the core business nodes across Washington DC,
                  Montgomery County, Prince George's County, Fairfax County,
                  Arlington, and surrounding metropolitan transit corridors. We
                  understand regional building management expectations.{" "}
                </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t-0 flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase">
                <span className="">DC • MD • Northern VA</span>
              </div>
            </div>
            <div className="p-space-xl rounded-xl bg-surface-container-low hover:bg-surface-container transition-[color,background-color,box-shadow,transform] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center mb-space-md">
                  <span
                    className="material-symbols-outlined text-[26px]"
                    aria-hidden="true"
                  >
                    eco
                  </span>
                </div>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-secondary">
                  Pillar 04
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-xs">
                  Environmental Health &amp; IAQ
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {" "}
                  We employ EPA Safer Choice certified disinfectants and
                  micro-filtration HEPA vacuums engineered to protect Indoor Air
                  Quality (IAQ), preventing volatile airborne toxins and
                  nurturing wellness across your workplace community.{" "}
                </p>
              </div>
              <div className="mt-space-lg pt-space-md border-t-0 flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase">
                <span className="">
                  HEPA Tech &amp; VOC-Reduced Formulations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-surface">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="p-space-xl md:p-14 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col lg:flex-row items-center gap-space-xl">
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="w-6 h-[2px] bg-secondary"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary">
                  Territory &amp; Response
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-light tracking-tight">
                {" "}
                Rooted in the{" "}
                <span className="font-semibold text-primary">
                  Capital Region.
                </span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {" "}
                From Class-A high rises along K Street and Tysons Corner to
                bio-tech hubs in Rockville and distribution terminals along the
                Baltimore-Washington Parkway, CERA deploys rapid-response crews
                equipped to handle diverse facilities.{" "}
              </p>
              <div className="w-full grid grid-cols-2 gap-space-md mt-space-sm">
                <div className="p-space-md rounded-lg bg-surface-container-low">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    DC
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1">
                    Downtown, Capitol Hill, NoMa, Georgetown, Navy Yard
                  </p>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Northern Virginia
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1">
                    Arlington, Alexandria, Tysons, Reston, Fairfax, Loudoun
                  </p>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Montgomery County
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1">
                    Bethesda, Silver Spring, Rockville, Gaithersburg
                  </p>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Prince George's County
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1">
                    National Harbor, Hyattsville, College Park, Bowie
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-space-md">
              <div
                className="w-full h-[320px] md:h-[380px] bg-cover bg-center rounded-xl shadow-inner relative overflow-hidden"
                data-location="Washington DC"
                style={{
                  backgroundImage:
                    "url('" + asset("images/why-cera-04.webp") + "')",
                }}
              >
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]"></div>
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-space-md py-space-xs rounded-lg backdrop-blur-md shadow-sm">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>{" "}
                    Active Service Corridors{" "}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-primary text-on-primary px-space-md py-space-xs rounded-lg shadow-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">
                    Fast DMV Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative bg-primary-container text-on-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Modern executive boardroom and corporate lounge interior with designer lighting, expansive glass windows overlooking night city lights, impeccably spotless and arranged with architectural precision."
            style={{
              backgroundImage: "url('" + asset("images/about-03.webp") + "')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/95 to-primary-container/80"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-20 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-xl">
            <div className="max-w-2xl flex flex-col items-start gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="w-8 h-[2px] bg-secondary-container"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-container">
                  Elevate Your Facility
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-primary font-light tracking-tight leading-tight">
                {" "}
                Experience the CERA Standard{" "}
                <span className="font-semibold block text-surface-bright">
                  for your facility.
                </span>
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-high mt-space-xs font-normal">
                {" "}
                Partner with dedicated specialists who understand the
                discipline, compliance, and presentation demanded by commercial
                real estate leaders.{" "}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
              <Link
                className="inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-low transition-[color,background-color,box-shadow,transform] duration-200 group shadow-lg text-center"
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
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-4 rounded-lg bg-transparent text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-lowest/10 transition-[color,background-color,box-shadow,transform] duration-200 text-center"
                to="/contact"
              >
                <span className="">Speak with Operations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
