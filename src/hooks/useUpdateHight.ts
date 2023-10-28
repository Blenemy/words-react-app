import { useLayoutEffect, useState } from "react";

export const useUpdateHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const header = document.getElementById("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      setViewportHeight(window.innerHeight - headerHeight);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return { viewportHeight };
};
