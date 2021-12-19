import React, { useRef, useLayoutEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard-pro/components/portalControlStyle.js";

const PortalControls = props => {

const useStyles = makeStyles(styles);
const classes = useStyles();

// using refs allows us to place each control exactly where we want on the screen.

    const controlGenRef = useRef(null);
    const themeMixRef = useRef(null);
    const themeRowRef = useRef(null);
    const themeColRef = useRef(null);
    const themeNextRef = useRef(null);
    const themePrevRef = useRef(null);
    const themeTitleNameRef = useRef(null);
    const themeSubTitleNameRef = useRef(null);

    const refC = {gen:controlGenRef,
                    mix:themeMixRef,
                    row:themeRowRef,
                    col:themeColRef,
                    next:themeNextRef,
                    prev:themePrevRef,
                    titlename:themeTitleNameRef,
                    subtitle:themeSubTitleNameRef};


useLayoutEffect(() => {
    
    let spacer = 50;
    let portalFromTop = props.PortalLoc.PortalFromTop;
    let portalHeight = props.PortalLoc.PortalHeight;
    let portalWidth = props.PortalLoc.PortalWidth;
    let fromLeft = props.PortalLoc.FromLeft;
    let mainH = props.PortalLoc.MainH;
    let mainPos = props.PortalLoc.MainPos;

    // row: Title, Prev, Mix, Col, Row, Next

    refC.prev.current.style.position = "absolute";
    refC.prev.current.style.top = (portalFromTop + portalHeight + spacer) + "px";
    refC.prev.current.style.left = (fromLeft-spacer) + "px";
    refC.prev.current.style.width = "80px";
    refC.prev.current.style.textAlign = "center";
    refC.prev.current.style.marginTop = ((mainH - ((portalFromTop-mainPos.top) + portalHeight)) / 2)-25 + "px";
    
    refC.mix.current.style.position = "absolute";
    refC.mix.current.style.top = (portalFromTop + portalHeight + spacer) + "px";
    refC.mix.current.style.left = (fromLeft-spacer) + (spacer) + "px";
    refC.mix.current.style.width = "80px";
    refC.mix.current.style.textAlign = "center";
    refC.mix.current.style.marginTop = ((mainH - ((portalFromTop-mainPos.top) + portalHeight)) / 2)-25 + "px";
  
    refC.col.current.style.position = "absolute";
    refC.col.current.style.top = (portalFromTop + portalHeight + spacer) + "px";
    refC.col.current.style.left = ((fromLeft-spacer) + (spacer*2)) + "px";
    refC.col.current.style.width = "80px";
    refC.col.current.style.textAlign = "center";
    refC.col.current.style.marginTop = ((mainH - ((portalFromTop-mainPos.top) + portalHeight)) / 2)-25 + "px";
  
    refC.row.current.style.position = "absolute";
    refC.row.current.style.top = (portalFromTop + portalHeight + spacer) + "px";
    refC.row.current.style.left = ((fromLeft-spacer) + (spacer*3)) + "px";
    refC.row.current.style.width = "80px";
    refC.row.current.style.textAlign = "center";
    refC.row.current.style.marginTop = ((mainH - ((portalFromTop-mainPos.top) + portalHeight)) / 2)-25 + "px";
  
    refC.next.current.style.position = "absolute";
    refC.next.current.style.top = (portalFromTop + portalHeight + spacer) + "px";
    refC.next.current.style.left = ((fromLeft-spacer) + (spacer*4)) + "px";
    refC.next.current.style.width = "80px";
    refC.next.current.style.textAlign = "center";
    refC.next.current.style.marginTop = ((mainH - ((portalFromTop-mainPos.top) + portalHeight)) / 2)-25 + "px";
    
    // end row

    refC.titlename.current.style.position = "absolute";
    refC.titlename.current.style.top = ((portalFromTop + portalHeight) - 30) + "px";
    refC.titlename.current.style.left = (fromLeft-50) + "px";
    refC.titlename.current.style.width = (portalWidth+100) + "px";
    refC.titlename.current.style.textAlign = "center";
    refC.titlename.current.style.marginTop = ((mainH - ((portalFromTop-mainPos.top) + portalHeight)) / 2)-25 + "px";
    
    refC.subtitle.current.style.position = "absolute";
    refC.subtitle.current.style.top = (portalFromTop + portalHeight) + 82 + "px";
    refC.subtitle.current.style.left = (fromLeft-20) + "px";
    refC.subtitle.current.style.width = (portalWidth+40) + "px";
    refC.subtitle.current.style.textAlign = "center";
    refC.subtitle.current.style.marginTop = ((mainH - ((portalFromTop-mainPos.top) + portalHeight)) / 2)-25 + "px";
    
    refC.gen.current.style.position = "absolute";
    refC.gen.current.style.top = (portalFromTop + portalHeight) + "px";
    refC.gen.current.style.left = (fromLeft) + "px";
    refC.gen.current.style.width = portalWidth + "px";
    refC.gen.current.style.textAlign = "center";
    refC.gen.current.style.marginTop = ((mainH - ((portalFromTop-mainPos.top) + portalHeight)) / 2)-25 + "px";

});

    return (
            <div style={{zIndex:"222"}}>
                <div ref={controlGenRef}><a className={classes.buttonCtrl} onClick={props.HandlePortalClick()}>generation {props.GeneratedCnt}</a></div>
                <div ref={themeMixRef}><a className={props.ThemeUsed == "themeMix" ? classes.buttonCtrlThemeActive : classes.buttonCtrlTheme} onClick={props.HandleThemeClick("themeMix")}>Mix</a></div>
                <div ref={themeColRef}><a className={props.ThemeUsed == "themeCol" ? classes.buttonCtrlThemeActive : classes.buttonCtrlTheme} onClick={props.HandleThemeClick("themeCol")}>Col</a></div>
                <div ref={themeRowRef}><a className={props.ThemeUsed == "themeRow" ? classes.buttonCtrlThemeActive : classes.buttonCtrlTheme} onClick={props.HandleThemeClick("themeRow")}>Row</a></div>
                <div ref={themeNextRef}><a className={classes.buttonCtrlTheme} onClick={props.NextThemeOnClick()}>{'>>'}</a></div>
                <div ref={themePrevRef}><a className={classes.buttonCtrlTheme} onClick={props.PrevThemeOnClick()}>{'<<'}</a></div>
                <div ref={themeTitleNameRef}><span className={classes.buttonCtrlThemeTitle}>Portal {props.MainPortal.id}: {props.MainPortal.name}</span></div>
                <div ref={themeSubTitleNameRef}><span className={classes.buttonCtrlThemeTitle}>0.035 ETH</span></div>
            </div>
        )
}

export default PortalControls