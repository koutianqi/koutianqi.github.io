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
});

