
const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputFoodName = document.getElementById('foodNameInput').value;
    if(inputFoodName === ""){
        alert("Please give the item name");
    }else{
        getFoodName(inputFoodName);
    }
    
});

const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const getFoodName = foodName => {
    const url = `${apiBase}${foodName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals));
}


const displayFoods = foods =>{
    const parentDiv = document.getElementById('food-container');
    parentDiv.innerHTML = ''
        foods.forEach(meals => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food'
        foodDiv.innerHTML = `
        <div onclick="getFoodDetails(${meals.idMeal})">
        <div>
        <img class="image" src=${meals.strMealThumb}>
        </div>
        <h3>${meals.strMeal}</h3>
        </div>
        ` 
        parentDiv.appendChild(foodDiv);
            console.log(meals.strCategory)
        })
}

const apiId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const getFoodDetails = idMeal =>{
    const url = `${apiId}${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoodsDetails(data.meals))
    

}

const displayFoodsDetails = foodDetails => {
    const detailsDiv = document.getElementById('foodsDetails')
    detailsDiv.innerHTML = `
    <img class="detailImage" src=${foodDetails[0].strMealThumb}>
    <h2>${foodDetails[0].strMeal}<h2>
    <h4>Ingredient</h4>
    <p><span class="item">Drink Alternate:</span>${foodDetails[0].strDrinkAlternate}</p>
    <p><span class="item">Category</span>:${foodDetails[0].strCategory}</p>
    <p><span class="item">Area:</span>${foodDetails[0].strArea}</p>
    <p><span class="item">1:</span>${foodDetails[0].strIngredient1}</p>
    <p><span class="item">2:</span>${foodDetails[0].strIngredient2}</p>
    <p><span class="item">3:</span>${foodDetails[0].strIngredient3}</p>
    <p><span class="item">4:</span>${foodDetails[0].strIngredient4}</p>
    <p><span class="item">5:</span>${foodDetails[0].strIngredient5}</p>
    <p><span class="item">6:</span>${foodDetails[0].strIngredient6}</p>
    <p><span class="item">7:</span>${foodDetails[0].strIngredient7}</p>
    `
}
