import gallery from "./gallery-items.js";
// console.log(gallery);

const galleryListEl = document.querySelector(".js-gallery");

const myString = (array) =>
  array.reduce((string, { preview, original, description }) => {
    return (
      string +
      `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original} alt=${description}/></a></li>`
    );
  }, "");

galleryListEl.insertAdjacentHTML("afterbegin", myString(gallery));
