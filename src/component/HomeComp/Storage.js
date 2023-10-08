import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import img from "../../assets/Images/HomeImages/H-dry-fruits.webp";
import { makeStyles } from "@mui/styles";
import StoreCSS from "../../assets/Styles/HomePageStyles/Storage.Style";
import { Card, Container, Grid } from "@mui/material";
const useStyles = makeStyles(StoreCSS);

const Storage = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        display={{ xs: "12", md: "12", sm: "12", lg: "flex" }}
        ml={70}
        mt={8}
        mb={-4}
        sx={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat" }}
      >
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
                    ml: -78,
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
                    ml={-12}
                  >
                    <Typography className={classes.text} gutterBottom>
                      STORING YOUR FAVOURITE DATES, DRY FRUITS AND NUTS!
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
                            For immediate usage, store these products in
                            airtight containers at cool, dark spot reducing the
                            exposure of light, oxygen and moisture.
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Typography className={classes.write2}>
                            Do not expose to heat as it may go rancid or create
                            grounds for soft bodied animals.
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.write3}>
                          For longer user , keep it refrigerated giving it the
                          right taste and more flavourful vibrant to these
                          tasteful Products.
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

export default Storage;
