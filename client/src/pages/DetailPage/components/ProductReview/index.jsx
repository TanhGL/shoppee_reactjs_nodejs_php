import { Box, Typography } from "@material-ui/core";
import React from "react";

ProductReview.propTypes = {};

function ProductReview(props) {
  return (
    <Box style={{ padding: "15px" }}>
      <Typography>Chưa có bình luận cho sản phẩm này</Typography>
    </Box>
  );
}

export default ProductReview;
