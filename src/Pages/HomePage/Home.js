import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import img from "../../assets/Images/HomeImages/H-img-back.jpg";
import img1 from "../../assets/Images/HomeImages/H-front-img.jpg";
import img2 from "../../assets/Images/HomeImages/H-second-img.jpg";
import img3 from "../../assets/Images/HomeImages/H-third-img.jpg";
import { makeStyles } from "@mui/styles";
import HomeCSS from "../../assets/Styles/HomePageStyles/Home.Style";
import NavbarPage from "../../Layout/Navbar/Navbar";
import AllProductCarts from "../../component/HomeComp/AllProductCarts";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import OurProduct from "../../component/HomeComp/OurProduct";
import Footer from "../../Layout/Footer/Footer";

const useStyles = makeStyles(HomeCSS);
export default function Home() {
  const classes = useStyles();

  return (
    <Box sx={{ backgroundImage: `url(${img})` }} className={classes.Image}>
      <NavbarPage />
      <Box className={classes.box}>
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
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <abbr title="goodies offer image">
                <img
                  class="d-block w-100"
                  src={img1}
                  alt="First slide"
                  height={550}
                />
              </abbr>
            </div>
            <div class="carousel-item">
              <abbr title="goodies offer image">
                <img
                  class="d-block w-100"
                  src={img2}
                  alt="Second slide"
                  height={550}
                />
              </abbr>
            </div>
            <div class="carousel-item">
              <abbr title="goodies offer image">
                <img
                  class="d-block w-100"
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
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </Box>
      <Box className={classes.box1}>
        <abbr title="Shop Now">
          <Button variant="contained" className={classes.btn}>
            Shop Now{" "}
          </Button>
        </abbr>
      </Box>

      {/* for Allproducts and more */}
      <Box>
        <AllProductCarts />
      </Box>

      {/* for text slider */}
      <Box sx={{ mt: 20 }}>
        <Typography variant="h4" className={classes.head}>
          WHAT OUR CUSTOMER SAY
        </Typography>
        <Box className={classes.box2}>
          <abbr title="testimonial comma">
            <FormatQuoteIcon className={classes.icon} />
          </abbr>
        </Box>
      </Box>
      <Box className={classes.box3}>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p class="d-block w-100" className={classes.p1}>
                For immediate usage, store these products in airtight containers
                at cool, dark spot reducing the exposure of light, oxygen and
                moisture.
              </p>
              <p class="d-block w-100" className={classes.p2}>
                SRUTHI KK
              </p>
            </div>
            <div class="carousel-item">
              <p class="d-block w-100" className={classes.p1}>
                {" "}
                Do not expose to heat as it may go rancid or create grounds for
                soft bodied animals.
              </p>
              <p class="d-block w-100" className={classes.p2}>
                AARYA CK
              </p>
            </div>
            <div class="carousel-item">
              <p class="d-block w-100" className={classes.p1}>
                For longer user , keep it refrigerated giving it the right taste
                and more flavourful vibrant to these tasteful Products.
              </p>
              <p class="d-block w-100" className={classes.p2}>
                MOHIT AK
              </p>
            </div>
          </div>
        </div>
      </Box>

      {/* for our products */}
      <Box sx={{ mt: 5 }}>
        <OurProduct />
      </Box>

      {/* for footer */}
      <Box sx={{ width: "100%", mt: 2 }}>
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
  );
}
