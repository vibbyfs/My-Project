const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".hero .content h1", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".hero .content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".hero .content .cta", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".best-seller .best-seller-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".our-journey-container .img-our-journey", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".testimonials-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".our-customer-card", {
  ...scrollRevealOption,
  interval: 200,
});
