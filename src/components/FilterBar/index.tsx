import { filters } from '../../constants/filters'
import Accordion from './Accordion'
import './filterbar.css'
import { useSearchParams } from 'react-router-dom'
import { useContext } from 'react'
import { RecipeContext } from '../../context'
import { FilterQuery } from '../../interfaces/filters'
import { encodeURL } from '../../utils/encodeURL'
type FilterBarProps = {
    active : boolean
    setActive :() => void
}

const FilterBar = ({active, setActive}:FilterBarProps) => {
    const {state} = useContext(RecipeContext)
    const [searchParams, setSearchParams] = useSearchParams();

    // let queryParamsArray: FilterQuery[] = [];

    // searchParams.forEach((value, key) => {
    //     queryParamsArray.push([key, value]);
    // });
    const handleApply = () =>{
        const query =  encodeURL(state);
        setSearchParams(query);
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
                        <input type="search" name="search" id="search" placeholder="Search recipes"
                            autoComplete="off" className="input-field body-large" />
                    </div>

                </div>

                {
                    filters.map((filter) =>{
                        return (
                            <Accordion key={filter.title} {...filter} />
                        )
                    })
                }
            </div>

            <div className="filter-actions">

                <button className="btn btn-secondary label-large has-state">
                    Clear
                </button>

                <button className="btn btn-primary label-large" onClick={handleApply}>
                    Apply
                </button>

            </div>

        </div>
    )
}

export default FilterBar