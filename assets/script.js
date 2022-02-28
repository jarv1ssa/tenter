const iconInputs = document.querySelectorAll(".icon-input");

const searchMobile = document.querySelector(".search-mobile");
const searchBtn = document.querySelector(".searchBtn");
const closeMobileSearch = document.querySelector("#closeMobileSearch");

const headerMenu = document.querySelector(".header__menu");
const aside = document.querySelector(".aside");

const overlay = document.querySelector(".overlay");

const timer = new easytimer.Timer();
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

timer.start({
  countdown: true,
  startValues: { days: 1, hours: 4, minutes: 51, seconds: 1 },
});

timer.addEventListener("secondsUpdated", () => {
  days.innerText = timer.getTimeValues().days;
  hours.innerText = timer.getTimeValues().hours;
  minutes.innerText = timer.getTimeValues().minutes;
  seconds.innerText = timer.getTimeValues().seconds;
});

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

headerMenu.addEventListener("click", () => {
  aside.style.display = "block";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  aside.style.display = "none";
  overlay.style.display = "none";
});
