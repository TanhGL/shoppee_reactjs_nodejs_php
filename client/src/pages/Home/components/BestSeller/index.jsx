import { Box, Container, Typography } from "@material-ui/core";
import productApi from "api/productApi";
import ProductList from "components/ProductList";
import React, { useEffect, useState } from "react";
import ProductSkeletonList from "../ProductSkeletonList/ProductSkeletonList";
import { useStyles } from "./style";

function BestSeller({ className }) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        //   Goi API
        const { data } = await productApi.getAll({
          _page: 1,
          _limit: 3,
          _sort: "sold:DESC",
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
          <Typography>NHỮNG SẢN PHẨM BÁN CHẠY NHẤT</Typography>
        </Box>
        {loading ? (
          <ProductSkeletonList length={3} />
        ) : (
          <ProductList data={productList} xs={6} sm={6} md={4} lg={4} />
        )}
      </Container>
    </Box>
  );
}

export default BestSeller;
