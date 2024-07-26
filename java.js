document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    console.log("Script loaded"); // Debug log

    if (darkModeToggle) {
        console.log("Button found"); // Debug log

        darkModeToggle.addEventListener('click', () => {
            console.log("Button clicked"); // Debug log
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.textContent = 'Light Mode';
            } else {
                darkModeToggle.textContent = 'Dark Mode';
            }
        });
    } else {
        console.log("Button not found"); // Debug log
    }
});
