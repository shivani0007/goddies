import React from 'react'
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import InstaFeedCSS from '../../../assets/Styles/HomePageStyles/InstaFeed.Style';
import Typography from "@mui/material/Typography";
import Index from "../InstaFeedComp/Index"

const useStyles = makeStyles(InstaFeedCSS);

export default function InstaFeed() {
const classes = useStyles();


  return (
    <>
         <Box className={classes.box}>
        <Typography variant="h4" gutterBottom className={classes.type1}>
        INSTAGRAM FEED
        </Typography>
      </Box>

      {/* for insta images */}
      <Box>
        <Index/>
      </Box>
    </>
  )
}


