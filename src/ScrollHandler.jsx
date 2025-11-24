import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to element when hash exists (/#projects, etc.)
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // Scroll to top when navigating to a new route (e.g., /about, /services)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollHandler;
