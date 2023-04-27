import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./style";

Banner.propTypes = {
  imgs: PropTypes.array,
};

function Banner({ imgs = [], className }) {
  const classes = useStyles();

  return (
    <Box className={className}>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          {imgs.map((img, index) => (
            <Grid item lg={6} md={6} sm={12} key={index}>
              <Box className={classes.imgBox}>
                <img src={img} alt="" className={classes.img} />
                <Typography>MUA NGAY</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
