const leftArrow = document.querySelector(".bx.bx-left-arrow-alt");

const rightArrow = document.querySelector(".bx.bx-right-arrow-alt");

const carrouselContainer = document.querySelector(".carrousels-container");

const carrousels = document.querySelector(".carrousels").children;

const dotBtn = document.getElementsByClassName("dot-icon");

const dotBtnActive = document.querySelector(".dot-icon.active");

const totalCarrousels = carrousels.length;

const dotNumber = dotBtn.length;

const time = 3000;

let index = 0;

let slideId;

let changeCarrousel = (direction) => {
  if (direction == "next") {
    if (index == totalCarrousels - 1) {
      index = 0;
    } else {
      index += 1;
    }
  } else {
    if (index == 0) {
      index = totalCarrousels - 1;
    } else {
      index--;
    }
  }

  for (i = 0; i < totalCarrousels; i++) {
    carrousels[i].classList.add("hidden");
    dotBtn[i].classList.remove("active");
  }

  carrousels[index].classList.remove("hidden");
  dotBtn[index].classList.add("active");
};

let autoPlay = () => {
  slideId = setInterval(() => {
    changeCarrousel("next");
  }, time);
};

carrouselContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

carrouselContainer.addEventListener("mouseleave", autoPlay);

leftArrow.addEventListener("click", () => {
  changeCarrousel("prev");
});

rightArrow.addEventListener("click", () => {
  changeCarrousel("next");
});

for (i = 0; i < dotBtn.length; i++) {
  dotBtn[i].addEventListener("click", (e) => {
    index = parseInt(e.target.getAttribute("value")) - 1;
    for (i = 0; i < totalCarrousels; i++) {
      carrousels[i].classList.add("hidden");
      dotBtn[i].classList.remove("active");
    }

    carrousels[index].classList.remove("hidden");
    dotBtn[index].classList.add("active");
  });
}

autoPlay();
