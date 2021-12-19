import {
    blackColor,
    primaryColor,
    roseColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    hexToRgb
  } from "assets/jss/nextjs-material-dashboard-pro.js";
  
  const parallaxStyle = {

    parallax: {
      minHeight: "70vh",
      overflow: "hidden",
      position: "relative",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex",
      alignItems: "center",

    },
    filter: {},
    primaryColor: {
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb(primaryColor[0]) +
          ",.56),rgba(" +
          hexToRgb(primaryColor[0]) +
          ",.95))"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    roseColor: {
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb(roseColor[0]) +
          ",.56),rgba(" +
          hexToRgb(roseColor[0]) +
          ",.95))"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    darkColor: {
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    infoColor: {
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb(infoColor[0]) +
          ",.56),rgba(" +
          hexToRgb(infoColor[0]) +
          ",.95))"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    successColor: {
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb(successColor[0]) +
          ",.56),rgba(" +
          hexToRgb(successColor[0]) +
          ",.95))"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    warningColor: {
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb(warningColor[0]) +
          ",.56),rgba(" +
          hexToRgb(warningColor[0]) +
          ",.95))"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    dangerColor: {
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb(dangerColor[0]) +
          ",.56),rgba(" +
          hexToRgb(dangerColor[0]) +
          ",.95))"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    small: {
      height: "65vh",
      minHeight: "65vh",
      maxHeight: "650px"
    }
     
};
  
  export default parallaxStyle;
  