import {Filter, FilterData } from "../interfaces/filters";
const cookingTimeQueries:Filter[] = [
    {
        title: "< 5 minutes",
        value: "5",
    },
    {
        title: "5 - 10 minutes",
        value: "5-10",
    },
    {
        title: "10 - 20 minutes",
        value: "10-20",
    },
    {
        title: "20 - 30 minutes",
        value: "20-30",
    },
    {
        title: "30 - 40 minutes",
        value: "30-40",
    },
    {
        title: "40 - 50 minutes",
        value: "40-50",
    },
    {
        title: "50 - 60 minutes",
        value: "50-60",
    },
    {
        title: "> 1 hours",
        value: "60+",
    },
];


const dietQueries:Filter[] = [
    {
        title: "Balanced",
        value: "balanced",
    },
    {
        title: "High Fiber",
        value: "high-fiber",
    },
    {
        title: "High Protein",
        value: "high-protein",
    },
    {
        title: "Low Carb",
        value: "low-carb",
    },
    {
        title: "Low Fat",
        value: "low-fat",
    },
    {
        title: "Low Sodium",
        value: "low-sodium",
    },
];

const ingredientQueries:Filter[] = [
    {
      title: "< 5 ingredients",
      value: "5",
    },
    {
      title: "5 - 10 ingredients",
      value: "5-10",
    },
    {
      title: "10 - 20 ingredients",
      value: "10-20",
    },
    {
      title: "20 - 30 ingredients",
      value: "20-30",
    },
    {
      title: "> 30 ingredients",
      value: "30+",
    },
  ];

