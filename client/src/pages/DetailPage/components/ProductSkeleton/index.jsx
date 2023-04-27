import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

function ProductSkeleton() {
  return (
    <Box pb={8}>
      <Box>
        <Skeleton variant="rect" width="100%" height="270px" />
        <Skeleton />
        <Skeleton width="50%" />
      </Box>
    </Box>
  );
}

export default ProductSkeleton;
