import React from "react";
import { makeStyles } from "@mui/styles";
import PrivacyCSS from "../../assets/Styles/FooterStyle/Privacy.Style";
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

const useStyles = makeStyles(PrivacyCSS);

export default function Privacy() {
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
           PRIVACY POLICY
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
              PRIVACY POLICY
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ mt: 6, width: "80%" }}>
          <Box>
            <Box sx={{ mt: 3 }}>
              <Typography>
              We hope you enjoy the ease and convenience of shopping on  www.goodies.store. Your confidence in our website and your internet security is really important to us. If you have any questions about our Privacy Policy, please email customercare@goodies.store .
              </Typography>
              <Typography sx={{ mt: 3 }}>
              This website ("goodies.store") is owned and operated by goodies Dates and Nuts. goodies.store recognizes the importance of maintaining the privacy of our customers ("Customers"), registered members ("Members") and other website users (collectively "Users"), and we have posted this privacy policy ("Policy") to describe our practices regarding the collection and use of information gathered through goodies.store. This Policy works in conjunction with our terms and conditions and only applies to the personal information that we obtain, not information that may be collected from your interactions with third parties.
              </Typography>
              <Typography sx={{ mt: 3 }}>
              We may from time to time update this Policy and invite you to review this page periodically. In the event this Policy changes, we will inform you by posting an updated Policy on this web page. All changes will go into effect on the date that is posted in our Policy. The new Policy will apply to all past and current users of goodies.store.
              </Typography>
             
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ mt: 3 }} className={classes.head}>
            How we collect your personal information
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
              goodies does not collect personally identifiable information from individuals unless they provide it to us voluntarily and knowingly. This means we don't require Users to register or provide information to us in order to view our site.
              </Typography>
              <Typography>
              We collect your information at the point you decide to interact with us. This could include purchasing online, signing up for our email newsletter, over the telephone, or in person when you sign up in our stores to receive information from goodies.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
            The Data we collect
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
              We are committed to only collecting information about you that is necessary to carry out our business, provide the particular products or services you’ve requested and to keep you up to date about all the latest news from goodies. We collect the following information about you: name, address, phone number, email address, billing information including credit card number and expiration date as well as the names, addresses and phone numbers of gift recipients (if any). We use your name, address, phone number, billing information/credit card information to process your order or otherwise described in this privacy policy.
              </Typography>
              <Typography sx={{ mt: 5 }}>
              It’s your choice if you want to give us your personal information. However, if you decide not to, you may not be able to buy from our website, and you may not receive the optimal customer experience
              </Typography>
              <Typography sx={{ mt: 3 }}>
              We also collect the names, addresses, and phone numbers of those persons whom you add to your personal address book as a Member. We use the information you supply for the purpose of providing the services you have requested.
              </Typography>
              <Typography sx={{ mt: 3 }}>
              When you visit www.goodies.store the goodies web server may automatically record your public internet protocol (IP) address used to connect your computer to the Internet.
              </Typography>
              <Typography sx={{ mt: 3 }}>
              Like most websites, we also use cookies to help make the experience of using our website better and to personalise the service you receive from us.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
            How we use your Data and why
            </Typography>
            <Typography sx={{ mt: 3 }}>
            We like to get to know our Customers and provide them with the best possible experience. We use information we collect about you in a number of ways, including to provide the products and services that you have requested, offering you a personalized experience and informing you about our special events and exciting news, so that we can offer the best possible experience. We will also contact you to give you assurance that your delivery is on its way or if we have a query about your delivery.
            </Typography>
            <Typography sx={{ mt: 3 }}>
            You will receive marketing messages from us if you have requested information from us or purchased products or services from us and, in each case, you have not opted out of receiving that marketing. We may also market to you if we have received your express consent to do so including where we have collected your details in connection with a competition or other promotion and you have agreed to receive marketing from us.
            </Typography>
            <Typography sx={{ mt: 3 }}>
            You can stop receiving marketing messages from us at any time. Once you do this, we will update profile to ensure that you don’t receive further marketing messages. Note that stopping marketing messages will not prevent us from sending you service communications; so you will still receive order updates and delivery information.
            </Typography>
            <Typography sx={{ mt: 3 }}>
            We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). Your data is also anonymised and then used to optimize goodies International systems and procedures.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
            Sharing Your Information
            </Typography>
            <Box>
              <Typography sx={{ mt: 3 }}>
              Except as expressly set out in this Policy we will not sell, personal information to third parties, we will not sell any of your personal data to a third party unless we have your permission or are required by law to do so.
              </Typography>
              <Typography sx={{ mt: 3 }}>
              However, we may share your data with some companies as an essential part of being able to provide our products and services to you.
              </Typography>
              <Typography sx={{mt:3}}>The following categories of recipients may receive your personal information and process it for the purposes outlined in this Policy:</Typography>
              <Typography sx={{mt:3}}>Other subgroups in the goodies.</Typography>
              <Typography sx={{mt:3}}>Companies that are linked to when you make a purchase with us, like our payment service providers, delivery companies, credit reference agencies and third party call centers who provide IT and system administration services or other assistance to help us fulfil our orders.</Typography>
              <Typography sx={{mt:3}}>Third parties we have engaged to help use collect information from you to rate our products and develop new products.</Typography>
              <Typography sx={{mt:3}}>Professional service providers, such as marketing agencies, advertising and website hosting businesses that help us to run our business.</Typography>
              <Typography sx={{mt:3}}>Credit reference agencies, law enforcement and fraud prevention agencies, so that we can help tackle fraud.</Typography>
              <Typography sx={{mt:3}}>Social media companies that you’ve signed up with. Depending on your settings or the privacy Policy for social media and messaging services, like Facebook, Instagram or Twitter, you may have given us permission to access information from those account or services. To change this you need to update your settings on the social media platform.</Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
            Data security
            </Typography>
            <Typography sx={{ mt: 3 }}>
            We are committed to keeping your information safe and we take your online security seriously. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </Typography>
            <Typography sx={{mt:3}}>Unfortunately, the transmission of information via the Internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your personal information transmitted to us or provided though the website and any transmission is at your own risk.</Typography>
            <Typography sx={{mt:3}}>If you want to exercise your rights, have a complaint, or just have questions, please contact us:</Typography>
            <Typography sx={{mt:3}}>customercare@goodies.store</Typography>
            <Typography >Telephone: +91 7022022120</Typography>
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
