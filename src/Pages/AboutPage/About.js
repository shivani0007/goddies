import React from "react";
import { makeStyles } from "@mui/styles";
import AboutCSS from "../../assets/Styles/AboutPageStyle/About.Style";
import img from "../../assets/Images/NavbarImage/H-logo-2.png";
import Container from "react-bootstrap/Container";
import { Card, Grid } from "@mui/material";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography } from "@mui/material";
import img11 from "../../assets/Images/HomeImages/H-img-back.jpg";
import img1 from "../../assets/Images/AboutImages/A-first-img.webp";
import img2 from "../../assets/Images/AboutImages/A-sec-img.webp";
import img3 from "../../assets/Images/AboutImages/A-third-img.webp";
import product from "../../assets/Images/NavbarImage/A-pro-img.jpg";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import front from "../../assets/Images/AboutImages/A-front-img.jpg";
import { useNavigate } from "react-router-dom";
import Introduce from "../../component/AboutComp/Introduce";
import Nuttist from "../../component/AboutComp/Nuttist";
import Badge from '@mui/material/Badge';
import Footer from "../../Layout/Footer/Footer";

const useStyles = makeStyles(AboutCSS);

export default function About() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ backgroundImage: `url(${img11})` }} className={classes.Image}>
        <Box className={classes.box1}>
          <Navbar bg="transparent" data-bs-theme="light">
            <Container>
              <Box>
                <abbr title=" GOODIES">
                  <a href="/">
                    <img
                      src={img}
                      alt="Logo"
                      height={80}
                      width={150}
                      style={{ marginLeft: "4%", marginTop: "-1%" }}
                    />
                  </a>
                </abbr>

                <Nav className={classes.nav}>
                  <abbr title="HOME" style={{ textDecoration: "none" }}>
                    <Nav.Link className={classes.link} href="/">
                      HOME
                    </Nav.Link>
                  </abbr>
                  <abbr title="ABOUT-US" style={{ textDecoration: "none" }}>
                    <Nav.Link className={classes.link1} href="/about-us">
                      ABOUT-US
                    </Nav.Link>
                  </abbr>
                  <abbr title="PRODUCTS" style={{ textDecoration: "none" }}>
                    <NavDropdown className={classes.link} title="PRODUCTS">
                      <Box display="flex">
                        <Box>
                          <NavDropdown.Item
                            href="/all-Product"
                            className={classes.product}
                          >
                            All Products{" "}
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/dates"
                            className={classes.product}
                          >
                            Dates
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/exclusive"
                            className={classes.product}
                          >
                            EXCLUSIVE CONFECTIONERY
                          </NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item
                            href="/natural"
                            className={classes.product}
                          >
                            NATURAL SPICE POWDERS
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/snacks"
                            className={classes.product}
                          >
                            SNACKS
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/stuffed"
                            className={classes.product}
                          >
                            STUFFED DATES
                          </NavDropdown.Item>
                        </Box>
                        <Box sx={{ ml: 10, mt: 1 }}>
                          <NavDropdown.Item
                            href="/gourmet"
                            className={classes.product}
                          >
                            GOURMET PRODUCTS{" "}
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/dryFruits"
                            className={classes.product}
                          >
                            DRY FRUITS
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/nuts"
                            className={classes.product}
                          >
                            NUTS
                          </NavDropdown.Item>
                          {/* <NavDropdown.Divider /> */}
                          <NavDropdown.Item
                            href="/seeds"
                            className={classes.product}
                          >
                            SEEDS
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/spices"
                            className={classes.product}
                          >
                            SPICES
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="/wine"
                            className={classes.product}
                          >
                            WINE AND JUICES
                          </NavDropdown.Item>
                        </Box>
                        <Box sx={{ m: 5 }}>
                          <img src={product} alt="img" />
                        </Box>
                      </Box>
                    </NavDropdown>
                  </abbr>
                  <abbr title="BEST-DEALS" style={{ textDecoration: "none" }}>
                    <Nav.Link className={classes.link} href="#best-deals">
                      BEST DEALS
                    </Nav.Link>
                  </abbr>
                  <abbr title="STORES" style={{ textDecoration: "none" }}>
                    <Nav.Link className={classes.link} href="#stores">
                      STORES
                    </Nav.Link>
                  </abbr>
                  <abbr title="GIFTINGS" style={{ textDecoration: "none" }}>
                    <NavDropdown className={classes.link} title="GIFTINGS">
                      <Box sx={{ m: 2, ml: 0 }}>
                        <NavDropdown.Item href="/" className={classes.product}>
                          OCCASIONS GIFTINGS
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/" className={classes.product}>
                          CUSTOMIZED GIFTINGS
                        </NavDropdown.Item>
                      </Box>
                    </NavDropdown>
                  </abbr>
                  <abbr title="CONTACT-US" style={{ textDecoration: "none" }}>
                    <Nav.Link className={classes.link} href="#pricing">
                      CONTACT US
                    </Nav.Link>
                  </abbr>
                </Nav>

                <Stack direction="row" spacing={1} className={classes.stack}>
                  <abbr title="SEARCH">
                    <IconButton aria-label="search" className={classes.icon}>
                      <SearchIcon />
                    </IconButton>
                  </abbr>
                  <abbr title="ACCOUNT">
                    <IconButton aria-label="Account" className={classes.icon}>
                      <PersonIcon />
                    </IconButton>
                  </abbr>
                  <abbr title="CART">
                  <Badge color="secondary" badgeContent={1}>
                  <IconButton className={classes.icon} aria-label="cart">
                    <ShoppingCartIcon />
                  </IconButton>
                  </Badge>
                  </abbr>
                  <abbr title="LIKE">
                  <Badge color="secondary" badgeContent={1}>
                  <IconButton className={classes.icon} aria-label="like">
                    <FavoriteIcon />
                  </IconButton>
                  </Badge>
                  </abbr>
                </Stack>
              </Box>
            </Container>
          </Navbar>
        </Box>

        <Box sx={{ mt: "2%" }}>
          <img src={front} alt="front img" width="100%" />
          <Typography
            variant="h4"
            sx={{
              mt: -18,
              fontWeight: "bold",
              color: "white",
              marginLeft: "45%",
            }}
          >
            About Us
          </Typography>
          <Typography
            onClick={() => navigate("/")}
            display="flex"
            variant="body1"
            sx={{ mt: 15, ml: 20, "&:hover": { color: "#ffab40 !important" } }}
          >
            Home
            <Typography variant="body1" sx={{ color: "#ffab40" }}>
              <KeyboardArrowRightIcon sx={{ color: "black" }} />
              About Us
            </Typography>
          </Typography>
        </Box>

        <Box>
          <Introduce />
        </Box>

        <Box display="flex" sx={{ mt: 15, ml: -85, width: "60%" }}>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <abbr title="Store image">
                  <img
                    //class="d-block"
                    src={img1}
                    alt="First slide"
                    height={550}
                  />
                </abbr>
              </div>
              <div class="carousel-item">
                <abbr title="Store image">
                  <img
                    //class="d-block "
                    src={img2}
                    alt="Second slide"
                    height={550}
                  />
                </abbr>
              </div>
              <div class="carousel-item">
                <abbr title="Store image">
                  <img
                    //class="d-block "
                    src={img3}
                    alt="Third slide"
                    height={550}
                  />
                </abbr>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <Box sx={{ ml: 1.3 }}>
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
                        mt={20}
                        ml={5}
                      >
                        <Typography className={classes.text} gutterBottom>
                          NUTTIEST PEOPLE AROUND
                        </Typography>
                        <Box
                          component="form"
                          //className={classes.box1}
                          color="text.secondary"
                          noValidate
                          autoComplete="off"
                          sx={{ mt: 5 }}
                        >
                          <Grid container spacing={-16}>
                            <Grid item xs={12} md={6}>
                              <Typography className={classes.write1}>
                                Varieties of dates, nuts and dry fruits from
                                countries like Iran, Afghanistan, United States
                                of America and Dubai. The best dates that grow
                                in Saudi Arabia are offered to our customers in
                                India.The hand-picked dates are hygienically
                                processed to ensure the best quality. Our
                                exclusive farm fresh yellow dates are a catch
                                for the season!
                              </Typography>
                            </Grid>
                          </Grid>
                          <Box className={classes.boxx}>
                            <abbr title="Shop Now">
                              <Button
                                variant="contained"
                                className={classes.btn}
                              >
                                Check Out The Store Now{" "}
                              </Button>
                            </abbr>
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>

        <Box>
          <Nuttist />
        </Box>

        {/* for footer */}
        <Box sx={{ mt: 10, width: "100%" }}>
          <Footer />
        </Box>

        <Box
          sx={{
            padding: 1.5,
            backgroundColor: "#ffd180",
            width: "100%",
            position: "fixed",
            bottom: "0px",
          }}
        >
          <Typography
            display="flex"
            variant="body1"
            sx={{ justifyContent: "center !important" }}
          >
            Use Code "GOODIES" Free shipping for orders over
            <Typography variant="body1" sx={{ color: "blue" }}>
              INR1000
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
