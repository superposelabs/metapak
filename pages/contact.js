import React, {useRef, useState, useEffect} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MailChimp from "components/Mail/MailChimp.js";

// layout for this page
import Layout from "layouts/Core.js";

import Hidden from "@material-ui/core/Hidden";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// core components
import styles from "assets/jss/nextjs-material-dashboard-pro/views/protocolPageStyle.js";
import {primaryColor} from "assets/jss/nextjs-material-dashboard-pro.js";

// ############################
//

function Contact(props) {

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const mainRef = useRef(null);

// 
// ############################



  return (
    
    <div style={{width:"100vw",maxWidth:"100vw",overflowY:"hidden"}}>

        <div style={{minHeight:"60vh"}} className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
                <h1 className={classes.heroTitle}>Contact</h1>
                <h3 className={classes.heroSubTitle}>
                    To get involved in the project. Send us an email @ <u><a href="mailto:admin@superposelabs.com">admin@superposelabs.com</a></u>, sign up for notifications below,
                    and <u><a href="https://discord.gg/22Rv9hTGXC">Join our Discord</a></u> community.
                </h3>
                <p>* we are just starting to build the community, so you will be one of the first to get involved.</p>
                <Button round color="primary">Coming Soon</Button>
                <div><br /><br /></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>

            </GridItem>
        </GridContainer>
        </div>
      
        <div style={{width:"100%", 
        textAlign:"center", backgroundColor: primaryColor[0], 
        color:"#fff", padding:"55px"}}>
            <MailChimp />
        </div>

        <div className={classes.sectionDrkGray}>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <center><h2>
                " The metaverse will contain billions of interactions that will need to communicate to all interested parties in a decentralized way. "
            </h2></center>
        </GridItem>
        </GridContainer>
        </div>
        
    </div>

  );
}


Contact.layout = Layout;

export default Contact;