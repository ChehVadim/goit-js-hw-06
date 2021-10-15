const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
console.log(ingredientsListEl);

ingredients.forEach(element => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = element;
  ingredientsItemEl.classList.add('item');
  ingredientsListEl.append(ingredientsItemEl);

  console.log(ingredientsItemEl);
});