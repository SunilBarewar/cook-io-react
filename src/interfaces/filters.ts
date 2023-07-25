export type FilterQuery = [string, string];
export type Filter ={
    title :string,
    value :string
}
export type FilterData = {
    title: string,
    filterType: string,
    icon: string,
    filterQueries: Filter[],
    inputType: string,
}
export type AccordionProps = FilterData & {handleSelectedQueries : (filterType : string, queries:FilterQuery[]) => void};
    
    
