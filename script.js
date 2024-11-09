// DROPDOWN MENU
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// HOME PAGE
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

// MENU PAGE
// const menuButton = document.querySelectorAll(".menu-button button");
// const menuFilterCard = document.querySelectorAll(
//   ".menu-filter-card .menu-card"
// );

// const filterCards = (e) => {
//   document
//     .querySelector(".menu-btn-active")
//     .classList.remove("menu-btn-active");
//   e.target.classList.add("menu-btn-active");
//   console.log(e.target);

//   menuFilterCard.forEach((card) => {
//     card.classList.add("hide");
//     const cardCategories = card.dataset.name.split(" ");

//     if (
//       cardCategories.includes(e.target.dataset.name) ||
//       e.target.dataset.name === "All"
//     ) {
//       card.classList.remove("hide");
//     }
//   });
// };

// menuButton.forEach((button) => button.addEventListener("click", filterCards));

const menuButton = document.querySelectorAll(".menu-button");
const menuFilterCard = document.querySelectorAll(
  ".menu-filter-card .menu-card"
);
const sortButton = document.getElementById("sortButton");
let sortOrder = "low-to-high";

const filterCards = (e) => {
  document
    .querySelector(".menu-btn-active")
    .classList.remove("menu-btn-active");
  e.target.classList.add("menu-btn-active");

  menuFilterCard.forEach((card) => {
    card.classList.add("hide");
    const cardCategories = card.dataset.name.split(" ");

    if (
      cardCategories.includes(e.target.dataset.name) ||
      e.target.dataset.name === "All"
    ) {
      card.classList.remove("hide");
    }
  });

  if (sortOrder) {
    sortCards(sortOrder);
  }
};

const sortCards = (order) => {
  const cardsArray = Array.from(menuFilterCard);
  cardsArray.sort((a, b) => {
    const priceA = parseFloat(a.dataset.price);
    const priceB = parseFloat(b.dataset.price);

    if (order === "low-to-high") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  const container = document.querySelector(".menu-filter-card");
  cardsArray.forEach((card) => container.appendChild(card));
};

const toggleSortOrder = () => {
  if (sortOrder === "low-to-high") {
    sortOrder = "high-to-low";
    sortButton.classList.add("high-to-low");
  } else {
    sortOrder = "low-to-high";
    sortButton.classList.remove("high-to-low");
  }
  sortCards(sortOrder);
};

menuButton.forEach((button) => button.addEventListener("click", filterCards));
sortButton.addEventListener("click", toggleSortOrder);
