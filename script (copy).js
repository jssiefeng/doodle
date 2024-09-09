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
  speed = Math.sqrt(e.movementX * e.movementX + e.movementY * e.movementY)
}, false);

window.setInterval(() => {
  const rate = 1 + (1 - 1 / (1 + speed * 0.1)) * 2;
  vid.playbackRate = rate;

  if (speed < 2) {
    vid.playbackRate = 0;
    document.getElementById("kscope").style.display = "none";
  } else {
    document.getElementById("kscope").style.display = "block";
  }
}, 100);

 console.log(speed);
console.log(rate);
///////////////

//cat mouse move
// https://www.youtube.com/watch?v=TGe3pS5LqEw
document.addEventListener('mousemove', (e) => {

  console.log(e)

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  console.log('Mouse X:', e.clientX);
  console.log('Mouse Y:', e.clientY);

  const anchor = document.getElementById('anchor');
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  console.log(angleDeg);

  const eyes = document.querySelectorAll('.eye')
  eyes.forEach(eye => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
  })
})



function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx); // range
  const deg = rad * 180 / Math.PI; // rads to degs
  return deg;
}



// switch image
let cat = 'happy.png';
let eyes = document.querySelectorAll('.eye');