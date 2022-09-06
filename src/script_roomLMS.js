// modal blocks
let btnLoginAll = document.body.querySelectorAll(".login-btn");
let btnRegistrAll = document.body.querySelectorAll(".registr-btn");
let btnLoginComment = document.body.querySelector(
  ".modal-wrapper-comment .btn"
);
let messageComment = document.body.querySelector(
  ".modal-wrapper-comment-thanks"
);
let textareaComment = document.body.querySelector(
  ".modal-wrapper-comment textarea"
);
let btnRegistr = document.body.querySelector(".registr-btn");
let btnComment = document.body.querySelector(".comment-btn");
let btnSendComment = document.body.querySelector(
  ".modal-wrapper-comment .send-comment-btn"
);
let modalWrapperLogin = document.body.querySelector(".modal-wrapper-login");
let modalWrapperComment = document.body.querySelector(".modal-wrapper-comment");
let modalWrapperRegistr = document.body.querySelector(".modal-wrapper-registr");
let closeIcons = document.body.querySelectorAll(".close-icon");
let closeIconLoginComment = document.body.querySelector(
  ".modal-wrapper-comment .close-icon"
);

// open login modal and close other modals
btnLoginAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!modalWrapperRegistr.classList.contains("hidden")) {
      modalWrapperRegistr.classList.add("hidden");
    }
    if (!modalWrapperComment.classList.contains("hidden")) {
      modalWrapperComment.classList.add("hidden");
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
    if (!modalWrapperComment.classList.contains("hidden")) {
      modalWrapperComment.classList.add("hidden");
    }
    modalWrapperRegistr.classList.remove("hidden");
  });
});
// open modal comment
btnLoginComment.addEventListener("click", () => {
  modalWrapperLogin.classList.remove("hidden");
  modalWrapperComment.classList.add("hidden");
});
closeIconLoginComment.addEventListener("click", () => {
  modalWrapperComment.classList.remove("hidden");
});
btnComment.addEventListener("click", () => {
  modalWrapperComment.classList.remove("hidden");
});
// open modal thanks for comment
btnSendComment.addEventListener("click", () => {
  if (textareaComment.value !== "") {
    messageComment.classList.remove("hidden");
  }
});
closeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    modalWrapperLogin.classList.add("hidden");
    modalWrapperRegistr.classList.add("hidden");
    modalWrapperComment.classList.add("hidden");
    messageComment.classList.add("hidden");
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
    if (!modalWrapperComment.classList.contains("hidden")) {
      event.preventDefault();
      modalWrapperComment.classList.add("hidden");
    }
    if (!messageComment.classList.contains("hidden")) {
      event.preventDefault();
      messageComment.classList.add("hidden");
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
// choose image room
let roomAddImages = document.body.querySelectorAll(".room-addition-img");
let roomMainImage = document.body.querySelector(".room-main-img img");
roomAddImages.forEach((icon) => {
  icon.addEventListener("click", () => {
    roomMainImage.setAttribute("src", icon.getAttribute("src"));
  });
});
