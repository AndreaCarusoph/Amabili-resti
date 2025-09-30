
// Toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Navigazione fra sezioni
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');
    const section = document.getElementById(targetId);
    if (section) {
      // scroll fluido
      section.scrollIntoView({ behavior: 'smooth' });
      // attiva sezione (rimuovi da tutte, aggiungi a quella)
      document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
      });
      section.classList.add('active');
      // chiude menu mobile se aperto
      nav.classList.remove('open');
    }
  });
});

// All’avvio, rendi attiva la home
window.addEventListener('DOMContentLoaded', () => {
  const home = document.getElementById('home');
  home.classList.add('active');
});
