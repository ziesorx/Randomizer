let res;
let ran;
const addbtn = document.querySelector(".newItem__btn");
const removebtn = document.querySelector(".removeItem__btn");
const inputNewItem = document.querySelector(".newItem__input");
let result = document.querySelector(".result__input");
const randombtn = document.querySelector(".button");
const choice = document.querySelector(".choices__list");
const midbut = document.querySelector(".mid-button");
const rigged = ["pranakorn boat noodle"];

let dynaChoices = [];
const midTownHots = [
  "mk",
  "pepper lunch",
  "tenya",
  "A-ramen",
  "pizza company",
  "hachiban",
  "food court",
  "taco bell",
  "nitaya chicken",
  "bonchon",
  "shinkansen",
  "real beef",
  "kfc",
  "yayoi",
  "spicy house",
  "bbq plaza",
  "sushi hiro",
  "tum muo",
  "karayama",
  "pranakorn boat noodle",
  "korean town",
  "coco ichibanya",
];
const ethyl = [];

const pushMid = () => {
  dynaChoices = [];
  midTownHots.forEach((i) => dynaChoices.push(capitalized(i)));
  displayChoices(dynaChoices);
};

const displayChoices = function (choicesList) {
  choice.textContent = choicesList.join(", ");
};
// displayChoices(choicesList);

const randomEl = (choicesList) => {
  ran = Math.trunc(Math.random() * choicesList.length);
  // console.log(ran);
  res = choicesList[ran];
  result.textContent = res;
  return res;
};

const capitalized = (str) => str[0].toUpperCase() + str.slice(1);

// Add item
const addItem = function (e) {
  e.preventDefault();

  if (inputNewItem.value !== "") {
    dynaChoices.push(capitalized(inputNewItem.value));
  }
  inputNewItem.value = "";
  displayChoices(dynaChoices);
};

let newDyna;
// Remove item
const removeItem = function (e) {
  e.preventDefault();

  if (
    inputNewItem.value !== "" &&
    dynaChoices.some((choice) => capitalized(inputNewItem.value) === choice)
  ) {
    dynaChoices.splice(dynaChoices.indexOf(capitalized(inputNewItem.value)), 1);
  }
  inputNewItem.value = "";
  displayChoices(dynaChoices);
};

let i = 0;
// Loop function
const loopResult = function () {
  setTimeout(() => {
    // randomEl(choicesList);
    randomEl(dynaChoices);
    i++;
    if (i < 20) {
      loopResult();
    }
    // else {
    //   randomEl(rigged);
    // }
  }, 100);
};

midbut.addEventListener("click", pushMid);
addbtn.addEventListener("click", addItem);
removebtn.addEventListener("click", removeItem);
randombtn.addEventListener("click", () => {
  i = 0;
  loopResult();
});
