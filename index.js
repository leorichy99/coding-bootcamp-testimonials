const imgs = document.querySelectorAll(".img-slide");
const previous = document.getElementById("prev");
const next = document.getElementById("next");
const testimony = document.querySelectorAll(".testimony");
let activeSlide = 0;

next.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > testimony.length - 1) {
    activeSlide = 0;
  }
  setImage();
  showTestimony();
});

previous.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = testimony.length - 1;
  }
  setImage();
  showTestimony();
});

function showTestimony() {
  testimony.forEach((testimony) => testimony.classList.remove("active"));
  testimony[activeSlide].classList.add("active");
}

const setImage = () => {
  imgs.forEach((img) => img.classList.remove("showing"));
  imgs[activeSlide].classList.add("showing");
};
