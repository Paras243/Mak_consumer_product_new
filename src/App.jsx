import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import WhyChooseMak from "./components/WhyChooseMak";
import CleaningGuides from "./components/CleaningGuides";
import BlogDetails from "./components/BlogDetails";
import BeforeAfterSliderSection from "./components/BeforeAfterSliderSection";
import ContactUs from "./components/ContactUs";
import CustomCursor from "./components/CustomCursor";
import MakProductsPremium from "./components/MakProductsPremium";
import {products} from "./components/staticProducts";

import { Box, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();

  return (
    <Router>
      <CustomCursor/>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* The paddingTop here has been updated to match the new header height
                  on both mobile (64px) and desktop (120px). */}
              <Box 
                id="home" 
                sx={{ 
                  paddingTop: { xs: '64px', md: '120px' } 
                }}
              >
                <Banner />
              </Box>
              <MakProductsPremium />
              <AboutUs />
              <Products />
              <WhyChooseMak />
              <CleaningGuides />
              <BeforeAfterSliderSection />
              <ContactUs />
            </>
          }
        />

        <Route path="/blogs/:id" element={<BlogDetails />} />


        <Route
          path="/product/:id"
          element={<ProductDetails products={products}/>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import WhyChooseMak from "./components/WhyChooseMak";
import CleaningGuides from "./components/CleaningGuides";
import BeforeAfterSliderSection from "./components/BeforeAfterSliderSection";
import ContactUs from "./components/ContactUs";
import CustomCursor from "./components/CustomCursor";

// Import the new premium products showcase
import MakProductsPremium from "./components/MakProductsPremium";

// Import static data if needed
import { products } from "./components/staticProducts";
import { Box, useTheme } from "@mui/material"; // Fixed: Added Box to the import

function App() {
  const theme = useTheme();

  return (
    <Router>
      <CustomCursor/>
      <Header />
      {/* This spacer box pushes the content down to prevent it from being hidden behind the sticky header. 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home" style={{ marginTop: "16px" }}>
                <Banner />
              </div>
              <MakProductsPremium />
              <AboutUs />
               
              <Products />
              <WhyChooseMak />
              <CleaningGuides />
              <BeforeAfterSliderSection />
              <ContactUs />
            </>
          }
        />
        {/* Pass static products data to ProductDetails 
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;*/



/*import toilet_cleaner_1 from "../assets/products/Toilet_cleaner_1.jpg";
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
  { name: "Mak Kitchen Cleaner", image: kitchen_cleaner_1 },
  { name: "Mak Floral Floor Cleaner", image: floral_floor_cleaner_1 },
  { name: "Mak Fabric Cleaner", image: fabric_conditioner_1 },
  { name: "Mak Glass Cleaner", image: glass_cleaner_1 },
  { name: "Mak Laundry Detergent", image: laundry_detergent_1 },
  { name: "Mak Colour Fix Up", image: colour_fixup_1 },
  { name: "Mak Green Apple Gentle Wash", image: greenApple_gentle_wash_1 },
  { name: "Mak Rose Gentle Wash", image: rose_gentle_wash_1},
  { name: "Mak Gentle Wash", image: gentle_wash_1 },
  { name: "Mak Lemon Grass Floor Cleaner", image: lemonGrass_floor_cleaner_1 },
  { name: "Mak Lemon Dish Wash", image: lemonDish_wash_1 },
  { name: "Mak Bathroom Cleaner", image: bathroom_cleaner_1 },
  { name: "Mak Toilet Cleaner", image: toilet_cleaner_1 },

]; */