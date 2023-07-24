import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"
import { getRecipeDetails } from "../../utils/getRecipeDetails";
import { getTime } from "../../utils/getTime";
import DetailPageSkeleton from "../../components/DetailPageSkeleton";
import './detail.css'
import { getRecipeById, saveRecipe } from "../../utils/saveRecipe";
type RecipeDetailType = {
    banner: {
        url: string,
        width: number,
        height: number
    },
    tags: string[]
    title: string,
    cookingTime: number,
    calories: number,
    servings: number,
    uri: string,
    ingredientsLines: string[]
    author: string,
    cuisineType: string[],
    dietLabels: string[],
    dishType: string[]

}
const initRecipeDetails: RecipeDetailType = {
    banner: {
        url: "", width: 0, height: 0
    },
    tags: [],
    title: "",
    cookingTime: 0,
    calories: 0,
    servings: 0,
    uri: "",
    ingredientsLines: [],
    author: "",
    cuisineType: [],
    dietLabels: [],
    dishType: [],
}
const DetailPage = () => {
    const [searchParams] = useSearchParams();
    const recipeId = searchParams.get("recipe") || "";
    const [recipeDetails, setRecipeDetails] = useState<RecipeDetailType>(initRecipeDetails);
    const [loading, setLoading] = useState(true);
    
    const [isSaved, setIsSaved] = useState(getRecipeById(recipeId));
    const handleSaveRecipes = async() =>{
        const saved = await saveRecipe(recipeId);
        setIsSaved(saved);
    }
    const {
        banner,
        tags,
        title,
        cookingTime,
        calories,
        servings,
        uri,
        ingredientsLines,
        author,
        cuisineType,
        dietLabels,
        dishType,
    } = recipeDetails;
    console.log(ingredientsLines)
    useEffect(() => {
        const fetchData = async () => {
            const {
                images: { REGULAR, LARGE, SMALL, THUMBNAIL },
                label: title,
                source: author,
                ingredients = [],
                totalTime: cookingTime = 0,
                calories = 0,
                cuisineType = [],
                dietLabels = [],
                dishType = [],
                yield: servings = 0,
                uri
            } =await getRecipeDetails(recipeId);
            const banner = LARGE ?? REGULAR ?? SMALL ?? THUMBNAIL;
            const tags = [...cuisineType, ...dietLabels, ...dishType];
            const ingredientsLines = ingredients.map(item => item.text);

            setRecipeDetails({
                banner,
                tags,
                title,
                cookingTime,
                calories,
                servings,
                uri,
                ingredientsLines,
                author,
                cuisineType,
                dietLabels,
                dishType
            });
            setLoading(false)
        }
        fetchData();
    }, [])
    return (
        <main className="detail-page-main">
            <article className="article detail-page" data-detail-container>
                {
                    loading ? <DetailPageSkeleton /> : (

                        <>
                            <figure className="detail-banner img-holder">

                                <img src={banner.url} alt={title} width={banner.width}
                                    height={banner.height} className="img-cover" />

                            </figure>

                            <div className="detail-content">

                                <div className="title-wrapper">
                                    {/*  */}
                                    <h1 className="display-small">{title ?? "Untitled"}</h1>

                                    <button className={`btn btn-secondary has-state has-icon ${isSaved ? "saved" : "removed"}`} onClick={handleSaveRecipes}>

                                        <span className="material-symbols-outlined bookmark-add" aria-hidden="true">bookmark_add</span>

                                        <span className="material-symbols-outlined bookmark" aria-hidden="true">bookmark</span>

                                        <span className="label-large saved-text">Save</span>
                                        <span className="label-large unsaved-text">Unsaved</span>
                                    </button>

                                </div>

                                <div className="detail-author label-large">
                                    <span className="span">by</span> {author}
                                </div>

                                <div className="detail-stats">
                                    <div className="stats-item">

                                        <span className="display-medium">{ingredientsLines.length}</span>

                                        <span className="label-medium">Ingredients</span>

                                    </div>
                                    <div className="stats-item">

                                        <span className="display-medium">{getTime(cookingTime).split(" ")[0]}</span>

                                        <span className="label-medium">{getTime(cookingTime).split(" ")[1]}</span>

                                    </div>
                                    <div className="stats-item">

                                        <span className="display-medium">{Math.round(calories)}</span>

                                        <span className="label-medium">Calories</span>

                                    </div>
                                </div>
            
                                {
                                    tags ? (<div className="tag-list">
                                        {
                                            tags.map((tag) => {
                                                let type = "";
                                                if (cuisineType.includes(tag)) {
                                                    type = "cuisineType";
                                                } else if (dietLabels.includes(tag)) {
                                                    type = "diet";
                                                } else {
                                                    type = "dishType";
                                                }

                                                return (
                                                    <Link to={`/recipes?${type}=${tag.toLowerCase()}`} className="filter-chip label-large">{tag}</Link>
                                                )
                                            })
                                        }
                                    </div>
                                    ) : ""
                                }

                                <h2 className="title-medium ingr-title">
                                    Ingredients
                                    <span className="label-medium">for {servings} Servings</span>
                                </h2>
                                
                                {
                                    ingredientsLines ? (
                                        <ul className="body-large ingr-list">
                                            {
                                                ingredientsLines.map((text) => {
                                                    return (
                                                        <li className="ingr-item">{text}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    ) : ""
                                }
                            </div>
                        </>
                    )
                }

            </article>
        </main >
    )
}

export default DetailPage