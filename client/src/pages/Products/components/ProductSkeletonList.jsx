import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

function ProductSkeletonList({ length = 12 }) {
  return (
    <Box>
      <Grid container spacing={4}>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={6} sm={6} md={3} lg={3}>
            <Box>
              <Skeleton variant="rect" width="100%" height="270px" />
              <Skeleton />
              <Skeleton width="50%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
