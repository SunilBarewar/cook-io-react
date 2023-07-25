import FilterBar from "../../components/FilterBar";
import { useEffect, useState } from "react";
import "./recipes.css"
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
           
                <main>
                    <article className="article recipe-page">
                        <FilterBar active={isFilterBarActive} setActive={toggleFilterBar} />

                        <div className={`overlay ${isFilterBarActive ? "active" : ""}`} onClick={toggleFilterBar} ></div>

                       <RecipeContainer closeFilterBar={toggleFilterBar} />
                    </article>
                </main>
            
        </>
    )
}

export default Recipes;