// var sliderbar = document.getElementById("sliderbar");
// var output = document.getElementById("progress");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

document.addEventListener('DOMContentLoaded', () => {
    let controls = document.querySelector('.color-controls');
  
    let slider = new Slider(20, 'deeppink');
    slider.mount(controls);
  
    let slider2 = new Slider(220, 'gold');
    slider2.mount(controls);
  
    let slider3 = new Slider(120, 'yellowgreen');
    slider3.mount(controls);
  }); 