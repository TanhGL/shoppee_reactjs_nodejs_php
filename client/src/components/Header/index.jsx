import {
  Badge,
  Box,
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  TextField,
  withStyles,
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  Search,
  ShoppingCart,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import categoryApi from "api/categoryApi";
import { getProductsInCart } from "app/cartSlice";
import { cartItemsCountSelector } from "pages/Cart/selectors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./style";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const StyleMenus = withStyles(() => ({
  paper: {
    backgroundColor: "rgba(255,255,255,0.7)",
  },
}))(Menu);

function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  const cartItemsCount = useSelector(cartItemsCountSelector);
  const dispatch = useDispatch();

  const history = useHistory();

  // const cartTotal = useSelector(cartTotalSelector);
  // console.log(cartTotal);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //   Goi API
        const categories = await categoryApi.getAll();
        setCategories(categories);
      } catch (error) {
        console.log("Failed to fetch category list: ", error);
      }
    })();

    if (isLoggedIn) {
      const action = getProductsInCart();
      dispatch(action);
    }
  }, [isLoggedIn, dispatch]);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenSearch = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleSearch = (e) => {
    setAnchorEl(null);

    e.preventDefault();
    const search = e.target.search.value;

    history.push({
      pathname: `/search`,
      search: `_search=${search}`,
    });
  };

  const handleSearchMobile = (e) => {
    setDrawerOpen(false);

    e.preventDefault();
    const search = e.target.search.value;

    history.push({
      pathname: `/search`,
      search: `_search=${search}`,
    });
  };

  const handleOpenNavMobile = () => {
    setDrawerOpen(true);
  };

  const handleCloseNavMobile = () => {
    setDrawerOpen(false);
  };

  const handleShowList = () => {
    setListOpen(!listOpen);
  };

  return (
    <>
      <Box className={classes.root}>
        <Container className={classes.header}>
          <Link to="/" color="inherit">
            <img
              src="https://theme.hstatic.net/200000031420/1000719377/14/logo.png?v=154"
              alt="Dương Vũ"
            />
          </Link>
          <Box component="ul">
            <Box component="li">
              <Link to="/">TRANG CHỦ</Link>
            </Box>
            <Box component="li" className={classes.subMenu}>
              <Link to="/collections/allitems">SẢN PHẨM</Link>
              <Box component="ul" className={classes.menuProducts}>
                {categories.map((category) => (
                  <Box component="li" key={category.id}>
                    <Link to={`/collections/${category.name}`}>
                      {category.name.toUpperCase()}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box component="li">
              <Link to="/abouts">GIỚI THIỆU</Link>
            </Box>
            <Box component="li">
              {!isLoggedIn && <Link to="/auth">ĐĂNG NHẬP / ĐĂNG KÝ</Link>}

              {isLoggedIn && (
                <Link to="/account">{loggedInUser.fullname.toUpperCase()}</Link>
              )}
            </Box>
            <Box component="li" style={{ marginLeft: "10px" }}>
              <IconButton color="inherit" onClick={handleOpenSearch}>
                <Search />
              </IconButton>
            </Box>
            <Box component="li" style={{ margin: "0 10px 0 10px" }}>
              <Link to="/cart" color="inherit">
                <StyledBadge badgeContent={cartItemsCount} color="secondary">
                  <ShoppingCart />
                </StyledBadge>
              </Link>
            </Box>
          </Box>
        </Container>

        <Box className={classes.headerMobile}>
          <Box className={classes.navLeft}>
            <IconButton onClick={handleOpenNavMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box className={classes.navCenter}>
            <Link to="/" color="inherit">
              <img
                src="https://theme.hstatic.net/200000031420/1000719377/14/logo.png?v=154"
                alt="Dương Vũ"
              />
            </Link>
          </Box>
          <Box className={classes.navRight}>
            <Link to="/cart" color="inherit">
              <StyledBadge badgeContent={cartItemsCount} color="secondary">
                <ShoppingCart />
              </StyledBadge>
            </Link>
          </Box>
        </Box>
      </Box>

      <StyleMenus
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}>
        <MenuItem>
          <Box className={classes.searchBox}>
            <form onSubmit={handleSearch}>
              <TextField name="search" placeholder="Tìm kiếm..." />
              <IconButton color="inherit" type="submit">
                <Search />
              </IconButton>
            </form>
          </Box>
        </MenuItem>
      </StyleMenus>

      <Drawer
        open={drawerOpen}
        className={classes.Drawer}
        onClose={handleCloseNavMobile}>
        <MenuItem className={classes.inputForm}>
          <form onSubmit={handleSearchMobile}>
            <div>
              <input name="search" placeholder="Tìm kiếm..." />
              <IconButton color="inherit" type="submit">
                <Search />
              </IconButton>
            </div>
          </form>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMobile}>
          <Link to="/">TRANG CHỦ</Link>
        </MenuItem>
        <MenuItem className={classes.productLink}>
          <List component="nav" className={classes.rootList}>
            <ListItem>
              <Link to="/collections/allitems" onClick={handleCloseNavMobile}>
                SẢN PHẨM
              </Link>
              <IconButton size="small" onClick={handleShowList}>
                {listOpen ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItem>
            <Collapse in={listOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {categories.map((category) => (
                  <ListItem key={category.id}>
                    <Link
                      onClick={handleCloseNavMobile}
                      to={`/collections/${category.name}`}
                      className={classes.linkCategory}>
                      {category.name.toUpperCase()}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMobile}>
          <Link to="/abouts">GIỚI THIỆU</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMobile}>
          {!isLoggedIn && <Link to="/auth">ĐĂNG NHẬP / ĐĂNG KÝ</Link>}

          {isLoggedIn && (
            <Link to="/account">{loggedInUser.fullname.toUpperCase()}</Link>
          )}
        </MenuItem>
      </Drawer>
    </>
  );
}

export default Header;
