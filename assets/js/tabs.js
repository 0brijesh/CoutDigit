const tabsWrapper = document.querySelector(".pricing-wrapper");
const getAllButtons = document.querySelectorAll(".pricing-tab-button");
const getAllContents = document.querySelectorAll(".princing-content");
tabsWrapper.addEventListener("click", (event) => {
  const dataId = event?.target?.dataset?.id;
  if (dataId) {
    getAllButtons.forEach((button) => {
      button.classList.remove("active");
    });
    event.target.classList.add("active");
    getAllContents.forEach((content) => {
      content.classList.remove("active");
    });
    document.getElementById(dataId).classList.add("active");
  }
});
