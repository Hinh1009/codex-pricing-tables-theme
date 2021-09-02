const leftArrow = document.querySelector(".bx.bx-left-arrow-alt");
const rightArrow = document.querySelector(".bx.bx-right-arrow-alt");
const carrouselContainer = document.querySelector(".carrousels-container");
const carrousels = document.querySelector(".carrousels").children;
const dotBtn = document.getElementsByClassName("dot-icon");
const projectContainer = document.querySelector(".projects");
const projects = document.querySelector(".project-container").children;
const projectDotBtn = document.getElementsByClassName("dot");

const totalCarrousels = carrousels.length;

const dotNumber = dotBtn.length;

const time = 3000;

let index = 0;

let projectIndex = 0;

let slideId, projectId;

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

let projectAutoPlay = () => {
  projectId = setInterval(() => {
    projectIndex == projects.length - 1
      ? (projectIndex = 0)
      : (projectIndex += 1);
    for (i = 0; i < projects.length; i++) {
      projects[i].classList.add("hidden");
      projectDotBtn[i].classList.remove("active");
    }
    projects[projectIndex].classList.remove("hidden");
    projectDotBtn[projectIndex].classList.add("active");
  }, time);
};

carrouselContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

carrouselContainer.addEventListener("mouseleave", autoPlay);

projectContainer.addEventListener("mouseenter", () => {
  clearInterval(projectId);
});

projectContainer.addEventListener("mouseleave", projectAutoPlay);

leftArrow.addEventListener("click", () => {
  changeCarrousel("prev");
});

rightArrow.addEventListener("click", () => {
  changeCarrousel("next");
});

for (i = 0; i < dotBtn.length; i++) {
  dotBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    index = parseInt(e.target.getAttribute("value")) - 1;
    for (i = 0; i < totalCarrousels; i++) {
      carrousels[i].classList.add("hidden");
      dotBtn[i].classList.remove("active");
    }
    carrousels[index].classList.remove("hidden");
    dotBtn[index].classList.add("active");
  });
}

for (i = 0; i < projectDotBtn.length; i++) {
  projectDotBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    projectIndex = parseInt(e.target.getAttribute("value")) - 1;
    for (i = 0; i < projects.length; i++) {
      projects[i].classList.add("hidden");
      projectDotBtn[i].classList.remove("active");
    }
    projects[projectIndex].classList.remove("hidden");
    projectDotBtn[projectIndex].classList.add("active");
  });
}

autoPlay();

projectAutoPlay();
