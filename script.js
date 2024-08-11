const menuBoxes = document.querySelectorAll(".menu-box");
const squareBoxes = document.querySelectorAll(".square-box");
const navMenuLi = document.querySelectorAll(".nav-menu-links");

menuBoxes.forEach((menuBox, index) => {
  menuBox.addEventListener("mouseover", () => {
    menuBox.style.backgroundColor = "#444035";
    squareBoxes[index].style.backgroundColor = "#c6c1ab";
    navMenuLi[index].style.color = "#fff";
  });

  menuBox.addEventListener("mouseout", () => {
    menuBox.style.backgroundColor = "";
    squareBoxes[index].style.backgroundColor = "";
    navMenuLi[index].style.color = "";
  });
});
