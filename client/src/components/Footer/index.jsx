import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Home, MailOutline, PhoneIphone } from "@material-ui/icons";
import React from "react";
import { useStyles } from "./style";

Footer.propTypes = {};

function Footer(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.footerTop}>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <Box className={classes.footerTitle}>
                <Typography>Danh mục</Typography>
              </Box>
              <Box component="ul" className={classes.linkWidget}>
                <Box component="li">
                  <Typography>Tìm kiếm</Typography>
                </Box>
                <Box component="li">
                  <Typography>Giới thiệu</Typography>
                </Box>
                <Box component="li">
                  <Typography>Chính sách đổi trả</Typography>
                </Box>
                <Box component="li">
                  <Typography>Chính sách bảo mật</Typography>
                </Box>
                <Box component="li">
                  <Typography>Điều khoản dịch vụ</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <Box className={classes.footerTitle}>
                <Typography>Blog</Typography>
              </Box>
              <Box component="ul" className={classes.linkWidget}>
                <Box component="li">
                  <Typography>Tìm kiếm</Typography>
                </Box>
                <Box component="li">
                  <Typography>Giới thiệu</Typography>
                </Box>
                <Box component="li">
                  <Typography>Chính sách đổi trả</Typography>
                </Box>
                <Box component="li">
                  <Typography>Chính sách bảo mật</Typography>
                </Box>
                <Box component="li">
                  <Typography>Điều khoản dịch vụ</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <Box className={classes.footerTitle}>
                <Typography>Liên hệ</Typography>
              </Box>
              <Box component="ul" className={classes.linkWidget}>
                <Box component="li">
                  <Typography>Tìm kiếm</Typography>
                </Box>
                <Box component="li">
                  <Typography>Giới thiệu</Typography>
                </Box>
                <Box component="li">
                  <Typography>Chính sách đổi trả</Typography>
                </Box>
                <Box component="li">
                  <Typography>Chính sách bảo mật</Typography>
                </Box>
                <Box component="li">
                  <Typography>Điều khoản dịch vụ</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <Box className={classes.footerTitle}>
                <Typography>Thông tin</Typography>
              </Box>
              <Box component="ul" className={classes.linkWidget}>
                <Box component="li">
                  <Typography>Tìm kiếm</Typography>
                </Box>
                <Box component="li">
                  <Typography>Giới thiệu</Typography>
                </Box>
                <Box component="li">
                  <Typography>Chính sách đổi trả</Typography>
                </Box>
                <Box component="li">
                  <Typography>Chính sách bảo mật</Typography>
                </Box>
                <Box component="li">
                  <Typography>Điều khoản dịch vụ</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.footerMid}>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.footerInfo}>
                <img
                  src="https://theme.hstatic.net/200000031420/1000719377/14/logo_ft.png?v=154"
                  alt="Dương Vũ"
                />
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.footerInfo}>
                <Box>
                  <Home style={{ color: "white" }} />
                </Box>
                <Typography>
                  CN1: 182/13A Lê Văn Sỹ, Phường 10, Phú Nhuận & CN2: 33F(đối
                  diện 84) Nguyễn Văn Nghi, Phường 4, Gò Vấp.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.footerInfo}>
                <Box>
                  <MailOutline style={{ color: "white" }} />
                </Box>
                <Typography>heyyoustudiovn@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.footerInfo}>
                <Box>
                  <PhoneIphone style={{ color: "white" }} />
                </Box>
                <Typography>1900 866632</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.footerBottom}>
        <Container>
          <Box className={classes.footerPayments}>
            <img
              src="//theme.hstatic.net/200000031420/1000719377/14/payment-icon.png?v=154"
              alt=""
            />
          </Box>
          <Box className={classes.footerMenus}>
            <Box component="ul">
              <Box component="li">
                <Typography>TÌM KIẾM</Typography>
              </Box>
              <Box component="li">
                <Typography>GIỚI THIỆU</Typography>
              </Box>
              <Box component="li">
                <Typography>CHÍNH SÁCH ĐỔI TRẢ</Typography>
              </Box>
              <Box component="li">
                <Typography>CHÍNH SÁCH BẢO MẬT</Typography>
              </Box>
              <Box component="li">
                <Typography>ĐIỀU KHOẢN DỊCH VỤ</Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.footerCopyright}>
            <Typography>Hey-you.Studio© 2018</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
