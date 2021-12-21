import React, {useRef, useState, useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MailChimp from "components/Mail/MailChimp.js";

// layout for this page
import Layout from "layouts/Core.js";

import Hidden from "@material-ui/core/Hidden";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import MorselUpload from "components/CustomUpload/MorselUpload.js";

// hash function
import jsSHA from "jssha";

// core components
import styles from "assets/jss/nextjs-material-dashboard-pro/views/protocolPageStyle.js";
import {primaryColor} from "assets/jss/nextjs-material-dashboard-pro.js";


// ############################
//

function Protocol(props) {

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const mainRef = useRef(null);

// 
// ############################


  return (
    
    <div style={{width:"100vw",maxWidth:"100vw",overflowY:"hidden"}}>
    <div>

        <div style={{minHeight:"60vh"}} className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
                <h1 className={classes.heroTitle}>Metadata for the Metaverse</h1>
                <h3 className={classes.heroSubTitle}>
                    The metadata protocol for an open and decentralized metaverse.
                </h3>
                {/* <Button round color="primary">Start Building</Button>
                <Button round color="secondary">Documentation</Button>
                 */}
                <Button round color="primary">Coming Soon</Button>
                <div><br /><br /></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>

            </GridItem>
        </GridContainer>
        </div>
      
            {/* <Hidden smDown>
                <MorselUpload />
            </Hidden> */}

            <div style={{width:"100%", 
            textAlign:"center", backgroundColor: primaryColor[0], 
            color:"#fff", padding:"55px"}}>
            <MailChimp />
            </div>
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


Protocol.layout = Layout;

export default Protocol;
