"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 80,
      delay: 0,
    });

    // Re-init on route change to pick up new nodes
    const handle = () => AOS.refreshHard();
    window.addEventListener("load", handle);
    return () => window.removeEventListener("load", handle);
  }, []);

  return <>{children}</>;
}
