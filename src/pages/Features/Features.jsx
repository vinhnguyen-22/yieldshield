import { Box, Container, Grid, Typography } from "@mui/material";
import Aos from "aos";
import { TextField } from "material-ui";
import React, { useEffect } from "react";
import Cards from "../../components/Cards/Cards.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Layout from "../../components/Layout/Layout";
import PageFooter from "../../components/PageFooter/PageFooter.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { useStyles } from "./Features.js";
import stopLoss from "../../assets/img/stoploss.webp";
import automaticRestakeImg from "../../assets/img/img2.webp";
import riskLevelImg from "../../assets/img/img3.webp";

const Features = (props) => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Layout>
      <PageHeader />
      <Container maxWidth="xl" color="#100213">
        <Container>
          <Box sx={{ display: "grid", mb: 10, p: 5 }}>
            <Typography
              variant="h5"
              align="center"
              color={"white"}
              component="p"
            >
              YieldShield is feature stacked to help you get the best out of
              your Yield Farming initiatives and strategies, we have listened
              intently to what you want and incorporated all the primary
              features to help you maximise your gains. And we have more coming
              soon.
            </Typography>
          </Box>
          <section>
            <Grid container spacing={10} className={classes.sectionGrid}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "div" }} className={classes.imgBox}>
                  <img src={stopLoss} alt="" className={classes.img} />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box data-aos="fade-up" data-aos-duration="1000">
                  <Typography
                    variant="h3"
                    fontWeight={500}
                    sx={{ my: 5 }}
                    color={"white"}
                  >
                    Stop Loss
                  </Typography>

                  <Typography
                    variant="span"
                    align="left"
                    color={"white"}
                    fontSize={16}
                    component="p"
                  >
                    Finally, you can get a good night's sleep or spend a day
                    out, knowing your investment is shielded, thanks to
                    YieldShield’s stop loss mechanism.
                    <p></p>
                    Simply specify the level of allowable drawdown and our
                    robo-farmer will collect your investments and rewards, swap
                    them to the base coin, and return those funds to your wallet
                    if your losses exceed this level.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </section>

          <section>
            <Grid container spacing={10} className={classes.sectionGrid}>
              <Grid item xs={12} md={6}>
                <Box data-aos="fade-up" data-aos-duration="1000">
                  <Typography
                    variant="h3"
                    fontWeight={500}
                    sx={{ my: 5 }}
                    color={"white"}
                  >
                    Aggregated Farms
                  </Typography>

                  <Typography
                    variant="span"
                    align="left"
                    color={"white"}
                    fontSize={16}
                    component="p"
                  >
                    You no longer need to search for the most convenient and
                    profitable Pools & Farms all over the Internet. You can find
                    them all collected in one place now. Our analysts constantly
                    monitor the market for the most stable and secure platforms
                    for your investment. YieldShield only works with whitelisted
                    farms who have passed a security audit to minimize your
                    risks and maximize your yield.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{ display: "div", backgroundColor: "#252937" }}
                  className={classes.imgBox}
                >
                  <img src={stopLoss} alt="" className={classes.img} />
                </Box>
              </Grid>
            </Grid>
          </section>

          <section>
            <Grid container spacing={10} className={classes.sectionGrid}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{ display: "div", backgroundColor: "#252937" }}
                  className={classes.imgBox}
                >
                  <img
                    src={automaticRestakeImg}
                    alt=""
                    className={classes.img}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box data-aos="fade-up" data-aos-duration="1000">
                  <Typography
                    variant="h3"
                    fontWeight={500}
                    sx={{ my: 5 }}
                    color={"white"}
                  >
                    Automatic <br /> Restake
                  </Typography>

                  <Typography
                    variant="span"
                    align="left"
                    color={"white"}
                    fontSize={16}
                    component="p"
                  >
                    Finally, you can get a good night's sleep or spend a day
                    out, knowing your investment is shielded, thanks to
                    YieldShield’s stop loss mechanism.
                    <br />
                    Simply specify the level of allowable drawdown and our
                    robo-farmer will collect your investments and rewards, swap
                    them to the base coin, and return those funds to your wallet
                    if your losses exceed this level.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </section>

          <section>
            <Grid container spacing={10} className={classes.sectionGrid}>
              <Grid item xs={12} md={6}>
                <Box data-aos="fade-up" data-aos-duration="1000">
                  <Typography
                    variant="h3"
                    fontWeight={500}
                    sx={{ my: 5 }}
                    color={"white"}
                  >
                    Risk Level
                  </Typography>

                  <Typography
                    variant="span"
                    align="left"
                    color={"white"}
                    fontSize={16}
                    component="p"
                  >
                    There is a risk in any investment, but now you do not need
                    to be an analyst to assess it. We hourly estimate the Risk
                    level for each pool based on multiple parameters in
                    automatic mode.
                    <p></p>
                    You just have to decide whether you agree to ensure stable
                    income or are willing to risk for the sake of extra profit.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{ display: "div", backgroundColor: "#252937" }}
                  className={classes.imgBox}
                >
                  <img src={riskLevelImg} alt="" className={classes.img} />
                </Box>
              </Grid>
            </Grid>
          </section>

          <section>
            <Box>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  sx={{ my: 5 }}
                  color={"rgb(130,64,221)"}
                  align="center"
                >
                  Open Opportunities
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  fontWeight={500}
                  color={"white"}
                  align="center"
                >
                  Ways to get involved
                </Typography>
              </Box>
            </Box>

            <Box
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ marginTop: "100px" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Cards
                    subText="Join forces"
                    mainText="Partnerships"
                    buttonText="Get in touch"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Cards
                    subText="Shout from the rooftops"
                    mainText="Ambassadors"
                    buttonText="Join Us"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Cards
                    subText="Pools & Farms"
                    mainText="Integrate"
                    buttonText="Documentation"
                  />
                </Grid>
              </Grid>
            </Box>
          </section>
        </Container>
      </Container>
      <PageFooter />

      <Footer />
    </Layout>
  );
};

export default Features;
