import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Product from "../Product";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  return (
    <Container>
      <Grid>
        <Typography variant="h4">Cart</Typography>
        <Grid sx={{ display: "Grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {cartItems?.map((item) => (
            <Product
              productImageUrl={item.productImageUrl}
              productTitle={item.productTitle}
              productDescription={item.productDescription}
              productPrice={item.productPrice}
              productId={item.id}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;
