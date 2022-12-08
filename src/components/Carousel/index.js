import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function HomeCarousel(props) {
  var items = [
    {
      url: "./slide.png",
    },
    {
      url: "./slide.png",
    },
    {
      url: "./slide.png",
    },
    {
      url: "./slide.png",
    },
  ];

  return (
    <Carousel height={"500px"} navButtonsAlwaysVisible={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <img width="100%" src={require("./slide.png")} alt="code" />
    </Paper>
  );
}

export default HomeCarousel;
