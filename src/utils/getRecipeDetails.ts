const AUTH_PARAMS = `?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&type=${process.env.REACT_APP_TYPE}`;

export const getRecipeDetails = async (id: string) => {
    const /** {String} */ url = `${process.env.REACT_APP_ACCESS_POINT}/${id}${AUTH_PARAMS}`;

    const response = await fetch(url);
    const data:recipeDetailsResponseType = await response.json();
    return data.recipe;

}


type recipeDetailsResponseType  = {
    "recipe": {
      "uri": "string",
      "label": "string",
      "image": "string",
      "totalTime"? : 0
      "images": {
        "THUMBNAIL": {
          "url": "string",
          "width": 0,
          "height": 0
        },
        "SMALL": {
          "url": "string",
          "width": 0,
          "height": 0
        },
        "REGULAR": {
          "url": "string",
          "width": 0,
          "height": 0
        },
        "LARGE": {
          "url": "string",
          "width": 0,
          "height": 0
        }
      },
      "source": "string",
      "url": "string",
      "shareAs": "string",
      "yield": 0,
      "dietLabels": [
        "string"
      ],
      "healthLabels": [
        "string"
      ],
      "cautions": [
        "string"
      ],
      "ingredientLines": [
        "string"
      ],
      "ingredients": [
        {
          "text": "string",
          "quantity": 0,
          "measure": "string",
          "food": "string",
          "weight": 0,
          "foodId": "string"
        }
      ],
      "calories": 0,
      "glycemicIndex": 0,
      "totalCO2Emissions": 0,
      "co2EmissionsClass": "A+",
      "totalWeight": 0,
      "cuisineType": [
        "string"
      ],
      "mealType": [
        "string"
      ],
      "dishType": [
        "string"
      ],
      "instructions": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "externalId": "string",
      "totalNutrients": {},
      "totalDaily": {},
      "digest": [
        {
          "label": "string",
          "tag": "string",
          "schemaOrgTag": "string",
          "total": 0,
          "hasRDI": true,
          "daily": 0,
          "unit": "string",
          "sub": {}
        }
      ]
    },
    "_links": {
      "self": {
        "href": "string",
        "title": "string"
      },
      "next": {
        "href": "string",
        "title": "string"
      }
    }
}