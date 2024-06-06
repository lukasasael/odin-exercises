import "./styles.css";

var dropdown = document.getElementsByClassName("dropdown");
var button = document.getElementById("opendropdown");

button.addEventListener("click", () => {
  dropdown[0].classList.toggle("open");
});

var carousel = document.getElementById("carousel");

var currentImage = 0;

var images = [
  {
    src: "/sources/1.webp",
    alt: "image1",
  },
  {
    src: "/sources/2.jpg",
    alt: "image2",
  },
  {
    src: "/sources/3.jpg",
    alt: "image3",
  },
  {
    src: "/sources/4.jpeg",
    alt: "image4",
  },
  {
    src: "/sources/5.jpg",
    alt: "image5",
  },
  {
    src: "/sources/6.webp",
    alt: "image6",
  },
];

const previousButton = document.getElementById("previous");
previousButton.addEventListener("click", () => {
  if (currentImage === 0) {
    currentImage = currentImage + 4;
  } else if (currentImage === 1) {
    currentImage = currentImage + 4;
  } else {
    currentImage = currentImage - 2;
  }
  nextImage();
});
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => {
  nextImage();
});

export function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  carousel.innerHTML =
    '<img src="' +
    images[currentImage].src +
    '" alt="' +
    images[currentImage].alt +
    '">';
  checkSelection();
}

setInterval(nextImage, 5000);

const buttons = document.querySelectorAll("#carousel-buttons button");
let counter = 0;

buttons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    carousel.innerHTML =
      '<img src="' + images[index].src + '" alt="' + images[index].alt + '">';
    currentImage = index;
    checkSelection(button, index);
  });
  counter++;
});

export function checkSelection() {
  buttons.forEach((button, index) => {
    if (index == currentImage) button.style.backgroundColor = "#444444";
    else button.style.backgroundColor = "#292929";
  });
}
