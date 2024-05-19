document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".header-menu-toggle");
  const headerCollapse = document.querySelector(".header-collapse");

  menuToggle.addEventListener("click", function () {
    if (headerCollapse.classList.contains("active")) {
      // Close menu
      headerCollapse.style.height = headerCollapse.scrollHeight + "px"; // Set to current height to enable transition
      requestAnimationFrame(() => {
        headerCollapse.style.height = "0";
      });
      headerCollapse.classList.remove("active");
      menuToggle.classList.remove("active");
    } else {
      menuToggle.classList.add("active");
      // Open menu
      const height = headerCollapse.scrollHeight; // Get the full height
      headerCollapse.style.height = "0"; // Reset to 0 before setting the actual height
      headerCollapse.classList.add("active");
      requestAnimationFrame(() => {
        headerCollapse.style.height = height + "px"; // Set to the actual height to enable transition
      });
    }
  });

  headerCollapse.addEventListener("transitionend", function () {
    if (!headerCollapse.classList.contains("active")) {
      headerCollapse.style.height = ""; // Reset height when transition ends
    } else {
      headerCollapse.style.height = "auto"; // Set height to auto for content to adjust
    }
  });
});
