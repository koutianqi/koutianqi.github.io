document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (toggleButton && menu) {
    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!expanded));
      
      // Toggle the show class for the menu
      if (expanded) {
        menu.classList.remove('show');
      } else {
        menu.classList.add('show');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      // Only close if the click is truly outside the menu and button
      if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
        toggleButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      }
    });
  }

  // On small screens, send users directly to the PDF when tapping CV
  const cvLink = document.getElementById('nav-cv-link');
  // Treat tablets as direct-to-PDF too: either touch devices or <=1200px wide
  const isMobileOrTablet = () => (
    window.matchMedia('(max-width: 1200px)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  );
  if (cvLink) {
    cvLink.addEventListener('click', (e) => {
      if (isMobileOrTablet()) {
        const pdfUrl = cvLink.getAttribute('data-pdf');
        if (pdfUrl) {
          e.preventDefault();
          // Use location.href so it behaves like a normal navigation
          window.location.href = pdfUrl;
        }
      }
    });
  }

  // Hide the job-market box if it has no visible text content
  const jobMarketBox = document.querySelector('.job-market-box');
  if (jobMarketBox && jobMarketBox.textContent.trim() === '') {
    jobMarketBox.style.display = 'none';
  }
});

