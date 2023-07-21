import { getTime } from "../../utils/getTime";
import { Recipe, RecipeCardProps } from "../../interfaces/recipe";
import "./recipeCard.css"
import { Link } from "react-router-dom";
const RecipeCard: React.FC<{ recipe: Recipe; index: number }> = ({ recipe, index }) => {
    const { image, label: title, totalTime: cookingTime, uri } = recipe;
    const delay = `${100 * index}ms`;
    return (
        <div className="card" style={{
            animationDelay: delay
        }}>

            <figure className="card-media img-holder">

                <img src={image} width="195" height="195" loading="lazy" alt={title} className="img-cover" />

            </figure>

            <div className="card-body">

                <h3 className="title-small">
                    <a href="./detail.html?recipe=${recipeId}" className="card-link">{title ?? "Untitled"}</a>
                    {/* <Link to={`/detail`}></Link> */}
                </h3>

                <div className="meta-wrapper">

                    <div className="meta-item">
                        <span className="material-symbols-outlined" aria-hidden="true">schedule</span>

                        <span className="label-medium">{getTime(cookingTime)}</span>
                    </div>

                    <button className={`icon-btn has-state`} aria-label="Add to saved-recipes">
                        <span className="material-symbols-outlined bookmark-add"
                            aria-hidden="true">bookmark_add</span>

                        {/* <span className="material-symbols-outlined bookmark"
                            aria-hidden="true">bookmark</span> */}
                    </button>

                </div>

            </div>

        </div >
    )
}

export default RecipeCard