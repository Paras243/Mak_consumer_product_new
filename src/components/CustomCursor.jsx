import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";

const CustomCursor = () => {
  const theme = useTheme();
  // Check if the screen is a laptop or larger (md breakpoint)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isLargeScreen) {
      const moveCursor = (e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      window.addEventListener("mousemove", moveCursor);

      // This useEffect will hide the default cursor on large screens and show it on small screens.
      document.body.style.cursor = "none";
      return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.body.style.cursor = "default";
      };
    } else {
      // Ensure the default cursor is visible on small screens
      document.body.style.cursor = "default";
    }
  }, [cursorX, cursorY, isLargeScreen]);

  // Conditionally render the cursor only on large screens
  if (!isLargeScreen) {
    return null;
  }

  // Define styles as an object to be used inline, avoiding the CSS import error.
  const cursorStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    pointerEvents: "none",
    zIndex: 9999, // Ensure the custom cursor is always on top
    width: "8px",
    height: "8px",
    backgroundColor: "#333333",
    borderRadius: "50%",
    opacity: 1,
    filter: "none",
    mixBlendMode: "normal",
    willChange: "transform",
  };

  return (
    <motion.div
      style={{
        ...cursorStyle,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default CustomCursor;


/*import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default CustomCursor;*/