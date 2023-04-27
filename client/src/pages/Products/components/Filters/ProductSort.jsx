import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useStyles } from "./style";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const classes = useStyles();

  const handleSortChange = (event) => {
    if (onChange) onChange(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <Typography>Sắp xếp theo:</Typography>
      <Box sx={{ minWidth: 190 }}>
        <FormControl fullWidth size="small">
          <Select
            className={classes.select}
            id="demo-simple-select"
            variant="outlined"
            value={currentSort}
            onChange={handleSortChange}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              getContentAnchorEl: null,
            }}>
            <MenuItem value="sold:DESC">Bán chạy nhất</MenuItem>
            <MenuItem value="created_at:ASC">Cũ nhất</MenuItem>
            <MenuItem value="created_at:DESC">Mới nhất</MenuItem>
            <MenuItem value="origin_price:ASC">Giá thấp tới cao</MenuItem>
            <MenuItem value="origin_price:DESC">Giá cao xuống thấp</MenuItem>
            <MenuItem value="name:ASC">Tên: A-Z</MenuItem>
            <MenuItem value="name:DESC">Tên: Z-A</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default ProductSort;
