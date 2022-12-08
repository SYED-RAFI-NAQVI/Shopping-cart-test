import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/productsCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

export default function Product({
  productImageUrl,
  productTitle,
  productDescription,
  productPrice,
  productId,
}) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  let items = cartItems?.filter((item) => {
    console.log(item.id, productId);
    return item.id === productId;
  });

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productImageUrl,
        productTitle,
        productDescription,
        productPrice,
        id: productId,
      })
    );
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "20px", height: "340px" }}>
      <CardMedia
        component="img"
        height="140"
        image={productImageUrl}
        alt="green iguana"
      />
      <CardContent sx={{ height: "100px" }}>
        <Typography gutterBottom variant="h6" component="div">
          {productTitle.slice(0, 15)}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {productDescription.slice(0, 30)}.....
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ color: "#00aac5" }}
        >
          RS {productPrice}
        </Typography>
      </CardContent>
      <CardActions>
        {items && items.length === 0 && (
          <Button
            fullWidth
            variant="contained"
            sx={{
              margin: "10px",
              backgroundColor: "#00aac5",
              "&:hover": {
                backgroundColor: "#00aac5",
              },
            }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        )}

        {items.map((item) => (
          <Grid display={"flex"} alignItems="center">
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                backgroundColor: "#00aac5",
                "&:hover": {
                  backgroundColor: "#00aac5",
                },
              }}
              onClick={() => dispatch(decrementQuantity(item.id))}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                backgroundColor: "#00aac5",
                "&:hover": {
                  backgroundColor: "#00aac5",
                },
              }}
              onClick={() => dispatch(incrementQuantity(item.id))}
            >
              +
            </Button>
          </Grid>
        ))}
      </CardActions>
    </Card>
  );
}
