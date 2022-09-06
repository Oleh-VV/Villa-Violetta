// modal blocks
let btnLoginAll = document.body.querySelectorAll(".login-btn");
let btnRegistrAll = document.body.querySelectorAll(".registr-btn");
let btnRegistr = document.body.querySelector(".registr-btn");
let modalWrapperLogin = document.body.querySelector(".modal-wrapper-login");
let modalWrapperComment = document.body.querySelector(".modal-wrapper-comment");
let modalWrapperRegistr = document.body.querySelector(".modal-wrapper-registr");
let closeIcons = document.body.querySelectorAll(".close-icon");
// open login modal and close other modals
btnLoginAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!modalWrapperRegistr.classList.contains("hidden")) {
      modalWrapperRegistr.classList.add("hidden");
    }
    modalWrapperLogin.classList.remove("hidden");
  });
});

// open registr modal and close other modals
btnRegistrAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!modalWrapperLogin.classList.contains("hidden")) {
      modalWrapperLogin.classList.add("hidden");
    }
    modalWrapperRegistr.classList.remove("hidden");
  });
});
closeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    modalWrapperLogin.classList.add("hidden");
    modalWrapperRegistr.classList.add("hidden");
  });
});
document.addEventListener("keydown", function (event) {
  if (event.code == "Escape") {
    if (!modalWrapperLogin.classList.contains("hidden")) {
      event.preventDefault();
      modalWrapperLogin.classList.add("hidden");
    }
    if (!modalWrapperRegistr.classList.contains("hidden")) {
      event.preventDefault();
      modalWrapperRegistr.classList.add("hidden");
    }
  }
});
// slide-menu links
let menuLinks = document.body.querySelector(".menu-list");
let openMenuBar = document.body.querySelector(".fa-bars");
openMenuBar.addEventListener("click", () => {
  menuLinks.style.transform = "translate(0px)";
});
let closeMenuBar = document.body.querySelector(".fa-times");
closeMenuBar.addEventListener("click", () => {
  menuLinks.style.transform = "translate(200px)";
});
