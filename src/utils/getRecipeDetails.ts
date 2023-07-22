const AUTH_PARAMS = `?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&type=${process.env.REACT_APP_TYPE}`;

export const getRecipeDetails = async (id: string) => {
    const /** {String} */ url = `${process.env.REACT_APP_ACCESS_POINT}/${id}${AUTH_PARAMS}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;

}