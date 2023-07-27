import { useSearchParams } from "react-router-dom";
import { RecipeCardProps } from "../../interfaces/recipe";
import { useEffect, useState } from "react";
import { FilterQuery } from "../../interfaces/filters";
import { getRecipes } from "../../utils/getRecipes";
import RecipeCardSkeleton from "../RecipeCard/RecipeCardSkeleton";
import RecipeCard from "../RecipeCard";




const RecipeContainer:React.FC<{closeFilterBar:() => void}> = ({closeFilterBar}) => {
    const [searchParams] = useSearchParams();

    const [cards, setCards] = useState<RecipeCardProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
                const data = await getRecipes([...queryParamsArray]);
                setIsLoading(false);
                // console.log(data)
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchParams])
  return (
    <div className="recipe-container container">

    <div className="title-wrapper">

        <h2 className="headline-small">
            All Recipes
        </h2>

        <button
            className="btn btn-secondary btn-filter has-icon has-state"
            aria-label="Open filter bar"
            onClick={closeFilterBar}
        >

            <span className="material-symbols-outlined" aria-hidden="true">filter_list</span>

            <div className="wrapper">

                <span className="label-large">Filters</span>

                {/* <span className="badge label-small">9</span> */}
            </div>
        </button>
    </div>

    <div className="grid-list" data-grid-list>
        {
            isLoading ? (Array.from({ length: 12 }).map((_, index) => (
                <RecipeCardSkeleton key={index*1.28} />
            )))
                :(cards.length ?
            cards.map((card: RecipeCardProps, index: number) => {
                return (
                    <RecipeCard
                        key={card.recipe.uri}
                        recipe={card.recipe}
                        index={index}
                    />
                )
            }) : <p className="body-large">No recipes found</p>)
        }
    </div>

    <div className="load-more grid-list">

    </div>
</div>
  )
}

export default RecipeContainer