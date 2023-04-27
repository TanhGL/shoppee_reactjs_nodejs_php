import { Paper, Typography } from "@material-ui/core";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";
import React from "react";

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const safeDescription = DOMPurify.sanitize(product.content);

  return (
    <Paper elevation={0} style={{ padding: "15px" }}>
      {product.content ? (
        <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
      ) : (
        <Typography>Chưa có mô tả cho sản phẩm này</Typography>
      )}
    </Paper>
  );
}

export default ProductDescription;
