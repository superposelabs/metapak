import {
    whiteColor,
    blackColor,
    primaryColor,
    secondaryColor,
    hexToRgb,
  } from "assets/jss/nextjs-material-dashboard-pro.js";
   
  const pagesStyle = (theme) => ({
    body: {
        height: "100vh",
        minHeight: "100vh",
        top: "0",
      },
    wrapper: {
      display:"flex!important",
      flexDirection: "column",
      height: "100vh",
      minHeight: "100vh",
      position: "relative",
      top: "0",
      paddingTop: "80px",
    },
    fullPage: {
      minHeight: "100vh",
      padding: "0",
      position: "relative",
      display: "flex!important",
      flex: "1 0 auto",
      margin: "0",
      border: "0",
      alignItems: "center",
      backgroundColor: whiteColor,
      [theme.breakpoints.down("sm")]: {
        minHeight: "700px!important",
      },
    },
    footer: {
        width:"100%",
        backgroundColor: secondaryColor[0], 
        flexShrink: 0,
        display:"block",
        zIndex: 40,
    },
  });
  
  export default pagesStyle;
  