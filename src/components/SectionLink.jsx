import { Link, useLocation } from "react-router-dom";

export default function SectionLink({ href, ...props }) {
  const { pathname } = useLocation();
  return <Link to={{ pathname, hash: href }} {...props} />;
}
