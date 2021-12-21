import {
    container,
    defaultFont,
    secondaryColor,
    cardTitle,
    roseColor,
    whiteColor,
    blackColor,
    grayColor,
    hexToRgb,
    primaryColor,
  } from "assets/jss/nextjs-material-dashboard-pro.js";
  
  const corePageStyle = (theme) => ({
    body: {
        width:"100vw",
        minHeight: "100vh",
    },
    hero: {
        display: "flex!important",
        zIndex: "4",
        minHeight: "50vh",
    },
    heroSubTitle: {
      color: secondaryColor[1],
      fontSize: "2em",
      [theme.breakpoints.down("sm")]: {
        color: secondaryColor[1],
        fontSize: "1.5em",
        marginBottom: "25px",
      },
    },
    heroTitle: {
      fontSize: "5em",
      fontWeight: "600",
      paddingTop: "45px",
      color: secondaryColor[1],
      [theme.breakpoints.down("sm")]: {
          paddingTop: "45px",
          fontSize: "2.75em",
          color: secondaryColor[1],
      },
    },
    spacerHero: {
        height: "40px",
        minHeight: "40px",
    },
    heroDescription: {
      fontSize: "18px",
      color: whiteColor,
      lineHeight: "1.4em",
    },
    parallax: {
      width: "100%",
      overflow: "hidden",
      backgroundPosition: "center bottom",
      [theme.breakpoints.down("sm")]: {
        backgroundPosition: "90%",
      },
    },
    
    container: {
      ...container,
      zIndex: "4",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "100px",
      },
    },
    
    sectionLight: {
      padding: "100px",
      paddingLeft: "10em",
      paddingRight: "10em",
      backgroundColor: "#EAEEF4",
      zIndex: "4",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "25px",
        paddingRight: "25px",
      },
    },

    sectionDrk: {
      padding: "100px",
      paddingLeft: "10em",
      paddingRight: "10em",
      backgroundColor: secondaryColor[0],
      color: whiteColor,
      zIndex: "4",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "25px",
        paddingRight: "25px",
      },
    },

    sectionDrkGray: {
      padding: "100px",
      paddingLeft: "10em",
      paddingRight: "10em",
      backgroundColor: grayColor[16],
      color: whiteColor,
      zIndex: "4",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "25px",
        paddingRight: "25px",
      },
    },

    bodyContent: {
        width: "100%",
        padding: "0px",
        margin: "0px",
        zIndex: "8",
        color: blackColor,
        backgroundColor: whiteColor,
    },
    morselIcon: {
        padding:"0",
        paddingRight:"10px",
        margin:"0px",
        width: "50px",
        float: "left",
        display: "block",
        textAlign: "right",
    },
    morselLogo: {
        padding:"0px",
        margin:"0px",
        width: "70%",
        float: "left",
        display: "block",
    },
    morselTitle: {
        marginTop: "0px",
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: "800",
        color: blackColor,
        textAlign: "left",
        fontSize: "2.2em",
        
    },
    creatorTitle: {
      ...defaultFont,
      color: whiteColor,
      marginTop: "3vh",
      marginBottom: "10px",
      fontWeight: 400,
    },
    title: {
      ...defaultFont,
      color: whiteColor,
      marginTop: "5vh",
      marginBottom: "30px",
      textAlign: "center",
    },
    titlesub: {
      ...defaultFont,
      color: whiteColor,
      marginTop: "1vh",
      marginBottom: "20px",
      textAlign: "center",
    },
    description: {
      fontSize: "18px",
      color: blackColor,
      lineHeight: "1.4em",
    },
    descriptionLight: {
      fontSize: "18px",
      color: whiteColor,
      lineHeight: "1.4em",
    },
    subText: {
      fontSize: "14px",
      color: blackColor,
      lineHeight: "1.1em",
    },
    subTextLight: {
      fontSize: "14px",
      color: whiteColor,
      lineHeight: "1.1em",
    },
    cardTitleWhite: {
      ...cardTitle,
      color: whiteColor + " !important",
    },
    cardCategory: {
      color: grayColor[0],
      marginTop: "10px",
    },
    cardCategoryWhite: {
      color: whiteColor,
      marginTop: "10px",
    },
    iconGrid: {
        color: "#4faa72",
        margin: "10px auto 0",
        width: "60px",
        height: "60px",
        fontSize: "40px",
        "& svg": {
          width: "60px",
          height: "40px",
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          width: "60px",
          fontSize: "40px",
        },
        "@media (max-width: 800px)": {
            margin: "10px auto 10px",
            width: "50px",
            height: "50px",
        },
      },
    icon: {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
      margin: "10px auto 0",
      width: "130px",
      height: "130px",
      border: "1px solid " + grayColor[11],
      borderRadius: "50%",
      lineHeight: "174px",
      "& svg": {
        width: "55px",
        height: "55px",
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        width: "55px",
        fontSize: "55px",
      },
    },
    iconWhite: {
      color: whiteColor,
    },
    iconPrimary: {
      color: primaryColor[0],
    },
    iconCurrent: {
      color: "#4faa72",
    },
    iconRose: {
      color: roseColor[0],
    },
    marginTop30: {
      marginTop: "30px",
    },
    marginTop60: {
      marginTop: "60px",
    },
    paddingTop60: {
      paddingTop: "60px",
    },
    paddingTop30: {
      paddingTop: "30px",
    },
    paddingTop15: {
      paddingTop: "15px",
    },
    spacer: {
        height: "100px",
        minHeight: "100px",
    },
    btnTransparent: {
        backgroundColor: "Transparent",
    },
    link: {
        color: whiteColor,
        "&:hover,&:visited": {
            color: whiteColor,
          }
    },
    aiBox: {
      backgroundColor: "#111",
      border: "1px solid #666",
      borderRadius: "4px 0 4px 0",
      color: "#ccc",
      fontSize: "12px",
      fontWeight: "normal",
      margin:"auto",
      marginTop: "-10px",
      left: "-21px",
      padding: "5px 10px",
      width:"90%",
      height: "100px",
      lineHeight: "1.2em",
      position: "relative",
      zIndex: "8",
    },
    codePen: {
        backgroundColor: "#ececec",
        border: "1px solid #ccc",
        borderRadius: "4px 0 4px 0",
        color: "#3B3C3E",
        fontSize: "12px",
        fontWeight: "normal",
        left: "-1px",
        padding: "5px 10px",
        height: "320px",
        lineHeight: "1.2em",
        overflow: "scroll",
        overflowX: "scroll",
        '&::-webkit-scrollbar': {
          width: "10px",
          height: "10px",
          background: "#ccc",
      },
      '&::-webkit-scrollbar-thumb': {
        background: "#aaa",
    }
        
    },
    codePenSmall: {
        backgroundColor: "#ececec",
        border: "1px solid #ccc",
        borderRadius: "4px 0 4px 0",
        color: "#3B3C3E",
        fontSize: "12px",
        fontWeight: "normal",
        left: "-1px",
        padding: "5px 10px",
        height: "80px",
        lineHeight: "1.2em",
        overflow: "scroll",
        overflowX: "scroll",
        '&::-webkit-scrollbar': {
          width: "10px",
          height: "10px",
          background: "#ccc",
      },
      '&::-webkit-scrollbar-thumb': {
        background: "#aaa",
    }
        
    },
    codeDesc: {
      fontSize: "11px",
      lineHeight: ".9em",
    },

    bodyContentDrk: {
        width: "100%",
        padding: "0px",
        margin: "0px",
        zIndex: "8",
        color: whiteColor,
        backgroundColor: blackColor,
    },

    
  });
  
  export default corePageStyle;
  