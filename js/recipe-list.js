import recipeList from "./recipe-list.mjs";
import { getParam } from "./utils.mjs";


const category = getParam("category");
recipeList(".recipe-list", category);

