import React, { useEffect } from "react";

////////////////////////////
// GENERATE RANDOM KEY
//
export function generateKey() {
  var ALPHABET =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ID_LENGTH = 8;
  var rtn = "";
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
}

////////////////////////////
// GET WINDOW DETAILS
//
export function getWindowDetails(valPrevOrientation) {
  let valOrientation =
    window.innerHeight / window.innerWidth > 1 ? "portrait" : "landscape";
  let valMode = "mobile";

  if (valOrientation === "portrait") {
    // check max width
    if (window.matchMedia("(max-width: 767px)").matches) {
      valMode = "mobile";
    } else if (window.matchMedia("(max-width: 1280px)").matches) {
      valMode = "tablet";
    } else {
      valMode = "pc";
    }
  } else {
    // check max height
    if (window.matchMedia("(max-height: 767px)").matches) {
      valMode = "mobile";
    } else if (window.matchMedia("(max-height: 1280px)").matches) {
      valMode = "tablet";
    } else {
      valMode = "pc";
    }
  }

  return {
    height: window.innerHeight,
    width: window.innerWidth,
    orientation: valOrientation,
    mode: valMode, // mobile, tablet, pc
    prevOrientation: valPrevOrientation,
  };
}

//////////////////////////////////
// ipad regular display; landscape
//
// pixel-ratio: 2
// min-width: 1000px
// orientation: landscape
// resolution: 192dpi
// pixel-ratio: 2/1

//////////////////////////////////
// ipad retina display
//
// pixel-ratio: 2
// min-width: 1300px
// orientation: landscape
// resolution: 192dpi
// pixel-ratio: 2/1

//////////////////////////////////
// ipad retina display
//
// pixel-ratio: 2
// min-width: 1000px
// orientation: portrait
// resolution: 192dpi
// pixel-ratio: 2/1

export const handleWindowResize = (setWinDetails, orientation) => {
  setWinDetails(getWindowDetails(orientation));
};

export function WindowResize(orientation, setWinDetails, handleWindowResize) {
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      handleWindowResize(setWinDetails, orientation);
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
}

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
