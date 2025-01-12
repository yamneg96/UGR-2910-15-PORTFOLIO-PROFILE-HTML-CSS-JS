const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".nav-menu-hidden");

dropdownBtn.addEventListener("click", () => {
  // Check if the window width is 1250px or below
  if (window.innerWidth <= 1250) {
    if (
      dropdownContent.style.display === "none" ||
      dropdownContent.style.display === ""
    ) {
      dropdownContent.style.display = "block"; // Show dropdown
    } else {
      dropdownContent.style.display = "none"; // Hide dropdown
    }
  }
});
