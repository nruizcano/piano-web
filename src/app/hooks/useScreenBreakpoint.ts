import { useState, useEffect } from "react";

export function useScreenBreakpoint(breakpoint: number) {
  const [isAbove, setIsAbove] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsAbove(window.innerWidth > breakpoint);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isAbove;
}