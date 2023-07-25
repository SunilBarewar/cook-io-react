import React, { useEffect, useState } from "react"
import { AccordionProps, Filter, FilterQuery } from "../../interfaces/filters"
import FilterChip from "./FilterChip";
import { useSearchParams } from "react-router-dom";




const Accordion: React.FC<AccordionProps> = ({
    title,
    filterType,
    icon,
    filterQueries,
    inputType,
    handleSelectedQueries
  }) => {
    const [expanded, setExpanded] = useState(false);
    const [searchParams] = useSearchParams();
    const [selectedFilters, setSelectedFilters] = useState<FilterQuery[]>([]);


    const isChipSelected = (filterValue:string) => {
      return selectedFilters.some((filter) => filter[1] === filterValue);
    }

  
    const updateSelectedFilters = (filterType: string, value: string, isRadio: boolean, isChecked: boolean) => {
        setSelectedFilters((prevFilters) => {
          if (isRadio) {
            // Handle radio input type
            if (isChecked) {
              const updatedFilters = prevFilters.filter((item) => item[0] !== filterType);
              updatedFilters.push([filterType, value]);
              return updatedFilters;
            }
          } else {
            // Handle checkbox input type
            if (isChecked) {
              return [...prevFilters, [filterType, value]];
            } else {
              const filterIndex = prevFilters.findIndex((item) => item[0] === filterType && item[1] === value);
              if (filterIndex !== -1) {
                // Filter exists, remove it from selectedFilters
                const updatedFilters = [...prevFilters];
                updatedFilters.splice(filterIndex, 1);
                return updatedFilters;
              }
            }
          }
          
          // Default return: return prevFilters unchanged if none of the conditions match
          return prevFilters;
        });
        
      };

      useEffect(()=>{
        setSelectedFilters(searchParams.getAll(filterType).map((query) => [filterType,query]));
      },[searchParams]);

      useEffect(()=>{
        handleSelectedQueries(filterType,selectedFilters);
      },[selectedFilters])
    return (
      <div className="accordion-container">
        <button
          className="accordion-btn has-state"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
          <p className="label-large">{title}</p>
          <span className="material-symbols-outlined trailing-icon" aria-hidden="true">
            expand_more
          </span>
        </button>
        <div className="accordion-content">
          <div className="accordion-overflow">
            {filterQueries.map((item: Filter) => {
              return (
                <FilterChip
                  key={item.title}
                  {...item}
                  inputType={inputType}
                  name={inputType === "radio" ? filterType : title}
                  filterType={filterType}
                  updateSelectedFilters={updateSelectedFilters}
                  checked={isChipSelected(item.value)} 
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  export default Accordion