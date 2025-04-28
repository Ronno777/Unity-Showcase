// on load, apply saved theme or default to light
const html = document.documentElement;
const btn  = document.getElementById('theme-toggle');

function setTheme(theme) {
  html.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);
  btn.addEventListener('click', () =>
    setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark')
  );
});