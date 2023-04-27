import { Box, Container, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./style";

function NotFound() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.notFoundBox}>
        <img
          src="//theme.hstatic.net/200000031420/1000719377/14/404.png?v=154"
          alt=""
        />
        <Typography>Chúng tôi không thể tìm thấy trang bạn yêu cầu.</Typography>
        <Link to="/">
          Về trang chủ
          <ArrowForward fontSize="small" />
        </Link>
      </Box>
    </Container>
  );
}

export default NotFound;
