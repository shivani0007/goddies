import React from "react";
import { makeStyles } from "@mui/styles";
import TermsCSS from "../../assets/Styles/FooterStyle/Terms.Style";
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


const useStyles = makeStyles(TermsCSS);

export default function Terms() {
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
            TERMS & CONDITIONS
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
              TERMS & CONDITIONS
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ mt: 6, width: "80%" }}>
          <Box>
            <Box sx={{ mt: 3 }}>
              <Typography>
                Welcome to goodies.store, the ultimate destination for indulgence
                and gifting. We strive to ensure our customers receive an
                effortless shopping experience and we hope that you enjoy all
                our website has to offer.
              </Typography>
              <Typography sx={{ mt: 3 }}>
                These Terms and Conditions, together with any and all other
                documents referred to herein, set out the terms under which
                Goods are sold by goodies through this Website. Please read these
                Terms and Conditions carefully and ensure that you understand
                them before ordering any Goods from our Website.
              </Typography>
              <Typography sx={{ mt: 3 }}>
                We may update this Policy from time to time without notice to
                you by posting the updated Policy on the Website, so we invite
                you to review this page periodically. When you place an Order
                through our Website, you are deemed to have consented to the
                latest version of the Terms and Conditions then posted on our
                Website.
              </Typography>
              <Typography sx={{ mt: 3 }}>
                If a change in law means that we have to change our Website
                Terms after you have placed an Order but before it has been
                fulfilled, we are obliged to apply that change to your Order. In
                all other cases, the version posted at the time your Order was
                placed will apply. If you do not agree to comply with and be
                bound by these Terms and Conditions, you should not order Goods
                through our Website.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ mt: 3 }} className={classes.head}>
              Information About Us:
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
                Our Website, https://goodies.store/ (the "Website") is owned and
                operated by goodies Dates and Nuts for its own benefit. goodies
                Dates and Nuts incorporated under the laws of India, with
                commercial license number 29AHDPK2903L1Z9 and its registered
                office at NO.32/34, 1ST CROSS, BEGUR MAIN ROAD, Bommanahalli,
                Bangalore - 560068
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
              Eligibility:
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
                We aim to make the Website and its associated services available
                to as many of you as possible. However, we do require that you
                be at least 18 years of age, able to lawfully:
              </Typography>
              <Typography sx={{ mt: 3 }}>
                Make payment through one of our accepted tender types;
              </Typography>
              <Typography sx={{ mt: 3 }}>
                Agree to these Terms and Conditions;
              </Typography>
              <Typography sx={{ mt: 3 }}>
                Enter into binding Orders with us. The Website is for your
                personal or gift use only and commercial usage is not permitted.
                We reserve the right to decline Orders where we suspect
                commercial usage.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
              Access to and Use of Our Site:
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Access to our Website is free of charge. It is your responsibility
              to make any and all arrangements necessary in order to access our
              Website.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              You may link to our Website, provided you do so in a way that is
              fair and legal and does not damage our reputation or take
              advantage of it, but you must not establish a link in such a way
              as to suggest any form of association, approval or endorsement on
              our part where none exists.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              In order to take advantage of the features and services of goodies
              Website, you can either utilize the Website on a “guest check-out"
              basis or create an Account and register your details with us. It
              is your ongoing responsibility to make sure that any personal and
              payment details you provide to us are valid, accurate and
              complete. You can update your details by accessing your account
              details in the top right of the page. Please keep your account
              details and password confidential and secure. Our customer service
              representatives will never ask you for your password.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              We are committed to complying with our Security & Privacy Policy
              but are not responsible for any loss suffered through misuse of
              those details. Please notify us as soon as possible if you believe
              your account has been compromised. By registering or placing an
              Order on the Website you warrant that you meet the Eligibility
              criteria described above and that the information you provide is
              yours and is accurate in all respects. Commercial entities are not
              eligible to register with us. Kindly note that by placing an
              order, you authorize us to send offers in future on your provided
              contact details.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
              Intellectual Property:
            </Typography>
            <Box>
              <Typography sx={{ mt: 3 }}>
                Your use of the goodies Website and its contents does not grant
                you any copyright, design, trademark or other intellectual
                property rights relating to the Content (graphics, photographs,
                including all image rights, sounds, music, video, logos, icons
                audio or text on this Website), including our software, HTML or
                other code contained in the Website. All such Content including
                third party trademarks, designs, and related intellectual
                property rights mentioned or displayed on this Website is
                typically protected by national and international intellectual
                property laws and treaties.
              </Typography>
              <Typography sx={{ mt: 3 }}>
                You are permitted to use the Content only as expressly
                authorized by us or the licensor of such Content. Any
                reproduction or redistribution of the Content is prohibited and
                may result in civil and criminal penalties. Without limiting the
                foregoing, linking, commercially exploiting, copying and use of
                the above listed materials on any other server, location or
                support for publication, reproduction or distribution is
                expressly prohibited.
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
              User Generated Content:
            </Typography>
            <Typography sx={{ mt: 3 }}>
              By providing a review you agree to be solely responsible for the
              content of all information you contribute. You also grant us a
              right to use any content you provide for our own purposes
              including republication in any form or media. Comments may be
              moderated and may not be displayed immediately but we do not
              commit to checking all content and will not be liable for third
              party posts. We reserve the right in our sole discretion not to
              publish or to remove any comment including those that we believe
              may be unlawful, defamatory, racist or libelous, incite hatred or
              violence, detrimental to people, institutions, religions or to
              people's privacy, which may cause harm to minors, is detrimental
              to the trade marks, patents and copyrighted content, contains
              personal data, improperly uses the medium for promoting and
              advertising businesses. This Website is available to the public
              and therefore information you consider confidential should not be
              posted to this Website.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
              Orders:
            </Typography>
            <Typography sx={{ mt: 3 }}>
              When you place an Order with us, then subject to your rights to
              cancel or return the items, you commit to buy the items described
              in that Order, at the price indicated including any delivery fees,
              taxes and duties where applicable.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Orders are subject to our acceptance, which we may withhold in our
              sole discretion including for reasons such as ineligibility,
              inability to confirm payment authorization, suspected fraud,
              shipping restrictions and stock availability. Items in your
              Website cart are not reserved until your Order is paid for.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              The Website may contain or provide information regarding the
              availability of merchandise. This information can be used to
              estimate the likelihood that an item will be available immediately
              upon Order placement. Unfortunately, we cannot guarantee that an
              item stated to be available will actually be available right away,
              as inventory can change throughout the day. In rare cases, a
              product may be available when you place an Order but sold out by
              the time, we process the Order. Should this happen, we will notify
              you.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Receipt of your Order will be acknowledged by email. However, the
              Order is only confirmed when you receive a notification from us
              confirming dispatch of the relevant item(s). No party other than
              us has the authority to confirm acceptance of the Order.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
              Goods, Pricing and Availability:
            </Typography>
            <Typography sx={{ mt: 3 }}>
              We make all reasonable efforts to ensure that all descriptions and
              graphical representations of Goods available from us correspond to
              the actual Goods. Please note, however, that Images of Goods
              and/or Descriptions of packaging are for illustrative purposes
              only. There may be slight variations in colour between the image
              of a product and the actual product sold due to differences in
              computer displays and lighting conditions.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              We neither represent nor warrant that Goods will be available.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              All Goods are made in the same environment as nuts so we cannot
              guarantee they are free from nut traces.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              We make all reasonable efforts to ensure that all prices shown on
              our Website are correct at the time of going online. We reserve
              the right to change prices and to add, alter, or remove special
              offers from time to time and as necessary. Changes in price will
              not affect any order that you have already placed. In the unlikely
              event that We have shown incorrect pricing information, please
              note the following:
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Where the price you paid is lower than the actual price of the
              item, honour the price in your Order.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Where the price you paid is higher than the actual price of the
              item, refund you the difference.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              If your Order has not yet been processed, then we will notify you
              as soon as possible and only process the order (or part thereof)
              once you have confirmed you are happy to buy at the correct price
              or otherwise cancel the Order (or part thereof) and refund your
              payment in full.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Delivery charges are not included in the price of Goods on our
              Website. Delivery options and related charges will be presented to
              you as part of the order process.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ mt: 3 }} variant="h5" className={classes.head}>
            User Generated Content:
            </Typography>
            <Typography sx={{ mt: 3 }}>
              By providing a review you agree to be solely responsible for the
              content of all information you contribute. You also grant us a
              right to use any content you provide for our own purposes
              including republication in any form or media. Comments may be
              moderated and may not be displayed immediately but we do not
              commit to checking all content and will not be liable for third
              party posts. We reserve the right in our sole discretion not to
              publish or to remove any comment including those that we believe
              may be unlawful, defamatory, racist or libelous, incite hatred or
              violence, detrimental to people, institutions, religions or to
              people's privacy, which may cause harm to minors, is detrimental
              to the trade marks, patents and copyrighted content, contains
              personal data, improperly uses the medium for promoting and
              advertising businesses. This Website is available to the public
              and therefore information you consider confidential should not be
              posted to this Website.
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
