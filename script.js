// console.log('hello I work');

let key = document.getElementsByClassName('key');
let lastKey = null;
const keys = [];
let number = [];
let newNumber = undefined;
let count = 0;
let holdCount = [];

//function to get the HTML Keys assign them values and store the key value pairs into an array of objects.
const getKeys = () => {
  for (let i = 0; i < key.length; i++) {
    keys.push({
      calcKey: key[i].classList[1],
      value: key[i].innerText,
    });
  }

  return newNumber;
};

console.log(number);
console.log(keys);

getKeys();

document.querySelector('.clear').addEventListener('click', function () {
  number = [];
  newNumber = 0;
  count = 0;
  holdCount = [];
  document.querySelector('.number').innerText = '';
});

for (let i = 0; i < keys.length; i++) {
  let keyPress = keys[i].value;
  if (Number(keyPress) / Number(keyPress) === 1 || keys[i].calcKey === 'zero') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        number.push(keyPress);
        // console.log(number);
        newNumber = Number(number.join(''));
        console.log(newNumber);
        document.querySelector('.number').innerText = newNumber;
      });
  } else if (keyPress === '+') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        holdCount.push(newNumber);
        console.log(`starting with ${holdCount}`);
        let total = holdCount[1]
          ? holdCount[0] + holdCount[1]
          : holdCount[0] + 0;
        newNumber = 0;
        number = [];
        holdCount = [total];
        document.querySelector('.number').innerText = total;
        console.log(`total is ${total}`);

        //end loop
      });
  } else if (keyPress === '*') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        holdCount.push(newNumber);
        console.log(`starting with ${holdCount}`);
        let total = holdCount[1]
          ? holdCount[0] * holdCount[1]
          : holdCount[0] * 1;
        newNumber = 0;
        number = [];
        holdCount = [total];
        document.querySelector('.number').innerText = total;
        console.log(`total is ${total}`);
      });
  } else if (keyPress === '-') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        holdCount.push(newNumber);
        console.log(`starting with ${holdCount}`);
        let total = holdCount[1]
          ? holdCount[0] - holdCount[1]
          : holdCount[0] - 0;
        newNumber = 0;
        number = [];
        holdCount = [total];
        document.querySelector('.number').innerText = total;
        console.log(`total is ${total}`);
      });
  } else if (keyPress === '/') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        holdCount.push(newNumber);
        console.log(`starting with ${holdCount}`);
        let total = holdCount[1]
          ? holdCount[0] / holdCount[1]
          : holdCount[0] / 1;
        newNumber = 0;
        number = [];
        holdCount = [total];
        document.querySelector('.number').innerText = total;
        console.log(`total is ${total}`);
      });
  }
}

function addTen() {
  console.log(`10 plus the number= ${newNumber + 10}`);
}

document.querySelector('.addTen').addEventListener('click', addTen);
