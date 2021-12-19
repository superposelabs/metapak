import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import CoreNavbar from "components/Navbars/CoreNavbar.js";
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/nextjs-material-dashboard-pro/layouts/coreStyle.js";

export default function Core(props) {
  const { children, ...rest } = props;
  // used for checking current route

  // styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });

  return (
    <div className={classes.body}>
      <CoreNavbar {...rest} />
      <div className={classes.wrapper}>
        <div className={classes.fullPage}>
          {children}
        </div>
        <div className={classes.footer}>
          <Footer white />
        </div>
      </div>
    </div>
  );
}
