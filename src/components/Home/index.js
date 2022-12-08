import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import apiCall from "../../utils/requests";
import Product from "../Product";
import Terms from "../TermsConditions";
import { addProducts } from "../../redux/productsCartSlice";
import { useDispatch } from "react-redux";
import HomeCarousel from "../Carousel";

function Home() {
  const [productsData, setProductsData] = useState(null);
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    localStorage.getItem("tcAccepted") && localStorage.removeItem("tcAccepted");
    setOpen(false);
  };

  const handleAcceptedTerms = () => {
    localStorage.setItem("tcAccepted", true);
    setOpen(false);
  };

  const handleAllProducts = () => {
    dispatch(addProducts(productsData));
    history.push("/all-products");
  };

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      let data = await apiCall("https://fakestoreapi.com/products", options);
      setProductsData(data);
      return data;
    }
    fetchData();
  }, []);

  useEffect(() => {
    !localStorage.getItem("tcAccepted") && setOpen(true);
  }, []);

  return (
    <div>
      <Container>
        <Grid sx={{ margin: "50px" }}>
          <HomeCarousel />
        </Grid>
        <Typography variant="h4">Products</Typography>
        <Grid sx={{ display: "Grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {productsData &&
            productsData
              .slice(0, 8)
              .map((product) => (
                <Product
                  productImageUrl={product.image}
                  productTitle={product.title}
                  productDescription={product.description}
                  productPrice={product.price}
                  productId={product.id}
                />
              ))}
        </Grid>
        <Grid display={"flex"} justifyContent="flex-end" mr="1em">
          {productsData && productsData.length > 8 && (
            <Button
              variant="contained"
              sx={{
                borderRadius: "1",
                backgroundColor: "#00aac5",
                marginBottom: "2rem",
                "&:hover": {
                  backgroundColor: "#00aac5",
                },
              }}
              onClick={handleAllProducts}
            >
              All Products
            </Button>
          )}
        </Grid>
        <Terms
          open={open}
          handleClose={handleClose}
          handleAcceptedTerms={handleAcceptedTerms}
        />
      </Container>
    </div>
  );
}

export default Home;
