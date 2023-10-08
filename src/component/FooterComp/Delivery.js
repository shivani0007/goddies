import React from "react";
import { makeStyles } from "@mui/styles";
import DeliveryCSS from "../../assets/Styles/FooterStyle/Delivery.Style";
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
import Badge from '@mui/material/Badge';
import Footer from "../../Layout/Footer/Footer";

const useStyles = makeStyles(DeliveryCSS);

export default function Delivery() {
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
            DELIVERY POLICY
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
              DELIVERY POLICY
            </Typography>
          </Typography>
        </Box>

        <Box sx={{mt:6,width:"80%"}}>
          <Box>
            <Typography variant="h5" className={classes.head}>1. General Information:</Typography>
            <Box sx={{mt:3}}>
              <Typography>
                All orders are subject to product availability. If an item is
                not in stock at the time you place your order, we will notify
                you and refund you the total amount of your order, using the
                original method of payment.
              </Typography>
              <Typography sx={{mt:3}}>
                There may be a possibility of multiple shipments for a single
                placed order in case any issue was to arise on delivery while
                trying to meet the timing demands of the customer as well as to
                fulfil the customer’s complete order. These may happen in the
                cases of: Late stock arrival after original order dispatch,
                Return and exchange of items and re-sending new items, missing
                items from the original dispatched order being re-sent, or for
                carrying goods requiring different storage conditions within
                different vans.
              </Typography>
              <Typography sx={{mt:3}}>
                Orders that are altered/changed after checkout and payment on
                the website, for reasons including; No stock availability on
                date of dispatch, Return of goods, exchange of goods, leading
                for multiple shipments may result in multiple postings to the
                cardholders monthly statement.
              </Typography>
            </Box>
          </Box>

          <Box >
            <Typography variant="h5" sx={{mt:3}} className={classes.head}>2. Delivery Location:</Typography>
            <Box sx={{mt:3}}>
              <Typography>
                Items offered on our website are only available for delivery to
                addresses in Bangalore, Chennai, Mumbai, Cochin,
                Thiruvananthapuram, Hyderabad & Pondicherry within the specific
                areas that are listed in the drop down Stores address menu,
                Within 2-3hr (9am to 7pm) we will delivery the products. Any
                shipments outside of these areas will take 3-5 working days
                within India.
              </Typography>
              <Typography sx={{mt:3}}>
                An estimated delivery time will be provided to you once your
                order is placed. Delivery times are estimates and commence from
                the date of shipping, rather than the date of order. Delivery
                times are to be used as a guide only and are subject to the
                acceptance and approval of your order.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>3. Delivery Time:</Typography>
            <Box sx={{mt:3}}>
              <Typography>
                An estimated delivery time will be provided to you once your
                order is placed. Delivery times are estimates and commence from
                the date of shipping, rather than the date of order. Delivery
                times are to be used as a guide only and are subject to the
                acceptance and approval of your order.
              </Typography>
              <Typography sx={{mt:3}}>
                Unless there are exceptional circumstances, we make every effort
                to fulfil your order within 2 - 4 hours of the expected arrival
                time of your order.
              </Typography>
              <Typography sx={{mt:3}}>
                Date of delivery may vary due to reaching our daily order limit
                or due to specific items ordered. Products may also, in rare
                circumstances be delivered in separate shipments.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>4. Delivery Instructions:</Typography>
            <Typography sx={{mt:3}}>
              You can provide special delivery instructions on the check-out
              page of our website.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>5. Delivery Charges (PAN INDIA):</Typography>
            <Box>
              <Typography sx={{mt:3}}>
                Express Shipping (PREPAID Orders Only- 48 Hour Delivery) -
                ₹200/-
              </Typography>
              <Typography sx={{mt:3}}>Standard Shipping (6-10 days delivery)</Typography>
              <Typography  sx={{mt:3}}>Orders Below Rs. 500 - delivery ₹120/-</Typography>
              <Typography>
                Order between Rs. 500 to Rs. 1000 - delivery ₹150/-
              </Typography>
              <Typography  sx={{mt:3,width:"23%"}}>
                International Shipping (10-15 working days) ₹0–₹3,000 :-
                ₹1,500/- ₹3,001–₹9,999 :- ₹2,000/- ₹10,000 and up :- ₹2,500/-
              </Typography>
              <Typography  sx={{mt:3}}>
                Please note all delivery charges may vary depending on the
                location.
              </Typography>
              <Typography  sx={{mt:3}}>
                Bangalore, Chennai, Mumbai, Cochin, Thiruvananthapuram,
                Hyderabad & Pondicherry Outside of these City Delivery would be
                depends on weight.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>6. Damaged Items in Transport:</Typography>
            <Typography sx={{mt:3}}>
              If there is any damage to the packaging on delivery, contact us
              immediately at our customer service number and provide a picture
              of the damaged product within 24 hours of delivery.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>7. Tracking / Delivery Issues:</Typography>
            <Typography sx={{mt:3}}>
              If you have any questions about the delivery and shipment or your
              order, please email us at customercare@goodies.in or call us at
              +917034900009
            </Typography>
          </Box>

          <Box>
            <Typography sx={{mt:3}} variant="h5" className={classes.head}>8. To Raise a Complaint:</Typography>
            <Typography sx={{mt:3}}>
              If you have any complaints about the product/items of your order,
              please call or Whatsapp us at +917022022120
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
