import {
  defaultFont,
  container,
  containerFluid,
  primaryColor,
  whiteColor,
  grayColor,
} from "assets/jss/nextjs-material-dashboard-pro.js";

const footerStyle = (theme) => ({
  block: {},

  links: {
    float: "left!important",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      float: "auto",
      padding: "0px",
      width: "100%",
      textAlign: "center",
    },
  },
  copyright: {
    margin: "0",
    fontSize: "14px",
    float: "right!important",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      float: "auto",
      padding: "0px",
      width: "100%",
      textAlign: "center",
    },
  },


  left: {
    float: "left!important",
    display: "block",
  },

  right: {
    margin: "0",
    fontSize: "14px",
    float: "right!important",
    padding: "15px",
  },

  footer: {
    bottom: "0",
    borderTop: "1px solid " + grayColor[15],
    padding: "15px 0",
    ...defaultFont,
    zIndex: 4,
  },
  container: {
    zIndex: 3,
    ...container,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      float: "auto",
      padding: "0px",
      width: "100%",
      textAlign: "center",
    },
  },
  containerFluid: {
    zIndex: 3,
    ...containerFluid,
    position: "relative", 
  },
  a: {
    color: primaryColor[0],
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  a: {
    color: primaryColor[0],
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0",
    width: "auto",
  },
  whiteColor: {
    "&,&:hover,&:focus": {
      color: whiteColor, 
    },
  },

});

export default footerStyle;
