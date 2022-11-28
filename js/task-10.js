// let render = document.querySelector('[data-create]');
// let destroy = document.querySelector('[data-destroy]');
// let boxes = document.querySelector('boxes');
// render.addEventListener('click', getAmount);
// destroy.addEventListener('click', destroyBoxes);

// function getAmount() {
//   let amount = document.querySelector('#controls input').value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   let arr = [];
//   let basicSize = 30;
//   for (let i = 0; i < amount; i++){
//     let size = basicSize + i * 10;
//     let div = document.createElement("div");
//     let colorValue = getRandomHexColor();
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${colorValue}`;
//     arr.push(div);
//   }
//   boxes.append(...arr);
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


// let input = document.querySelector("#controls > input");
// let createBtn = document.querySelector("[data-createl]");
// let destroyDtn = document.querySelector("[data-destroy]");
// let box = document.querySelector("#boxes");

// createBtn.addEventListener("click", onCreateBoxes);
// destroyDtn.addEventListener("click", onDestroyBoxes);
// input.addEventListener("input", onNumberInput);

// let inputValue = 0;
// let size = 30;

// function onNumberInput(event) {
//   inputValue = event.currentTarget.value;
// }

// function onCreateBoxes(event) {
//   for (let i = 0; i < inputValue; i += 1) {
//     let createEL = document.createElement("div");
//     createEL.classList.add("js-box");
//     createEL.style.backgroundColor = getRandomHexColor();
//     let total = size + i * 10 + "px";
//     console.log(total);
//     createEL.style.width = total;
//     createEL.style.height = total;
    
//     box.append(createEL);

//   }
//   console.log(box.children);
// }

// function onDestroyBoxes() {
//   box.querySelectorAll("div").forEach((element) => element.remove());
// }

const input = document.querySelector("input");
const add = document.querySelector(".create");
const des = document.querySelector(".destroy");
const boxes = document.querySelector("#boxes");
  let size = 30;
add.addEventListener("click", onClick);
des.addEventListener("click", onDestroy);

function onClick() {
  const total = input.value;
  const markup = [];
  for (let i = 1; i <= total; i += 1) {
    size += 10;
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    markup.push(div);
  }
  boxes.append(...markup);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)
    .padStart(6, 0)}`;
}

function onDestroy() {
  boxes.innerHTML = "";
size = 30
}