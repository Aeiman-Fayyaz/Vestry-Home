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
