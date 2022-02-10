let res;
let ran;
const addbtn = document.querySelector('.newItem__btn');
const removebtn = document.querySelector('.removeItem__btn');
const inputNewItem = document.querySelector('.newItem__input');
let result = document.querySelector('.result__input');
const randombtn = document.querySelector('.button');
const choice = document.querySelector('.choices__list');

// const choicesList = [
//   'ramen',
//   'bonchon',
//   'karayama',
//   'shinkansen',
//   'pepper Lunch',
//   'Food court',
//   'Swensen',
// ];

const dynaChoices = [];

const displayChoices = function (choicesList) {
  choice.textContent = choicesList.join(', ');
};
// displayChoices(choicesList);

const randomEl = choicesList => {
  ran = Math.trunc(Math.random() * choicesList.length);
  // console.log(ran);
  res = choicesList[ran];
  result.textContent = res;
  return res;
};

const capitalized = str => str[0].toUpperCase() + str.slice(1);

// Add item
const addItem = function (e) {
  e.preventDefault();

  if (inputNewItem.value !== '') {
    dynaChoices.push(capitalized(inputNewItem.value));
  }
  inputNewItem.value = '';
  displayChoices(dynaChoices);
};

let newDyna;
// Remove item
const removeItem = function (e) {
  e.preventDefault();

  if (
    inputNewItem.value !== '' &&
    dynaChoices.some(choice => capitalized(inputNewItem.value) === choice)
  ) {
    dynaChoices.splice(1, dynaChoices.indexOf(capitalized(inputNewItem.value)));
  }
  inputNewItem.value = '';
  displayChoices(dynaChoices);
};

let i = 0;

// Loop function
const loopResult = function () {
  setTimeout(() => {
    // randomEl(choicesList);
    randomEl(dynaChoices);
    i++;
    if (i < 30) {
      loopResult();
    }
  }, 100);
};

addbtn.addEventListener('click', addItem);
removebtn.addEventListener('click', removeItem);

randombtn.addEventListener('click', loopResult);
