document.addEventListener('DOMContentLoaded', function() {
    
    // Fetch and inject the navbar
    fetch('/_partials/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // NOW that the navbar is loaded, we can find the button and add the event listener
            const themeToggleButton = document.getElementById('theme-toggle-button');
            const themeIcon = document.getElementById('theme-icon');

            // Function to apply the saved theme on page load
            const applySavedTheme = () => {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                    document.body.classList.add('dark-theme');
                    themeIcon.src = '/assets/images/navbar-images/light-theme-icon.jpg'; // Show light icon in dark mode
                } else {
                    document.body.classList.remove('dark-theme');
                    themeIcon.src = '/assets/images/navbar-images/dark-theme-icon.jpg'; // Show dark icon in light mode
                }
            };
            
            // Toggle theme when the button is clicked
            themeToggleButton.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                
                // Check which theme is active and update the icon and localStorage
                if (document.body.classList.contains('dark-theme')) {
                    themeIcon.src = '/assets/images/navbar-images/light-theme-icon.jpg';
                    localStorage.setItem('theme', 'dark');
                } else {
                    themeIcon.src = '/assets/images/navbar-images/dark-theme-icon.jpg';
                    localStorage.setItem('theme', 'light');
                }
            });

            // Apply the theme when the page first loads
            applySavedTheme();
        });
});
