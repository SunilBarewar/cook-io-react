import { filters } from '../../constants/filters'
import Accordion from './Accordion'
import './filterbar.css'
import {useSearchParams } from 'react-router-dom'
import {useRef, useState } from 'react'

import { FilterQuery } from '../../interfaces/filters'
import { encodeURL } from '../../utils/encodeURL'
type FilterBarProps = {
    active: boolean
    setActive: () => void
}
type Queries = {
    [key: string]: FilterQuery[];
}
const FilterBar = ({ active, setActive }: FilterBarProps) => {
    const [_, setSearchParams] = useSearchParams();
    const searchQuery = useRef<HTMLInputElement>(null);

    const [selectedQueries, setSelectedQueries] = useState<Queries>({});

    const handleSelectedQueries = (filterType: string, queries: FilterQuery[]) => {
        setSelectedQueries((prevQueries) => {
            return {
                ...prevQueries,
                [filterType]: queries
            }

        });
    }
    
    const applyFilters = () => {
        // console.log(selectedQueries);
        let query = "";
        if(searchQuery.current?.value.trim()){
            query += `q=${searchQuery.current?.value.trim()}`;
        }
        for (let key in selectedQueries) {
            let queries = selectedQueries[key];
            if (query)
                query += "&" + encodeURL(queries);
            else
                query += encodeURL(queries);
        }
        
        setSearchParams(query, { replace: true });
        setActive();
    }
    const clearFilters = () => {
        setSearchParams("", { replace: true });
        setSelectedQueries({});
    }
    return (
        <div className={`filter-bar ${active ? "active" : ""}`}>

            <div className="title-wrapper">

                <span className="material-symbols-outlined" aria-hidden="true">filter_list</span>

                <p className="title-medium">Filters</p>

                <button className="icon-btn close-btn has-state" aria-label="Close filter bar" onClick={setActive}>
                    <span className="material-symbols-outlined" aria-hidden="true">close</span>
                </button>

            </div>

            <div className="filter-content">

                <div className="search-wrapper">

                    <div className="input-outlined">
                        <label htmlFor="search" className="body-large label">Search</label>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search recipes"
                            autoComplete="off"
                            className="input-field body-large"
                            onKeyDown={(e)=>{if(e.key === 'Enter') applyFilters()}}
                            ref={searchQuery}
                        />
                    </div>

                </div>

                {
                    filters.map((filter) => {
                        return (
                            <Accordion key={filter.title} {...filter} handleSelectedQueries={handleSelectedQueries} />
                        )
                    })
                }
            </div>

            <div className="filter-actions">

                <button className="btn btn-secondary label-large has-state" onClick={clearFilters}>
                    Clear
                </button>

                <button className="btn btn-primary label-large" onClick={applyFilters}>
                    Apply
                </button>

            </div>

        </div>
    )
}

export default FilterBar