const calorieQueries : Filter[] = [
    {
      title: "< 50 calories",
      value: "50",
    },
    {
      title: "50 - 100 calories",
      value: "50-100",
    },
    {
      title: "100 - 200 calories",
      value: "100-200",
    },
    {
      title: "200 - 300 calories",
      value: "200-300",
    },
    {
      title: "300 - 400 calories",
      value: "300-400",
    },
    {
      title: "400 - 500 calories",
      value: "400-500",
    },
    {
      title: "> 500 calories",
      value: "500+",
    },
  ];
  const healthQueries = [
    {
      title: "Alcohol Cocktail",
      value: "alcohol-cocktail",
    },
    {
      title: "Alcohol Free",
      value: "alcohol-free",
    },
    {
      title: "Celery Free",
      value: "celery-free",
    },
    {
      title: "Crustacean Free",
      value: "crustacean-free",
    },
    {
      title: "Dairy Free",
      value: "dairy-free",
    },
    {
      title: "DASH",
      value: "DASH",
    },
    {
      title: "Egg Free",
      value: "egg-free",
    },
    {
      title: "Fish Free",
      value: "fish-free",
    },
    {
      title: "FODMAP Free",
      value: "fodmap-free",
    },
    {
      title: "Gluten Free",
      value: "gluten-free",
    },
    {
      title: "Immuno Supportive",
      value: "immuno-supportive",
    },
    {
      title: "Keto Friendly",
      value: "keto-friendly",
    },
    {
      title: "Kidney Friendly",
      value: "kidney-friendly",
    },
    {
      title: "Kosher",
      value: "kosher",
    },
    {
      title: "Low Fat Abs",
      value: "low-fat-abs",
    },
    {
      title: "Low Potassium",
      value: "low-potassium",
    },
    {
      title: "Low Sugar",
      value: "low-sugar",
    },
    {
      title: "Lupine Free",
      value: "lupine-free",
    },
    {
      title: "Mediterranean",
      value: "Mediterranean",
    },
    {
      title: "Mollusk Free",
      value: "mollusk-free",
    },
    {
      title: "Mustard Free",
      value: "mustard-free",
    },
    {
      title: "No Oil Added",
      value: "no-oil-added",
    },
    {
      title: "Paleo",
      value: "paleo",
    },
    {
      title: "Peanut Free",
      value: "peanut-free",
    },
    {
      title: "Pescatarian",
      value: "pescatarian",
    },
    {
      title: "Pork Free",
      value: "pork-free",
    },
    {
      title: "Red Meat Free",
      value: "red-meat-free",
    },
    {
      title: "Sesame Free",
      value: "sesame-free",
    },
    {
      title: "Shellfish-Free",
      value: "shellfish-free",
    },
    {
      title: "Soy Free",
      value: "soy-free",
    },
    {
      title: "Sugar Conscious",
      value: "sugar-conscious",
    },
    {
      title: "Sulfite Free",
      value: "sulfite-free",
    },
    {
      title: "Tree Nut Free",
      value: "tree-nut-free",
    },
    {
      title: "Vegan",
      value: "vegan",
    },
    {
      title: "Vegetarian",
      value: "vegetarian",
    },
    {
      title: "Wheat Free",
      value: "wheat-free",
    },
  ];
  
  const mealQueries = [
    {
      title: "Breakfast",
      value: "breakfast",
    },
    {
      title: "Dinner",
      value: "dinner",
    },
    {
      title: "Lunch",
      value: "lunch",
    },
    {
      title: "Snack",
      value: "snack",
    },
    {
      title: "Teatime",
      value: "teatime",
    },
  ];
  
  const dishQueries = [
    {
      title: "Biscuits and Cookies",
      value: "biscuits and cookies",
    },
    {
      title: "Bread",
      value: "bread",
    },
    {
      title: "Cereals",
      value: "cereals",
    },
    {
      title: "Condiments and Sauces",
      value: "condiments and sauces",
    },
    {
      title: "Desserts",
      value: "desserts",
    },
    {
      title: "Drinks",
      value: "drinks",
    },
    {
      title: "Main Course",
      value: "main course",
    },
    {
      title: "Pancake",
      value: "pancake",
    },
    {
      title: "Preps",
      value: "preps",
    },
    {
      title: "Preserve",
      value: "preserve",
    },
    {
      title: "Salad",
      value: "salad",
    },
    {
      title: "Sandwiches",
      value: "sandwiches",
    },
    {
      title: "Side Dish",
      value: "side dish",
    },
    {
      title: "Soup",
      value: "soup",
    },
    {
      title: "Starter",
      value: "starter",
    },
    {
      title: "Sweets",
      value: "sweets",
    },
  ];
  const cuisineQueries = [
    {
      title: "American",
      value: "american",
    },
    {
      title: "Asian",
      value: "asian",
    },
    {
      title: "British",
      value: "british",
    },
    {
      title: "Caribbean",
      value: "caribbean",
    },
    {
      title: "Central Europe",
      value: "central europe",
    },
    {
      title: "Chinese",
      value: "chinese",
    },
    {
      title: "Eastern Europe",
      value: "eastern europe",
    },
    {
      title: "French",
      value: "french",
    },
    {
      title: "Indian",
      value: "indian",
    },
    {
      title: "Italian",
      value: "italian",
    },
    {
      title: "Japanese",
      value: "japanese",
    },
    {
      title: "Kosher",
      value: "kosher",
    },
    {
      title: "Mediterranean",
      value: "mediterranean",
    },
    {
      title: "Mexican",
      value: "mexican",
    },
    {
      title: "Middle Eastern",
      value: "middle eastern",
    },
    {
      title: "Nordic",
      value: "nordic",
    },
    {
      title: "South American",
      value: "south american",
    },
    {
      title: "South East Asian",
      value: "south east asian",
    },
  ];
  
  

export const filters:FilterData[] = [
    {
        title: "Cooking Time",
        filterType : "time",
        icon : "timer",
        filterQueries: cookingTimeQueries,
        inputType: "radio"
    },
    {
        title : "Ingredients",
        filterType : "ingr",
        icon : "nutrition",
        filterQueries : ingredientQueries,
        inputType : "radio"
    },
    {
        title : "Calories",
        filterType : "calories",
        icon : "ulna_radius_alt",
        filterQueries : calorieQueries,
        inputType : "radio"
    },
    {
        title : "Diet",
        filterType : "diet",
        icon : "spa",
        filterQueries : dietQueries,
        inputType : "checkbox"
    },
    {
        title : "Health",
        filterType : "health",
        icon : "health_and_safety",
        filterQueries : healthQueries,
        inputType : "checkbox"
    },
    {
        title : "Meal",
        filterType : "mealType",
        icon : "restaurant",
        filterQueries : mealQueries,
        inputType : "checkbox"
    },
    {
        title : "Dish",
        filterType : "dishType",
        icon : "fastfood",
        filterQueries : dishQueries,
        inputType : "checkbox"
    },
    {
        title : "Cuisines",
        filterType : "cuisineType",
        icon : "public",
        filterQueries : cuisineQueries,
        inputType : "checkbox"
    }
] 