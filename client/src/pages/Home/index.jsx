import { Box } from "@material-ui/core";
import React from "react";
import { bannerImg, brandImg, sliderImg } from "../../constants";
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import Brand from "./components/Brand";
import NewProducts from "./components/NewProducts";
import SliderBanner from "./components/SliderBanner";
import { useStyles } from "./style";

function HomePage() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SliderBanner imgs={sliderImg} className={classes.mb4} />
      <Banner imgs={bannerImg} className={classes.mb4} />
      <NewProducts className={classes.mb4} />
      <BestSeller className={classes.mb4} />
      <Brand imgs={brandImg} className={classes.mb8} />
    </Box>
  );
}

export default HomePage;
