/*
  Name: Sadie Coleman
  Date: 2025-07-13
  Source: Based on Wes Bos JavaScript30 - Update CSS Variables with JS
  Notes: Rewritten using traditional JavaScript syntax for clarity
*/

function updateSpacing() {
  var spacing = document.getElementById('spacing').value + 'px';
  document.documentElement.style.setProperty('--spacing', spacing);
}

function updateBlur() {
  var blur = document.getElementById('blur').value + 'px';
  document.documentElement.style.setProperty('--blur', blur);
}

function updateBaseColor() {
  var baseColor = document.getElementById('base').value;
  document.documentElement.style.setProperty('--base', baseColor);
}

function handleUpdate() {
  updateSpacing();
  updateBlur();
  updateBaseColor();
}

// Run once to initialize
handleUpdate();

// Attach to input events
document.getElementById('spacing').addEventListener('input', handleUpdate);
document.getElementById('blur').addEventListener('input', handleUpdate);
document.getElementById('base').addEventListener('input', handleUpdate);
