import { useEffect, useState } from "react";
import { getRecipes } from "../../api";
import "./tablist.css"
import RecipeCard from "../RecipeCard";
import RecipeCardSkeleton from "../RecipeCard/RecipeCardSkeleton";
import { Recipe } from "../../interfaces/recipe";



const tabs = ["breakfast", "lunch", "dinner", "snack", "Teatime"];

type TabButtonProps = {
    mealType: string,
    id: number,
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>,
    selectedTab: string
}

const TabButton: React.FC<TabButtonProps> = ({ mealType, id, setSelectedTab, selectedTab }) => {
    return (
        <>
            <button className="tab-btn title-small" role="tab" id="tab-1" aria-controls="panel-1"
                aria-selected={selectedTab === mealType} onClick={() => setSelectedTab(mealType)}>{mealType}</button>
        </>
    )
}
const cardFieldsQueries = [
    ["field", "uri"],
    ["field", "label"],
    ["field", "image"],
    ["field", "totalTime"],
]

const TabList = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [cards, setCards] = useState<Recipe[]>([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getRecipes([...cardFieldsQueries, ["mealType", selectedTab]]);
                setIsLoading(false);

                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedTab]);

    return (
        <section className="section tab">
            <div className="container">
                <div className="tab-list" role="tablist" aria-label="Meal type">

                    {
                        tabs.map((tab, index) => {
                            return <TabButton
                                key={index * 5}
                                id={index + 1}
                                mealType={tab}
                                setSelectedTab={setSelectedTab}
                                selectedTab={selectedTab}
                            />
                        })
                    }

                </div>

                <div className="tab-panel" role="tabpanel">
                    <div className="grid-list">
                        {

                            isLoading ? (Array.from({ length: 12 }).map((_, index) => (
                                <RecipeCardSkeleton key={index} />
                            )))
                                : (
                                    cards.map((card: Recipe, index) => {
                                        return (
                                            <RecipeCard key={card.uri} recipe={card} index={index} />
                                        )
                                    }))
                        }
                    </div>
                </div>


            </div>
        </section>
    )
}

export default TabList