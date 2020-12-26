import gallery from "./gallery-items.js";
// console.log(gallery);

const galleryListEl = document.querySelector(".js-gallery");
// console.log(galleryListEl);

const myString = (array) =>
  array.reduce((string, { preview, original, description }) => {
    return (
      string +
      `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description}/></a></li>`
    );
  }, "");

galleryListEl.insertAdjacentHTML("afterbegin", myString(gallery));

const modalEl = document.querySelector(".js-lightbox");
const modalImageEl = modalEl.querySelector(".lightbox__image");
const modalCloseBtn = modalEl.querySelector(
  'button[data-action="close-lightbox"]'
);

galleryListEl.addEventListener("click", galleryClickHandler);
modalCloseBtn.addEventListener("click", onCloseModal);

function galleryClickHandler(event) {
  event.preventDefault();

  const eTarget = event.target;

  if (eTarget.nodeName !== "IMG") {
    return;
  }

  onOpenModal();

  modalImageEl.setAttribute("src", eTarget.dataset.source);
}

function onOpenModal() {
  modalEl.classList.add("is-open");
}

function onCloseModal() {
  modalEl.classList.remove("is-open");
  modalImageEl.setAttribute("src", "");
}