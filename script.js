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

// // MENU PAGE
// const menuButton = document.querySelectorAll(".menu-button");
// const menuFilterCard = document.querySelectorAll(
//   ".menu-filter-card .menu-card"
// );
// const sortLowToHighButton = document.getElementById("sortLowToHigh");
// const sortHighToLowButton = document.getElementById("sortHighToLow");
// let sortOrder = "low-to-high";
// const filterCards = (e) => {
//   document.querySelector(".menu-button").classList.remove("menu-button");
//   e.target.classList.add("menu-button");
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
//   if (sortOrder) {
//     sortCards(sortOrder);
//   }
// };
// const sortCards = (order) => {
//   const cardsArray = Array.from(menuFilterCard);
//   cardsArray.sort((a, b) => {
//     const priceA = parseFloat(a.dataset.price);
//     const priceB = parseFloat(b.dataset.price);
//     if (order === "low-to-high") {
//       return priceA - priceB;
//     } else {
//       return priceB - priceA;
//     }
//   });
//   const container = document.querySelector(".menu-filter-card");
//   cardsArray.forEach((card) => container.appendChild(card));
// };
// const toggleSortOrder = (order) => {
//   sortOrder = order;
//   if (order === "low-to-high") {
//     sortLowToHighButton.classList.add("active-sort");
//     sortHighToLowButton.classList.remove("active-sort");
//   } else {
//     sortLowToHighButton.classList.remove("active-sort");
//     sortHighToLowButton.classList.add("active-sort");
//   }
//   sortCards(order);
// };
// menuButton.forEach((button) => button.addEventListener("click", filterCards));
// sortLowToHighButton.addEventListener("click", () =>
//   toggleSortOrder("low-to-high")
// );
// sortHighToLowButton.addEventListener("click", () =>
//   toggleSortOrder("high-to-low")
// );

// new
// const menuButton = document.querySelectorAll(".menu-button");
// const menuFilterCard = document.querySelectorAll(
//   ".menu-filter-card .menu-card"
// );
// const sortLowToHighButton = document.getElementById("sortLowToHigh");
// const sortHighToLowButton = document.getElementById("sortHighToLow");
// const searchInput = document.getElementById("searchInput");
// let sortOrder = "low-to-high";
// let selectedCategory = "All";
// const filterCards = (e) => {
//   document
//     .querySelector(".menu-btn-active")
//     ?.classList.remove("menu-btn-active");
//   e.target.classList.add("menu-btn-active");
//   selectedCategory = e.target.dataset.name;
//   updateDisplayCards();
// };
// const sortCards = (order) => {
//   const cardsArray = Array.from(menuFilterCard);
//   cardsArray.sort((a, b) => {
//     const priceA = parseFloat(a.dataset.price);
//     const priceB = parseFloat(b.dataset.price);
//     if (order === "low-to-high") {
//       return priceA - priceB;
//     } else {
//       return priceB - priceA;
//     }
//   });
//   const container = document.querySelector(".menu-filter-card");
//   cardsArray.forEach((card) => container.appendChild(card));
// };
// const toggleSortOrder = (order) => {
//   sortOrder = order;
//   if (order === "low-to-high") {
//     sortLowToHighButton.classList.add("active-sort");
//     sortHighToLowButton.classList.remove("active-sort");
//   } else {
//     sortLowToHighButton.classList.remove("active-sort");
//     sortHighToLowButton.classList.add("active-sort");
//   }
//   sortCards(order);
// };
// const updateDisplayCards = () => {
//   const searchText = searchInput.value.toLowerCase();
//   menuFilterCard.forEach((card) => {
//     const cardCategories = card.dataset.name.split(" ");
//     const cardText = card.textContent.toLowerCase();
//     const matchesCategory =
//       selectedCategory === "All" || cardCategories.includes(selectedCategory);
//     const matchesSearch = !searchText || cardText.includes(searchText);
//     if (matchesCategory && matchesSearch) {
//       card.classList.remove("hide");
//     } else {
//       card.classList.add("hide");
//     }
//   });
//   sortCards(sortOrder);
// };
// menuButton.forEach((button) => button.addEventListener("click", filterCards));
// sortLowToHighButton.addEventListener("click", () =>
//   toggleSortOrder("low-to-high")
// );
// sortHighToLowButton.addEventListener("click", () =>
//   toggleSortOrder("high-to-low")
// );
// searchInput.addEventListener("input", updateDisplayCards);

// revisi
const menuButton = document.querySelectorAll(".menu-button");
const menuFilterCard = document.querySelectorAll(
  ".menu-filter-card .menu-card"
);
const sortLowToHighButton = document.getElementById("sortLowToHigh");
const sortHighToLowButton = document.getElementById("sortHighToLow");
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
let sortOrder = "low-to-high";
let selectedCategory = "All";
const filterCards = (e) => {
  document
    .querySelector(".menu-btn-active")
    ?.classList.remove("menu-btn-active");
  e.target.classList.add("menu-btn-active");
  selectedCategory = e.target.dataset.name;
  updateDisplayCards();
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
const toggleSortOrder = (order) => {
  sortOrder = order;
  if (order === "low-to-high") {
    sortLowToHighButton.classList.add("active-sort");
    sortHighToLowButton.classList.remove("active-sort");
  } else {
    sortLowToHighButton.classList.remove("active-sort");
    sortHighToLowButton.classList.add("active-sort");
  }
  sortCards(order);
};
const updateDisplayCards = () => {
  const searchText = searchInput.value.toLowerCase();
  menuFilterCard.forEach((card) => {
    const cardCategories = card.dataset.name.split(" ");
    const cardText = card.textContent.toLowerCase();
    const matchesCategory =
      selectedCategory === "All" || cardCategories.includes(selectedCategory);
    const matchesSearch = !searchText || cardText.includes(searchText);
    if (matchesCategory && matchesSearch) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
  sortCards(sortOrder);
};
const handleSearchInput = () => {
  updateDisplayCards();
  if (searchInput.value) {
    clearButton.classList.add("show");
  } else {
    clearButton.classList.remove("show");
  }
};
const clearSearch = () => {
  searchInput.value = "";
  clearButton.classList.remove("show");
  updateDisplayCards();
};
menuButton.forEach((button) => button.addEventListener("click", filterCards));
sortLowToHighButton.addEventListener("click", () =>
  toggleSortOrder("low-to-high")
);
sortHighToLowButton.addEventListener("click", () =>
  toggleSortOrder("high-to-low")
);
searchInput.addEventListener("input", handleSearchInput);
clearButton.addEventListener("click", clearSearch);
