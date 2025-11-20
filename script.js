// Dummy products for search suggestions
const products = [
  "Chicken Breast",
  "Chicken Legs",
  "Chicken Wings",
  "Mutton Curry Cut",
  "Mutton Ribs",
  "Mutton Keema",
  "Fresh Fish",
  "Prawns",
  "Eggs",
  "Chicken Nuggets",
  "Fish Fillet",
  "Egg Omelette",
  "Mutton Biryani Pack",
  "Chicken Biryani Pack",
];

const searchBar = document.getElementById("searchBar");
const suggestionsBox = document.getElementById("suggestions");

searchBar.addEventListener("input", () => {
  const input = searchBar.value.toLowerCase();
  suggestionsBox.innerHTML = "";
  if (input === "") {
    suggestionsBox.style.display = "none";
    return;
  }
  const filtered = products.filter((product) =>
    product.toLowerCase().includes(input)
  );
  filtered.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    div.addEventListener("click", () => {
      searchBar.value = item;
      suggestionsBox.style.display = "none";
    });
    suggestionsBox.appendChild(div);
  });
  suggestionsBox.style.display = filtered.length ? "block" : "none";
});

// Add click animation for all category cards
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {
  card.addEventListener("mousedown", () => {
    card.style.transform = "scale(0.95)";
  });
  card.addEventListener("mouseup", () => {
    card.style.transform = "scale(1.1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
