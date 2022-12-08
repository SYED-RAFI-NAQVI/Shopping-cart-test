import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Product from "../Product";
import { useSelector } from "react-redux";

function AllProducts() {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <Container>
      <Grid>
        <Typography variant="h4">Products</Typography>
        <Grid sx={{ display: "Grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {products?.map((item) => (
            <Product
              productImageUrl={item.image}
              productTitle={item.title}
              productDescription={item.description}
              productPrice={item.price}
              productId={item.id}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AllProducts;
