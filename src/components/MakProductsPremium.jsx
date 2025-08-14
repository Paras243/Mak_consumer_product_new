import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./MakProductsPremium.css";

// Your images
import mak_logo from "../assets/Logo.jpeg";
import toilet_cleaner_1 from "../assets/products/Toilet_cleaner_1.jpg";
import rose_gentle_wash_1 from "../assets/products/Rose_gentle_wash_1.png";
import kitchen_cleaner_1 from "../assets/products/Kitchen_cleaner_1.jpg";
import lemonGrass_floor_cleaner_1 from "../assets/products/LemonGrass_floor_cleaner_1.jpg";
import lemonDish_wash_1 from "../assets/products/Lemon_Dish_wash_1.png";
import laundry_detergent_1 from "../assets/products/laundry_detergent_1.jpg";
import greenApple_gentle_wash_1 from "../assets/products/greenApple_gentle_wash_1.png";
import glass_cleaner_1 from "../assets/products/Glass_cleaner_1.png";
import gentle_wash_1 from "../assets/products/Gentle_wash_1.png";
import colour_fixup_1 from "../assets/products/colour_fixUp_1.png";
import bathroom_cleaner_1 from "../assets/products/Bathroom_cleaner_1.jpg";
import floral_floor_cleaner_1 from "../assets/products/Floral_floor_cleaner_1.jpg";
import fabric_conditioner_1 from "../assets/products/Fabric_conditioner_1.jpg";

const products = [
  { name: "Mak Kitchen Cleaner", image: kitchen_cleaner_1, description: "Powerfully removes tough kitchen grease and grime." },
  { name: "Mak Floral Floor Cleaner", image: floral_floor_cleaner_1, description: "Leaves floors sparkling and your home smelling fresh." },
  { name: "Mak Fabric Conditioner", image: fabric_conditioner_1, description: "Softens clothes and infuses them with a luxurious scent." },
  { name: "Mak Glass Cleaner", image: glass_cleaner_1, description: "Provides a streak-free shine for all glass surfaces." },
  { name: "Mak Laundry Detergent", image: laundry_detergent_1, description: "Deep-cleaning formula for a spotless and fresh wash." },
  { name: "Mak Colour Fix Up", image: colour_fixup_1, description: "Protects and brightens colors, preventing fading." },
  { name: "Mak Green Apple Gentle Wash", image: greenApple_gentle_wash_1, description: "A refreshing, gentle wash for delicate fabrics with a crisp scent." },
  { name: "Mak Rose Gentle Wash", image: rose_gentle_wash_1, description: "Infused with a romantic rose fragrance for a delicate clean." },
  { name: "Mak Gentle Wash", image: gentle_wash_1, description: "A pure and effective wash for all your gentle garments." },
  { name: "Mak Lemon Grass Floor Cleaner", image: lemonGrass_floor_cleaner_1, description: "An invigorating clean that leaves a long-lasting lemongrass scent." },
  { name: "Mak Lemon Dish Wash", image: lemonDish_wash_1, description: "Tackles grease with the power of lemon for sparkling dishes." },
  { name: "Mak Bathroom Cleaner", image: bathroom_cleaner_1, description: "Heavy-duty formula for a deep clean and sanitized bathroom." },
  { name: "Mak Toilet Cleaner", image: toilet_cleaner_1, description: "Sanitizes and cleans with a powerful, fresh-scented formula." },
];

const MakProductsPremium = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  // Parallax Effect for Text - Using MotionValues
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxTitleX = useTransform(mouseX, [0, 1], [-20, 20]);
  const parallaxTitleY = useTransform(mouseY, [0, 1], [-10, 10]);
  const parallaxSubTitleX = useTransform(mouseX, [0, 1], [-10, 10]);
  const parallaxSubTitleY = useTransform(mouseY, [0, 1], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <section className="premium-section">
        <div className="liquid-background">
          <div className="blob-1" />
          <div className="blob-2" />
        </div>
        <motion.div
          className="premium-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          ref={containerRef}
        >
          <motion.div
            className="logo-container"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="logo-glow-wrapper">
              <img src={mak_logo} alt="Mak Logo" className="logo" />
            </div>
          </motion.div>
          
          <motion.h1
            className="main-title"
            style={{ x: parallaxTitleX, y: parallaxTitleY }}
          >
            <span className="title-text">Elegant & Natural Cleaning</span>
          </motion.h1>
          
          <motion.p
            className="sub-title"
            style={{ x: parallaxSubTitleX, y: parallaxSubTitleY }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Discover our premium, eco-friendly products crafted for a spotless and luxurious home.
          </motion.p>
          
          <div 
            className="scroll-gallery-wrapper"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className={`products-grid-scroll ${isHovering ? 'paused' : ''}`}>
              {[...products, ...products].map((product, index) => (
                <motion.div
                  key={index}
                  className="product-card"
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="product-image-wrapper"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty("--x", `${x}px`);
                      e.currentTarget.style.setProperty("--y", `${y}px`);
                    }}
                  >
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="dynamic-glow" />
                  </motion.div>
                  <h3 className="product-title">{product.name}</h3>
                  <motion.div 
                    className="product-details-overlay"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{product.description}</p>
                    <motion.button whileHover={{ scale: 1.1 }}>View Product</motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MakProductsPremium;