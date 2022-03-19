// handle menu respon
const modelMenuRespon = document.querySelector(".model-menu-respon");
const modelMenuResponContainer = document.querySelector(
  ".model-menu-respon .model-container"
);
const btnOpenMenuRespon = document.querySelector(
  ".header .header-menu .header-menu-container .left .menu-respon"
);
const btnCloseMenuRespon = document.querySelector(
  ".model-menu-respon .model-container .btn-close"
);
const html = document.querySelector("html");

btnCloseMenuRespon.addEventListener("click", () => {
  modelMenuRespon.classList.remove("show");
  html.style.overflowY = "auto";
});

modelMenuRespon.addEventListener("click", () => {
  modelMenuRespon.classList.remove("show");
  html.style.overflowY = "auto";
});

modelMenuResponContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

btnOpenMenuRespon.addEventListener("click", () => {
  modelMenuRespon.classList.add("show");
  html.style.overflowY = "hidden";
});

// back to top
const btnBackToTop = document.querySelector(".btn-back-to__top");

btnBackToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  const position = window.scrollY;

  if (position > 200) {
    btnBackToTop.classList.add("show");
  } else {
    btnBackToTop.classList.remove("show");
  }
});
