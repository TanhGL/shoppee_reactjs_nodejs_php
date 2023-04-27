import { Box, Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import ProductDescription from "../ProductDescription";
import ProductReview from "../ProductReview";
import { useStyles } from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

ProductMenu.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  product: PropTypes.object,
};

function ProductMenu({ value = 0, onChange, product }) {
  const classes = useStyles();

  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Box className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleSortChange}
        aria-label="disabled tabs example">
        <Tab label="Mô Tả Sản Phẩm" {...a11yProps(0)}></Tab>
        <Tab label="Bình Luận" {...a11yProps(1)}></Tab>
      </Tabs>

      <TabPanel value={value} index={0}>
        <ProductDescription product={product} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductReview />
      </TabPanel>
    </Box>
  );
}

export default ProductMenu;
