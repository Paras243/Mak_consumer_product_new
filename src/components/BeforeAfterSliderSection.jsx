import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./BeforeAfterSliderSection.css";
import beforeImage from "../assets/dirtyFloor.png";

import afterImage from "../assets/cleanFloor.png";

import makProductImage from "../assets/floorCleaner.jpg";
// The previous image imports and the CSS import caused compilation errors
// in this environment. To fix this, the CSS has been inlined, and
// placeholder image URLs are being used.
/*const beforeImage = "https://placehold.co/900x500/d8c7c7/000000?text=Before";
const afterImage = "https://placehold.co/900x500/c7d8d8/000000?text=After";
const makProductImage = "https://placehold.co/300x400/c7c7d8/000000?text=Product";
*/
/**
 * A React component that displays a before-and-after image slider
 * and a product showcase.
 *
 * This version is a single, self-contained file with all necessary
 * styling embedded to ensure it compiles and runs correctly in this environment.
 */
const BeforeAfterSliderSection = () => {
  // State for controlling the slider's position (0 to 100 percent)
  const [sliderPosition, setSliderPosition] = useState(50);
  // Ref to access the slider container's DOM element
  const sliderRef = useRef(null);
  // Ref to track if the user is currently dragging the slider
  const isDragging = useRef(false);

  // Handles mouse movement for desktop dragging
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    // Get the container's position and dimensions
    const container = sliderRef.current;
    const containerRect = container.getBoundingClientRect();
    const x = e.clientX - containerRect.left;

    // Calculate new position as a percentage and clamp it
    let newPosition = (x / containerRect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  };

  // Sets the dragging state to true when the mouse is pressed down
  const handleMouseDown = () => {
    isDragging.current = true;
  };

  // Sets the dragging state to false when the mouse is released
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Adds event listeners to the window for mouseup and touchend events
  // This ensures the dragging stops even if the cursor moves outside the slider
  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  // Handles touch movement for mobile devices
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const container = sliderRef.current;
    const containerRect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - containerRect.left;
    let newPosition = (x / containerRect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  };

  // Dynamic style for the slider handle's position and cursor
  const sliderHandleStyle = {
    left: `${sliderPosition}%`,
    cursor: isDragging.current ? 'grabbing' : 'grab',
  };

  return (
    <section className="before-after-section-wrapper">
      <div className="content-container">
        {/* Title and Subtitle Section with animation */}
        <motion.div
          className="section-top"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            See the Mak Difference
          </h2>
          <p className="section-subtitle">
            Experience the exquisite result of Mak’s premium formula. Drag the slider to reveal a transformation that’s both visible and sensational.
          </p>
        </motion.div>

        {/* Image Slider Container with animation and event listeners */}
        <motion.div
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onTouchMove={handleTouchMove}
          className="image-slider-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* The "after" image is the full background image */}
          <img
            src={afterImage}
            alt="Clean Floor"
            className="after-image"
          />

          {/* The "before" image is clipped to show only a portion */}
          <img
            src={beforeImage}
            alt="Dirty Floor"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
            className="before-image"
          />

          {/* The slider handle and track */}
          <div className="custom-slider-track">
            <div
              style={sliderHandleStyle}
              className="custom-slider-thumb"
            >
              <svg className="w-6 h-6 text-[#3b1f47]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4 0v10m0-10l4 4m-4-4l-4 4m4 6l4-4m-4 4l-4-4" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Product Image Showcase with animation and glow effect */}
        <motion.div
          className="product-showcase-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="product-glow"></div>
          <div className="relative group z-10">
            <img
              src={makProductImage}
              alt="Mak Floor Cleaner"
              className="product-image"
            />
          </div>
        </motion.div>
      </div>
      {/* This style block contains the custom CSS for the component.
          It's embedded here for a self-contained solution. */}
      
    </section>
  );
};

export default BeforeAfterSliderSection;

