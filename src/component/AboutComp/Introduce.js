import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import img from "../../assets/Images/AboutImages/A-intro-img.webp";
import { makeStyles } from "@mui/styles";
import IntroduceCSS from "../../assets/Styles/AboutPageStyle/Introduce.Style";
import { Card, Container, Grid } from "@mui/material";
const useStyles = makeStyles(IntroduceCSS);

const Introduce = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        display={{ xs: "12", md: "12", sm: "12", lg: "flex" }}
        ml={-5}
        mt={8}
        mb={-4}
        sx={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat" }}
      >
        <Box
          sx={{
            width: "1030px",
            //border: "1px solid black",
            height: "80px",
            mt: 52,
            backgroundColor: "#3949ab",
            opacity: "0.9",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "white", fontWeight: "bold", width: "100%", m: 2 }}
          >
            Mohamed Kutty Nechikatte
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "white", width: "100%", mt: -3, ml: 2 }}
          >
            Chairman
          </Typography>
        </Box>

        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Grid
                item
                xs={12}
                sm={10}
                md={7}
                lg={6}
                xl={4}
                ml={{ xs: "auto", lg: 6 }}
                mr={{ xs: "auto", lg: 6 }}
              >
                <Card
                  shadow="lg"
                  mt={{ xs: 20, sm: 18, md: 20 }}
                  mb={{ xs: 20, sm: 18, md: 20 }}
                  mx={4}
                  className={classes.card}
                  sx={{
                    ml: -9,
                    mr: -100,
                  }}
                >
                  <Box
                    variant="gradient"
                    bgColor="info"
                    coloredShadow="info"
                    borderRadius="lg"
                    p={4}
                    mx={2}
                    mt={2}
                    //ml={-12}
                  >
                    <Typography className={classes.text} gutterBottom>
                      OUR VISION
                    </Typography>
                    <Box
                      component="form"
                      className={classes.box1}
                      color="text.secondary"
                      noValidate
                      autoComplete="off"
                    >
                      <Grid container spacing={-16}>
                        <Grid item xs={12} md={6}>
                          <Typography className={classes.write1}>
                            To become the first choice of customer for dates,
                            dry fruits, nuts and other precious items in fruits
                            and vegetables along with imported drinks and wines
                            by bringing the freshest and highest quality to
                            maximum number of customers through our own shops
                            across India. Our priority lies with consistently
                            keeping up our customers by serving them the
                            products without compromising the level of quality.
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Typography className={classes.text2}>
                            OUR MISSION
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.write3}>
                          We endeavour to achieve our vision by following
                          international standards of quality, right from
                          selection till after sales service. For that we have
                          our own dates farm in the Middle East and we cultivate
                          and sale pure organic dates in 40 + varieties. On the
                          other hand we import fine quality Nuts, dry fruits,
                          exotic fruits, vegetables and drinks from the source
                          from which they are available at their best.
                        </Typography>
                      </Grid>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  );
};

export default Introduce;
