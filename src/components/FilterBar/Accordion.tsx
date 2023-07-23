import React, { ChangeEvent, useContext, useState } from "react"
import { AccordionProps } from "../../interfaces/filters"
import { RecipeContext } from "../../context"


type FilterChipProps = {
    value: string,
    title: string,
    type: string,
    name: string,
    filter : string
}



const FilterChip: React.FC<FilterChipProps> = ({ title, value, type, name,filter }) => {
    const {addQuery,removeQuery} = useContext(RecipeContext);
    const handleOnChange = (e :ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        // console.log(isChecked);
        if(isChecked){
            addQuery([filter,value]);
        }else{
            removeQuery([filter,value]);
        }
        // console.log(state);
    }
    
    return (
        <label className="filter-chip label-large">
            {title}
            <input
                type={type}
                name={name}
                value={value}
                className="checkbox"
                onChange={(e) => handleOnChange(e)}
            />
        </label>
    )
}




const Accordion: React.FC<AccordionProps> = ({ title, filter, icon, id, filterOptions, type }) => {
    const [expanded,setExpanded] = useState(false);
// [filter, value]
    const [selectedFilter, setSelectedFilters] = useState([])
    return (
        <div className="accordion-container">

            <button 
            className="accordion-btn has-state" 
            aria-controls={id} 
            aria-expanded={expanded}
            onClick={() => setExpanded(prev => !prev)}
            >
                <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>

                <p className="label-large">{title}</p>

                <span className="material-symbols-outlined trailing-icon" aria-hidden="true">expand_more</span>
            </button>

            <div className="accordion-content" id={id}>

                <div className="accordion-overflow">

                    {
                        filterOptions.map((item: any) => {
                            return (
                                <FilterChip key={item.title} title={item.title} value={item.value} type={type} name={type === "radio" ? id : title} filter={filter}/>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Accordion