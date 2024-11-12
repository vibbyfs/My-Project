// ----------STORE PAGE
const storeFilterButton = document.querySelectorAll(
  ".store-filter-button button"
);
const storeFilterCard = document.querySelectorAll(
  ".store-filter-card .store-card"
);

const filterCards = (e) => {
  document
    .querySelector(".store-btn-active")
    .classList.remove("store-btn-active");
  e.target.classList.add("store-btn-active");

  storeFilterCard.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

storeFilterButton.forEach((button) =>
  button.addEventListener("click", filterCards)
);

console.log(storeFilterButton, storeFilterCard);
