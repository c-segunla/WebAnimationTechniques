// --- Section 2: Run the easing comparison ---
const runBtn = document.querySelector(".btn-run");
const linearBall = document.querySelector(".ball-linear");
const easeBall = document.querySelector(".ball-easeout");

runBtn.addEventListener("click", () => {
  // Reset first so it can be replayed
  linearBall.classList.remove("run");
  easeBall.classList.remove("run");

  // Force reflow so the animation can restart
  void linearBall.offsetWidth;
  void easeBall.offsetWidth;

  linearBall.classList.add("run");
  easeBall.classList.add("run");
});

// --- Section 4: JavaScript-driven animation (Web Animations API) ---
const jsBtn = document.querySelector(".btn-js");
const jsBox = document.querySelector(".box-js");

jsBtn.addEventListener("click", () => {
  jsBox.animate(
    [
      { transform: "translateX(0) rotate(0deg)", backgroundColor: "#4361ee" },
      { transform: "translateX(200px) rotate(180deg)", backgroundColor: "#ef233c" },
      { transform: "translateX(0) rotate(360deg)", backgroundColor: "#4361ee" },
    ],
    {
      duration: 1200,
      easing: "ease-in-out",
    }
  );
});
