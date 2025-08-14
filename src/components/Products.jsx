import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import ProductCard from "./ProductCard";

// Import static data directly into this component
import { products } from "../components/staticProducts";

function Products() {
  return (
    <Container id="products-section" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        mb={4}
        fontWeight="bold"
        sx={{ color: "#4b0082" }}
      >
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12} // 1 per row on mobile
            md={4} // 3 per row on laptop/desktop
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 350 }}>
              <ProductCard product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
