import { Box, Button, Grid, Typography } from "@material-ui/core";
import { removeAddress } from "app/userSlice";
import AddressItem from "pages/Account/components/AddressItem";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useStyles } from "./style";

AddressPage.propTypes = {};

function AddressPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { addresses } = useSelector((state) => state.user.current);

  const handleShowAddress = () => {
    history.push("/account/address");
  };

  const handleAddAddress = () => {
    history.push("/account/address/add");
  };

  if (addresses?.length <= 0) {
    return (
      <Box>
        <Box className={classes.header}>
          <Typography>Sổ địa chỉ</Typography>
          <Button onClick={handleAddAddress}>Thêm địa chỉ mới</Button>
        </Box>
        <Box className={classes.addressEmpty}>
          <Typography>Bạn chưa có địa chỉ nào</Typography>
        </Box>
      </Box>
    );
  }

  const handleRemove = async (id) => {
    const action = removeAddress({ id });
    await dispatch(action);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography>Sổ địa chỉ</Typography>
        <Button onClick={handleShowAddress}>Xem tất cả</Button>
      </Box>
      <Grid container spacing={2}>
        {addresses?.map((item) => (
          <Grid key={item.id} item xs={12} sm={12} md={6} lg={6}>
            <AddressItem address={item} onRemove={handleRemove} />
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.addAddress}>
          <Button onClick={handleAddAddress}>Thêm địa chỉ mới</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddressPage;
