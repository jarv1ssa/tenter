const iconInputs = document.querySelectorAll(".icon-input");
const searchMobile = document.querySelector(".search-mobile");
const searchBtn = document.querySelector(".searchBtn");
const closeMobileSearch = document.querySelector("#closeMobileSearch");

iconInputs.forEach((parent) => {
  ["focus", "blur"].forEach((event) => {
    parent.children[1].addEventListener(event, () => {
      parent.classList.toggle("active");
    });
  });
});

searchBtn.addEventListener("click", () => {
  searchMobile.style.display = "flex";
  searchMobile.children[1].focus();
});

closeMobileSearch.addEventListener("click", () => {
  searchMobile.style.display = "none";
});
