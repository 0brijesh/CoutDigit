const accordionList = document.querySelectorAll(".accordion-item");
const accordionHeading = document.querySelectorAll(".accordion-header");
accordionHeading.forEach((accordionItem) => {
  accordionItem.addEventListener("click", handleToggleClick);
});
function handleToggleClick() {
  const itemClass = this.parentNode.className;
  closeAllOpenAccordion();
  if (itemClass == "accordion-item") {
    this.parentNode.classList.add("open");
  }
}

const closeAllOpenAccordion = () => {
  accordionList.forEach((accordionItem) => {
    accordionItem.classList.remove("open");
  });
};
