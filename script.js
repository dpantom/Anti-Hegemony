// JavaScript to toggle between Light and Dark Mode
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Function to toggle theme and save preference
themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
        themeToggleButton.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggleButton.setAttribute('aria-label', 'Switch to Light Mode');
    }
});
