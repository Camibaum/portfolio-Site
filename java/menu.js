document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const dropdownMenu = toggle.nextElementSibling;

      // Close other dropdowns
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) menu.style.display = "none";
      });

      // Toggle current dropdown
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });
    }
  });
});
