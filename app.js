let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.getElementById("slide-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let autoButton = document.getElementById("auto");
let manButton = document.getElementById("man");
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElement);
let paginationCreatedUl = document.getElementById("pagination-ul");
let paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}
theChecker();
let autoslidebtn;
autobtn()
autoButton.onclick = autobtn;
manButton.onclick = manbtn;

function autobtn() {
  autoslidebtn = setInterval(autoSlide, 5000);

  autoButton.classList.add("hide");
  manButton.classList.remove("hide");
}
function manbtn() {
  clearInterval(autoslidebtn);
  manButton.classList.add("hide");
  autoButton.classList.remove("hide");
}

function autoSlide() {
  if (currentSlide == slidesCount) {
    currentSlide = 0;
  } else {
    currentSlide++;
    theChecker();
  }
}
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
function theChecker() {
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;
  removeAllActive();
  sliderImages[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
function removeAllActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationsBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
