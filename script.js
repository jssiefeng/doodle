// vars
let cat = document.getElementById("anchor");
// let eyeType = document.querySelector('.eye');
let left = document.getElementById("left");
let right = document.getElementById("right");

// checks
document.onload = function() {
  console.log("html loaded");
}

window.onload = function() {
  console.log("all resources loaded");
}

// speed formula
const vid = document.getElementById("kscope");
let speed;

document.addEventListener("mousemove", function(e) {
  // speed calculation
  speed = Math.sqrt(e.movementX * e.movementX + e.movementY * e.movementY);

  // playback rate adjustment formula
  const rate = 0.5 + (1 - 1 / (1 + speed * 0.1)) * 2;
  vid.playbackRate = rate;

  // change bg based on speed
  // if speed is less than 2 (my set value based on speed console results)
  // do not display kaleido and display happy
  if (speed < 2) {
    vid.playbackRate = 0;
    document.getElementById("kscope").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    cat.src = 'happy.png';

    left.src = 'eyeh.png';
    right.src = 'eyeh.png';

    // otherwise display kaleido and not happy
  } else {
    document.getElementById("kscope").style.display = "block";

    cat.src = 'kaleido.png';
    left.src = 'eyek2.png';
    right.src = 'eyek2.png';
    // START of code from https://www.youtube.com/watch?v=TGe3pS5LqEw
    // "How to make Eyeballs that Follow You Around" Beyond Fireship
    console.log(e);

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    console.log('Mouse X:', e.clientX);
    console.log('Mouse Y:', e.clientY);

    const anchor = document.getElementById('anchor');
    document.getElementById("overlay").style.display = "block";
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg);

    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      // anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    })
    // END of code from https://www.youtube.com/watch?v=TGe3pS5LqEw
  }

  // update in console
  console.log(speed);
  console.log(rate);
}, 100);

// black magic
// https://www.youtube.com/watch?v=TGe3pS5LqEw
function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx); // range
  const deg = rad * 180 / Math.PI; // rads to degs
  return deg;
}

// // switch image
// let cat = 'happy.png';
// let eyes = document.querySelectorAll('.eye');