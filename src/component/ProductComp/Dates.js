import React from "react";
import { makeStyles } from "@mui/styles";
import AllProductCSS from "../../assets/Styles/ProductStyles/AllProduct.Style";
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

export default function Dates() {
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
            DATES
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "white",
              marginLeft: "35%",
              width: "480px",
            }}
          >
            Goodies has 45+ varieties of dates, we cultivate and sale pure organic
            dates in 45 + varieties like Medjool, Ajwa, Khudri, Safawi,
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
              DATES
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
                    label="In stock &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="Out of stock"
                    label="Out of stock&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9"
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
                  Price: Rs 0 - Rs 3600
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
                  <FormControlLabel control={<Checkbox />} label="Dates" />
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

        <Box sx={{ mt: 5, ml: -45 }}>
          <Stack spacing={2}>
            <Pagination
              count={2}
              variant="outlined"
              color="primary"
              shape="rounded"
            />
          </Stack>
        </Box>

        <Box sx={{ mt: 3,width:"83%",ml:5 }}>
          <Box>
            <Typography>
              Goodies has 45+ varieties of dates, we cultivate and sale pure
              organic dates in 45 + varieties like Medjool, Ajwa, Khudri,
              Safawi, Safari, Omani dates etc. Best dates in India. Fresh and
              Organic dates. Best khajoor in India.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              The health benefits of dates are many, and popping one every day
              will only add to your health. This edible sweet fruit, is grown
              abundantly in Middle Eastern countries, and is best served with
              lots of love! Our dates are hand-picked and imported from Saudi
              Arabia. Our special farm fresh yellow dates sell like hot cakes
              and is a must try when you drop in to our store.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Goodies Store is the ultimate destination for those seeking the
              highest quality dates sourced from the finest farms worldwide. Our
              extensive range of dates includes Safawi, Mabroom, Sukkari, and
              Ajwa, each of which boasts a distinctive flavor and texture. We
              take great care in hand-picking and processing our dates to
              maintain their freshness and unique taste, resulting in a healthy
              and delectable snack perfect for any occasion. Come and experience
              the exceptional quality of our dates at Goodies Store. Buy Goodies
              Dates online.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              Goodies Store offers a collection of premium quality dates that are
              sourced from the best farms around the world. Each type of date
              has its own unique flavour and texture to suit your taste buds.
              These dates are free from any additives, preservatives, or
              artificial colours ensuring that you receive only the best-quality
              dates. Dates are versatile snacks that can be enjoyed in various
              ways, such as adding them to your morning bowl of oatmeal or
              yogurt, smoothies, salads, or baked goods. They are perfect for
              on-the-go snacking, post-workout recovery, or as a sweet treat
              after dinner. Dates are rich in essential nutrients, minerals, and
              vitamins that promote healthy digestion, boost energy levels, and
              improve skin and hair health. If you're looking for a healthy and
              delicious snack, Goodies Store's collection of dates is an ideal
              choice.
            </Typography>
          </Box>

          <Box sx={{mt:3}}>
            <Typography variant="h5" className={classes.head}>
              Health Benefits of Goodies Dates
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
                Dates are a nutrient-dense fruit that's packed with vitamins,
                minerals, and fiber, making them a healthy addition to your
                diet. They are high in potassium, which helps regulate blood
                pressure and reduces the risk of stroke. Dates are also rich in
                antioxidants that protect your body against free radicals and
                boost your immune system. They are low in fat and calories,
                making them an ideal snack for weight loss and maintaining a
                healthy lifestyle. Eating dates regularly can also improve
                digestion, boost energy levels, and promote healthy skin and
                hair.
              </Typography>
            </Box>
          </Box>

          <Box sx={{mt:3}}>
            <Typography variant="h5" className={classes.head}>
              Top-notch Dates
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography>
                At Goodies Store, we are dedicated to providing our customers with
                premium quality dates that are unrivaled in taste and freshness.
                We source our dates from the finest farms across the globe and
                take great care in processing them to preserve their natural
                flavor and texture. With a diverse range of dates available,
                each boasting its own unique flavor and texture, there is sure
                to be an option that satisfies your taste buds. We never
                compromise on quality, which is why our dates are free from any
                additives, preservatives, or artificial colors. Trust us to
                deliver only the highest quality dates straight to your
                doorstep.
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
