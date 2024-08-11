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

// function for time
time = () => {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec;

  document.getElementById("time").innerHTML = currentTime;
};
time(); //call fuction time
setInterval(time, 1000); //refreshes the time function every 1000ms

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDateDayMonth = new Date();
let day = weekday[currentDateDayMonth.getDay()];
document.getElementById("day").innerHTML = day;

document.getElementById("date").innerHTML = currentDateDayMonth.getDate();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[currentDateDayMonth.getMonth()];
document.getElementById("month").innerHTML = month;

// const boxContainers = document.querySelectorAll(".box-container");

// boxContainers.forEach((box) => {
//   box.style.transition = "transform 330ms ease-in-out";

//   box.addEventListener("mouseover", () => {
//     box.style.transform = "scale(1.03)";
//   });

//   box.addEventListener("mouseout", () => {
//     box.style.transform = "";
//   });
// });
