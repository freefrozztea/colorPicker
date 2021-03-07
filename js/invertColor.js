"use strict";

function invertColor(rgb) {
    var inv_rgb = [];
    for (var i = 0; i < rgb.length; i++) {
      inv_rgb.push(255-rgb[i]);
    }
    return inv_rgb;
}