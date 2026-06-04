const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const darkModeBtn = document.getElementById("darkModeBtn");
const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");
const foodForm = document.getElementById("foodForm");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeBtn.textContent = "☀️";
  } else {
    darkModeBtn.textContent = "🌙";
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    foodCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (filterValue === "semua" || filterValue === cardCategory) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

foodForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const daerah = document.getElementById("daerah").value.trim();
  const makanan = document.getElementById("makanan").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !daerah || !makanan || !pesan) {
    alert("Isi semua form dulu. Jangan PHP-in input kosong.");
    return;
  }

  alert(`Terima kasih, ${nama}! Saran ${makanan} dari ${daerah} berhasil dikirim.`);
  foodForm.reset();
});
