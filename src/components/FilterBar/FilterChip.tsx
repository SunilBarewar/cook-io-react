import { ChangeEvent } from "react";

type FilterChipProps = {
    value: string,
    title: string,
    inputType: string,
    name: string,
    filterType: string,
    updateSelectedFilters: (filterType: string, value: string , type : boolean,isChecked : boolean) => void
}

const FilterChip: React.FC<FilterChipProps> = ({
    title,
    value,
    inputType,
    name,
    filterType,
    updateSelectedFilters,
  }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      updateSelectedFilters(filterType,  value , inputType === "radio", isChecked);
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
        />
      </label>
    );
  };


  export default FilterChip;