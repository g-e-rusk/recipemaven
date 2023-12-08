import { getRecipesByMealType } from "./externalServices.mjs";

let recipes;

export default async function recipeList(selector, category) {
    category = category ?? window.location.search.split("?q=")[0];
    const el = document.querySelector(selector);
    recipes = await getRecipesByMealType(category);

    if (recipes.length < 1) {
        const breakfast = await getRecipesByMealType("Breakfast");
        const lunch = await getRecipesByMealType("Lunch");
        const dinner = await getRecipesByMealType("Dinner");
        const dessert = await getRecipesByMealType("Dessert");

        recipes = breakfast.concat(lunch, dinner, dessert);
    }
}
