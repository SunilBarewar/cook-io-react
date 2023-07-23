import { AccordionProps,Filter } from "../interfaces/filters";
const cookingTime:Filter[] = [
    {
        title: "< 5 minutes",
        value: "5",
    },
    {
        title: "5 - 10 minutes",
        value: "5-10",
    },
    {
        title: "10 - 20 minutes",
        value: "10-20",
    },
    {
        title: "20 - 30 minutes",
        value: "20-30",
    },
    {
        title: "30 - 40 minutes",
        value: "30-40",
    },
    {
        title: "40 - 50 minutes",
        value: "40-50",
    },
    {
        title: "50 - 60 minutes",
        value: "50-60",
    },
    {
        title: "> 1 hours",
        value: "60+",
    },
];


const dietData:Filter[] = [
    {
        title: "Balanced",
        value: "balanced",
    },
    {
        title: "High Fiber",
        value: "high-fiber",
    },
    {
        title: "High Protein",
        value: "high-protein",
    },
    {
        title: "Low Carb",
        value: "low-carb",
    },
    {
        title: "Low Fat",
        value: "low-fat",
    },
    {
        title: "Low Sodium",
        value: "low-sodium",
    },
];


export const filters:AccordionProps[] = [
    {
        title: "Cooking Time",
        filter : "time",
        icon : "timer",
        filterOptions: cookingTime,
        id : "cook-time",
        type: "radio"
    },
    {
        title : "Diet",
        filter : "diet",
        icon : "spa",
        filterOptions : dietData,
        id : "diet",
        type : "checkbox"
    }
] 