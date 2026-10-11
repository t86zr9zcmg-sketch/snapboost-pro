
const button = document.getElementById("start");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Bienvenue sur SnapBoost Pro !";
  button.textContent = "C'est parti !";
});
