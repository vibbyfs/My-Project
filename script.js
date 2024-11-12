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

ScrollReveal().reveal(".our-journey .our-journey-img", {
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

// MENU PAGE - FILTER & SORT
const menuButton = document.querySelectorAll(".menu-button");
const menuFilterCard = document.querySelectorAll(
  ".menu-filter-card .menu-card"
);
const sortLowToHighButton = document.getElementById("sortLowToHigh");
const sortHighToLowButton = document.getElementById("sortHighToLow");
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const dropdownContent = document.getElementById("dropdownContent");
let sortOrder = "low-to-high";
let selectedCategory = "All";

// Fungsi untuk menutup dropdown
const closeDropdown = () => {
  dropdownContent.classList.add("hidden");
};

// Fungsi untuk membuka dropdown
const openDropdown = () => {
  dropdownContent.classList.remove("hidden");
};

// Fungsi untuk menyaring kartu berdasarkan kategori
const filterCards = (e) => {
  document
    .querySelector(".menu-button-active")
    ?.classList.remove("menu-button-active");
  e.target.classList.add("menu-button-active");
  selectedCategory = e.target.dataset.name;
  updateDisplayCards();
  closeDropdown(); // Menutup dropdown saat tombol kategori diklik
};

// Fungsi untuk menyortir kartu berdasarkan harga
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

// Fungsi untuk mengubah urutan penyortiran
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
  closeDropdown(); // Menutup dropdown saat tombol sortir diklik
};

// Fungsi untuk memperbarui tampilan kartu berdasarkan pencarian dan kategori
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

// Fungsi untuk menangani input pencarian
const handleSearchInput = () => {
  updateDisplayCards();
  if (searchInput.value) {
    clearButton.classList.add("show");
  } else {
    clearButton.classList.remove("show");
  }
};

// Fungsi untuk menghapus input pencarian
const clearSearch = () => {
  searchInput.value = "";
  clearButton.classList.remove("show");
  updateDisplayCards();
};

// Event Listeners
menuButton.forEach((button) => button.addEventListener("click", filterCards));
sortLowToHighButton.addEventListener("click", () =>
  toggleSortOrder("low-to-high")
);
sortHighToLowButton.addEventListener("click", () =>
  toggleSortOrder("high-to-low")
);
searchInput.addEventListener("input", handleSearchInput);
clearButton.addEventListener("click", clearSearch);

// Pastikan dropdown bisa dibuka kembali
document.querySelector(".dropbtn").addEventListener("click", openDropdown);
