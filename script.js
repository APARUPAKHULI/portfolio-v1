// Get the toggle button and body element
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    toggleButton.checked = true; // Make sure the toggle is checked for dark mode
} else {
    body.classList.remove("dark-theme");
    toggleButton.checked = false; // Ensure the toggle is unchecked for light mode
}

// Toggle theme when button is clicked
toggleButton.addEventListener("change", () => {
    if (toggleButton.checked) {
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark"); // Save dark theme preference
    } else {
        body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light"); // Save light theme preference
    }
});

