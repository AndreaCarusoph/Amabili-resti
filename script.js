// Gestione navigazione tra sezioni
const navLinks = document.querySelectorAll("nav ul li a");
const sezioni = document.querySelectorAll(".sezione");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");

    sezioni.forEach(sezione => {
      if (sezione.id === targetId) {
        sezione.classList.add("attiva");
        sezione.scrollIntoView({ behavior: "smooth" });
      } else {
        sezione.classList.remove("attiva");
      }
    });

    // Aggiorna URL senza ricaricare
    history.pushState(null, "", `#${targetId}`);
  });
});

// MODALE per immagini fullscreen
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  modal.style.display = "none";
}

// Chiudi modale al click fuori
modal.addEventListener("click", function () {
  closeModal();
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
