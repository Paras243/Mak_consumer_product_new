import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./AboutUs.css";
import AboutUsImage from "../assets/HomeCleaning.png";

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6, 0.7, 1], [0, 1, 1, 0]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section className="about-section" id="about-us" ref={ref}>
      <motion.h2
        className="about-title"
        style={{ x: titleX }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>
      <div className="about-container">
        {/* Left: Text Content with Animations */}
        <motion.div
          className="about-text"
          style={{ opacity: textOpacity }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Mak Consumer Products
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            At Mak Consumer Products, we are dedicated to making your home cleaner,
            fresher, and healthier. Our wide range of cleaning tools and solutions –
            including fabric conditioners, kitchen cleaners, window sprays, and more –
            are designed to deliver exceptional results with minimal effort.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            We believe cleanliness isn't just a task — it's a lifestyle. Backed by
            quality, innovation, and customer trust, we continue to develop products
            that meet the everyday needs of households across the country.
          </motion.p>
        </motion.div>

        {/* Right: Image with Parallax and a subtle glow */}
        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={AboutUsImage}
            alt="About Mak Products"
            className="about-image"
            style={{ y: imageParallax }}
          />
          <div className="image-glow" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

/*import React from "react";
import "./AboutUs.css";
import AboutUsImage from "../assets/HomeCleaning.png";
const AboutUs = () => {
  return (
    <section className="about-section" id="about-us">
      <h2 className="about-title">About Us</h2>
      <div className="about-container">
        <div className="about-text">
          <h3>Mak Consumer Products</h3>
          <p>
            At Mak Consumer Products, we are dedicated to making your home cleaner,
            fresher, and healthier. Our wide range of cleaning tools and solutions –
            including fabric conditioners, kitchen cleaners, window sprays, and more –
            are designed to deliver exceptional results with minimal effort.
          </p>
          <p>
            We believe cleanliness isn't just a task — it's a lifestyle. Backed by
            quality, innovation, and customer trust, we continue to develop products
            that meet the everyday needs of households across the country.
          </p>
        </div>

        <div className="about-image">
          <img src={AboutUsImage} alt="About Mak Products" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
*/