import { Box, Button } from "@material-ui/core";
import { addAddress } from "app/userSlice";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import NewAddressForm from "../../components/NewAddressForm";
import { useStyles } from "./style";

NewAddress.propTypes = {};

function NewAddress(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleCancel = () => {
    history.push("/account/address");
  };

  const handleSubmit = async (values) => {
    const action = addAddress(values);
    await dispatch(action);

    history.push("/account/address");
    enqueueSnackbar("Thêm địa chỉ thành công!!! ❤️❤️❤️", {
      variant: "success",
    });
  };

  return (
    <Box className={classes.root}>
      <NewAddressForm onSubmit={handleSubmit} labelButton="Thêm" />
      <Box className={classes.cancelButton}>
        <Button onClick={handleCancel}>Hủy</Button>
      </Box>
    </Box>
  );
}

export default NewAddress;
