/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { COMPANY_DOMAIN_URL } from "../../lib/constants";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/nextjs-material-dashboard-pro/components/footerStyle.js";

export default function Footer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { fluid, white, rtlActive } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });

  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white,
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.links}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/contact" className={block}>
                {rtlActive ? "" : "Contact"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://discord.gg/22Rv9hTGXC" className={block}>
                {rtlActive ? "" : "Get Involved"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://discord.gg/22Rv9hTGXC" target="_blank" className={block}>
                {rtlActive ? "" : "Discord"}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.copyright}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a
            href={COMPANY_DOMAIN_URL + "?ref=metaportals-footer"}
            className={anchor}
            target="_blank"
          >
            {rtlActive ? "ميتابورتالس" : "Superpose Labs"}
          </a>
          {rtlActive
            ? ", ما وراء الكون"
            : ", ❤ an open metaverse."}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
