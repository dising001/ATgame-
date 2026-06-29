const toast = document.querySelector(".status-toast");
const dialog = document.querySelector(".room-dialog");
const navItems = document.querySelectorAll(".nav-item");
const modeButtons = document.querySelectorAll(".mini-mode");
const playButtons = document.querySelectorAll(".play-now, .featured");
const lockedCard = document.querySelector(".locked");
const closeDialog = document.querySelector(".close-dialog");
const enterRoom = document.querySelector(".enter-room");

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1400);
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
    showToast(item.dataset.panel);
  });
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((mode) => mode.classList.remove("active"));
    button.classList.add("active");
    showToast(button.dataset.mode);
  });
});

playButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      showToast("Pesca Dorada");
    }
  });
});

lockedCard.addEventListener("click", () => {
  showToast("Sala bloqueada: nivel 30");
});

closeDialog.addEventListener("click", () => dialog.close());

enterRoom.addEventListener("click", () => {
  dialog.close();
  showToast("Entrando a la sala...");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    dialog.close();
  }
});
