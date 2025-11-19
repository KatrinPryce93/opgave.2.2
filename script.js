

// Modal åbning/lukning
function openModal(id) {
  // Åbner modal med givet id
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal(id) {
  // Lukker modal med givet id
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}

//  Skift tema
function toggleTheme() {
  // Skifter mellem lys og mørk baggrund
  document.body.classList.toggle('dark-theme');
}

// Flere funktioner kan tilføjes her efter behov
