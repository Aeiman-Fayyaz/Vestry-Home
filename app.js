const sidebar = document.getElementById("sidebar");
const openSidebarButton = document.getElementById("open-sidebar");
const navbarTitle = document.getElementById("navbar-title");

openSidebarButton.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("-translate-x-full");
  navbarTitle.classList.toggle("pl-56"); // add padding-left when sidebar opens
});

// Close the sidebar when clicking outside of it
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
    sidebar.classList.add("-translate-x-full");
    navbarTitle.classList.remove("pl-56");
  }
});

// Function to toggle dropdown visibility
function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  // Toggle the 'hidden' class
  dropdownMenu.classList.toggle("hidden");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownButton = document.getElementById("dropdownButton");
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden");
  }
};

// SLiding Testimonials
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "brand-light": "#b8946e",
        "brand-dark": "#785437",
      },
      animation: {
        // We name our animation 'scroll'. The duration can be adjusted.
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        // We define the keyframes for our 'scroll' animation.
        scroll: {
          "0%": { transform: "translateX(0)" },
          // The calculation moves the content by the width of the original set of testimonials.
          // -18rem is the card width (w-72) and 2rem is the margin (mx-4), so 20rem total per card.
          // We have 7 original cards, so we translate by -140rem (7 * 20rem).
          "100%": { transform: "translateX(calc(-20rem * 7))" },
        },
      },
    },
  },
};
