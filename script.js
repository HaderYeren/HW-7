
let numbersWhile = document.getElementById("numbersWhile");
let num = 1;
while (num <= 10) {
    let li = document.createElement("li");
    li.textContent = num;
    numbersWhile.appendChild(li);
    num++;
}

let evenNumbersFor = document.getElementById("evenNumbersFor");
for (let i = 2; i <= 20; i += 2) {
    let li = document.createElement("li");
    li.textContent = i;
    evenNumbersFor.appendChild(li);
}

let multiplicationTable = document.getElementById("multiplicationTable");
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = `7 * ${i} = ${7 * i}`;
    multiplicationTable.appendChild(li);
}

let arrayWhile = document.getElementById("arrayWhile");
let arr = [1, 2, 3, 4, 5];
let index = 0;
while (index < arr.length) {
    let li = document.createElement("li");
    li.textContent = arr[index];
    arrayWhile.appendChild(li);
    index++;
}

let excludeSeven = document.getElementById("excludeSeven");
let arrExcludeSeven = Array.from({ length: 10 }, (_, i) => i + 1);
for (let num of arrExcludeSeven) {
    if (num === 7) {
        break;
    }
    let li = document.createElement("li");
    li.textContent = num;
    excludeSeven.appendChild(li);
}

let lessThanN = document.getElementById("lessThanN");
let n = 15;
let num = 1;
while (num < n) {
    let li = document.createElement("li");
    li.textContent = num;
    lessThanN.appendChild(li);
    num++;
    if (num >= n) {
        break;
    }
}

let notMultipleOfThree = document.getElementById("notMultipleOfThree");
num = 1;
while (num <= 20) {
    if (num % 3 === 0) {
        num++;
        continue;
    }
    let li = document.createElement("li");
    li.textContent = num;
    notMultipleOfThree.appendChild(li);
    num++;
}
