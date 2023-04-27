import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./style";
import { Box, Typography } from "@material-ui/core";
import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";

ProductShare.propTypes = {
  product: PropTypes.object,
};

function ProductShare({ product = {} }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.productId}>
        <Typography>Mã sản phẩm : </Typography>
        <span>{`HY${product.id}`}</span>
      </Box>
      <Box className={classes.share}>
        <Typography>Chia sẻ : </Typography>
        <Box component="ul">
          <Box component="li">
            <a href="/#">
              <Facebook />
            </a>
          </Box>
          <Box component="li">
            <a href="/#">
              <Twitter />
            </a>
          </Box>
          <Box component="li">
            <a href="/#">
              <Pinterest />
            </a>
          </Box>
          <Box component="li">
            <a href="/#">
              <Instagram />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductShare;
