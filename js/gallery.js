const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];


const galleryContainer = document.querySelector("ul.gallery"); 
// знаходимо елемент <ul> з класом gallery у документі та зберігаємо його у змінній galleryContainer. 
// використовувуємо для вставки елементів галереї


const galleryMarkup = images //images — це масив об'єктів, де кожен об'єкт містить властивості preview, original та description.
// Метод map проходить по кожному елементу масиву images і створює HTML-розмітку для кожного зображення.
// preview — це URL зменшеної версії зображення, яке відображається в галереї.
// original — це URL повнорозмірного зображення, яке буде відкриватися при кліку.
// description — це текст, який буде використовуватися як атрибут alt для зображення.
.map( 
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"  
            data-source="${original}" 
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join("");

// join("") об'єднує всі елементи масиву в один рядок, щоб отримати готову HTML-розмітку для всієї галереї.

galleryContainer.innerHTML = galleryMarkup;

// вставляє згенеровану розмітку галереї всередину елемента galleryContainer.


// обробника подій для кліку на галерею
galleryContainer.addEventListener("click", onGalleryClick);

// додає обробник події click на контейнер галереї. При кліку на будь-який елемент всередині контейнера буде викликана функція onGalleryClick.


// Функція обробки кліку onGalleryClick
function onGalleryClick(event) {
  event.preventDefault(); // event.preventDefault() — запобігає стандартній поведінці браузера (наприклад, переходу за посиланням чи завантаження картинки при кліку).
  
  // Перевірка if (event.target.nodeName !== "IMG") гарантує, що код виконується лише при кліку на зображення (<img>), а не на інші елементи. (делегування)
  if (event.target.nodeName !== "IMG") {
    return;
  }
// event.target.dataset.source отримує URL повнорозмірного зображення з атрибута data-source зображення, на яке клікнули.
  const largeImageURL = event.target.dataset.source;
// basicLightbox.create створює модальне вікно з повнорозмірним зображенням.
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${event.target.alt}" />
  `);
  // instance.show() відображає модальне вікно.
  instance.show();
}