"use strict";

const body = document.querySelector("body");
const colorN = document.getElementById('color');
const textCentral = document.getElementsByTagName('h1');
const textSec = document.getElementsByTagName('h2');
const seleccion = document.getElementById('salidaColor');
const divRGB = document.getElementsByClassName('color-RGB');

colorN.addEventListener( "input", () => {
    const value = colorN.value;

    seleccion.innerHTML = value;
    body.style.backgroundColor = value;
    
    const stringRGB = hexToRGB(value);

    divRGB[0].innerHTML = stringRGB;
    divRGB[0].style.backgroundColor = value;

    const arrayRGB = stringRGB.slice(4, stringRGB.length-1).split(',');

    //console.log(arrayRGB);

    const invertCol = invertColor(arrayRGB);
    let stringInvertCol = 'rgb('+invertCol.join(',')+')';

    //console.log(invertCol);

    textCentral[0].style.color = stringInvertCol;
    textSec[0].style.color = stringInvertCol;
    divRGB[0].style.color = stringInvertCol;

});