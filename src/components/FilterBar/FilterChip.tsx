import { ChangeEvent, useEffect, useState } from "react";

type FilterChipProps = {
    value: string,
    title: string,
    inputType: string,
    name: string,
    filterType: string,
    checked : boolean,
    updateSelectedFilters: (filterType: string, value: string , type : boolean,isChecked : boolean) => void
}

const FilterChip: React.FC<FilterChipProps> = ({
    title,
    value,
    inputType,
    name,
    filterType,
    updateSelectedFilters,
    checked
  }) => {
    const [isChecked,setIsChecked] = useState(checked);
   
    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      updateSelectedFilters(filterType,  value , inputType === "radio", !isChecked);
      setIsChecked(prev => !prev);
    };
    return (
      <label className="filter-chip label-large">
        {title}
        <input
          type={inputType}
          name={name}
          value={value}
          className="checkbox"
          onChange={handleChange}
          checked={isChecked}
        />
      </label>
    );
  };


  export default FilterChip;