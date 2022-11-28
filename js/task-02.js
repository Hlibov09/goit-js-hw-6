const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients)
  const elements = document.querySelector(`ingredients`);
const list = document.querySelector(`ul`);
const array = [];
ingredients.forEach(item => {
  const ingredient = document.createElement(`li`);
  ingredient.classList.add(`item`);
  ingredient.textContent = item;
  array.push(ingredient);
});
console.log(array)
list.append(...array);