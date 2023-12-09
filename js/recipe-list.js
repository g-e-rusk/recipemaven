import recipeList from "./recipe-list.mjs";
import { getParam } from "./utils.mjs";
import searchModule from "./search.mjs";

const category = getParam("category");
recipeList(".recipe-list", category);

const searchInput = document.getElementById("#mySearch");
searchInput.addEventListener('keyup', searchModule.displayResults);