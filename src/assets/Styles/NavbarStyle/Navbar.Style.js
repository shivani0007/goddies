const NavCSS = {
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
    //marginBottom:"5%",
    "&:hover": {
        backgroundColor: "#ffab40 !important",
        color:"white !important",
        fontWeight:"bold",
      },
},

toggle:{
border:"none !important",
"&:hover": {
    backgroundColor: "#ffab40 !important",
    color:"white !important",
    fontWeight:"bold",
  },
  width:"100% !important",
  margin:"5% !important"
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
export default NavCSS;