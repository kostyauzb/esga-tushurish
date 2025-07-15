const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const overlay = document.getElementById("navOverlay");

openBtn.addEventListener("click", () => overlay.classList.add("open"));
closeBtn.addEventListener("click", () => overlay.classList.remove("open"));

// //////////////////////////////////////////////
document.querySelectorAll(".team_card").forEach((card) => {
  const plusBtn = card.querySelector(".plus_btn");
  const info = card.querySelector(".team_info");
  const close = card.querySelector(".close_btn");

  plusBtn.addEventListener("click", () => {
    info.classList.add("active");
  });

  close.addEventListener("click", () => {
    info.classList.remove("active");
  });
});
