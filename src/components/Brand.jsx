import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

export default function Brand() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-3 text-primary-container"
      aria-label="CERA — Home"
    >
      <img
        src={asset("images/cera-logo.webp")}
        alt="CERA"
        width="640"
        height="112"
        className="h-auto w-[104px] object-contain sm:w-32"
        fetchPriority="high"
        decoding="async"
      />
      <span className="hidden border-l border-outline-variant pl-3 text-[9px] font-semibold uppercase leading-[1.5] tracking-[0.12em] sm:block">
        Commercial
        <br />
        Cleaning Services
      </span>
    </Link>
  );
}
