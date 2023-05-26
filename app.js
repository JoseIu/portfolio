const toggle = document.querySelector("#header-tggle");
const navMenu = document.querySelector("#nav-menu");
const navClose = document.querySelector("#nav-close");
const form = document.querySelector(".form");

const motrarMenu = () => {
  navMenu.classList.add("show-menu");
};
const ocultarMenu = () => {
  navMenu.classList.remove("show-menu");
};
toggle.addEventListener("click", motrarMenu);
navClose.addEventListener("click", ocultarMenu);

// MODAL SECTION

const modalViews = document.querySelectorAll(".portfolio__modal");
const modalCloses = document.querySelectorAll(".portfolio__modal-close");
const modalBts = document.querySelectorAll(".portfolio-card__buttom");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBts.forEach((e, i) => {
  e.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((close) => {
  close.addEventListener("click", () => {
    modalViews.forEach((view) => {
      view.classList.remove("active-modal");
    });
  });
});
const handelSutmit = (e) => {
  e.preventDefault();
  console.log("desde handelSutmit");
};
form.addEventListener("submit", handelSutmit);
