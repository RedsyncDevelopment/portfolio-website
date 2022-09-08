import { useEffect, useState } from "react";

export default function useDeviceWidth() {
  const [windowSize, setWindowSize] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });

      if (windowSize) {
        if (windowSize <= 1024) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    };
  }, [windowSize]);

  return isMobile;
}
