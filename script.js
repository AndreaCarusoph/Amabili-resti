function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("open");
}

function showSection(id) {
  const sezioni = document.querySelectorAll('.sezione');
  sezioni.forEach(sec => {
    sec.classList.add('nascosta');
    sec.classList.remove('attiva');
  });

  const sezioneAttiva = document.getElementById(id);
  if (sezioneAttiva) {
    sezioneAttiva.classList.remove('nascosta');
    sezioneAttiva.classList.add('attiva');
  }

  document.getElementById("sideMenu").classList.remove("open");
}

function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  showSection("home");

  const form = document.getElementById("contactForm");
  const grazieMessaggio = document.getElementById("grazieMessaggio");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      fetch("https://formspree.io/f/xnnzvwyo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: form.nome.value,
          email: form.email.value,
          messaggio: form.messaggio.value
        })
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          grazieMessaggio.classList.add("show");

          setTimeout(() => {
            grazieMessaggio.classList.remove("show");
          }, 5000);
        } else {
          alert("Errore nell'invio del messaggio. Riprova.");
        }
      })
      .catch(error => {
        alert("Errore di connessione. Contattaci direttamente via email.");
      });
    });
  }

  // Mostra o nasconde il pulsante "torna su"
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

}); 