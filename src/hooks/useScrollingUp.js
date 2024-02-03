import { useEffect, useState } from "react";
import { off, on } from "../utils";
/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */

const SCROLL_TOP_LIMIT = 200;
const useScrollingUp = () => {
  const [scrollingUp, setScrollingUp] = useState(false);

  const handleScroll = () => {
    setScrollingUp(window.scrollY > SCROLL_TOP_LIMIT);
  };

  useEffect(() => {
    on(window, "scroll", handleScroll, { passive: true });
    return () => {
      off(window, "scroll", handleScroll, { passive: true });
    };
  });
  return scrollingUp;
};

export default useScrollingUp;
