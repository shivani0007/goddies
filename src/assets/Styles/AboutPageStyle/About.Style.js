const AboutCSS = {

    Image: {
        minHeight: "100vh !important",
        width: "100% !important",
        //height:"auto !important",
        backgroundSize: "cover !important",
        backgroundPosition: "center !important",
        display: "grid !important",
        placeItems: "center !important",
      },
    
    box1:{
        //border:'1px solid red',
        marginTop:"1%",
        width:'100%'
    },
    
    box2:{
       // border:'1px solid red', 
    },
    
    
    nav: {
        fontSize:'16px',
        marginLeft:"230px",
        marginTop:"-6%",
     //border:'1px solid blue'
    },
    
    stack:{
        marginTop:"-5%",
        marginLeft:"110%"
    },
    
    
    icon:{
        color:"black !important",
        border:"1px solid black !important"
    },
    
    link1: {
        margin:11 ,
        color:"white !important",
        fontWeight:"bold",
        backgroundColor:"#ffab40",
    },
    
    link:{
        margin:11 ,
        "&:hover": {
            backgroundColor: "#ffab40 !important",
            color:"white !important",
            fontWeight:"bold",
          },
    },

    card:{
        opacity: "0.9",
        width: "720px",
        height: "550px",  
      },

      text: {
        fontSize: "32px !important",
        fontWeight: "bold !important",
        fontFamily: "Roboto Slab, serif !important",
        marginTop:"-9% !important",
        width: "80%",
        color: "blue",
      },

      
    write1: {
        fontSize:"18px !important",
         width:"570px !important",
        color:"black"
      },

      boxx: {
        marginTop: "6% !important",
      },

      btn: {
        //padding:"15% 50%  !important",
        backgroundColor: "#ffab40 !important",
        "&:hover": {
          color: " #ffab40 !important",
          backgroundColor:"white !important",
          border:"1px solid  #ffab40 "
        },
        
        fontWeight: "bold !important",
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

        
    }
    export default AboutCSS;