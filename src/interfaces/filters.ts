export type FilterQuery = [string, string];
export type Filter ={
    title :string,
    value :string
}
export type AccordionProps = {
    title: string,
    filter: string,
    icon: string,
    id: string
    filterOptions: Filter[],
    type: string
}