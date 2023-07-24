import { getTime } from "../../utils/getTime";
import { Recipe, RecipeCardProps } from "../../interfaces/recipe";
import "./recipeCard.css"
import { Link } from "react-router-dom";
import { getRecipeById, saveRecipe } from "../../utils/saveRecipe";
import { useState } from "react";
const RecipeCard: React.FC<{ recipe: Recipe; index: number }> = ({ recipe, index }) => {
    const { image, label: title, totalTime: cookingTime, uri } = recipe;


    const  recipeId = uri.slice(uri.lastIndexOf("_") + 1);
    const [isSaved, setIsSaved] = useState(getRecipeById(recipeId));

    
    const delay = `${100 * index}ms`;

    const handleSaveRecipes = async() =>{
        const saved = await saveRecipe(recipeId);
        setIsSaved(saved);
    }
    return (
        <div className="card" style={{
            animationDelay: delay
        }}>

            <figure className="card-media img-holder">

                <img src={image} width="195" height="195" loading="lazy" alt={title} className="img-cover" />

            </figure>

            <div className="card-body">

                <h3 className="title-small">
                    <Link to={`/recipes/detail?recipe=${recipeId}`} className="card-link">{title ?? "Untitled"}</Link>
                </h3>

                <div className="meta-wrapper">

                    <div className="meta-item">
                        <span className="material-symbols-outlined" aria-hidden="true">schedule</span>

                        <span className="label-medium">{getTime(cookingTime)}</span>
                    </div>

                    <button className={`icon-btn has-state ${isSaved ? "saved" : "removed"}`} aria-label="Add to saved-recipes" onClick={handleSaveRecipes}>
                        <span className="material-symbols-outlined bookmark-add"
                            aria-hidden="true">bookmark_add</span>

                        <span className="material-symbols-outlined bookmark"
                            aria-hidden="true">bookmark</span>
                    </button>

                </div>

            </div>

        </div >
    )
}

export default RecipeCard