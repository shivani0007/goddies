import React from "react";
import { makeStyles } from "@mui/styles";
import CareersCSS from "../../assets/Styles/FooterStyle/Careers.Style";
import img from "../../assets/Images/NavbarImage/H-logo-2.png";
import Container from "react-bootstrap/Container";
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
import product from "../../assets/Images/NavbarImage/A-pro-img.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import front from "../../assets/Images/FooterImages/D-front-img.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import { Button } from "react-bootstrap";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CallMadeIcon from "@mui/icons-material/CallMade";
import PlaceIcon from '@mui/icons-material/Place';
import Badge from '@mui/material/Badge';

const useStyles = makeStyles(CareersCSS);

export default function Careers() {
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
                    <Nav.Link className={classes.link} href="/about-us">
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

        <Box sx={{ mt: "2%", width: "100%" }}>
          <img src={front} alt="front img" width="100%" height={180} />
          <Typography
            variant="h4"
            sx={{
              mt: -15,
              fontWeight: "bold",
              color: "black",
              marginLeft: "45%",
            }}
          >
            CAREERS
          </Typography>
          <Typography
            onClick={() => navigate("/")}
            display="flex"
            variant="body1"
            sx={{ mt: 13, ml: 18, "&:hover": { color: "#ffab40 !important" } }}
          >
            Home
            <Typography variant="body1" sx={{ color: "#ffab40" }}>
              <KeyboardArrowRightIcon sx={{ color: "black" }} />
              CAREERS
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ mt: 6, width: "100%", ml:-2 }}>
          <Box display="flex" sx={{ml:18}}>
            <Box
              sx={{
                border: "1px solid gray",
                width: "400px",
                height: "210px",
                borderRadius: "2%",
              }}
            >
              <Typography variant="h5" sx={{ color: "#1a237e", mt: 3, ml: 3,fontWeight:"bold" }}>
                Warehouse Manager
              </Typography>
              <Box display="flex" sx={{ ml:3,mt: 3,width:"80%" }}>
                <Typography className={classes.bootbtn}>
                  <AccessAlarmsIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                  Full Time
                </Typography>
              </Box>
              <Box sx={{ml:35,mt:-4}}>
                <Button variant="contained" className={classes.btn}>
                  Apply
                  <CallMadeIcon sx={{ fontSize: "17px" }} />
                </Button>
                </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid gray",
                width: "400px",
                height: "210px",
                borderRadius: "2%",
                ml:4
              }}
            >
              <Typography variant="h5" sx={{ color: "#1a237e", mt: 3, ml: 3,fontWeight:"bold" }}>
              Purchase Manager
              </Typography>
              <Typography variant="body1" sx={{ml:3,width:"50%",mt:2}}>Above 5 year exp in Indian Market,FMCG</Typography>
              <Box display="flex" sx={{ ml:3,mt: 3,width:"80%" }}>
                <Typography className={classes.bootbtn}>
                  <AccessAlarmsIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                  Full Time
                </Typography>
                <Typography className={classes.bootbtn} sx={{ml:1}}>
                  <PlaceIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                 kerala Malapuram
                </Typography>
              </Box>
              <Box sx={{ml:35,mt:-4}}>
                <Button variant="contained" className={classes.btn}>
                  Apply
                  <CallMadeIcon sx={{ fontSize: "17px" }} />
                </Button>
                </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid gray",
                width: "400px",
                height: "210px",
                borderRadius: "2%",
                ml:4
              }}
            >
              <Typography variant="h5" sx={{ color: "#1a237e", mt: 3, ml: 3,fontWeight:"bold" }}>
              Administrative Officer
              </Typography>
              <Box display="flex" sx={{ ml:3,mt: 3,width:"80%" }}>
                <Typography className={classes.bootbtn}>
                  <AccessAlarmsIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                  Full Time
                </Typography>
                <Typography className={classes.bootbtn} sx={{ml:1}}>
                  <PlaceIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                 kerala Malapuram
                </Typography>
              </Box>
              <Box sx={{ml:35,mt:-4}}>
                <Button variant="contained" className={classes.btn}>
                  Apply
                  <CallMadeIcon sx={{ fontSize: "17px" }} />
                </Button>
                </Box>
            </Box>

          </Box>

          <Box display="flex" sx={{ml:14,mt:4}}>
          <Box
              sx={{
                border: "1px solid gray",
                width: "400px",
                height: "210px",
                borderRadius: "2%",
                ml:4
              }}
            >
              <Typography variant="h5" sx={{ color: "#1a237e", mt: 3, ml: 3,fontWeight:"bold" }}>
              Finance Manager
              </Typography>
              <Box display="flex" sx={{ ml:3,mt: 3,width:"80%" }}>
                <Typography className={classes.bootbtn}>
                  <AccessAlarmsIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                  Full Time
                </Typography>
                <Typography className={classes.bootbtn} sx={{ml:1}}>
                  <PlaceIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                 kerala Malapuram
                </Typography>
              </Box>
              <Box sx={{ml:35,mt:-4}}>
                <Button variant="contained" className={classes.btn}>
                  Apply
                  <CallMadeIcon sx={{ fontSize: "17px" }} />
                </Button>
                </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid gray",
                width: "400px",
                height: "210px",
                borderRadius: "2%",
                ml:4
              }}
            >
              <Typography variant="h5" sx={{ color: "#1a237e", mt: 3, ml: 3,fontWeight:"bold" }}>
              Store Manager
              </Typography>
              <Typography variant="body1" sx={{ml:3,width:"50%",mt:2}}>Hospitality / FMCG</Typography>
              <Box display="flex" sx={{ ml:3,mt: 3,width:"80%" }}>
                <Typography className={classes.bootbtn}>
                  <AccessAlarmsIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                  Full Time
                </Typography>
                <Typography className={classes.bootbtn} sx={{ml:1}}>
                  <PlaceIcon
                    sx={{ fontSize: "15px", mt: "-3% !important" }}
                  />
                Anywhere in south India
                </Typography>
              </Box>
              <Box sx={{ml:35,mt:-4}}>
                <Button variant="contained" className={classes.btn}>
                  Apply
                  <CallMadeIcon sx={{ fontSize: "17px" }} />
                </Button>
                </Box>
            </Box> 
          </Box>
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
