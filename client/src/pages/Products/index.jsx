import { Box, Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import productApi from "api/productApi";
import ProductList from "components/ProductList";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import ProductSort from "./components/Filters/ProductSort";
import ProductSkeletonList from "./components/ProductSkeletonList";
import { useStyles } from "./style";

function ProductPage() {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
      _sort: params._sort || "sold:DESC",
      _category: match.params.categories || "allitems",
      _search: params._search || "",
    };
  }, [location.search, match]);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        //   Goi API
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSortValue) => {
    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.topBar}>
          <Box className={classes.gridListOption}>Lọc</Box>
          <Box className={classes.sortOption}>
            <ProductSort
              currentSort={queryParams._sort}
              onChange={handleSortChange}
            />
          </Box>
        </Box>
        {loading ? (
          <ProductSkeletonList length={12} />
        ) : (
          <ProductList data={productList} xs={6} sm={6} md={3} lg={3} />
        )}
        <Box className={classes.pagination}>
          <Pagination
            color="primary"
            count={Math.ceil(pagination.total / pagination.limit)}
            page={pagination.page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            size="large"
            siblingCount={0}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default ProductPage;
