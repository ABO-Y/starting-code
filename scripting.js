// Theme toggle functionality with persistence and accessibility
function setTheme(isDark) {
  document.body.classList.toggle('dark-theme', isDark);
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
}

// DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  setTheme(isDark);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      const currentlyDark = document.body.classList.contains('dark-theme');
      setTheme(!currentlyDark);
    });
    toggleBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }
});