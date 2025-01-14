document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add 'active' class to the clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      items.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// ----------

const video = document.getElementById("hero-video");
const unmuteButton = document.getElementById("unmute-button");

unmuteButton.addEventListener("click", () => {
  video.muted = false; // Unmute the video
});
