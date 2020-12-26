import gallery from "./gallery-items.js";

const galleryListEl = document.querySelector(".js-gallery");

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
const modalClosingBtn = modalEl.querySelector(
  'button[data-action="close-lightbox"]'
);
const modalOverlayEl = modalEl.querySelector(".lightbox__overlay");

galleryListEl.addEventListener("click", galleryClickHandler);
modalClosingBtn.addEventListener("click", modalCloseHandler);
modalOverlayEl.addEventListener("click", modalCloseHandler);


function galleryClickHandler(event) {
  event.preventDefault();

  const eTarget = event.target;

  if (eTarget.nodeName !== "IMG") {
    return;
  }

  modalOpenHandler();

  modalImageEl.setAttribute("src", eTarget.dataset.source);

  window.addEventListener("keydown", modalClosinByEsc);
}

function modalOpenHandler() {
  modalEl.classList.add("is-open");
}

function modalCloseHandler() {
  modalEl.classList.remove("is-open");
  modalImageEl.setAttribute("src", "");
}

function modalClosinByEsc(event) {
  if (event.code === "Escape") {
    modalCloseHandler();
  }
}

/*Подзадачи (обязательные)
-Создание и рендер разметки по массиву данных и предоставленному шаблону.
-Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
-Открытие модального окна по клику на элементе галереи.
-Подмена значения атрибута src элемента img.lightbox__image.
-Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
-Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее. */
// =============================================================
/*Дополнительные задачи
-Закрытие модального окна по клику на div.lightbox__overlay.
-Закрытие модального окна по нажатию клавиши ESC.
-Пролистывание изображений галереи в открытом модальном окне 
клавишами "влево" и "вправо".
*/


