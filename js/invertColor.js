function invertColor(rgb) {
    var inv_rgb = [];
    for (var i = 0; i < rgb.length; i++) {
      inv_rgb.push(255-rgb[i]);
    }
    return inv_rgb;
  }
  // Uso de invertColor function
/*
  rgb = [141, 27, 84];
  inv_rgb = invertColor(rgb);
  document.getElementById('rgb').style.backgroundColor = 'rgb('+rgb.join(',')+')';
  document.getElementById('inv_rgb').style.backgroundColor = 'rgb('+inv_rgb.join(',')+')';
*/