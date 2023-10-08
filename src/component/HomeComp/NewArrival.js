import React from "react";
import Box from "@mui/material/Box";
import img from "../../assets/Images/AllProductImages/H-card-img.webp";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NewArrivalCSS from "../../assets/Styles/HomePageStyles/NewArrival.Style";
//import Special from "./Special";

const useStyles = makeStyles(NewArrivalCSS);

export default function NewArrival() {
  const classes = useStyles();
  //const navigate = useNavigate();

  return (
    <>
      <Box className={classes.box}>
        <Typography variant="h4" gutterBottom className={classes.type1}>
          NEW ARRIVALS
          <abbr title="ALL PRODUCTS">
            <Button variant="contained" className={classes.btn}>
              View All{" "}
            </Button>
          </abbr>
        </Typography>
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

      <Box className={classes.box}>
        <Typography variant="h4" gutterBottom className={classes.type1}>
          BEST SELLING
          <abbr title="ALL PRODUCTS">
            <Button variant="contained" className={classes.btn}>
              View All{" "}
            </Button>
          </abbr>
        </Typography>
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

      {/* <Box>
        <Special />
      </Box> */}
    </>
  );
}
