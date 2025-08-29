// A static array of product objects to be used throughout the application.
// This is a single source of truth for all product data.
import toilet_cleaner_1 from "../assets/products/Toilet_cleaner_1.jpg";
import toilet_cleaner_2 from "../assets/products/Toilet_cleaner_2.jpg";

import rose_gentle_wash_1 from "../assets/products/Rose_gentle_wash_1.png";
import rose_gentle_wash_2 from "../assets/products/Rose_gentle_wash_2.jpg";

import kitchen_cleaner_1 from "../assets/products/Kitchen_cleaner_1.jpg";
import kitchen_cleaner_2 from "../assets/products/Kitchen_cleaner_2.jpg";

import lemonGrass_floor_cleaner_1 from "../assets/products/LemonGrass_floor_cleaner_1.jpg";
import lemonGrass_floor_cleaner_2 from "../assets/products/LemonGrass_floor_cleaner_2.jpg";

import lemonDish_wash_1 from "../assets/products/Lemon_Dish_wash_1.png";
import lemonDish_wash_2 from "../assets/products/Lemon_Dish_wash_2.jpg";

import laundry_detergent_1 from "../assets/products/Laundry_detergent_1.jpg";
import laundry_detergent_2 from "../assets/products/Laundry_detergent_2.jpg";

import greenApple_gentle_wash_1 from "../assets/products/GreenApple_gentle_wash_1.png";
import greenApple_gentle_wash_2 from "../assets/products/GreenApple_gentle_wash_2.png";

import glass_cleaner_1 from "../assets/products/Glass_cleaner_1.png";
import glass_cleaner_2 from "../assets/products/Glass_cleaner_2.png";

import gentle_wash_1 from "../assets/products/Gentle_wash_1.png";
import gentle_wash_2 from "../assets/products/Gentle_wash_2.jpg";

import floral_floor_cleaner_1 from "../assets/products/Floral_floor_cleaner_1.jpg";
import floral_floor_cleaner_2 from "../assets/products/Floral_floor_cleaner_2.jpg";

import fabric_conditioner_1 from "../assets/products/Fabric_conditioner_1.jpg";

import colour_fixup_1 from "../assets/products/Colour_fixUp_1.png";
import colour_fixup_2 from "../assets/products/Colour_fixUp_2.png";

import bathroom_cleaner_1 from "../assets/products/Bathroom_cleaner_1.jpg";
import bathroom_cleaner_2 from "../assets/products/Bathroom_cleaner_2.png";

export  const products = [
  {
    id: 1,
    title: "Gentle Wash",
    description: "A specially formulated gentle wash that's tough on stains but soft on fabrics, keeping your clothes looking and feeling new.",
    price: 140,
    thumbnail: gentle_wash_1,
    images: [
      gentle_wash_1,
      gentle_wash_2,
    ],
  },
  {
    id: 2,
    title: "Rose Gentle Wash",
    description: "Infused with a refreshing rose fragrance, this gentle wash is perfect for a luxurious laundry experience.",
    price: 125,
    thumbnail: rose_gentle_wash_1,
    images: [
      rose_gentle_wash_1,
      rose_gentle_wash_2,
    ],
  },

  {
    id: 3,
    title: "Green Apple Gentle Wash",
    description: "Experience a burst of fresh green apple scent with every wash, leaving your laundry smelling clean and vibrant.",
    price: 125,
    thumbnail: greenApple_gentle_wash_1,
    images: [
      greenApple_gentle_wash_1,
      greenApple_gentle_wash_2,
    ],
  },

  {
    id: 4,
    title: "Fabric Conditioner",
    description: "This fabric conditioner softens clothes and reduces wrinkles, giving them a fresh scent.",
    price: 120,
    thumbnail: fabric_conditioner_1,
    images: [
      fabric_conditioner_1,
    ],
  },

  {
    id: 5,
    title: "Glass Cleaner",
    description: "Achieve a streak-free shine on all your glass surfaces with this fast-acting and powerful glass cleaner.",
    price: 120,
    thumbnail: glass_cleaner_1,
    images: [
      glass_cleaner_1,
      glass_cleaner_2,
    ],
  },

  {
    id: 6,
    title: "Colour Fix Up",
    description: "Restore and protect the color of your clothes with this powerful color fix-up solution, preventing fading and keeping your garments vibrant.",
    price: 240,
    thumbnail: colour_fixup_1,
    images: [
      colour_fixup_1,
      colour_fixup_2,
    ],
  },

  {
    id: 7,
    title: "Laundry Detergent",
    description: "A potent laundry detergent designed to deep clean and remove tough stains, leaving your clothes impeccably fresh and clean.",
    price: 350,
    thumbnail: laundry_detergent_1,
    images: [
      laundry_detergent_1,
      laundry_detergent_2,
    ],
  },

  {
    id: 8,
    title: "Lemon Dish Wash",
    description: "Easily cuts through grease and grime with the power of lemon, making your dishes sparkling clean with a fresh, citrus scent.",
    price: 110,
    thumbnail: lemonDish_wash_1,
    images: [
      lemonDish_wash_1,
      lemonDish_wash_2,
    ],
  },

  {
    id: 9,
    title: "Kitchen Cleaner",
    description: "An all-purpose cleaner formulated to tackle kitchen messes, from countertops to stovetops, leaving a clean and hygienic surface.",
    price: 160,
    thumbnail: kitchen_cleaner_1,
    images: [
      kitchen_cleaner_1,
      kitchen_cleaner_2,
    ],
  },

  {
    id: 10,
    title: "Floral Floor Cleaner",
    description: "Clean your floors and fill your home with a delightful floral fragrance that lasts all day.",
    price: 200,
    thumbnail: floral_floor_cleaner_1,
    images: [
      floral_floor_cleaner_1,
      floral_floor_cleaner_2,
    ],
  },
  {
    id: 11,
    title: "Lemon Grass Floor Cleaner",
    description: "A powerful floor cleaner with the fresh, invigorating scent of lemongrass, perfect for a deep and aromatic clean.",
    price: 200,
    thumbnail: lemonGrass_floor_cleaner_1,
    images: [
      lemonGrass_floor_cleaner_1,
      lemonGrass_floor_cleaner_2,
    ],
  },

  {
    id: 12,
    title: "Bathroom Cleaner",
    description: "Tackle tough stains and grime with this heavy-duty bathroom cleaner, formulated for a deep clean.",
    price: 120,
    thumbnail: bathroom_cleaner_1,
    images: [
      bathroom_cleaner_1,
      bathroom_cleaner_2,
    ],
  },

  {
    id: 13,
    title: "Toilet Cleaner",
    description: "A powerful formula designed to effectively clean and sanitize your toilet, leaving it sparkling fresh.",
    price: 110,
    thumbnail: toilet_cleaner_1,
    images: [
      toilet_cleaner_1,
      toilet_cleaner_2,
    ],
  },
];
