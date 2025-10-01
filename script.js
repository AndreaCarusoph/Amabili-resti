// SCROLL SUAVIZZATO AI LINK DEL MENU
document.querySelectorAll('.topnav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ANIMAZIONE SCROLL SU TUTTE LE SEZIONI
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.sezione').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// MODALE PER IMMAGINI GALLERIA
document.querySelectorAll('.galleria img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal-img');
    modal.innerHTML = `
      <div class="modal-content-img">
        <span class="modal-close">&times;</span>
        <img src="${img.src}" alt="${img.alt}">
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.modal-close').onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  });
});

// BOTTONE TORNA SU
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scrollToTopBtn';
scrollBtn.innerHTML = '↑';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
