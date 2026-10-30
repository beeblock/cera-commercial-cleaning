import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import { useProposal } from "../hooks/useProposal";

export default function ProposalPage() {
  const {
    industry,
    setIndustry,
    isSubmitting,
    isSuccess,
    error,
    errors,
    handleSubmit,
    handleChange,
    formRef,
    confirmationRef,
    errorRef,
  } = useProposal();
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary-container text-on-primary">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-secondary-fixed opacity-75"></span>
                <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed">
                  REQUEST A PROPOSAL
                </span>
              </div>
              <h1 className="font-display-hero text-display-hero text-on-primary leading-tight tracking-tight">
                <span className="font-light block">Let’s Create a</span>{" "}
                <span className="font-bold">Cleaner Environment</span>{" "}
                <span className="font-light block">for Your Business.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl font-light">
                {" "}
                Tell us about your facility and cleaning needs, and we’ll
                prepare a customized proposal based on your goals, schedule and
                operational requirements.{" "}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between h-full lg:pl-10 relative">
              <div className="hidden lg:block absolute left-0 top-2 bottom-2 w-px bg-outline/30"></div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1 pb-4">
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-secondary-fixed font-semibold">
                    CLEANER SPACES
                  </span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-on-primary font-semibold">
                    STRONGER BUSINESSES
                  </span>
                  <div className="w-12 h-0.5 bg-secondary-fixed mt-2"></div>
                </div>
                <div className="flex flex-col gap-5">
                  <a
                    className="group flex items-center gap-4 text-surface-variant hover:text-on-primary transition-colors"
                    href="tel:+15715010927"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-fixed group-hover:text-primary transition-[color,background-color,box-shadow,transform]">
                      <span
                        className="material-symbols-outlined text-[20px]"
                        aria-hidden="true"
                      >
                        phone
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/80">
                        Direct Inquiries
                      </span>
                      <span className="font-headline-sm text-headline-sm tracking-tight text-on-primary">
                        +1 (571) 501 0927
                      </span>
                    </div>
                  </a>
                  <a
                    className="group flex items-center gap-4 text-surface-variant hover:text-on-primary transition-colors"
                    href="mailto:contact@ceraccs.com"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-fixed group-hover:text-primary transition-[color,background-color,box-shadow,transform]">
                      <span
                        className="material-symbols-outlined text-[20px]"
                        aria-hidden="true"
                      >
                        mail
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant/80">
                        Enterprise Desk
                      </span>
                      <span className="font-headline-sm text-headline-sm tracking-tight text-on-primary">
                        contact@ceraccs.com
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="w-full max-w-[1280px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm flex flex-col gap-12">
              <form
                ref={formRef}
                onChange={handleChange}
                aria-busy={isSubmitting}
                className="flex flex-col gap-12"
                id="proposal-form"
                onSubmit={handleSubmit}
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-0.5 bg-primary-container"></span>
                    <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-on-surface font-semibold">
                      COMPANY INFORMATION
                    </span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-label-md text-label-md text-on-surface font-semibold"
                        htmlFor="company_name"
                      >
                        {" "}
                        Company / Business Name{" "}
                        <span className="text-error">*</span>
                      </label>
                      <input
                        className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                        id="company_name"
                        name="company_name"
                        placeholder="Enter your company name"
                        required
                        type="text"
                        autoComplete="organization"
                        aria-invalid={Boolean(errors.company_name)}
                        aria-describedby={
                          errors.company_name ? "company_name-error" : undefined
                        }
                        maxLength={160}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="full_name"
                        >
                          {" "}
                          Your Name <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                          id="full_name"
                          name="full_name"
                          placeholder="Enter your full name"
                          required
                          type="text"
                          autoComplete="name"
                          minLength="2"
                          aria-invalid={Boolean(errors.full_name)}
                          aria-describedby={
                            errors.full_name ? "full_name-error" : undefined
                          }
                          maxLength={100}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="position"
                        >
                          {" "}
                          Title / Position <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                          id="position"
                          name="position"
                          placeholder="Enter your position"
                          required
                          type="text"
                          autoComplete="organization-title"
                          aria-invalid={Boolean(errors.position)}
                          aria-describedby={
                            errors.position ? "position-error" : undefined
                          }
                          maxLength={100}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="email"
                        >
                          {" "}
                          Email Address <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                          id="email"
                          name="email"
                          placeholder="Enter your email address"
                          required
                          type="email"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          maxLength={254}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="phone"
                        >
                          {" "}
                          Phone Number <span className="text-error">*</span>
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                          id="phone"
                          name="phone"
                          placeholder="+1 (___) ___-____"
                          required
                          type="tel"
                          autoComplete="tel"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={
                            errors.phone ? "phone-error" : undefined
                          }
                          maxLength={40}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-0.5 bg-primary-container"></span>
                    <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-on-surface font-semibold">
                      INDUSTRY
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      {" "}
                      What type of industry is your business?{" "}
                      <span className="text-error">*</span>
                    </label>
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      id="industry-selector-grid"
                    >
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "corporate" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="corporate"
                          checked={industry === "corporate"}
                          onChange={() => setIndustry("corporate")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            apartment
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Corporate Offices
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "education" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="education"
                          checked={industry === "education"}
                          onChange={() => setIndustry("education")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            school
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Educational Institutions
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "healthcare" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="healthcare"
                          checked={industry === "healthcare"}
                          onChange={() => setIndustry("healthcare")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            local_hospital
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Healthcare Facilities
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "hospitality" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="hospitality"
                          checked={industry === "hospitality"}
                          onChange={() => setIndustry("hospitality")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            restaurant
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Hospitality &amp; Restaurants
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "fitness" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="fitness"
                          checked={industry === "fitness"}
                          onChange={() => setIndustry("fitness")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            fitness_center
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Gyms and Fitness Centers
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "government" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="government"
                          checked={industry === "government"}
                          onChange={() => setIndustry("government")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            account_balance
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Government Buildings
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "supermarkets" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="supermarkets"
                          checked={industry === "supermarkets"}
                          onChange={() => setIndustry("supermarkets")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            shopping_cart
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Supermarkets
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "worship" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="worship"
                          checked={industry === "worship"}
                          onChange={() => setIndustry("worship")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            church
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Churches
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "warehouse" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="warehouse"
                          checked={industry === "warehouse"}
                          onChange={() => setIndustry("warehouse")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            warehouse
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Warehouse and Industrial
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                      <label
                        className={`industry-tile group relative flex items-center justify-between p-4 rounded-lg  hover:bg-surface-container-high transition-[color,background-color,box-shadow,transform] cursor-pointer ${industry === "other" ? "bg-surface-container-high shadow-sm" : "bg-surface-container-low"}`}
                      >
                        <input
                          className="sr-only peer"
                          name="industry"
                          type="radio"
                          value="other"
                          checked={industry === "other"}
                          onChange={() => setIndustry("other")}
                        />
                        <div className="flex items-center gap-3.5">
                          <span
                            className="material-symbols-outlined text-secondary peer-checked:text-primary-container text-[24px]"
                            aria-hidden="true"
                          >
                            more_horiz
                          </span>
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            Other
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                          <span className="w-2 h-2 rounded-full bg-surface-container-lowest hidden peer-checked:block"></span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-0.5 bg-primary-container"></span>
                    <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-on-surface font-semibold">
                      FACILITY DETAILS
                    </span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-label-md text-label-md text-on-surface font-semibold"
                        htmlFor="address"
                      >
                        {" "}
                        Facility Address <span className="text-error">*</span>
                      </label>
                      <input
                        className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                        id="address"
                        name="address"
                        placeholder="Enter the full address"
                        required
                        type="text"
                        autoComplete="street-address"
                        aria-invalid={Boolean(errors.address)}
                        aria-describedby={
                          errors.address ? "address-error" : undefined
                        }
                        maxLength={300}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="sqft"
                        >
                          {" "}
                          Total Square Footage (approx.){" "}
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                          id="sqft"
                          name="sqft"
                          placeholder="e.g. 10,000 sq ft"
                          type="text"
                          aria-invalid={Boolean(errors.sqft)}
                          aria-describedby={
                            errors.sqft ? "sqft-error" : undefined
                          }
                          maxLength={40}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="floors"
                        >
                          {" "}
                          Number of Floors{" "}
                        </label>
                        <input
                          className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                          id="floors"
                          name="floors"
                          placeholder="e.g. 1, 2, 3..."
                          type="text"
                          aria-invalid={Boolean(errors.floors)}
                          aria-describedby={
                            errors.floors ? "floors-error" : undefined
                          }
                          maxLength={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-0.5 bg-primary-container"></span>
                    <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-on-surface font-semibold">
                      CLEANING NEEDS
                    </span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="frequency"
                        >
                          {" "}
                          How often do you need cleaning?{" "}
                          <span className="text-error">*</span>
                        </label>
                        <div className="relative">
                          <select
                            className="w-full h-12 px-4 pr-10 rounded-lg bg-surface-container-low text-on-surface text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform] cursor-pointer"
                            id="frequency"
                            name="frequency"
                            required
                            defaultValue=""
                            aria-invalid={Boolean(errors.frequency)}
                            aria-describedby={
                              errors.frequency ? "frequency-error" : undefined
                            }
                          >
                            <option disabled value="">
                              Select an option
                            </option>
                            <option value="daily">
                              Daily Service (7 Days/Week)
                            </option>
                            <option value="5x">
                              5x Per Week (Standard Business)
                            </option>
                            <option value="3x">3x Per Week</option>
                            <option value="weekly">Weekly Maintenance</option>
                            <option value="biweekly">
                              Bi-weekly Scheduled Service
                            </option>
                            <option value="deep-clean">
                              One-time Deep Clean &amp; Sanitize
                            </option>
                          </select>
                          <span
                            className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-secondary"
                            aria-hidden="true"
                          >
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-label-md text-label-md text-on-surface font-semibold"
                          htmlFor="start_date"
                        >
                          {" "}
                          Preferred Start Date{" "}
                        </label>
                        <div className="relative">
                          <input
                            className="w-full h-12 px-4 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform]"
                            id="start_date"
                            name="start_date"
                            type="date"
                            aria-invalid={Boolean(errors.start_date)}
                            aria-describedby={
                              errors.start_date ? "start_date-error" : undefined
                            }
                            maxLength={10}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-label-md text-label-md text-on-surface font-semibold"
                        htmlFor="details"
                      >
                        {" "}
                        Additional Details{" "}
                      </label>
                      <textarea
                        className="w-full p-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-[color,background-color,box-shadow,transform] resize-y"
                        id="details"
                        name="details"
                        placeholder="Tell us more about your facility, specific cleaning needs, schedule, or any special requirements."
                        rows="4"
                        aria-invalid={Boolean(errors.details)}
                        aria-describedby={
                          errors.details ? "details-error" : undefined
                        }
                        maxLength={5000}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    className="w-full h-14 bg-primary-container hover:bg-tertiary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-lg shadow-sm transition-[color,background-color,box-shadow,transform] duration-200 flex items-center justify-center gap-3 group"
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting
                      ? "SENDING…"
                      : isSuccess
                        ? "REQUEST SENT"
                        : "SUBMIT REQUEST"}{" "}
                    <span
                      className="material-symbols-outlined text-[18px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </button>
                  <div
                    className="mt-4 p-4 rounded-lg bg-surface-container text-on-surface text-body-sm flex flex-col items-start gap-3"
                    id="form-toast"
                    role="status"
                    tabIndex="-1"
                    ref={confirmationRef}
                    hidden={!isSuccess}
                  >
                    <p>
                      Thank you. Your proposal request has been sent. Our team
                      will contact you to discuss your facility.
                    </p>
                  </div>
                  {error && (
                    <div
                      ref={errorRef}
                      role="alert"
                      tabIndex={-1}
                      className="mt-4 rounded-lg bg-error-container p-4 text-body-sm text-on-error-container"
                    >
                      <p>{error}</p>
                      {Object.keys(errors).length > 0 && (
                        <ul className="mt-2 list-disc pl-5">
                          {Object.entries(errors).map(([name, message]) => (
                            <li key={name} id={`${name}-error`}>
                              {message}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-12 sticky top-28">
              <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl shadow-sm flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-primary-container"></span>
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-wider text-on-surface font-semibold">
                    WHAT HAPPENS NEXT?
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 font-label-md text-label-md text-on-surface font-semibold">
                    {" "}
                    1{" "}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      We Review Your Request
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {" "}
                      Our team will review the information and may reach out if
                      we need additional details.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 font-label-md text-label-md text-on-surface font-semibold">
                    {" "}
                    2{" "}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Schedule a Facility Walkthrough
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {" "}
                      We conduct an on-site visit to evaluate the specific
                      cleaning requirements of your facility.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 font-label-md text-label-md text-on-surface font-semibold">
                    {" "}
                    3{" "}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      We Prepare a Customized Proposal
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {" "}
                      Based on our on-site diagnosis and facility scope, we
                      assemble a detailed, custom proposal.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 font-label-md text-label-md text-on-surface font-semibold">
                    {" "}
                    4{" "}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      We Follow Up
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {" "}
                      We connect directly to present the proposal, answer
                      questions, and finalize the service schedule.{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-surface-variant"></div>
                <div className="flex flex-col gap-3">
                  <span className="font-eyebrow-accent text-eyebrow-accent uppercase tracking-widest text-on-surface font-semibold">
                    {" "}
                    LOOKING FOR A FASTER RESPONSE?{" "}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    Feel free to call or email us directly. We’re here to
                    help.{" "}
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      className="flex items-center gap-2 text-primary-container font-headline-sm text-headline-sm hover:underline"
                      href="tel:+15715010927"
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        aria-hidden="true"
                      >
                        call
                      </span>
                      <span className="">+1 (571) 501 0927</span>
                    </a>
                    <a
                      className="flex items-center gap-2 text-secondary font-body-sm text-body-sm hover:underline"
                      href="mailto:contact@ceraccs.com"
                    >
                      <span
                        className="material-symbols-outlined text-[18px]"
                        aria-hidden="true"
                      >
                        send
                      </span>
                      <span className="">contact@ceraccs.com</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container p-8 md:p-10 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col gap-1 tracking-tight">
                  <span className="text-[32px] leading-tight text-on-surface font-light uppercase">
                    TRUST
                  </span>
                  <span className="text-[32px] leading-tight text-on-surface font-bold uppercase">
                    BUILDS
                  </span>
                  <span className="text-[32px] leading-tight text-secondary font-light uppercase">
                    BETTER
                  </span>
                  <span className="text-[26px] leading-tight text-on-surface font-bold uppercase whitespace-nowrap">
                    ENVIRONMENTS
                  </span>
                </div>
                <div className="w-16 h-1 bg-primary-container mt-2"></div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  {" "}
                  CERA is committed to architectural-level hygiene protocols,
                  audited checklists, and verifiable site security across
                  Virginia and DC metro commercial portfolios.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
