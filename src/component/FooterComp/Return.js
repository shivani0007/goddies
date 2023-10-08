import React from "react";
import { makeStyles } from "@mui/styles";
import ReturnCSS from "../../assets/Styles/FooterStyle/Return.Style";
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
import Badge from '@mui/material/Badge';

const useStyles = makeStyles(ReturnCSS);

export default function Return() {
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
              marginLeft: "35%",
            }}
          >
            REFUND & CANCELLATION POLICY
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
              REFUND & CANCELLATION POLICY
            </Typography>
          </Typography>
        </Box>

        <Box sx={{mt:6,width:"80%"}}>
          <Box>
            <Typography variant="h5" className={classes.head}>What is the goodies refund process?</Typography>
            <Box sx={{mt:3}}>
              <Typography>
              You can check out our entire return policies here. goodies has an easy to process, customer friendly refund policy
              </Typography>
            </Box>
          </Box>

          <Box >
            <Typography variant="h5" sx={{mt:3}} className={classes.head}>1) I received a poor quality or damaged item, can I get a refund?</Typography>
            <Box sx={{mt:3}}>
              <Typography>
              If the product delivered by us is of poor quality or damaged, you could return the product in the same condition as you received it with the original box and/or packaging intact. Once we receive the returned product, our team will inspect it. if the product is found to be defective or damaged, we will process the refund along with any shipping fees incurred.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>3) I have changed my mind; can I return what I have bought?</Typography>
            <Box sx={{mt:3}}>
              <Typography>
              In case of change of mind, before shipping your order, just call us to cancel your order or you can cancel it from your goodies account and we will process the refund along with any shipping fees applied to the same credit card/debit card which will reflect in your card within 7-14 business days. If you wish to return the item after receiving it, you have up to 15 days to return them, with the below terms and condition applied: The return is in accordance with goodies returns policy The items are in its original retail packaging (Sealed/Closed Box) In cases, of food gift box orders, the original tags and seal be present along with the original packaging.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>4) I made a transaction via credit card. How can I receive a refund?</Typography>
            <Typography sx={{mt:3}}>
            In case if you cancel the order or if it’s cancelled before shipping, the amount will be refunded back to credit card/debit card automatically which will reflect in your card within 7-14 business days. if you cancel the order, products which are shipped but not delivered, you will receive a full refund. Upon request, we can arrange for a transfer back to your credit/debit card. The amount may take up to 30 days to reflect in your card statement, depending upon the issuing bank. For delivered products, wherever the return reason is met as per goodies return policy and post inspection by our team, we will refund the product amount (excluding the amount paid for the original shipping fees). Upon request, we can arrange for a transfer back to your credit/debit card. The amount may take up to 30 days to reflect in your card statement, depending upon the issuing bank.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>5) I made a transaction via cash on delivery. How can I receive a refund?</Typography>
            <Box>
              <Typography sx={{mt:3}}>
              If you paid by cash/card on delivery, we will issue a refund to your goodies online credits. From the goodies online credits, you can place new order.
              </Typography>
        
            </Box>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>6) What if I did not received the complete ordered product?</Typography>
            <Typography sx={{mt:3}}>
            In very rare circumstances where you order more than one product and you found one of the products you ordered is missing. Kindly take the photo and Video on same day of delivery and share it with us so that we can crosscheck and send it you the missing item which you ordered.
            </Typography>
            <Typography sx={{mt:3}}>
            For more details you can contact us at +917022022120 in India, customercare@goodies.store by email.
            </Typography>
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
