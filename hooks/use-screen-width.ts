import React, { useState, useEffect, useCallback } from "react";

/**
 * @typedef {Object} ScreenWidthHookResult
 * @property {number} screenWidth - The current width of the browser window in pixels.
 */

/**
 * A memoized React hook that provides the current width of the browser window.
 * It updates the width on window resize events and uses useCallback to memoize
 * the event handler for performance.
 *
 * @returns {ScreenWidthHookResult} An object containing the current screen width.
 */
export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return { screenWidth };
};
