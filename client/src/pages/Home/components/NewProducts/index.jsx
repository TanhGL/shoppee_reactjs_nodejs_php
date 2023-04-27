import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import ProductSkeletonList from "../ProductSkeletonList/ProductSkeletonList";
import { useStyles } from "./style";
import productApi from "../../../../api/productApi";
import ProductList from "components/ProductList";

function NewProducts({ className }) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        //   Goi API
        const { data } = await productApi.getAll({
          _page: 1,
          _limit: 15,
          _sort: "created_at:DESC",
          _category: "allitems",
          _search: "",
        });
        setProductList(data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }

      setLoading(false);
    })();
  }, []);

  return (
    <Box className={className}>
      <Container className={classes.root}>
        <Box className={classes.titleBox}>
          <Typography>SẢN PHẨM MỚI!</Typography>
        </Box>
        {loading ? (
          <ProductSkeletonList length={15} />
        ) : (
          <ProductList data={productList} xs={6} sm={6} md={4} lg={4} />
        )}
      </Container>
    </Box>
  );
}

export default NewProducts;
