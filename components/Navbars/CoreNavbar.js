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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
 
// @material-ui/icons
import Map from "@material-ui/icons/Map";

// core components
import Button from "components/CustomButtons/Button";
import Menu from "@material-ui/icons/Menu";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";
import Drawer from "@material-ui/core/Drawer";

import styles from "assets/jss/nextjs-material-dashboard-pro/components/coreNavbarStyle.js";

export default function CoreNavBar(props) {
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
      <Link href={"/core"}>
        <a
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/core"),
          })}
        >
          <ListItemText
            primary={"Overview"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </a>
      </Link>
    </ListItem>
      <ListItem className={classes.listItem}>
        <Link href={"/developers"}>
          <a
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute("/developers"),
            })}
          >
            <ListItemText
              primary={"Developers"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href={"/protocol"}>
          <a
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute("/protocol"),
            })}
          >
            <ListItemText
              primary={"Protocol"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href={"/docs"}>
          <a
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute("/docs"),
            })}
          >
            <ListItemText
              primary={"Docs"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Link href={"/metaverses"}>
          <a
            className={cx(classes.navLink, {
              [classes.navLinkActive]: activeRoute("/metaverses"),
            })}
          >
            <ListItemText
              primary={"Metaverses"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </a>
        </Link>
      </ListItem> */}
    </List>
  );
  
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button href="/" className={classes.logo} color="transparent">
                <img src={require("assets/img/logo-morsel.png")} alt="morsel logo" className={classes.logo} />
            </Button>
          </div>

        <Hidden smDown>{list}</Hidden>

        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu style={{height:"24px", width:"24px"}} />
          </Button>
        </Hidden>

        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

CoreNavBar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
