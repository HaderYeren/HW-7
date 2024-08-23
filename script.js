
const categories = document.querySelectorAll('#categories .item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('ul li').length;
    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів: ${categoryItemsCount}`);
});

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.getElementById('ingredients');
const ingredientsItems = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});

ingredientsList.append(...ingredientsItems);

const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.getElementById('gallery');
const galleryItems = images.map(({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}" width="300"></li>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryItems);

let counterValue = 0;
const valueSpan = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});
