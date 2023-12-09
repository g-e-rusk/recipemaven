const baseUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id=310af93a&app_key=d6eba4a03231ebd6da931a75d4d81de2";


export async function getRecipesByMealType(mealType) {
    const response = await fetch(baseUrl + `&q=${mealType}`);
    const data = await response.json();
    console.log(data);

    const container = document.querySelector('.recipe-search-results');

    container.innerHTML = "";

    const header = `<h2 class="recipe-category-results">Recipe Type: ${mealType[0].toUpperCase()}${mealType.substring(1)}</h2>`;

    container.insertAdjacentHTML('beforeend', header);

    if (data.hits) {
        data.hits.forEach(hit => {

        const card = `
            <li class="myrecipecard">
                <a href="${hit.recipe.url}">
                <picture>
                <source media="(max-width: 480px)" srcset="${hit.recipe.images.THUMBNAIL.url}" />
                <img class="recipeimg" src="${hit.recipe.images.SMALL.url}" alt="${hit.recipe.label}" />
                </picture>
                </a>
                <h3 class="recipetitle">${hit.recipe.label}</h3>
                <h4 class="recipesource">Source: ${hit.recipe.source}</h4>
               
                </li>
                `;

                container.insertAdjacentHTML('beforeend', card);
    });
}
}
