document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');
  const themeToggle = document.getElementById('theme-toggle');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (toggleButton && menu) {
    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!expanded));
      menu.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Theme toggle functionality
  if (themeToggle) {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update button icon based on current theme
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
});

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('.theme-toggle-icon');
  
  if (theme === 'dark') {
    icon.textContent = '☀️';
  } else {
    icon.textContent = '🌙';
  }
}

