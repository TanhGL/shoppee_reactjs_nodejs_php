import { Box, Container, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useStyles } from "./style";

Brand.propTypes = {
  imgs: PropTypes.array,
};

function Brand({ imgs = [], className }) {
  const classes = useStyles();

  const settings = {
    infinite: true,
    slidesToShow: 8,
    swipeToSlide: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Container className={className}>
      <Box className={classes.titleBox}>
        <Typography>THƯƠNG HIỆU</Typography>
      </Box>
      <Slider {...settings}>
        {imgs.map((img, index) => (
          <Box key={index} className={classes.imgBox}>
            <img src={img} alt="" className={classes.img} />
          </Box>
        ))}
      </Slider>
    </Container>
  );
}

export default Brand;
