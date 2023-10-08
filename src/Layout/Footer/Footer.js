import React from "react";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import img from "../../assets/Images/FooterImages/H-logo.png";
import { Grid, Link, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";
import FootCss from "../../assets/Styles/FooterStyle/Footer.Style";
import {Container } from "@mui/material";

const useStyles = makeStyles(FootCss);

const Footer = () => {
  const classes = useStyles();

  const date = new Date().getFullYear();

  return (
    <>
      <Box
        component="footer"
        sx={{ backgroundColor: "#ffab40", mt: 4, height: "300px" ,mb:5}}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
              <Box>
                <Box
                  component="img"
                  src={img}
                  alt="creative team"
                  width={180}
                  height={100}
                  mb={1}
                  mt={5}
                  ml={-20}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={2} sx={{ mb: 3 }}>
              <Box
                component="ul"
                p={0}
                m={0}
                sx={{ listStyle: "none", ml: -20 }}
              >
                <Box component="li" p={0} mt={3} lineHeight={1.25}>
                  <Typography
                    component="a"
                    fontWeight="bold"
                    href="#"

                    rel="noreferrer"
                    fontSize="19px"
                    className={classes.type}
                  >
                    company
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="#"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Blogs
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="#"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Recipes
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="#"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Occasions gifting
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={2} sx={{ mb: 3 }}>
              <Box
                component="ul"
                p={0}
                m={0}
                sx={{ listStyle: "none", ml: -15 }}
              >
                <Box component="li" p={0} mt={3} lineHeight={1.25}>
                  <Typography
                    component="a"
                    fontWeight="bold"
                    href="/all-Product"
    
                    //rel="noreferrer"
                    fontSize="19px"
                    className={classes.type}
                  >
                    All Products
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="#"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Occasions Gifting
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="/gourmet"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Gourmet Products
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="/dates"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Dates
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={2} sx={{ mb: 3 }}>
              <Box
                component="ul"
                p={0}
                m={0}
                sx={{ listStyle: "none", ml: -5 }}
              >
                <Box component="li" p={0} mt={3} lineHeight={1.25}>
                  <Typography
                    component="a"
                    fontWeight="bold"
                    href="/dates"

                    rel="noreferrer"
                    fontSize="19px"
                    className={classes.type}
                  >
                    Dates
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="/nuts"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Nuts
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="/dryFruits"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Dry Fruits
                  </Typography>
                </Box>
                <Box component="li" p={0} m={0} lineHeight={1.25}>
                  <Typography
                    component="a"
                    href="/seeds"

                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Seeds
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={2} sx={{ mb: 3 }}>
              <Typography
                display="block"
                fontSize="18px"
                fontWeight="bold"
                textTransform="capitalize"
                sx={{ color: "white", mt: 4, ml: 0 }}
              >
                FOLLOW US ON :
              </Typography>
              <Box display="flex" alignItems="center" mt={3}>
                <Typography
                  rel="noreferrer"
                  variant="h5"
                  color="white"
                  opacity={0.8}
                >
                  <Link href="https://www.facebook.com"  sx={{ color: "white" }}>
                    <FacebookIcon sx={{ mr: 3, fontSize: "40px" }} />
                  </Link>
                  <Link href="https://www.instagram.com" sx={{ color: "white" }}>
                  <InstagramIcon href="#" sx={{ mr: 3, fontSize: "40px" }} /></Link>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ my: 5, mt: -1, ml: -6 }}>
              <hr style={{ marginTop: "-2%" }} />
              <Typography fontSize="17px" className={classes.type}>
                &copy; {date} Goodies Dates & Nuts. All Rights Reserved.
                <Box display="flex" sx={{ ml: "57%", width: "50%", mt: -3 }}>
                  <Typography
                    component="a"
                    href="/delivery"
                    rel="noreferrer"
                    fontSize="17px"
                    className={classes.type}
                  >
                    Delivery
                  </Typography>
                  <Typography
                    component="a"
                    href="return"
                    rel="noreferrer"
                    fontSize="17px"
                    ml={3}
                    className={classes.type}
                  >
                    Returns
                  </Typography>
                  <Typography
                    component="a"
                    href="/terms"
                    rel="noreferrer"
                    fontSize="17px"
                    ml={3}
                    className={classes.type}
                  >
                    Terms & Conditions
                  </Typography>
                  <Typography
                    component="a"
                    href="/privacy"
                    rel="noreferrer"
                    fontSize="17px"
                    ml={3}
                    className={classes.type}
                  >
                    Privacy Policy
                  </Typography>
                  <Typography
                    component="a"
                    href="/careers"
                    rel="noreferrer"
                    fontSize="17px"
                    ml={3}
                    className={classes.type}
                  >
                    Careers
                  </Typography>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
