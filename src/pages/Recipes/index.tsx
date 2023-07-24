import { useSearchParams } from "react-router-dom";
import FilterBar from "../../components/FilterBar";
import { FilterQuery } from "../../interfaces/filters";
import { useContext, useEffect, useState } from "react";
import { RecipeCardProps } from "../../interfaces/recipe";
import { getRecipes } from "../../utils/getRecipes";
import { cardFieldsQueries } from "../../constants";
import "./recipes.css"

import RecipeContextProvider, { RecipeContext } from "../../context";
import RecipeCard from "../../components/RecipeCard";
import RecipeCardSkeleton from "../../components/RecipeCard/RecipeCardSkeleton";
import RecipeContainer from "../../components/RecipeContainer";


const Recipes = () => {
    const [isFilterBarActive, setIsFiterBarActive] = useState(false);


    const toggleFilterBar = () => {
        setIsFiterBarActive(prev => !prev)
    }
    return (
        <>
            <RecipeContextProvider>
                <main>
                    <article className="article recipe-page">
                        <FilterBar active={isFilterBarActive} setActive={toggleFilterBar} />

                        <div className={`overlay ${isFilterBarActive ? "active" : ""}`} onClick={toggleFilterBar} ></div>

                       <RecipeContainer closeFilterBar={toggleFilterBar} />
                    </article>
                </main>
            </RecipeContextProvider>
        </>
    )
}

export default Recipes;