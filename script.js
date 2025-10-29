<script>
    // Basic SPA navigation
    function navigate(pageId) {
      // Hide all pages
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      
      // Show the selected page
      document.getElementById(pageId).classList.add('active');
      
      // Update the URL hash
      window.location.hash = pageId;
    }

    // Load the correct page on refresh or direct link
    window.addEventListener('load', () => {
      const hash = window.location.hash.substring(1) || 'home';
      navigate(hash);
    });
  </script>

