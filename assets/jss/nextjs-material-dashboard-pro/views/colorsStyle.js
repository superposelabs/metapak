import { grayColor } from "assets/jss/nextjs-material-dashboard-pro.js";

import buttonGroupStyle from "assets/jss/nextjs-material-dashboard-pro/buttonGroupStyle.js";

const buttonsStyle = {
  cardTitle: {
    marginTop: "0",
    marginBottom: "3px",
    color: grayColor[2],
    fontSize: "18px",
  },
  cardHeader: {
    zIndex: "3",
  },
  cardContentLeft: {
    padding: "15px 20px 15px 0px",
    position: "relative",
  },
  cardContentRight: {
    padding: "15px 20px 15px 0px",
    position: "relative",
  },
  cardContentBottom: {
    padding: "15px 0px 0px 0px",
    position: "relative",
  },
  marginRight: {
    marginRight: "5px",
  },
  icons: {
    width: "17px",
    height: "17px",
  },
  ...buttonGroupStyle,
  input: {
    width: "175px",
    height: "40px",
    backgroundColor: "#f1f1f1",
    border: "1px solid #ccc",
    borderRadius: "4px",
    margin: "0px 10px",
  },
  inputSm: {
    width: "55px",
    height: "40px",
    backgroundColor: "#f1f1f1",
    border: "1px solid #ccc",
    borderRadius: "4px",
    margin: "0px 10px",
  }
};

export default buttonsStyle;
