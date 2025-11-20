// Select all delete buttons
const deleteButtons = document.querySelectorAll(".delete-item");

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cartItem = button.parentElement;
    const itemName = cartItem.querySelector("h3").innerText;

    if (
      confirm(`Are you sure you want to remove "${itemName}" from the cart?`)
    ) {
      cartItem.remove();
      alert(`🗑️ ${itemName} removed from cart.`);
    }
  });
});
