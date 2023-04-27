import { Box, Typography } from "@material-ui/core";
import productApi from "api/productApi";
import ProductList from "components/ProductList";
import ProductSkeletonList from "pages/Products/components/ProductSkeletonList";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";

function ProductsRelated({ category }) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        //   Goi API
        const { data } = await productApi.getAll({
          _page: 1,
          _limit: 4,
          _sort: "sold:DESC",
          _category: category,
          _search: "",
        });
        setProductList(data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }

      setLoading(false);
    })();
  }, [category]);

  return (
    <Box className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography>SẢN PHẨM LIÊN QUAN</Typography>
      </Box>
      {loading ? (
        <ProductSkeletonList length={4} />
      ) : (
        <ProductList data={productList} xs={6} sm={6} md={3} lg={3} />
      )}
    </Box>
  );
}

export default ProductsRelated;