/*import React, { useState } from "react";

import { Box, Typography, Slider } from "@mui/material";

import beforeImage from "../assets/dirtyFloor.png";

import afterImage from "../assets/cleanFloor.png";

import makProductImage from "../assets/floorCleaner.jpg"; // <-- Add your product image here



function BeforeAfterSliderSection() {

  const [sliderValue, setSliderValue] = useState(50);



  return (

    <Box sx={{ textAlign: "center", my: 8 }}>

      {/* Rainbow Gradient Heading 

      <Typography

        variant="h4"

        gutterBottom

        sx={{

          fontWeight: "bold",

          mb: 3,

          background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",

          WebkitBackgroundClip: "text",

          WebkitTextFillColor: "transparent",

          fontSize: { xs: "1.8rem", md: "2.5rem" },

        }}

      >

        See the Mak Difference

      </Typography>



      <Typography

        variant="subtitle1"

        sx={{ mb: 4, color: "text.secondary" }}

      >

        After using the Mak Floor Cleaning Product, the floor is noticeably cleaner and shinier.

      </Typography>



      <Box

        sx={{

          position: "relative",

          width: "100%",

          maxWidth: "800px",

          height: "400px",

          mx: "auto",

          overflow: "hidden",

          borderRadius: "16px",

          boxShadow: 5,

        }}

      >

        {/* After Image (full) 

        <img

          src={afterImage}

          alt="Clean Floor"

          style={{

            width: "100%",

            height: "100%",

            objectFit: "cover",

            position: "absolute",

            top: 0,

            left: 0,

          }}

        />



        {/* Before Image (clipped) 

        <img

          src={beforeImage}

          alt="Dirty Floor"

          style={{

            width: "100%",

            height: "100%",

            objectFit: "cover",

            position: "absolute",

            top: 0,

            left: 0,

            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,

            transition: "clip-path 0.2s ease-out",

          }}

        />



        {/* Slider Control 

        <Slider

          value={sliderValue}

          onChange={(e, newValue) => setSliderValue(newValue)}

          aria-labelledby="before-after-slider"

          sx={{

            position: "absolute",

            bottom: 20,

            left: "50%",

            transform: "translateX(-50%)",

            width: "60%",

            color: "#1976d2",

          }}

        />

      </Box>



      {/* Product Image *

      <Box sx={{ mt: 5 }}>

        <img

          src={makProductImage}

          alt="Mak Floor Cleaner"

          style={{

            height: "180px",

            objectFit: "contain",

          }}

        />

      </Box>

    </Box>

  );

}



export default BeforeAfterSliderSection;
*/

/*import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./BeforeAfterSliderSection.css";

import beforeImage from "../assets/dirtyFloor.png";
import afterImage from "../assets/cleanFloor.png";
import makProductImage from "../assets/floorCleaner.jpg";

export default function BeforeAfterSliderSection() {
  const [sliderValue, setSliderValue] = useState(50);
  const sliderRef = useRef(null);
  const x = useMotionValue(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Handle slider drag
  const handleDrag = (event, info) => {
    if (!sliderRef.current) return;
    const sliderWidth = sliderRef.current.clientWidth;
    const newX = Math.max(
      0,
      Math.min(
        info.point.x - sliderRef.current.getBoundingClientRect().left,
        sliderWidth
      )
    );
    const newValue = (newX / sliderWidth) * 100;
    setSliderValue(newValue);
    x.set(newX);
  };

  // Parallax effects
  const beforeImageParallax = useTransform(x, [0, 800], ["-20%", "20%"]);
  const afterImageParallax = useTransform(x, [0, 800], ["20%", "-20%"]);

  return (
    <Box className="before-after-section-wrapper">
      <motion.div
        className="content-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Title 
        <motion.div variants={itemVariants}>
          <Typography variant="h2" className="section-title">
            The Art of Flawless Clean
          </Typography>
        </motion.div>

        {/* Subtitle *
        <motion.div variants={itemVariants}>
          <Typography variant="body1" className="section-subtitle">
            Experience the exquisite result of Mak’s premium formula. Drag the slider to reveal a transformation that’s both visible and sensational.
          </Typography>
        </motion.div>

        {/* Before-After Slider 
        <motion.div variants={itemVariants} className="slider-box-wrapper">
          <Box className="image-slider-container">
            <motion.img
              src={beforeImage}
              alt="Before"
              className="before-image"
              style={{
                clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
                x: beforeImageParallax,
              }}
            />
            <motion.img
              src={afterImage}
              alt="After"
              className="after-image"
              style={{ x: afterImageParallax }}
            />

            {/* Slider control 
            <Box className="custom-slider-track" ref={sliderRef}>
              <motion.div
                className="custom-slider-thumb"
                drag="x"
                dragConstraints={sliderRef}
                dragElastic={0.1}
                onDrag={handleDrag}
                style={{ x }}
              />
              <div className="label-overlay">
                <motion.div
                  className="before-label"
                  animate={{ opacity: sliderValue > 50 ? 0.3 : 1 }}
                >
                  <Typography variant="caption">Before</Typography>
                </motion.div>
                <motion.div
                  className="after-label"
                  animate={{ opacity: sliderValue < 50 ? 0.3 : 1 }}
                >
                  <Typography variant="caption">After</Typography>
                </motion.div>
              </div>
            </Box>
          </Box>
        </motion.div>

        {/* Product Showcase *
        <motion.div
          className="product-showcase-container"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            rotate: -2,
            transition: { duration: 0.3, type: "spring", stiffness: 300 },
          }}
        >
          <div className="product-glow" />
          <motion.img
            src={makProductImage}
            alt="Mak Floor Cleaner"
            className="product-image"
            style={{ rotate: -5 }}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
}
*/

