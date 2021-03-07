"use strict";

function invertColor(rgb) {
    let inv_rgb = [];
    let actualMid = 0;

    for (let i = 0; i < rgb.length; i++) {
      
      if((+rgb[i] >= 116) && (+rgb[i] <= 140)){
        actualMid++;
      }
      inv_rgb.push(255-rgb[i]);
    }
    if(actualMid === rgb.length){
        return [0,0,0];
    }
    return inv_rgb;
}