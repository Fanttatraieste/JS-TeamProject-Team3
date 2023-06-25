function toggleMode() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const isNightMode = toggleSwitch.checked;
  const bodyElement = document.body;

  if (isNightMode) {
    bodyElement.classList.add('night');
  } else {
    bodyElement.classList.remove('night');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggleSwitch');
  toggleSwitch.checked = localStorage.getItem('nightMode') === 'true';
  toggleMode();

  toggleSwitch.addEventListener('change', function () {
    localStorage.setItem('nightMode', this.checked);
    toggleMode();
  });
});
