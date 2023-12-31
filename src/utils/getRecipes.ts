import { Recipe, RecipeCardProps } from "../interfaces/recipe";
import { cardFieldsQueries } from "../constants";
import { FilterQuery } from "../interfaces/filters";
import { encodeURL } from "./encodeURL";


const AUTH_PARAMS = `?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&type=${process.env.REACT_APP_TYPE}`;


export const getRecipes = async (queries: FilterQuery[]) => {
    queries = [...queries, ...cardFieldsQueries];
    const /** {String} */ query = encodeURL(queries);

    const url = `${process.env.REACT_APP_ACCESS_POINT}${AUTH_PARAMS}&${query}`;

    const response = await fetch(url);
    const data = await response.json();
 
    return data.hits;
}

export const getSingleRecipe = async(recipeId : string)=>{
    const query = encodeURL(cardFieldsQueries);
    const url = `${process.env.REACT_APP_ACCESS_POINT}/${recipeId}${AUTH_PARAMS}&${query}`;
    const response = await fetch(url);
    // console.log(response)
    return response;
}
