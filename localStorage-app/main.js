let colors = document.querySelectorAll(".all-color div");
let outColor = document.querySelector(".big-color");

if (window.localStorage.getItem("color")) {
  outColor.style.backgroundColor = window.localStorage.getItem("color");

  colors.forEach((e) => {
    e.classList.remove("active");
  });

  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

colors.forEach((ele) => {
  ele.addEventListener("click", (el) => {
    colors.forEach((e) => {
      e.classList.remove("active");
    });
    ele.classList.add("active");
    window.localStorage.setItem("color", el.currentTarget.dataset.color);
    outColor.style.backgroundColor = el.currentTarget.dataset.color;
  });
});
