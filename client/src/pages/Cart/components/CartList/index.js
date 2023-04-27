import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import CartItem from "../CartItem";
import { useStyles } from "./style";

CartList.propTypes = {
  cartItems: PropTypes.array,
};

function CartList({ cartItems = [] }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.headingTable}>
              <TableCell>Sản phẩm</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Tổng tiền</TableCell>
              <TableCell align="right">Xóa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CartList;
