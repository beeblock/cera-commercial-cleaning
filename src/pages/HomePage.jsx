import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-primary-container min-h-[580px] lg:min-h-[640px] flex items-center -mt-20 pt-20">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          data-alt="Stunning architectural twilight exterior shot of a modern glass corporate office building headquarters with warm illuminated grand lobby, manicured minimalist landscaping, polished concrete plaza, and sleek interior lighting. Crisp commercial aesthetic, pristine atmosphere, deep navy twilight sky."
          style={{
            backgroundImage: "url('" + asset("images/home-02.webp") + "')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/75 to-transparent"></div>
        <div className="relative w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-xl lg:py-28 z-10">
          <div className="max-w-2xl flex flex-col items-start gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-[2px] bg-secondary-fixed"></span>
              <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed">
                Professional Commercial Cleaning
              </span>
            </div>
            <h1 className="text-on-primary">
              <span className="block font-display-hero text-display-hero font-light tracking-tight">
                Cleaner Environments
              </span>{" "}
              <span className="block font-display-hero text-display-hero font-bold tracking-tight">
                Stronger Businesses.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-xl font-normal leading-relaxed mt-space-xs">
              {" "}
              Reliable, high-quality commercial cleaning solutions for offices,
              retail, industrial and multi-location facilities across the
              DMV.{" "}
            </p>
            <div className="pt-space-sm">
              <Link
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface hover:translate-x-0.5 transition-[color,background-color,box-shadow,transform] duration-200 group shadow-lg"
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
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest shadow-sm relative z-20">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-space-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-0">
            <div className="flex flex-col items-start lg:items-center text-left lg:text-center px-space-md py-space-sm bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-150 rounded">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-space-sm text-primary">
                <span
                  className="material-symbols-outlined text-[26px]"
                  aria-hidden="true"
                >
                  verified
                </span>
              </div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-1">
                Reliable Service
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Consistent, high-quality results you can count on.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center text-left lg:text-center px-space-md py-space-sm bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-150 rounded">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-space-sm text-primary">
                <span
                  className="material-symbols-outlined text-[26px]"
                  aria-hidden="true"
                >
                  groups
                </span>
              </div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-1">
                Professional Teams
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Trained, uniformed and supervised staff.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center text-left lg:text-center px-space-md py-space-sm bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-150 rounded">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-space-sm text-primary">
                <span
                  className="material-symbols-outlined text-[26px]"
                  aria-hidden="true"
                >
                  shield
                </span>
              </div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-1">
                Higher Standards
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Detailed processes and quality control.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center text-left lg:text-center px-space-md py-space-sm bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-150 rounded">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-space-sm text-primary">
                <span
                  className="material-symbols-outlined text-[26px]"
                  aria-hidden="true"
                >
                  stacked_line_chart
                </span>
              </div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-1">
                Scalable Solutions
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Built to support single sites or multi-location facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
            <div className="flex flex-col items-start gap-space-xs max-w-2xl">
              <div className="flex items-center gap-space-sm">
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary font-semibold">
                  Industries We Serve
                </span>
                <span className="w-12 h-[1px] bg-outline-variant"></span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-light tracking-tight">
                {" "}
                Specialized cleaning for the spaces that keep businesses
                moving.{" "}
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-space-md max-w-md">
              <p className="font-body-sm text-body-sm text-on-surface-variant lg:text-right">
                {" "}
                We partner with forward-thinking organizations across
                industries, delivering reliable, high-quality cleaning solutions
                tailored to complex environments.{" "}
              </p>
              <Link
                className="inline-flex items-center gap-space-xs px-4 py-2 bg-surface-container hover:bg-surface-container-high rounded text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors group"
                to="/industries"
              >
                <span className="">Explore Industries</span>
                <span
                  className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="group flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="286"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Modern corporate office exterior glass and steel building surrounded by manicured trees in daylight, pristine Class-A commercial architecture"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/home-03.webp")}
                />
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  Corporate Offices
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Productive, professional environments.
                </p>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Immaculate modern university lecture hall or school classroom with neat wooden desks, bright natural lighting, spotless floor, sterile learning environment"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/home-04.webp")}
                />
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  Educational Institutions
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Safe and clean spaces for students and staff.
                </p>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="286"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Hospital reception corridor with sterile reflective vinyl floors, clean medical reception desk, professional clinical lighting, immaculate medical standards"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/home-05.webp")}
                />
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  Healthcare Facilities
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Higher standards for safer, healthier environments.
                </p>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="286"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Luxury retail boutique interior with spotless illuminated glass displays, designer clothing rails, dark wood accents, gleaming showroom floors"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/home-06.webp")}
                />
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  Retail Stores
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Welcoming spaces that elevate your brand.
                </p>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="High-end fitness center interior with sanitized modern exercise equipment, gleaming dark rubberized floors, large panoramic glass windows"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/home-07.webp")}
                />
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  Gyms and Fitness Centers
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Clean facilities for a healthier community.
                </p>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="286"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Grand neoclassical stone courthouse or federal administrative building with majestic columns, pristine stone steps, authoritative architectural presence"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/home-08.webp")}
                />
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  Government Buildings
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Reliable services that meet compliance standards.
                </p>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="279"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Spacious modern church sanctuary or chapel with pristine polished wood pews, warm golden lighting, large cross accent, serene sacred atmosphere"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/home-09.webp")}
                />
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  Churches
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Clean, welcoming spaces for congregations and events.
                </p>
              </div>
            </div>
            <div className="group flex flex-col bg-surface-container-lowest rounded overflow-hidden shadow-sm hover:shadow-md transition-[color,background-color,box-shadow,transform] duration-300">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  width="512"
                  height="286"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="High-ceiling commercial logistics warehouse aisle with towering industrial storage racks and pristine polished concrete floor reflecting ceiling luminaires"
                  loading="lazy"
                  decoding="async"
                  src={asset("images/home-10.webp")}
                />
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  Warehouse and Industrial
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Reliable solutions for high-traffic, large-scale facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-primary-container text-on-primary py-space-xl lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-4 flex flex-col items-start gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="w-6 h-[1.5px] bg-secondary-fixed"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed font-semibold">
                  A Stronger Partner
                </span>
              </div>
              <h2 className="text-on-primary">
                <span className="block font-headline-xl text-headline-xl font-light">
                  More Than Cleaning.
                </span>{" "}
                <span className="block font-headline-xl text-headline-xl font-bold tracking-tight">
                  A Long-Term Partner.
                </span>
              </h2>
              <p className="font-body-md text-body-md text-surface-variant leading-relaxed">
                {" "}
                We go beyond cleaning. We help organizations maintain
                exceptional environments through people, process and
                accountability.{" "}
              </p>
              <div className="pt-space-xs">
                <Link
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface transition-[color,background-color,box-shadow,transform] duration-200 group"
                  to="/contact"
                >
                  <span className="">Let's Talk</span>
                  <span
                    className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-space-md pt-space-lg w-full">
                <div className="flex flex-col bg-tertiary-container/50 p-space-sm rounded">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    3+
                  </span>
                  <span className="font-body-sm text-body-sm text-surface-variant">
                    Years Commercial Experience
                  </span>
                </div>
                <div className="flex flex-col bg-tertiary-container/50 p-space-sm rounded">
                  <span className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                    100%
                  </span>
                  <span className="font-body-sm text-body-sm text-surface-variant">
                    Commercial Focused
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 h-[340px] lg:h-[440px] rounded overflow-hidden shadow-2xl relative">
              <img
                width="512"
                height="279"
                className="w-full h-full object-cover"
                alt="Sophisticated modern corporate executive lounge with plush navy leather lounge chairs, dark wood slatted walls, architectural indoor plant, and evening view through floor-to-ceiling glass windows"
                loading="lazy"
                decoding="async"
                src={asset("images/home-11.webp")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent"></div>
            </div>
            <div className="lg:col-span-3 flex flex-col justify-center space-y-space-md lg:pl-space-md">
              <div className="w-10 h-[2px] bg-secondary-fixed mb-space-xs"></div>
              <div className="flex flex-col space-y-space-md">
                <div className="flex items-center gap-space-sm group cursor-default">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-on-primary font-bold group-hover:text-secondary-fixed transition-colors">
                    Reliability
                  </span>
                </div>
                <div className="flex items-center gap-space-sm group cursor-default">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-on-primary font-bold group-hover:text-secondary-fixed transition-colors">
                    Communication
                  </span>
                </div>
                <div className="flex items-center gap-space-sm group cursor-default">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-on-primary font-bold group-hover:text-secondary-fixed transition-colors">
                    Accountability
                  </span>
                </div>
                <div className="flex items-center gap-space-sm group cursor-default">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-on-primary font-bold group-hover:text-secondary-fixed transition-colors">
                    Consistent Quality
                  </span>
                </div>
                <div className="flex items-center gap-space-sm group cursor-default">
                  <span className="font-label-md text-label-md uppercase tracking-widest text-on-primary font-bold group-hover:text-secondary-fixed transition-colors">
                    Long-Term Value
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
