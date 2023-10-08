import React from "react";
import { makeStyles } from "@mui/styles";
import NavCSS from "../../assets/Styles/NavbarStyle/Navbar.Style";
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
import product from "../../assets/Images/NavbarImage/A-pro-img.jpg"
import Badge from '@mui/material/Badge';
import { Box } from "@mui/material";

const useStyles = makeStyles(NavCSS);

export default function NavbarPage() {
  const classes = useStyles();

  return (
    <>
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
                    <Nav.Link className={classes.link1} href="/">
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
    </>
  );
}

// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import NavCSS from "../../assets/Styles/NavbarStyle/Navbar.Style";
// import img from "../../assets/Images/NavbarImage/H-logo-2.png";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonIcon from "@mui/icons-material/Person";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import product from "../../assets/Images/NavbarImage/A-pro-img.jpg";
// import Badge from "@mui/material/Badge";
// import { Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";

// const useStyles = makeStyles(NavCSS);

// export default function NavbarPage() {
//   const classes = useStyles();
//   const navigate = useNavigate();


//   const [activeDash, setActiveDash] = useState(false);
//   const [activeAbout, setActiveAbout] = useState(false);

//   const handleDashClick = (event) => {
//     setActiveDash(!activeDash);
//     navigate("/");
//   };

//   const handleAboutClick = (event) => {
//     setActiveAbout(!activeAbout);
//     navigate("/about-us");
//   };

//   return (
//     <>
//       <Box className={classes.box1}>
//         <Navbar bg="transparent" data-bs-theme="light">
//           <Container>
//             <Box>
//               <abbr title=" GOODIES">
//                 <a href="/">
//                   <img
//                     src={img}
//                     alt="Logo"
//                     height={80}
//                     width={150}
//                     style={{ marginLeft: "4%", marginTop: "-1%" }}
//                   />
//                 </a>
//               </abbr>

//               <Nav className={classes.nav}>
//                 <abbr title="HOME">
//                   <Button
//                     className={classes.link}
//                     onClick={handleDashClick}
//                     sx={{
//                       color: activeDash ? "black" : "white",
//                       backgroundColor: activeDash ? "none" : "#ffab40",
//                       fontWeight: activeDash ? "none" : "bold",
//                     }}
//                   >
//                     HOME
//                   </Button>
//                 </abbr>
//                 <abbr title="ABOUT-US">
//                   <Button
//                     className={classes.link}
//                     onClick={handleAboutClick}
//                     sx={{
//                       color: activeAbout ? "black" : "white",
//                       backgroundColor: activeAbout ? "none" : "#ffab40",
//                       fontWeight: activeAbout ? "none" : "bold",
//                     }}
//                   >
//                     ABOUT-US
//                   </Button>
//                 </abbr>

//                 <abbr title="BEST-DEALS" style={{ textDecoration: "none" }}>
//                   {/* <Button
//                     className={classes.link}
//                     onClick={handleDashClick}
//                     sx={{
//                       color: activeDash ? "black" : "white",
//                       backgroundColor: activeDash ? "none" : "#ffab40",
//                       fontWeight: activeDash ? "none" : "bold",
//                     }}
//                   >
//                     BEST DEALS
//                   </Button> */}
//                 </abbr>
//                 <abbr title="STORES" style={{ textDecoration: "none" }}>
//                   {/* <Button
//                     className={classes.link}
//                     onClick={handleDashClick}
//                     sx={{
//                       color: activeDash ? "black" : "white",
//                       backgroundColor: activeDash ? "none" : "#ffab40",
//                       fontWeight: activeDash ? "none" : "bold",
//                     }}
//                   >
//                     STORES
//                   </Button> */}
//                 </abbr>
//                 <abbr title="CONTACT-US" style={{ textDecoration: "none" }}>
//                   {/* <Button
//                     className={classes.link}
//                     onClick={handleDashClick}
//                     sx={{
//                       color: activeDash ? "black" : "white",
//                       backgroundColor: activeDash ? "none" : "#ffab40",
//                       fontWeight: activeDash ? "none" : "bold",
//                     }}
//                   >
//                     CONTACT US
//                   </Button> */}
//                 </abbr>
//               </Nav>

//               <Stack direction="row" spacing={1} className={classes.stack}>
//                 <abbr title="SEARCH">
//                   <IconButton aria-label="search" className={classes.icon}>
//                     <SearchIcon />
//                   </IconButton>
//                 </abbr>
//                 <abbr title="ACCOUNT">
//                   <IconButton aria-label="Account" className={classes.icon}>
//                     <PersonIcon />
//                   </IconButton>
//                 </abbr>
//                 <abbr title="CART">
//                   <Badge color="secondary" badgeContent={1}>
//                     <IconButton className={classes.icon} aria-label="cart">
//                       <ShoppingCartIcon />
//                     </IconButton>
//                   </Badge>
//                 </abbr>
//                 <abbr title="LIKE">
//                   <Badge color="secondary" badgeContent={1}>
//                     <IconButton className={classes.icon} aria-label="like">
//                       <FavoriteIcon />
//                     </IconButton>
//                   </Badge>
//                 </abbr>
//               </Stack>
//             </Box>
//           </Container>
//         </Navbar>
//       </Box>
//     </>
//   );
// }
