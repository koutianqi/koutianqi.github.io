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
      if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
        toggleButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      }
    });

    // Close menu when clicking on menu items
    const menuItems = menu.querySelectorAll('a');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        toggleButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      });
    });
  }
});

