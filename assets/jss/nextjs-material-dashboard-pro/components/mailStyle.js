import {
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
  } from "assets/jss/nextjs-material-dashboard-pro.js";
  
  const mailStyle = {
    infoArea: {
      maxWidth: "360px",
      margin: "0 auto",
      padding: "0px",
    },
    
    primary: {
      color: primaryColor[0],
    },
    warning: {
      color: warningColor[0],
    },
    danger: {
      color: dangerColor[0],
    },
    success: {
      color: successColor[0],
    },
    info: {
      color: infoColor[0],
    },
    rose: {
      color: roseColor[0],
    },
    gray: {
      color: grayColor[0],
    },
    icon: {
      width: "36px",
      height: "36px",
    },

    title: {
      color: grayColor[2],
      margin: "30px 0 15px",
      textDecoration: "none",
      fontSize: "18px",
    },
    description: {
      color: "#fff",
      fontSize: "18px",
      paddingBottom:"10px",
      "& a:visited": {
          color:"#fff",
      },
      "& a": {
          color:"#fff",
      }
    },
    textBox: {
        height:"40px", 
        borderRadius:"6px", 
        fontSize:"18px"
    },
    submitButton: {
        height:"40px", 
        borderRadius:"6px", 
        fontSize:"18px"
    },
    wrapper: {
        textAlign:"center",
        "& p": {
            display:"block",
            marginTop: "-20px",
        }
    },
  };
  
  export default mailStyle;
  