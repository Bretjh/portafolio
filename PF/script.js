document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;

  modeToggle.addEventListener('change', function () {
    body.classList.toggle('dark-mode');
  });
});
