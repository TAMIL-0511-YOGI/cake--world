document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields!");
  } else {
    alert("Thank you for your order, " + name + "! We'll be in touch soon.");
    document.getElementById("orderForm").reset();
  }
});