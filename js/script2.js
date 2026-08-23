/**
 * ITL303: Web Animation Techniques - Module 4
 * Control Script for Keyframe Animations (script2.js)
 */

/**
 * Toggles the pause/resume state for the bouncing ball and shadow animation.
 */
function toggleBounce() {
  const ball = document.getElementById('bouncingBall');
  const shadow = document.getElementById('ballShadow');

  if (ball && shadow) {
    ball.classList.toggle('paused');
    shadow.classList.toggle('paused');
  }
}

/**
 * Toggles the pause/resume state for the flying airplane animation.
 */
function toggleAirplane() {
  const airplane = document.getElementById('airplane');

  if (airplane) {
    airplane.classList.toggle('paused');
  }
}