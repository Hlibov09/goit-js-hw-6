let counterValue = 0;
const btnIncrem = document.querySelector('[data-action="increment"]');
const btnDecrem = document.querySelector('[data-action="decrement"]');
const span = document.querySelector('#value');
const increment = () => {
    counterValue += 1
    document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1
    document.getElementById('value').textContent = counterValue;
};
btnIncrem.addEventListener('click', increment);
btnDecrem.addEventListener('click', decrement);
console.log(counterValue);
console.log(btnIncrem);
console.log(btnDecrem);