const CareersCSS = {
    Image: {
      minHeight: "100vh !important",
      width: "100% !important",
      backgroundSize: "cover !important",
      backgroundPosition: "center !important",
      display: "grid !important",
      placeItems: "center !important",
    },
  
    box1: {
      marginTop: "1%",
      width: "100%",
    },
  
    nav: {
      fontSize: "16px",
      marginLeft: "230px",
      marginTop: "-6%",
    },
  
    stack: {
      marginTop: "-5%",
      marginLeft: "110%",
    },
  
    icon: {
      color: "black !important",
      border: "1px solid black !important",
    },
  
    link1: {
      margin: 11,
    },
  
    link: {
      margin: 11,
      "&:hover": {
        backgroundColor: "#ffab40 !important",
        color: "white !important",
        fontWeight: "bold",
      },
    },
  
    head: {
      fontWeight: "bold !important",
    },

    btn: {
        padding:"5% 10% !important",
        backgroundColor: "#ffab40 !important",
        "&:hover": {
          color: " #ffab40 !important",
          backgroundColor:"white !important",
          border:"1px solid  #ffab40 "
        },
       // marginLeft:"5% !important",
        //marginRight:'-10% !important',
        fontWeight: "bold !important",
        color:"white"
      },
  

      bootbtn:{
        color:"#1a237e",
        border:"1px solid #1a237e",
       borderRadius:"5% !important",
       fontSize:"13px !important",
       marginTop:"3% !important"
       //width:"100% !important"
      },

      product:{
        color:"black !important",
        fontWeight:"bold !important",
        textDecoration:"none !important",
        margin:"5%",
        "&:hover": {
            backgroundColor: "#ffab40 !important",
            color:"white !important",
            fontWeight:"bold",
            width:"100%"
          },
        }
  };
  export default CareersCSS;
  