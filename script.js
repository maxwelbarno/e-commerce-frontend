const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/**
 * Switch product images on click
 */
const mainImg = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");

for (let img of smallImg) {
  img.onclick = () => {
    mainImg.src = img.src;
  };
}