/*import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./BeforeAfterSliderSection.css";
import beforeImage from "../assets/dirtyFloor.png";
import afterImage from "../assets/cleanFloor.png";
import makProductImage from "../assets/floorCleaner.jpg";

function BeforeAfterSliderSection() {
  const [sliderValue, setSliderValue] = useState(50);
  const sliderRef = useRef(null);
  const x = useMotionValue(0);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleDrag = (event, info) => {
    const sliderWidth = sliderRef.current.clientWidth;
    const newX = Math.max(0, Math.min(info.point.x - sliderRef.current.getBoundingClientRect().left, sliderWidth));
    const newValue = (newX / sliderWidth) * 100;
    setSliderValue(newValue);
    x.set(newX);
  };

  const beforeImageParallax = useTransform(x, [0, 800], ["-20%", "20%"]);
  const afterImageParallax = useTransform(x, [0, 800], ["20%", "-20%"]);

  return (
    <Box className="before-after-section-wrapper">
      <motion.div
        className="content-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h2" className="section-title">
            The Art of Flawless Clean
          </Typography>
        </motion.div>
      
        <motion.div variants={itemVariants}>
          <Typography variant="body1" className="section-subtitle">
            Experience the exquisite result of Mak's premium formula. Drag the slider to reveal a transformation that's both visible and sensational.
          </Typography>
        </motion.div>

        {/* 3D Image Slider Container
        <motion.div variants={itemVariants} className="slider-box-wrapper">
          <Box className="image-slider-container">
            {/* Parallax Before Image
            <motion.img
              src={beforeImage}
              alt="Before"
              className="before-image"
              style={{
                clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
                x: beforeImageParallax
              }}
            />
            {/* Parallax After Image 
            <motion.img
              src={afterImage}
              alt="After"
              className="after-image"
              style={{
                x: afterImageParallax
              }}
            />
            
            {/* Custom Slider Track and Labels
            <Box className="custom-slider-track" ref={sliderRef}>
              <motion.div
                className="custom-slider-thumb"
                drag="x"
                dragConstraints={sliderRef}
                dragElastic={0.1}
                onDrag={handleDrag}
                style={{ x }}
              />
              <div className="label-overlay">
                <motion.div
                  className="before-label"
                  animate={{ opacity: sliderValue > 50 ? 0.3 : 1 }}
                >
                  <Typography variant="caption">Before</Typography>
                </motion.div>
                <motion.div
                  className="after-label"
                  animate={{ opacity: sliderValue < 50 ? 0.3 : 1 }}
                >
                  <Typography variant="caption">After</Typography>
                </motion.div>
              </div>
            </Box>
          </Box>
        </motion.div>

        {/* Premium Product Showcase (FIXED)
        <motion.div 
          className="product-showcase-container"
          variants={itemVariants} 
          whileHover={{ 
            scale: 1.05, 
            y: -10, 
            rotate: -2,
            transition: { duration: 0.3, type: "spring", stiffness: 300 }
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="product-glow" />
          <motion.img 
            src={makProductImage} 
            alt="Mak Floor Cleaner" 
            className="product-image" 
            style={{ rotate: -5 }}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default BeforeAfterSliderSection;*/