import { lazy, Suspense, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SectionLink from "./components/SectionLink";

const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const WhyCeraPage = lazy(() => import("./pages/WhyCeraPage"));
const StandardsPage = lazy(() => import("./pages/StandardsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProposalPage = lazy(() => import("./pages/ProposalPage"));

const titles = {
  "/": "Commercial Cleaning Services",
  "/services": "Our Services",
  "/industries": "Industries We Serve",
  "/why-cera": "Why CERA",
  "/our-standards": "Our Standards",
  "/about": "About CERA",
  "/contact": "Contact Us",
  "/request-a-proposal": "Request a Proposal",
};

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `CERA | ${titles[pathname] || "Page Not Found"}`;
    if (hash) {
      const section = document.getElementById(hash.slice(1));
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (section?.id === "main-content")
        section.focus({ preventScroll: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <SectionLink href="#main-content" className="skip-link">
        Skip to content
      </SectionLink>
      <Header />
      <main
        id="main-content"
        className="min-h-[calc(100vh-20rem)] w-full bg-surface pt-20"
        tabIndex={-1}
      >
        <Suspense
          fallback={
            <div
              role="status"
              className="flex min-h-[60vh] items-center justify-center text-body-md text-secondary"
            >
              Loading CERA…
            </div>
          }
        >
          <RouteEffects />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/why-cera" element={<WhyCeraPage />} />
            <Route path="/our-standards" element={<StandardsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/request-a-proposal" element={<ProposalPage />} />
            <Route path="/contact" element={<ProposalPage />} />
            <Route
              path="*"
              element={
                <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-6 px-4 py-24 text-center">
                  <p className="text-label-md uppercase tracking-widest text-secondary">
                    404 — Page not found
                  </p>
                  <h1 className="text-headline-xl">
                    Let’s get you back on track.
                  </h1>
                  <Link
                    to="/"
                    className="rounded-lg bg-primary-container px-6 py-3 text-white"
                  >
                    Back to home
                  </Link>
                </section>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
