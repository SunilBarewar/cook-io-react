
import { Recipe } from "../interfaces/recipe";
import { getSingleRecipe } from "./getRecipes";


function addNewRecipe(newRecipe: savedRecipes) {
    const storedRecipesJSON = localStorage.getItem("savedRecipes");
    
    let storedRecipes = [];
    if (storedRecipesJSON !== null)
        storedRecipes = JSON.parse(storedRecipesJSON);

    // Add the new recipe to the array
    storedRecipes.push(newRecipe);

    // Convert the updated array back to JSON string
    const updatedRecipesJSON = JSON.stringify(storedRecipes);

    // Update the localStorage with the updated JSON string
    localStorage.setItem("savedRecipes", updatedRecipesJSON);

    console.log("New recipe added successfully.");
}

function removeRecipeById(recipeId: string) {
    const storedRecipesJSON = localStorage.getItem("savedRecipes");
    let storedRecipes = [];
    if (storedRecipesJSON)
        storedRecipes = JSON.parse(storedRecipesJSON);


    // Find the index of the recipe with the given ID
    const index = storedRecipes.findIndex((recipe: savedRecipes) => recipe.recipeId === recipeId);

    if (index !== -1) {
        // Remove the recipe from the array
        storedRecipes.splice(index, 1);

        // Convert the updated array back to JSON string
        const updatedRecipesJSON = JSON.stringify(storedRecipes);

        // Update the localStorage with the updated JSON string
        localStorage.setItem("savedRecipes", updatedRecipesJSON);

        console.log(`Recipe with ID ${recipeId} removed successfully.`);
    } else {
        console.log(`Recipe with ID ${recipeId} not found.`);
    }
}



export function getRecipeById(recipeId: string) {
    const storedRecipesJSON = localStorage.getItem("savedRecipes");
    let storedRecipes = [];
    if (storedRecipesJSON)
        storedRecipes = JSON.parse(storedRecipesJSON);



    // Find the recipe with the given ID
    const foundRecipe = storedRecipes.find((recipe: savedRecipes) => recipe.recipeId === recipeId);

    if (foundRecipe) {
        return true;
    } else {
        return false; // Recipe not found
    }
}
export const saveRecipe = async (recipeId: string) => {
    const isSaved = getRecipeById(recipeId);


    if (!isSaved) {
        const data = await (await getSingleRecipe(recipeId)).json();
        addNewRecipe({ ...data.recipe, recipeId });
    } else {
        removeRecipeById(recipeId);
    }

    return !isSaved;
}

type savedRecipes = Recipe & { recipeId: string };