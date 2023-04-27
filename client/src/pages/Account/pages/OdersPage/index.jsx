import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import { getBill } from "app/billSlice";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import OderItem from "../../components/OderItem";
import { useStyles } from "./style";

OdersPage.propTypes = {};

function OdersPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [billList, setBillList] = useState([]);

  const handleShowOders = () => {
    history.push("/account/orders");
  };

  useEffect(() => {
    (async () => {
      const action = getBill();
      const resultAction = await dispatch(action);
      setBillList(unwrapResult(resultAction));
    })();
  }, [dispatch]);

  if (billList.length <= 0) {
    return (
      <Box className={classes.root}>
        <Box className={classes.header}>
          <Typography>Các đơn hàng vừa đặt</Typography>
        </Box>
        <Box className={classes.ordersEmpty}>
          <Typography>Bạn chưa đặt đơn hàng nào</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography>Các đơn hàng vừa đặt</Typography>
        <Button onClick={handleShowOders}>Xem tất cả</Button>
      </Box>

      <Box className={classes.tableOders}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.headingTable}>
                <TableCell>Mã đơn hàng</TableCell>
                <TableCell>Ngày đặt</TableCell>
                <TableCell>Sản phẩm</TableCell>
                <TableCell>Tổng tiền</TableCell>
                <TableCell>Trạng thái đơn hàng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {billList?.map((item) => (
                <OderItem key={item.id} bill={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default OdersPage;
