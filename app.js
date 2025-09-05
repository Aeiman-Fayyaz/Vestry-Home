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
