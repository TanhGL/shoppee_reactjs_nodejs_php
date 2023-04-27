import { Box, Button } from "@material-ui/core";
import { updateAddress } from "app/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import NewAddressForm from "../../components/NewAddressForm";
import { useStyles } from "./style";

UpdateAddress.propTypes = {};

function UpdateAddress(props) {
  const classes = useStyles();
  const history = useHistory();
  const { params } = useRouteMatch();

  const { addresses } = useSelector((state) => state.user.current);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const index = addresses.findIndex((x) => x.id === params.id);

  const handleCancel = () => {
    history.push("/account/address");
  };

  const handleSubmit = async (values) => {
    const newAddress = {
      ...values,
      id: params.id,
    };

    const action = updateAddress(newAddress);

    await dispatch(action);
    history.push("/account/address");
    enqueueSnackbar("Cập nhật địa chỉ thành công!!! ❤️❤️❤️", {
      variant: "success",
    });
  };

  return (
    <Box className={classes.root}>
      <NewAddressForm
        onSubmit={handleSubmit}
        labelButton="Cập nhật"
        address={addresses[index]}
      />
      <Box className={classes.cancelButton}>
        <Button onClick={handleCancel}>Hủy</Button>
      </Box>
    </Box>
  );
}

export default UpdateAddress;
