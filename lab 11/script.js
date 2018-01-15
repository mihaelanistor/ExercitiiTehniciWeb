var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;

// Move the image on screen with 10px
function dogWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  // reset image position to start
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

// Call dogWalk function every 50 ms
function startDogWalk() {
  dogTimer = window.setInterval(dogWalk, delayMs);
}
function startDogRun() {
  dogTimer = window.setInterval(dogWalk, delayMs/20);
  document.getElementById('start-button').disabled = true;
}
function stopDog() {
    dogTimer = window.setInterval(dogWalk, delayMs/2);
    document.getElementById('start-button').disabled = false;
  }

document.getElementById("start-button").addEventListener("click", startDogWalk());
document.getElementById("speed-button").addEventListener("click", startDogRun()); 
document.getElementById("stop-button").addEventListener("click", startDogWalk());  