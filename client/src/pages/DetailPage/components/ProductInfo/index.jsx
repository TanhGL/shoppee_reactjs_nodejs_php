import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { formatPrice } from "utils";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const isSale = !!product.salePrice;
  const isStocking = Number.parseInt(product.quantity) > 0;

  return (
    <Box className={classes.root}>
      <Typography component="h2">{product.nameProduct}</Typography>
      <span></span>
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
      {isStocking ? (
        <Typography className={classes.cate}>Trạng thái: Còn hàng</Typography>
      ) : (
        <Typography className={classes.cate}>Trạng thái: Hết hàng</Typography>
      )}

      {product.content ? (
        <Typography className={classes.shortDesc}>{product.content}</Typography>
      ) : (
        <Typography className={classes.shortDesc}>
          Chưa có mô tả cho sản phẩm này
        </Typography>
      )}
    </Box>
  );
}

export default ProductInfo;
