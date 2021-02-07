
const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputFoodName = document.getElementById('foodNameInput').value;

    if(inputFoodName === ""){
        console.log("empty");
    }
    getFoodName(inputFoodName);
});

const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const getFoodName = foodName => {
    const url = `${apiBase}${foodName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data));
}


const displayFoods = foods =>{
    const item = foods.meals;
    const parentDiv = document.getElementById('food-container');
    console.log(item);
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
    const url = `${apiDetail}${foodDetails}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => foodsDetails(data.meals))
}

const foodsDetails = food =>{
    console.log(food)
    const countryDetail = document.getElementById('foodsDetails')
    countryDetail.innerHTML=`
    <h5 class="asd">${food.strArea}</h5>
    <p>Population${food.strIngredient1}</p>
    <p>Population${food.strIngredient2}</p>
    <p>Population${food.strIngredient3}</p>
    <p>Population${food.strIngredient4}</p>
    <p>Population${food.strIngredient5}</p>
    <p>Population${food.strIngredient6}</p>
    <p>Population${food.strIngredient7}</p>
    <p>Population${food.strIngredient8}</p>
    `
}