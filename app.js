
const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputFoodName = document.getElementById('foodNameInput').value;

    getFoodName(inputFoodName);
});

const api = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const getFoodName = foodName => {
    const url = `${api}${foodName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data));
}


const displayFoods = foods =>{
    const item = foods.meals;
    const parentDiv = document.getElementById('food-container');
    item.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food'
        const countryInfo = `
        <h3 class="meal">${meal.strMeal}</h3>
        <button onclick="getFoodDetails('foodDetails')" class="button">Details</button>
        ` 
        foodDiv.innerHTML = countryInfo;
        parentDiv.appendChild(foodDiv);
    });

}


const apiDetail = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

const getFoodDetails = foodDetails => {
    const url = `${apiDetail}${foodDetails}`
    fetch(url)
    .then (res => res.json())
    .then(data => foodsDetails(data))
}

const foodsDetails = food =>{
    const foodDetail = document.getElementById('foodsDetails')
    foodDetail.innerHTML=`
    <h5 class="asd">${food.strArea}</h5>
    <p>${food.strIngredient1}</p>
    <p>${food.strIngredient2}</p>
    <p>${food.strIngredient3}</p>
    <p>${food.strIngredient4}</p>
    <p>${food.strIngredient5}</p>
    <p>${food.strIngredient6}</p>
    <p>${food.strIngredient7}</p>
    <p>${food.strIngredient8}</p>
    `
}