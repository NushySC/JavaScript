//from Javascript for Kids by No Starch Press
// Get a random number from 0 to size
var getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
  };
  // Calculate distance between click event and target
  var getDistance = function(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  };

  
let getDistanceHint = (distance) => {
    if (distance < 40) {
        return "Boiling hot!"
    } else if (distance <60){
        return "Pretty close"
    }else if (distance <90){
        return "Hot"
    }else if (distance <100){
        return "Warm"
    }else if (distance <200){
        return "Cold"
    }else if (distance <320){
        return "Very cold"
    }
}

var width = 400;
var height = 400;
var clicks = 0;
// Create a random target location
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};
// Add a click handler to the img element
$(".map").click(function(event) {
  clicks++;
  // Get distance between click event and target
  var distance = getDistance(event, target);
  // Convert distance to a hint
  var distanceHint = getDistanceHint(distance);
  // Update the #distance element with the new hint
  $(".distance").text(distanceHint);
  // If the click was close enough, tell them they won
  if (distance < 8) {
    alert("Found the treasure in " + clicks + " clicks!");
  }
});

