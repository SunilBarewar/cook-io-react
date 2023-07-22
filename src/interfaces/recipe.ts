export interface Recipe {
    image: string;
    label: string;
    totalTime: number;
    uri: string;
}

export interface RecipeCardProps {
    _links: {
        self: {
            href: string;
            title: string;
        };
    };
    recipe: Recipe;
}
