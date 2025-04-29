// script.js

// Gérer le changement de section
const menuItems = document.querySelectorAll('.sidebar ul li');
const sections = document.querySelectorAll('.section');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const target = item.getAttribute('data-section');
    sections.forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === target) sec.classList.add('active');
    });
  });
});
const  = {
  entree: [
    { nom: "Salade d’avocat", prix: 3.50 },
    { nom: "Beignets salé", prix: 4.00 },
    { nom: "Pastel Thon", prix: 4.00 },
    { nom: "Pastel Boeuf", prix: 4.00}
  ],

// Dark Mode
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Charger le thème au démarrage
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Initialiser le graphique
  const ctx = document.getElementById('consumptionChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
      datasets: [{
        label: 'Boissons consommées',
        data: [3, 2, 5, 4, 1],
        backgroundColor: '#4f46e5'
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Mettre à jour les statistiques employés
  updateEmployeeStats();
});

// Gestion de rappel 23h45
function checkReminder() {
  const now = new Date();
  if (now.getHours() === 23 && now.getMinutes() === 45) {
    alert('Pensez à faire la mise à jour du stock !');
  }
}
setInterval(checkReminder, 30000);

// Statistiques employés
const employees = [
  { name: 'Sekou', drinks: 0},
  { name: 'Hana ', drinks: 0},
  { name: 'Dave ', drinks: 0},
];

function updateEmployeeStats() {
  const totalDrinks = employees.reduce((sum, emp) => sum + emp.drinks, 0);
  const average = (totalDrinks / employees.length).toFixed(1);
  document.getElementById('average-drinks').textContent = average;
}
