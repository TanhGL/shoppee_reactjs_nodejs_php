import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";
import { formatPrice } from "utils";
import { useStyles } from "./style";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const classes = useStyles();
  const history = useHistory();
  const isSale = !!product.salePrice;

  const handleClick = () => {
    // Navigate to detail page: /products/:productId
    history.push(`/products/${product.id}`);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.img} onClick={handleClick}>
        <img src={product.thumbnail} alt={product.nameProduct} />
      </Box>
      <Box className={classes.content}>
        <Typography className={classes.nameProduct} onClick={handleClick}>
          {product.nameProduct}
        </Typography>
        {isSale ? (
          <Box className={classes.priceBox}>
            <Typography className={classes.salePrice}>
              {formatPrice(product.salePrice)}
            </Typography>
            <Typography className={classes.originPrice}>
              {formatPrice(product.originPrice)}
            </Typography>
          </Box>
        ) : (
          <Box className={classes.priceBox}>
            <Typography className={classes.salePrice}>
              {formatPrice(product.originPrice)}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Product;
