import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import img from "../../assets/Images/HomeImages/H-blue-img.jpg";
import NotifyCSS from "../../assets/Styles/HomePageStyles/Notification.Style";
import AppsIcon from "@mui/icons-material/Apps";
//import NewArrival from "./NewArrival";
import PublicIcon from '@mui/icons-material/Public';
import CategoryIcon from '@mui/icons-material/Category';
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import StoreIcon from '@mui/icons-material/Store';
import Special from "./Special";
const useStyles = makeStyles(NotifyCSS);

export default function Notification() {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundImage: `url(${img})`,
          justifyContent: "center",
        }}
        className={classes.box}
      >
        <Box component="section" sx={{ mt: "3%", mb: 1, ml: 15 }}>
          <Container>
            <Grid container spacing={1} alignItems="center">
              <Box>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  ml={-15}
                  sx={{ mb: "4%", mt: { xs: -4, lg: 0 } }}
                >
                  <Typography
                    className={classes.text0}
                    variant="h4"
                    gutterBottom
                  >
                    GOODIES DATES AND NUTS
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    display="flex"
                    className={classes.grid2}
                  >
                    It has been 10 years since we flourished in the business,
                    and we already have 105 outlets across 8 states in India.
                    From Kerala, Karnataka, Andhra Pradesh to Maharashtra,
                    Telengana and Tamil Nadu, our journey has been so far, so
                    good. Our customers are our superstars, and we are glad that
                    we deliver only the best to them.
                  </Typography>
                </Grid>
              </Box>
            </Grid>

            <Box sx={{mt:-40,ml:70,mb:10}}>
              <Grid item xs={12} lg={6}>
                <Grid container justifyContent="center" mt={-25} ml={2}>
                  <Grid item xs={12} md={6}>
                    <Box mb={5} display="flex">
                      <StoreIcon className={classes.icon10} />
                      <Typography
                        variant="h5"
                        component="div"
                        //display="flex"
                        className={classes.text10}
                      >
                        150+
                      </Typography>
                      <Typography fontSize="19px" color="white" className={classes.text11}>
                        Number of stores
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={5} display="flex">
                      <PublicIcon className={classes.icon10} />
                      <Typography
                        variant="h5"
                        component="div"
                        className={classes.text10}
                      >
                        4
                      </Typography>
                      <Typography fontSize="19px" color="white" className={classes.text12}>
                        Countries
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={{ xs: 5, md: 0 }} display="flex">
                      <AppsIcon className={classes.icon10} />
                      <Typography
                        variant="h5"
                        component="div"
                        className={classes.text10}
                      >
                        4000+
                      </Typography>
                      <Typography fontSize="19px" color="white" className={classes.text13}>
                        Products
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box mb={{ xs: 5, md: 0 }} display="flex">
                      <CategoryIcon className={classes.icon10} />
                      <Typography
                        variant="h5"
                        component="div"
                        className={classes.text10}
                      >
                        45
                      </Typography>
                      <Typography fontSize="19px" color="white" className={classes.text14}>
                        Varieties Of Premium dates
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* <Box>
        <NewArrival/>
      </Box> */}

      <Box>
      <Special />
      </Box>
    </>
  );
}
