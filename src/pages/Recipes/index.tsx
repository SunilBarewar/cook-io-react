import FilterBar from "../../components/FilterBar";
import { useEffect, useState } from "react";
import "./recipes.css"
import RecipeContextProvider from "../../context";
import RecipeContainer from "../../components/RecipeContainer";


const Recipes = () => {
    const [isFilterBarActive, setIsFiterBarActive] = useState(false);


    const toggleFilterBar = () => {
        setIsFiterBarActive(prev => !prev)
    }

    useEffect(()=>{
        document.title = "Recipes - Cookio"
    },[])
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