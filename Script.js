// Content for each page (could be fetched from an API in real apps)
const routes = {
    home: `
      <h2>Welcome to the Home Page</h2>
      <p>This is a simple single-page application example using plain JavaScript.</p>
    `,
    about: `
      <h2>About This App</h2>
      <p>This SPA was built with HTML, CSS, and JavaScript without any frameworks.</p>
    `,
    contact: `
      <h2>Contact Us</h2>
      <p>Email: contact@example.com</p>
    `
  };
  
  // Function to load content based on hash
  function loadPage() {
    const hash = window.location.hash.substring(1) || 'home';
    const content = routes[hash] || `<h2>404 - Page not found</h2>`;
    document.getElementById('content').innerHTML = content;
  }
  
  // Listen for URL hash changes
  window.addEventListener('hashchange', loadPage);
  
  // Load default page on startup
  window.addEventListener('load', loadPage);
  