let res;
let ran;
const arrRan = [
  "ramen",
  "bonchon",
  "karayama",
  "shinkansen",
  "pepper Lunch",
  "Food court",
  "Swensen",
];
const dynaRan = [];
// const newItem = String(document.querySelector(".newItem").value);
// const newIt = String(document.getElementById("inputItem").value);

const randomEl = () => {
  ran = Math.trunc(Math.random() * arrRan.length);
  res = arrRan[ran];
  console.log(res);
  document.getElementById("result").textContent = res;
  return res;
};

// document.querySelector(".newItem").addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     console.log(newIt);
//     dynaRan.push(this.newIt);
//     console.log(dynaRan);
//     return dynaRan;
//   }
// });
document.querySelector(".button").addEventListener("click", randomEl);
