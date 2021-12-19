import React, { useRef, useLayoutEffect } from 'react'

const Generate = props => {

    
function regeneratePortal(thm,nextColorTheme) {

    // add Uniqueness by making the background color the same as a set of dots, 
    // which will blend them in and cut off other dots making them look like moons.
    // add uniqueness by only having one of a certain palett and allowing others to be used in different configurations.
    // this will allow more portals with more automation and making some uniqueness
    console.log("currentTheme: " + currentTheme);
  
    let count = generatedCnt + 1;
    setGeneratedCnt(count);
  
    let palette = []; // array of colors
    let paletteId = 0; // ID of palette
  
    if (nextColorTheme !== undefined && (nextColorTheme >= 0 && nextColorTheme < colorThemeObjArray.length)) {
        palette = colorThemeObjArray[nextColorTheme].palette;
        paletteId = colorThemeObjArray[nextColorTheme].paletteId;
    } else{
        let current = currentTheme < 0 ? 0 : currentTheme;
        palette = colorThemeObjArray[current].palette;
        paletteId = colorThemeObjArray[current].paletteId;
    }
    //let getColors = colorObj.map(element => getColors.push({name: element.name, hex: "#"+element.hex}));
  
    let getColors = palette.map((arrayItem, arrayItemIndex, wholeArray) => {
      return {name: arrayItem.name, hex: "#"+arrayItem.hex, id: paletteId}
    });
  
        //return {name: element.name, hex: "#"+element.hex};
  
    
  
    let colorDarkest = "#fff"; // start very light and work your way to dark
    let colorLightest = "#000"; // start at the darkest and its way to bright
    let colorMostLuminant = "#000"; // start at the darkest and to up from there
    let themeName = "";
    let themePaletteId = "";
  
    // get darkest / lightest colors 
    getColors.forEach(function callbackFn(element) {  
  
        // is element color darker than colorDarkest?
        var luminance = tinycolor(element.hex).getLuminance();
        var compareLum = tinycolor(colorMostLuminant).getLuminance();
        var brightness = tinycolor(element.hex).getBrightness();
        var compareLight = tinycolor(colorLightest).getBrightness();
        var compareDark = tinycolor(colorDarkest).getBrightness();
  
        // set the more luminent color
        if (luminance > compareLum && luminance < 0.60) {
            colorMostLuminant = element.hex;
        }
  
        // set the brighter color
        if (brightness > compareLight) {
            colorLightest = element.hex;
        }
  
        if (brightness < compareDark) {
            colorDarkest = element.hex;
            themeName = element.name;
        }
  
        themePaletteId = element.id;
    });
  
    // console.log("=================");
    // console.log("colorDarkest: " + colorDarkest);
    // console.log("colorLightest: " + colorLightest);
    // console.log("colorMostLuminant: " + colorMostLuminant);
  
  
    let cnt = 0;
    getColors.forEach(function callbackFn(element) {  
        // determine which colors to use
  
        // console.log("colorDarkest: " + colorDarkest);
        // console.log("colorLightest: " + colorLightest);
  
        // prevent these from being the same as the background color.
        if (element.hex.toLowerCase().trim() == colorDarkest.toLowerCase().trim() 
            || element.hex.toLowerCase().trim() == colorLightest.toLowerCase().trim()) {
            console.log("same color");
        }else{
            cnt++;
  
            //console.log(cnt + ": " + element.hex.toLowerCase() + " : " + colorDarkest.toLowerCase());
  
            let internalThemeCheck = themeUsed;
  
            if (thm != undefined) {
                internalThemeCheck = thm // override for theme switcher
            }
  
            // themeCol, themeRow, themeMix
            // Set the location of the dots based on the different themes
            let themeCol = {r1c1: 1, r1c2: 2, r1c3: 3, 
              r2c1: 1, r2c2: 2, r2c3: 3,
              r3c1: 1, r3c2: 2, r3c3: 3};
  
            let themeRow = {r1c1: 1, r1c2: 1, r1c3: 1, 
              r2c1: 2, r2c2: 2, r2c3: 2,
              r3c1: 3, r3c2: 3, r3c3: 3};
  
            let themeMix = {r1c1: 3, r1c2: 2, r1c3: 1, 
              r2c1: 2, r2c2: 1, r2c3: 3,
              r3c1: 3, r3c2: 2, r3c3: 1};
              
            // themeCol, themeRow, themeMix
            let theme = themeMix;
            if (internalThemeCheck == "themeCol") {
                theme = themeCol;
            } else if (internalThemeCheck == "themeRow") {
                theme = themeRow;
            } else if (internalThemeCheck == "themeMix") {
                theme = themeMix;
            }
  
            generateTheme(theme, cnt, tinycolor(element.hex));
        }
            
    });
  
  
    setMainPortal({id: themePaletteId, name: themeName, mostLuminant:colorMostLuminant,darkest:colorDarkest,lightest:colorLightest,bg:colorDarkest, dots:dotColors});
  }
  
  return <div />

}

export default Generate