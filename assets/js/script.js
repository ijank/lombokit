'use strict';



/**
 * navbar toggle
 */

document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir default

  var userInput = document.getElementById('user-input').value;
  var phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp tujuan Anda, gunakan format internasional tanpa tanda '+'.

  // Encode pesan untuk memastikan karakter khusus ditangani dengan benar
  var encodedMessage = encodeURIComponent(userInput);

  // Buat URL WhatsApp
  var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;

  // Buka URL WhatsApp di tab baru
  window.open(whatsappURL, '_blank');
});

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});