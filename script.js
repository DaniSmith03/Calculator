// console.log('hello I work');

let key = document.getElementsByClassName('key');

const keys = [];
let number = [];
let newNumber = undefined;
let count = 0;
let holdCount = [0];
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
  holdCount = [0];
  document.querySelector('.number').innerText = '';
});

for (let i = 0; i < keys.length; i++) {
  let keyPress = keys[i].value;
  if (Number(keyPress) / Number(keyPress) === 1 || keys[i].calcKey === 'zero') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        number.push(keyPress);
        console.log(number);
        newNumber = Number(number.join(''));
        console.log(newNumber);
        document.querySelector('.number').innerText = newNumber;
      });
  } else if (keyPress === '+') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        holdCount.push(newNumber);
        console.log(`this is the ${keyPress} key`);
        console.log(holdCount);
        count = holdCount[0] + holdCount[1];
        console.log(`this is the ${count}`);
        holdCount.push(count);
        holdCount.shift();
        holdCount.shift();
        console.log('updated hold count' + holdCount);
        newNumber = 0;
        number = [];
        document.querySelector('.number').innerText = count;
        return holdCount;
      });
  } else if (keyPress === '*') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        // holdCount.push(1);
        console.log(`this is the ${keyPress} key`);
        console.log(holdCount);
        count = holdCount[0] * holdCount[1];
        console.log(`this is the ${count}`);
        holdCount.push(count);
        holdCount.shift();
        holdCount.shift();
        console.log('updated hold count' + holdCount);
        newNumber = 0;
        number = [];
        document.querySelector('.number').innerText = count;
      });
  } else if (keyPress === '-') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        holdCount.push(newNumber);
        console.log(`this is the ${keyPress} key`);
        console.log(holdCount);
        count = holdCount[0] - holdCount[1];
        console.log(`this is the ${count}`);
        holdCount.push(count);
        holdCount.shift();
        holdCount.shift();
        console.log('updated hold count' + holdCount);
        newNumber = 0;
        number = [];
        document.querySelector('.number').innerText = count;
      });
  } else if (keyPress === '/') {
    document
      .querySelector(`.${keys[i].calcKey}`)
      .addEventListener('click', function () {
        holdCount.push(1);
        console.log(`this is the ${keyPress} key`);
        console.log(holdCount);
        count = holdCount[0] / holdCount[1];
        console.log(`this is the ${count}`);
        holdCount.push(count);
        holdCount.shift();
        holdCount.shift();
        console.log('updated hold count' + holdCount);
        newNumber = 0;
        number = [];
        document.querySelector('.number').innerText = count;
      });
  }
}

function addTen() {
  console.log(`10 plus the number= ${newNumber + 10}`);
}

document.querySelector('.addTen').addEventListener('click', addTen);

// }

// document.querySelector(`.${keys[i].calcKey}`).addEventListener('click', function () {
//   console.log('hi');
// });

// console.log(keys[9].value, typeof keys[9].value);
