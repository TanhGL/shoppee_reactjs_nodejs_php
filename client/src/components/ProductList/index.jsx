import { Box, Grid, Typography } from "@material-ui/core";
import Product from "components/Product/Product";
import PropTypes from "prop-types";
import React from "react";

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data = [], xs, sm, md, lg }) {
  if (data?.length <= 0) {
    return (
      <Typography align="center" style={{ padding: "50px 0" }}>
        Không có sản phẩm nào!
      </Typography>
    );
  }

  return (
    <Box>
      <Grid container spacing={4}>
        {data?.map((product) => (
          <Grid item key={product.id} xs={xs} sm={sm} md={md} lg={lg}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
