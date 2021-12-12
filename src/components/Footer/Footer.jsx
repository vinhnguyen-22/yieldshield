import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import yieldProtocol from "../../assets/img/LogoProtocol.svg";
import yieldLogo from "../../assets/img/yeildLogo.webp";
import { useStyles } from "./Footer";

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
          <Box
            sx={{
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <nav className={classes.nav}>
              <Box className={classes.navBox}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 16,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  Home
                </Link>
              </Box>

              <Box className={classes.navBox}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 16,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  Features
                </Link>
              </Box>

              <Box className={classes.navBox}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 16,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  Documentation
                </Link>
              </Box>

              <Box className={classes.navBox}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 16,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  FAQs
                </Link>
              </Box>

              <Box className={classes.navBox}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 16,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  Contact Us
                </Link>
              </Box>
            </nav>
          </Box>

          <Box
            sx={{
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <nav className={classes.nav}>
              <Box className={classes.navBox} style={{ width: "150px" }}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  Disclaimer
                </Link>
              </Box>

              <Box className={classes.navBox} style={{ width: "150px" }}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  Cookie Policy
                </Link>
              </Box>

              <Box className={classes.navBox} style={{ width: "150px" }}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  Terms of Use
                </Link>
              </Box>

              <Box className={classes.navBox} style={{ width: "150px" }}>
                <Link
                  variant="button"
                  href="#"
                  className={classes.navText}
                  color="white"
                  underline="none"
                  sx={{
                    fontSize: 14,
                    textTransform: "none",
                    my: 1,
                    mx: 1.5,
                  }}
                >
                  Privacy Policy
                </Link>
              </Box>
            </nav>
          </Box>
        </Box>

        <Grid container justifyContent="center" spacing={1}>
          <Box style={{ marginRight: "100px" }}>
            <img src={yieldLogo} alt=""></img>
          </Box>
          <Box>
            <img src={yieldProtocol} width={200} alt=""></img>
          </Box>
        </Grid>

        <Box sx={{ p: 5 }}>
          <Typography
            variant="span"
            color={"white"}
            style={{ textAlign: "center" }}
            component={"p"}
          >
            High Risk Warning: Trading cryptocurrencies such as bitcoin and
            blockchain tokens such as ether carries a high level of risk, and
            may not be suitable for all investors. The high degree of price
            volatility can result in incredible losses as well as gains. Before
            deciding to trade cryptocurrencies or blockchain tokens you should
            carefully consider your investment objectives, level of experience,
            and risk appetite. The possibility exists that you could sustain a
            loss of some or all of your initial investment and therefore you
            should not invest using funds that you cannot afford to lose. You
            should be aware of all the risks associated with the trading of
            digital assets, and seek advice from an independent financial
            advisor if you have any specific concerns. Bitcoin and other
            blockchain assets are not money and do not fall within the
            regulatory regime administered by the Customs & Excise Department.
            This information is not directed/intended for distribution to or use
            by residents of certain countries/jurisdictions on the OFAC
            sanctioned list and USA. Our Terms of use apply.
          </Typography>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
