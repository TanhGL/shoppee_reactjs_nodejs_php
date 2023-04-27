import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useStyles } from "./style";
import "./style.scss";

SliderBanner.propTypes = {
  imgs: PropTypes.array,
};

function SliderBanner({ imgs = [], className }) {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots-1das6 slick-thumb-4t3d8",
  };

  return (
    <Slider {...settings} className={className}>
      {imgs.map((img, index) => (
        <Box key={index} className={classes.imgBox}>
          <img src={img} alt="" className={classes.img} width="100%" />
        </Box>
      ))}
    </Slider>
  );
}

export default SliderBanner;
