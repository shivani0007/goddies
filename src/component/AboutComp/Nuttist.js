import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import img from "../../assets/Images/AboutImages/A-nutti-img.webp";
import { makeStyles } from "@mui/styles";
import NuttistCSS from "../../assets/Styles/AboutPageStyle/Nuttist.Style";
import { Card, Container, Grid } from "@mui/material";
const useStyles = makeStyles(NuttistCSS);

const Nuttist = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        display={{ xs: "12", md: "12", sm: "12", lg: "flex" }}
        //mr={-40}
        ml={88}
        mt={8}
        mb={-4}
        sx={{ width:"800px",backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat" }}
      >
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Grid
                item
                xs={12}
                sm={10}
                md={7}
                lg={6}
                xl={4}
                ml={{ xs: "auto", lg: 6 }}
                mr={{ xs: "auto", lg: 6 }}
              >
                <Card
                  shadow="lg"
                  mt={{ xs: 20, sm: 18, md: 20 }}
                  mb={{ xs: 20, sm: 18, md: 20 }}
                  mx={4}
                  className={classes.card}
                  sx={{
                    ml:-98,
                  }}
                >
                  <Box
                    variant="gradient"
                    bgColor="info"
                    coloredShadow="info"
                    borderRadius="lg"
                    p={4}
                    mx={2}
                    mt={6}
                    ml={-12}
                  >
                    <Typography className={classes.text} gutterBottom>NUTTIEST PEOPLE AROUND
                    </Typography>
                    <Box
                      component="form"
                      className={classes.box1}
                      color="text.secondary"
                      noValidate
                      autoComplete="off"
                    >
                      <Grid container spacing={-16}>
                        <Grid item xs={12} md={6}>
                          <Typography className={classes.write1}>
                          At Ajfan, we respect and connect with Mother Nature and earth and we do not do anything that does not go in sync with nature. Hence, dry fruits that we grow at our farm are free of pesticides or insecticides. The cultivation measures that we have been using are purely organic. There is minimal use of machines and we prefer using hands for our cultivations. We ensure that each pack of our dry fruits are hygienic and do not contain any preservative. Keeping nature intact and saving the environment is our way of giving back what Mother Nature has given us!
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>   
 
    </>
  );
};

export default Nuttist;
