import { Recipe, RecipeCardProps } from "../interfaces/recipe";

const AUTH_PARAMS = `?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&type=${process.env.REACT_APP_TYPE}`;


export const getRecipes = async (queries: any) => {
    const /** {String} */ query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");

    const url = `${process.env.REACT_APP_ACCESS_POINT}${AUTH_PARAMS}&${query}`;

    const response = await fetch(url);
    const data = await response.json();
 
    return data.hits;


}
