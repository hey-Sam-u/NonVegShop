// Select all add-to-cart buttons
const addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.parentElement;
    const productName = productCard.querySelector("h3").innerText;
    const productPrice = productCard.querySelector(".price").innerText;

    // Dummy add-to-cart logic
    alert(`✅ ${productName} added to cart!`);

    // Optional: show confetti effect
    if (Math.random() > 0.5) {
      // 50% chance
      confettiEffect();
    }

    // Dummy order confirmation popup
    setTimeout(() => {
      alert(`🎉 Order confirmed for ${productName}! It will arrive in 1 hour.`);
    }, 500);
  });
});

// Simple confetti function
function confettiEffect() {
  const confettiContainer = document.createElement("div");
  confettiContainer.style.position = "fixed";
  confettiContainer.style.top = 0;
  confettiContainer.style.left = 0;
  confettiContainer.style.width = "100%";
  confettiContainer.style.height = "100%";
  confettiContainer.style.pointerEvents = "none";
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.top = Math.random() * 100 + "%";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => confettiContainer.remove(), 1500);
}
