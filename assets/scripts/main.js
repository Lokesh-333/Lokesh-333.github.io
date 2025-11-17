// main.js

/**
 * 1. Define Routes
 * Maps the URL hash (#/) to the corresponding HTML file in the /pages/ folder.
 */
const routes = {
    "#/": "pages/home.html",
    "#/projects": "pages/projects.html",
    "#/links": "pages/links.html",

    // --- Add your project routes here ---
    "#/squid-game": "pages/squid-game.html",
    // "#/project-2": "pages/project-2.html",

    // ------------------------------------
    
    404: "pages/404.html" // Fallback page for any unknown hash
};

/**
 * 2. The Main Router/Render Function
 * Fetches the HTML for the current URL hash and injects it into the <main id="app">.
 */
const handleLocation = async () => {
    // Get the current hash, or default to '#/' if it's empty
    let path = window.location.hash || "#/";
    
    // Get the file path from our routes object, or use the 404 path
    const filePath = routes[path] || routes[404];

    try {
        // Fetch the HTML file
        const response = await fetch(filePath);
        if (!response.ok) {
             throw new Error('File not found, loading 404');
        }

        // Get the HTML content as plain text
        const html = await response.text();
        
        // Inject the HTML directly into the <main> element.
        document.getElementById('app').innerHTML = html;

    } catch (error) {
        console.error("Failed to fetch page:", error);
        
        // A final fallback if even 404.html fails
        try {
            const response = await fetch(routes[404]);
            const html = await response.text();
            document.getElementById('app').innerHTML = html;
        } catch (e) {
            document.getElementById('app').innerHTML = "<h1>Error 404</h1><p>Page not found.</p>";
        }
    }
};

/**
 * 3. Event Delegation for Link Clicks
 * Listens for all clicks on the page.
 */
window.addEventListener('click', (event) => {
    // Find the closest <a> tag to whatever was clicked
    const link = event.target.closest('a');

    // Check if it's an internal SPA link (starts with '#/')
    if (link && link.hash.startsWith('#/')) {
        // Stop the browser from its default behavior
        event.preventDefault();
        
        // Manually change the hash, which will trigger our 'hashchange' listener
        window.location.hash = link.hash;
    }
});

// --- Setup ---

/**
 * 4. Listen for Back/Forward Buttons
 * The 'hashchange' event fires when the hash changes.
 */
window.addEventListener('hashchange', handleLocation);

/**
 * 5. Initial Page Load
 * Load the content for the starting URL.
 */
handleLocation();
