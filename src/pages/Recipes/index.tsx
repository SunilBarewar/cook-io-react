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


const Recipes = () => {
    const [searchParams] = useSearchParams();

    const [cards, setCards] = useState<RecipeCardProps[]>([]);
    const [isFilterBarActive, setIsFiterBarActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {state} = useContext(RecipeContext);

    let queryParamsArray: FilterQuery[] = [];
    searchParams.forEach((value, key) => {
        queryParamsArray.push([key, value]);
    });

    if (queryParamsArray.length === 0) {
        queryParamsArray = [['mealType', 'breakfast'], ['mealType', 'dinner'], ['mealType', 'lunch'], ['mealType', 'snack'], ['mealType', 'teatime']]
    }

    useEffect(() => {
        const fetchData = async () => {
            // console.log(queryParamsArray)
            try {
                setIsLoading(true)
                const data = await getRecipes([...cardFieldsQueries, ...queryParamsArray]);
                setIsLoading(false);
                // console.log(data)
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchParams])

    const handleApply = () =>{

    }

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

                        <div className="recipe-container container">

                            <div className="title-wrapper">

                                <h2 className="headline-small">
                                    All Recipes
                                </h2>

                                <button
                                    className="btn btn-secondary btn-filter has-icon has-state"
                                    aria-label="Open filter bar"
                                    onClick={toggleFilterBar}
                                >

                                    <span className="material-symbols-outlined" aria-hidden="true">filter_list</span>

                                    <div className="wrapper">

                                        <span className="label-large">Filters</span>

                                        <span className="badge label-small" data-filter-count>9</span>
                                    </div>
                                </button>
                            </div>

                            <div className="grid-list" data-grid-list>
                                {
                                    isLoading ? (Array.from({ length: 12 }).map((_, index) => (
                                        <RecipeCardSkeleton key={index*1.28} />
                                    )))
                                        :(
                                    cards.map((card: RecipeCardProps, index: number) => {
                                        return (
                                            <RecipeCard
                                                key={card.recipe.uri}
                                                recipe={card.recipe}
                                                index={index}
                                            />
                                        )
                                    }))
                                }
                            </div>

                            <div className="load-more grid-list">

                            </div>
                        </div>
                    </article>
                </main>
            </RecipeContextProvider>
        </>
    )
}

export default Recipes;