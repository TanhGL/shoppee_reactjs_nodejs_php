import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

AboutsPage.propTypes = {};

function AboutsPage() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography>GIỚI THIỆU</Typography>
      </Box>
      <Box className={classes.aboutsContent}>
        <Typography>Gọi 090 666 21 96</Typography>
        <Typography>m.me/heyyoustudioo</Typography>
        <Typography>heyyoustudiovn@gmail.com</Typography>
        <Typography>https://heyyoustudio.vn</Typography>
      </Box>
    </Container>
  );
}

export default AboutsPage;
