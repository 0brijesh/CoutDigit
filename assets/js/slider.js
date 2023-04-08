// get all slider list
const sliderList = document.querySelectorAll(".slider");

// Get Total number of slides
const sliderCount = sliderList.length;

// Current slider
let currentSlidePointer = 0;

// Next & Previous Button
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");

// bind next and previous button click event.
nextButton.addEventListener("click", handleNextButtonClick);
previousButton.addEventListener("click", handlePreviousButtonClick);

// This function will call when next button clicked.
function handleNextButtonClick() {
  currentSlidePointer++;
  trackSlides();
}

// This function will call when previous button clicked.
function handlePreviousButtonClick() {
  currentSlidePointer--;
  trackSlides();
}

// if slide is first then disabled previous button.
const isFirstSlide = () => {
  if (currentSlidePointer == 0) {
    previousButton.setAttribute("disabled", "true");
    previousButton.classList.add("disabled");
  } else {
    previousButton.classList.remove("disabled");
    previousButton.removeAttribute("disabled");
  }
};

// if slide is last then disabled next button.
const isLastSlide = () => {
  if (currentSlidePointer == sliderCount - 1) {
    nextButton.setAttribute("disabled", "true");
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
    nextButton.removeAttribute("disabled");
  }
};

// remove all Active slide
const removeAllAciveSlide = () => {
  sliderList.forEach((sliderItem) => {
    sliderItem.classList.remove("active");
  });
};

// Make Slide left and right.
const slideLeftRight = () => {
  sliderList.forEach((sliderItem, sliderIndex) => {
    sliderItem.style.transform = `translateX(${
      100 * (sliderIndex - currentSlidePointer)
    }%)`;
  });
};

const trackSlides = () => {
  removeAllAciveSlide();
  slideLeftRight();
  sliderList[currentSlidePointer].classList.add("active");
  isFirstSlide();
  isLastSlide();
};

// Call trackSlider
trackSlides();
