import React from "react";
import { makeStyles } from "@mui/styles";
import AllProductCSS from "../../assets/Styles/ProductStyles/AllProduct.Style"
import img from "../../assets/Images/AllProductImages/H-card-img.webp";
import img5 from "../../assets/Images/NavbarImage/H-logo-2.png";
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
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import front from "../../assets/Images/AllProductImages/AP-front-img.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Pagination from "@mui/material/Pagination";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Badge from "@mui/material/Badge";

const style = {
  width: "100%",
  maxWidth: 330,
  bgcolor: "background.paper",
  border: "1px solid gray",
};

const useStyles = makeStyles(AllProductCSS);

export default function DryFruits() {
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
                      src={img5}
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
                    <NavDropdown className={classes.link1} title="PRODUCTS">
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
              mt: -17,
              fontWeight: "bold",
              color: "white",
              marginLeft: "45%",
            }}
          >
           DRY FRUITS
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "white",
              marginLeft: "38%",
              width: "480px",
            }}
          >
            Dry fruits are a versatile and nutritious snack that can be enjoyed anytime, anywhere. At Ajfan Store, we offer a wide
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
              DRY FRUITS
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ ml: "-60.5%", mt: 7 }}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem>
              <Typography
                sx={{
                  fontSize: "20px !important",
                  fontWeight: "bold !important",
                  ml: 2,
                }}
              >
                FILTER
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="" />
            </ListItem>
            <ListItem button>
              <Typography sx={{ mt: -14, ml: 2, fontSize: "16px" }}>
                AVAILABILITY
              </Typography>
              <Box sx={{ mt: 5, ml: -13 }}>
                <RadioGroup name="use-radio-group" defaultValue="first">
                  <FormControlLabel
                    value="In stock"
                    label="In stock &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="Out of stock"
                    label="Out of stock&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5"
                    control={<Radio />}
                  />
                </RadioGroup>
              </Box>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="" />
            </ListItem>
            <ListItem button>
              <Box sx={{ ml: 2, width: "100%" }}>
                <Typography sx={{ mt: 1, ml: 0, fontSize: "16px" }}>
                  PRICE
                </Typography>
                <input
                  type="range"
                  min={500}
                  max={3000}
                  defaultValue={3000}
                  valueLabelDisplay="auto"
                  style={{ marginTop: "3%", marginLeft: "-0%", width: "90%" }}
                />
                <Typography sx={{ mt: 2, ml: -0 }}>
                  Price: Rs 0 - Rs 2980
                </Typography>
              </Box>
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="" />
            </ListItem>
            <ListItem>
              <Box sx={{ mt: 28, ml: 2, mb: -15 }}>
                <Typography sx={{ mt: -27, ml: 0, fontSize: "16px" }}>
                  PRODUCT TYPE
                </Typography>
                <FormGroup sx={{ mt: 2 }}>
                  <FormControlLabel control={<Checkbox />} label="Dry Fruit" />
                </FormGroup>
              </Box>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ ml: 50, mt: "-36%" }}>
          <Box display="flex">
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box display="flex">
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box display="flex">
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box display="flex">
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card1}>
              <CardActionArea className={classes.img3}>
                <CardMedia
                  component="img"
                  height="230"
                  image={img}
                  alt="green iguana"
                  className={classes.img}
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="body1" className={classes.text1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species,
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={classes.text2}
                >
                  Rs.290.00
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box sx={{ mt: 5, ml: -37 }}>
          <Stack spacing={2}>
            <Pagination
              count={4}
              variant="outlined"
              color="primary"
              shape="rounded"
            />
          </Stack>
        </Box>

        <Box sx={{ mt: 3,width:"83%",ml:5 }}>
          <Box>
            <Typography>
            Dry fruits are a versatile and nutritious snack that can be enjoyed anytime, anywhere. At Ajfan Store, we offer a wide range of premium quality dry fruits that are perfect for snacking, baking, and cooking. Our dry fruits are sourced from the best suppliers around the world, ensuring that you get the freshest and most flavorful products every time you order. So why not indulge in the goodness of nature's bounty and order our dry fruits today?
            </Typography>
          </Box>

          <Box sx={{mt:3}}>
            <Typography variant="h5" className={classes.head}>
            Shop Our Wide Range of Premium Quality Dry Fruits
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
              Looking for the perfect snack to munch on during the day or a healthy treat to satisfy your sweet tooth? Look no further than Ajfan Store. We offer a wide range of premium quality dry fruits, including almonds, cashews, pistachios, raisins, and more. Our dry fruits are carefully selected and handpicked, ensuring that you get the freshest and most flavorful products every time you order.
              </Typography>
            </Box>
          </Box>

          <Box sx={{mt:3}}>
            <Typography variant="h5" className={classes.head}>
            Enjoy the Nutritious Benefits of Dry Fruits
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
              Dry fruits are packed with essential nutrients and minerals that are good for your health. They are a rich source of fiber, protein, and antioxidants, which can help boost your immune system, improve heart health, and aid in digestion. So why not make dry fruits a part of your daily diet and enjoy the nutritious benefits that they have to offer?
              </Typography>
            </Box>
          </Box>

          <Box sx={{mt:3}}>
            <Typography variant="h5" className={classes.head}>
            Order Now and Get Your Dry Fruits Delivered to Your Doorstep
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
              Ordering dry fruits has never been easier. At Ajfan Store, we offer convenient and secure online ordering, so you can order your favorite dry fruits from the comfort of your own home. Plus, we offer fast and reliable delivery, ensuring that your dry fruits are delivered to your doorstep in no time.
              </Typography>
            </Box>
          </Box>

          <Box sx={{mt:3}}>
            <Typography variant="h5" className={classes.head}>
            Try Our Premium Quality Dry Fruits Today
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
              Don't miss out on the opportunity to indulge in the rich and indulgent flavors of our premium quality dry fruits. Order now and experience the goodness of nature's bounty with every bite. Our dry fruits are affordably priced, making it easy for you to enjoy a nutritious and healthy snack without breaking the bank. So why wait? Try our dry fruits today and take the first step towards a healthier and happier lifestyle!
              </Typography>
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
