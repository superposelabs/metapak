import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import HelpOutline from "@material-ui/icons/HelpOutline";
import Map from "@material-ui/icons/Map";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Info from "@material-ui/icons/Info";
import CenterFocusStrongSharpIcon from "@material-ui/icons/CenterFocusStrongSharp";
import CenterFocusStrongTwoToneIcon from "@material-ui/icons/CenterFocusStrongTwoTone";

// core components
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/nextjs-material-dashboard-pro/components/portalNavbarStyle.js";

export default function PortalNavBar(props) {
  const [open, setOpen] = React.useState(false);
  // used for checking current route
  const router = useRouter();
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return router.route.indexOf(routeName) > -1 ? true : false;
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { color, brandText } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color,
  });

  var list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href={"/admin/dashboard"}>
          <a className={classes.navLink}>
            <Dashboard className={classes.listItemIcon} />
            <ListItemText
              primary={"Dashboard"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href={"/portals"}>
          <a
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute("/portals"),
            })}
          >
            <CenterFocusStrongTwoToneIcon className={classes.listItemIcon} />
            <ListItemText
              primary={"Portals"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href={"/transport/rarity"}>
          <a
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute("/transport/rarity"),
            })}
          >
            <Fingerprint className={classes.listItemIcon} />
            <ListItemText
              primary={"Rarity"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href={"/transport/roadmap"}>
          <a
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute("/transport/roadmap"),
            })}
          >
            <Map className={classes.listItemIcon} />
            <ListItemText
              primary={"Roadmap"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href={"/transport/faq"}>
          <a
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute("/transport/faq"),
            })}
          >
            <HelpOutline className={classes.listItemIcon} />
            <ListItemText
              primary={"FAQ"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem>
    </List>
  );
  
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button href="/" className={classes.logo} color="transparent">
                <img src={require("assets/img/logo-metaportals.png")} alt="metaportals logo" className={classes.logo} />
            </Button>
          </div>
        <Hidden smDown>{list}</Hidden>
      </Toolbar>
    </AppBar>
  );
}

PortalNavBar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
