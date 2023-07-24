import React, { useEffect, useState } from 'react'
import "./saved-recipes.css"
import RecipeCardSkeleton from '../../components/RecipeCard/RecipeCardSkeleton';
import { Recipe } from '../../interfaces/recipe';
import RecipeCard from '../../components/RecipeCard';
const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedRecipesJSON = localStorage.getItem("savedRecipes");

        let storedRecipes = [];
        if (storedRecipesJSON !== null)
            storedRecipes = JSON.parse(storedRecipesJSON);

        storedRecipes = storedRecipes.map((item: any) => {
            const { recipeId, ...rest } = item;
            return rest;
        })
        console.log(storedRecipes)
        setLoading(false)
        setSavedRecipes(storedRecipes);
    }, [])
    return (
        <main>
            <article className="article container saved-recipe-page">
                <h2 className="headline-small section-title">All Saved Recipes</h2>

                <div className="grid-list">
                    {

                        loading ? (Array.from({ length: 10 }).map((_, index) => (
                            <RecipeCardSkeleton key={index} />
                        )))
                            : (
                                savedRecipes.map((card: Recipe, index) => {
                                    return (
                                        <RecipeCard
                                            key={card.uri}
                                            recipe={card}
                                            index={index}
                                        />
                                    )
                                }))
                    }
                </div>

                {
                    savedRecipes.length === 0 && <p className="body-large"> You don't saved any recipes yet!</p>
                }
            </article>
        </main>

    )
}

export default SavedRecipes