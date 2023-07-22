import React, { useEffect, useState } from 'react'
import { RecipeCardProps } from '../../interfaces/recipe';
import { getRecipes } from '../../utils/getRecipes';
import { cardFieldsQueries } from '../../constants';
import './slider.css'
import RecipeCardSkeleton from '../RecipeCard/RecipeCardSkeleton';
import RecipeCard from '../RecipeCard';
import { Link } from 'react-router-dom';
type SliderProps ={
  cuisineType : string,
  index?:number
}

const Slider:React.FC<SliderProps> = ({cuisineType,index}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<RecipeCardProps[]>([])
  useEffect(() =>{
    const fetchData = async () => {
      try {
          setIsLoading(true)
          const data = await getRecipes([...cardFieldsQueries, ["cuisineType", cuisineType]]);
          setIsLoading(false);
          setCards(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  fetchData();
  },[])
  return (
    <section className="section slider-section" aria-labelledby={`slider-label-${index}`}>
        <div className="container">
            <h2 className="section-title headline-small" id={`slider-label-${index}`}>
                Latest {cuisineType} Recipes
            </h2>

            <div className="slider">

                <ul className="slider-wrapper">
                    {
                      isLoading ? Array.from({ length: 12 }).map((_, index) =>{
                        return (
                          <li className="slider-item">
                            <RecipeCardSkeleton key={index*12} />
                          </li>
                        )
                      }) : (
                        cards.map(({recipe}:RecipeCardProps, index : number) =>{
                          return (
                            <li className="slider-item">
                            <RecipeCard key={recipe.uri} recipe={recipe} index={index} />
                            </li>
                          )
                        })
                      )
                    }
                    <li className="slider-item">
                <Link to={`/recipes?cuisineType=${cuisineType}`} className="load-more-card has-state">
                    <span className="label-large">Show more</span>

                    <span className="material-symbols-outlined" aria-hidden="true">navigate_next</span>
                </Link>
            </li>
                </ul>

            </div>
        </div>
    </section>
  )
}

export default Slider