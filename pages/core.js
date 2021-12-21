import React, {useRef, useState, useEffect} from "react";
import Router from "next/router";

//const THREE = require('three');

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MailChimp from "components/Mail/MailChimp.js";

// layout for this page
import Layout from "layouts/Core.js";

import Hidden from "@material-ui/core/Hidden";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import MorselUpload from "components/CustomUpload/MorselUpload.js";

import GLOBE from 'vanta/dist/vanta.globe.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the 
// document head using a <script> tag
 

// Typewriter
import Typewriter from 'typewriter-effect';

// hash function
import jsSHA from "jssha";

// core components
import styles from "assets/jss/nextjs-material-dashboard-pro/views/corePageStyle.js";
import {
    primaryColor,
  } from "assets/jss/nextjs-material-dashboard-pro.js";
  


// ############################
//

function Core(props) {

  const [typeWriterBgColor, setTypeWriterBgColor] = useState("#000");
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const mainRef = useRef(null);

    const handleClick = () => {
        Router.push("/docs");
    }

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        size: 1.60,
        backgroundColor: "#101010",
        color: "#0A86C8", // blue
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

// 
// ############################

const codeDisplayOld = 
`{
    "title": "Metaverse Kicks",
    "type": "object",
    "properties": {
        "name": {
        "type": "string",
        "description": "Flurry Sneakers"
        },
        "description": {
        "type": "string",
        "description": "One-of-kind pair of kicks."
        },
        "image": {
        "type": "string",
        "description": "//ipfs/7ae4bcfd232f203d5f7d21854c2ba049f2d83ffff3b55a2b13c1e2ae68a52217"
        }
}`;

const codeDisplay = 
`{
    "protocol": "morsel",
    "version": "0.1.0",
    "classification": "Identifies the type of object.",
    "_blockchain": "Ethereum",
    "_standard": "eip-721",
    "_contractAddress":"Identifies the address of the contract that manages the NFT",
    "_tokenId": "The identifier for an NFT typically represented as uint256 (eip-721)",
    "_creatorAddress": "The address for the creator of the NFT.",
    "ownerAddress": "The address of the owner of the NFT at the time of the morsel pack creation. Validated by Oracle.",
    "approvedAddress": "Approved address at the time of the morsel pack creation. Validated by Oracle.",
    "operatorAddress": "The operator (dAPP) that created the morsel pack. This also should be an operator on the blockchain (ETH) at the time, which are typically marketplaces. Validated by Oracle.",
    "_guti": "Globally unique token identifier (_blockchain, _contractAddress, _tokenId)",
    "_morselHash": "Hash of metadata",
    "sig": "The signature of signed metadata",
    "collection": "",
    "ERC721": {
      "title": "Asset Metadata",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Identifies the asset to which this NFT represents"
        },
        "description": {
          "type": "string",
          "description": "Describes the asset to which this NFT represents"
        },
        "image": {
          "type": "string",
          "description": "A URI pointing to a resource with mime type image 
        }
      }
    },
    "files": [
      {
        "type": "image",
        "hash": "7ae4bcfd232f203d5f7d21854c2ba049f2d83ffff3b55a2b13c1e2ae68a52217",
        "format": "image/jpg",
        "uri": "//ipfs/7ae4bcfd232f203d5f7d21854c2ba049f2d83ffff3b55a2b13c1e2ae68a52217",
        "classification": "origin"
      },
      {
        "type": "text",
        "hash": "998bcfd232f203d5f7d21854c2ba049f2d83ffff3b55a2b13c1e2ae68a5241",
        "format": "text/markdown",
        "uri": "license.md",
        "classification": "legal"
      }
    ],
    "copyright": "2021",
    "termsOfUse": "",
    "termsOfUseUri": "",
    "required": [ "_blockchain", "_contractAddress", "_tokenId" ]
}`;


  return (
    
    <div style={{width:"100vw",maxWidth:"100vw",overflowY:"hidden"}}>
    <div ref={vantaRef}>
        <Parallax 
            // image={require("assets/img/morsel_bg.jpg")}
            className={classes.parallax}
        >
            <div className={classes.container}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <h1 className={classes.heroTitle}>A Protocol for 
                    <Typewriter
                        options={{
                                loop: true,
                                delay: 75,
                                deleteAll: 1,
                                deleteSpeed: 1,
                            }}

                            onInit={(typewriter) => {
                                typewriter.typeString('')
                                .callFunction(() => {
                                    // Later, when you want to update an animation in progress with new options
                                    vantaEffect.setOptions({
                                    color: "#0A86C8"
                                    })
                                    setTypeWriterBgColor("#0A86C8");
                                })

                                typewriter.typeString('<span style="background-color:#0A86C8; color:#FFF;padding: 0px 10px;">Decentralization</span>')
                                .pauseFor(2500)
                                .deleteAll()
                                .callFunction(() => {
                                    // Later, when you want to update an animation in progress with new options
                                    vantaEffect.setOptions({
                                    color: "#F15B40"
                                    })
                                    setTypeWriterBgColor("#F15B40");

                                    // Later, if the container changes size and you want to force Vanta to redraw at the new canvas size
                                    //vantaEffect.resize()
                                })
                                typewriter.typeString('<span style="background-color:#F15B40; color:#FFF;padding: 0px 10px;">Interoperability</span>')
                                .pauseFor(2500)
                                .deleteAll()

                                .callFunction(() => {
                                    // Later, when you want to update an animation in progress with new options
                                    vantaEffect.setOptions({
                                    color: "#4FAA6F"
                                    })
                                    setTypeWriterBgColor("#4FAA6F");
                                })

                                typewriter.typeString('<span style="background-color:#4FAA6F; color:#FFF;padding: 0px 10px;">Opportunity</span>')
                                .pauseFor(2500)
                                .deleteAll()
                                
                                .callFunction(() => {
                                    // Later, when you want to update an animation in progress with new options
                                    vantaEffect.setOptions({
                                    color: "#756BB0"
                                    })
                                    setTypeWriterBgColor("#756BB0");
                                })

                                typewriter.typeString('<span style="background-color:#756BB0; color:#FFF;padding: 0px 10px;">Inclusiveness</span>')
                                .pauseFor(2500)
                                .deleteAll()
                                
                                .callFunction(() => {
                                    // Later, when you want to update an animation in progress with new options
                                    vantaEffect.setOptions({
                                    color: "#F15F90"
                                    })
                                    setTypeWriterBgColor("#F15F90");
                                })

                                typewriter.typeString('<span style="background-color:#F15F90; color:#FFF;padding: 0px 10px;">Fairness</span>')
                                .pauseFor(2500)
                                .deleteAll()
                                
                                .callFunction(() => {
                                    // Later, when you want to update an animation in progress with new options
                                    vantaEffect.setOptions({
                                    color: "#0A86C8"
                                    })
                                    setTypeWriterBgColor("#0A86C8");
                                })

                                typewriter.typeString('<span style="background-color:#0A86C8; color:#FFF;padding: 0px 10px;">Responsibility</span>')
                                .pauseFor(2500)
                                .deleteAll()
                                
                                .callFunction(() => {
                                    // Later, when you want to update an animation in progress with new options
                                    vantaEffect.setOptions({
                                    color: "#4FAA6F"
                                    })
                                    setTypeWriterBgColor("#4FAA6F");
                                })

                                typewriter.typeString('<span style="background-color:#4FAA6F; color:#FFF;padding: 0px 10px;">Humanity</span>')
                                .pauseFor(6500)
                                .deleteAll()
                                .start();
                            }}
                        />
                    in the Metaverse</h1>
                    <h3 className={classes.heroSubTitle}>
                        The metadata protocol for an open and decentralized metaverse.
                    </h3>
                    <Button round color="primary" onClick={handleClick} style={{backgroundColor: typeWriterBgColor, border:"1px solid " + typeWriterBgColor}}>Start Building</Button>
                    <Button round color="secondary" onClick={handleClick} style={{border:"1px solid #e0e0e0"}}>Documentation</Button>
                    
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>

                </GridItem>
            </GridContainer>
            </div>
        </Parallax>
        
      
        <div style={{minHeight:"20vh"}}></div>
                {/* <Hidden smDown>
                    <MorselUpload />
                </Hidden> */}
        </div>

        <div className={classes.sectionDrk} style={{backgroundColor: typeWriterBgColor}}>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <center><h2 className={classes.bannerText}>
                " The metaverse will contain billions of interactions that will need to communicate to all interested parties in a decentralized way. "
            </h2></center>
        </GridItem>
        </GridContainer>
        </div>

         
        <div className={classes.sectionLight}>

        <div className={classes.paddingTop60}></div>

        <div className={classes.container}>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <div className={classes.paddingTop15}></div>
            <div className={classes.paddingTop30}></div>
            <div style={{
                // backgroundImage:"url('https://teleport.metaportals.com/meta/portals/portal--egypt-thumb.png')",
                backgroundSize:"cover",
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat",
                backgroundColor: "#d9d9d9",
                maxWidth:"350px",
                width:"100%",
                height:"250px",
                textAlign:"center",
                borderRadius:"20px",
                }}>
            <img src={require("assets/img/portal_1.png")} alt="Metaportals 1" style={{maxWidth:"250px"}}  className={classes.gridImage} />
            </div>
            <div style={{width:"100%", textAlign:"center"}}>
            <p style={{fontWeight:"bold", fontSize:"1.6em",paddingTop:"15px"}}><a href="https://metaportals.com/portal/1" target="_blank">Metaportals</a></p>
            <p style={{fontWeight:"bold"}}>#1 - Deep Freeze</p>
            </div>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={2}>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.gridTitle}>
                Create, Host and Extend your NFT Metadata
            </h1>
            <h2 className={classes.gridSubTitle}>Extend NFT Metadata Using Morsel Archives</h2>
            <h4 className={classes.description}>
                NFTs shouldn't have to be static. They can evolve over time while maintaining their provenance. 
                Morsel archives are portable files that can be used to encapsulate any NFT minted on any blockchain and sold on any marketplace. 
            </h4>
            <div className={classes.paddingTop15}></div>
            {/* <Button round color="primary">Coming Soon</Button> */}
        </GridItem>
        </GridContainer>
        
        <div className={classes.paddingTop60}></div>
        <div className={classes.paddingTop60}></div>

        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.gridTitle}>
                Enhance NFTs with Advanced Metadata 
            </h1>
            <h3 className={classes.gridSubTitle}>Terms of Use, Game Interactions, Metaverse Experiences, and more...</h3>
            <h4 className={classes.description}>
                Providing a universal method for metaverse operators to ensure 
                they are adhering to the terms of use intended by the creators 
                of virtual objects will add value to the ecosystem.
            </h4>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={2}>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
            <div className={classes.paddingTop15}></div>
            <img src={require("assets/img/nft_golden_sword.png")} alt="Golden Sword"  className={classes.gridImage} style={{maxWidth:"350px"}} />
        </GridItem>
        </GridContainer>

        <div className={classes.paddingTop60}></div>
        <div className={classes.paddingTop60}></div>

        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <div className={classes.paddingTop15}></div>
            <img src={require("assets/img/nft_cyberpunk.png")} alt="Cyberpunk 1" className={classes.gridImage} style={{maxWidth:"350px"}} />
        </GridItem>
        
        <GridItem xs={12} sm={12} md={2}>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.gridTitle}>
                Blockchain {`=>`} Metaverse Pipeline
            </h1>
            <h3 className={classes.gridSubTitle}>Prepare your NFTs for the Metaverse</h3>
            <h4 className={classes.description}>
                Owners, creators, metaverse operators and even third-parties can provide 
                interactions with NFTs via morsel updates. The <a href="/protocol">morsel protocol</a>
                {' '}preserves provenance, provides role-based mechanisms, and ensures the right information gets to all interested parties. 
            </h4>
        </GridItem>
        </GridContainer>

        </div>



        <div className={classes.paddingTop60}></div>



    </div>
        <div style={{width:"100%", 
            textAlign:"center", backgroundColor: primaryColor[0], 
            color:"#fff", padding:"55px"}}>
            <MailChimp />
            </div>
        </div>
  );
}


Core.layout = Layout;

export default Core;
