import { Box, Container, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addToCart } from "app/cartSlice";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import AddToCartForm from "./components/AddToCartForm";
import ProductInfo from "./components/ProductInfo";
import ProductMenu from "./components/ProductMenu";
import ProductShare from "./components/ProductShare";
import ProductsRelated from "./components/ProductsRelated";
import ProductThumbnail from "./components/ProductThumbnail";
import useProductDetail from "./hooks/useProductDetail";
import { useStyles } from "./style";

function DetailPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  const { enqueueSnackbar } = useSnackbar();

  const {
    params: { productId },
  } = useRouteMatch();

  const [currentTab, setCurrentTab] = useState(0);

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    // Kiểm tra đăng nhập
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để tiếp tục mua hàng!");
      history.push("/auth");
      return;
    }

    const action = addToCart({
      id: Number.parseInt(product.id),
      quantity,
    });
    dispatch(action);

    enqueueSnackbar("Thêm vào giỏ hàng thành công", {
      variant: "success",
      autoHideDuration: 2000,
    });
  };

  const handleTabsChange = (newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ProductThumbnail product={product} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ProductInfo product={product} />
            <AddToCartForm
              quantity={Number.parseInt(product.quantity)}
              onSubmit={handleAddToCartSubmit}
            />
            <ProductShare product={product} />
          </Grid>
        </Grid>

        <ProductMenu
          product={product}
          value={currentTab}
          onChange={handleTabsChange}
        />

        <ProductsRelated category={product.nameCategory} />
      </Container>
    </Box>
  );
}

export default DetailPage;
