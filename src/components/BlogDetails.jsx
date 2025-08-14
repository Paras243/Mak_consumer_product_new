import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Divider, List, ListItem, ListItemText } from "@mui/material";

// The blogData is defined here as it is self-contained.
const blogData = {
  "1": {
    "title": "Kitchen Cleaning Routine with Mak Kitchen Cleaner",
    "content": [
      "• Start by removing all visible food debris and wiping down surfaces with a dry cloth. This prevents spreading crumbs and particles when you apply liquid cleaners.",
      "• Spray Mak Kitchen Cleaner directly on kitchen counters, stove tops, and tiled walls. Leave it for 2–3 minutes to let the formula break down grease and oil deposits.",
      "• Use a non-abrasive scrub pad to gently scrub stubborn stains. Mak Kitchen Cleaner’s grease-cutting agents dissolve even dried cooking spills without scratching surfaces.",
      "• Clean your microwave interior by placing a bowl of water with a few drops of Mak Kitchen Cleaner. Heat for 2 minutes, then wipe clean — steam loosens food residue.",
      "• For stainless steel sinks, spray Mak Kitchen Cleaner, scrub with a soft brush, then rinse thoroughly to restore shine and remove bacteria.",
      "• Always wipe surfaces dry after cleaning to prevent water marks and bacterial regrowth. Mak’s anti-bacterial formula gives lasting hygiene for up to 24 hours.",
      "• Repeat this deep-cleaning routine at least twice a week, and wipe spills immediately after cooking for best results."
    ]
  },
  "2": {
    "title": "Monsoon Season Hygiene with Mak Products",
    "content": [
      "• During monsoon, moisture in the air promotes mold, mildew, and bacterial growth. Keep windows slightly open during dry hours for ventilation.",
      "• Clean floors daily with Mak Lemon Grass Floor Cleaner — its anti-fungal properties help prevent damp-smell and fungal growth on tiles.",
      "• Wipe door handles, switches, and frequently touched surfaces with a cloth sprayed with Mak Bathroom Cleaner to stop germ transmission.",
      "• Use Mak Laundry Detergent to wash clothes regularly, as damp weather can cause fabric to develop a musty odor within hours.",
      "• Clean and disinfect bathroom corners, tiles, and drains twice a week with Mak Toilet Cleaner — this stops waterlogging bacteria from multiplying.",
      "• Spray Mak Glass Cleaner on windows to remove rain spots, dirt, and pollen that stick during humid days, keeping glass streak-free and bright.",
      "• Store all cleaning products in a dry place away from direct moisture to maintain their full effectiveness."
    ]
  },
  "3": {
    "title": "Glass & Mirrors Made Easy with Mak Glass Cleaner",
    "content": [
      "• Dust the glass surface first using a dry microfiber cloth to prevent dirt particles from scratching the glass when you apply liquid cleaner.",
      "• Spray Mak Glass Cleaner directly on the surface in a light mist — too much liquid can cause streaking.",
      "• Wipe in a circular motion to dissolve stains, then switch to a vertical and horizontal wipe pattern for a clear finish.",
      "• For mirrors in bathrooms, clean them every 2–3 days with Mak Glass Cleaner to prevent fogging caused by steam and soap residue.",
      "• Clean window glass during early morning or late evening to avoid quick evaporation in direct sunlight, which can cause streaks.",
      "• Use Mak Glass Cleaner on car windows and windshields — it removes dust, bird droppings, and water spots, improving visibility and safety.",
      "• Replace your cleaning cloth regularly; a fresh microfiber cloth ensures a streak-free shine every time."
    ]
  }
}



function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData[id];

  if (!blog) {
    return (
      <Box 
        sx={{ 
          textAlign: "center", 
          p: 4, 
          // Fix: Add top margin to push content below the fixed header
          mt: { xs: 8, md: 15 } 
        }}
      >
        <Typography variant="h5">Blog not found</Typography>
        <Button onClick={() => navigate("/")} sx={{ mt: 2 }} variant="contained">
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        maxWidth: 800, 
        mx: "auto", 
        py: 6, 
        px: 3, 
        // Fix: Add top margin to push content below the fixed header
        mt: { xs: 8, md: 15 } 
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{color: "#1A237E"}}>
        {blog.title}
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
        {blog.content.map((point, index) => (
          <ListItem key={index} sx={{ py: 1, pl: 0, alignItems: "flex-start" }}>
            <ListItemText
              primary={
                <Typography variant="body1" sx={{ color: "#37474f", lineHeight: 1.6 }}>
                  {point}
                </Typography>
              }
              sx={{ "& .MuiListItemText-primary": { fontWeight: 400 } }}
            />
          </ListItem>
        ))}
      </Box>

      <Button onClick={() => navigate("/")} variant="outlined" sx={{ mt: 4, color: "#1A237E", borderColor: "#1A237E" }}>
        Back to Home
      </Button>
    </Box>
  );
}

export default BlogDetails;
