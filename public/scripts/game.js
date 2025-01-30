// public/scripts/game.js

const hacker = document.getElementById("hacker");
const obstacle = document.getElementById("obstacle");

let isJumping = false;

// Jump function
function jump() {
    if (!isJumping) {
        isJumping = true;
        hacker.classList.add("jump");

        setTimeout(() => {
            hacker.classList.remove("jump");
            isJumping = false;
        }, 500); // Match the duration of the jump animation
    }
}

// Check for collision
function checkCollision() {
    const hackerBottom = parseInt(window.getComputedStyle(hacker).getPropertyValue("bottom"));
    const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

    if (obstacleRight > 50 && obstacleRight < 90 && hackerBottom <= 40) {
        alert("Game Over! Press OK to restart.");
        obstacle.style.animation = "none";
        obstacle.offsetHeight; // Trigger reflow
        obstacle.style.animation = null;
    }
}

// Event listener for spacebar
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});

// Game loop
//setInterval(checkCollision, 10);