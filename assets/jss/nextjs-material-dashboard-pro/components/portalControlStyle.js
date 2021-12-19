import {
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    boxShadow,
    transition,
    whiteColor,
    grayColor,
    blackColor,
    hexToRgb,
  } from "assets/jss/nextjs-material-dashboard-pro.js";
  
  const portalControlStyle = (theme) => ({

    buttonCtrl: {
        backgroundColor: "#111", 
        border: "1px #ccc solid",
        color: "#e0e0e0",
        padding: "4px 10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "12px",
        fontWight: "bold",
        borderRadius: "10px",
        cursor: "pointer",
      },
      
      buttonCtrlTheme: {
        backgroundColor: "#222", 
        border: "1px #ccc solid",
        color: "#e0e0e0",
        padding: "4px 10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "12px",
        fontWeight: "bold",
        borderRadius: "10px",
        cursor: "pointer",
      },
      
      buttonCtrlThemeActive: {
        backgroundColor: "#666", 
        border: "1px #ccc solid",
        color: "#e0e0e0",
        padding: "4px 10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "12px",
        fontWeight: "bold",
        borderRadius: "10px",
        cursor: "pointer",
      },
      
      buttonCtrlThemeTitle: {
        color: "#e0e0e0",
        padding: "4px 10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "12px",
        fontWeight: "bold",
      },
      
      buttonCtrlThemeText: {
        color: "#e0e0e0",
        padding: "4px 10px 0px 0px",
        textAlign: "right",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "12px",
        fontWeight: "bold",
        width: "100%",
      },

    primary: {
      backgroundColor: primaryColor[0],
      color: whiteColor,
      ...defaultBoxShadow,
    },
    info: {
      backgroundColor: infoColor[0],
      color: whiteColor,
      ...defaultBoxShadow,
    },
    success: {
      backgroundColor: successColor[0],
      color: whiteColor,
      ...defaultBoxShadow,
    },
    warning: {
      backgroundColor: warningColor[0],
      color: whiteColor,
      ...defaultBoxShadow,
    },
    danger: {
      backgroundColor: dangerColor[0],
      color: whiteColor,
      ...defaultBoxShadow,
    },
    navLink: {
      color: whiteColor,
      margin: "0 5px",
      paddingTop: "15px",
      paddingBottom: "15px",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      lineHeight: "20px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      textDecoration: "none",
      "&:hover,&:focus": {
        color: whiteColor,
        background: "rgba(" + hexToRgb(grayColor[17]) + ", 0.2)",
      },
    },
  });
  
  export default portalControlStyle;
  