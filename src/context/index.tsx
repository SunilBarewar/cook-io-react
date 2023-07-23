import React, { createContext, useReducer, Dispatch, ReactNode, useCallback } from 'react';
import { cardFieldsQueries } from '../constants';

type FilterQuery = [string, string];

type Action = {
  type: 'add' | 'remove' | 'reset';
  payload: FilterQuery;
}

const initialQueries: FilterQuery[] = [
  ['mealType', 'breakfast'],
  ['mealType', 'dinner'],
  ['mealType', 'lunch'],
  ['mealType', 'snack'],
  ['mealType', 'teatime'],
];

const reducer = (state: FilterQuery[], action: Action): FilterQuery[] => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((item) => (item[1] !== action.payload[1]));
    case 'reset':
      return initialQueries;
    default:
      return state;
  }
};

const useRecipeContext = (initState: typeof initialQueries) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const addQuery = useCallback((payload: FilterQuery) => dispatch({ type: "add", payload }), []);
  const removeQuery = useCallback((payload: FilterQuery) => dispatch({ type: "remove", payload }), []);
  const resetQuery = useCallback(() => dispatch({ type: 'reset', payload: ["field", "uri"] }), []);
  return { state, addQuery, removeQuery, resetQuery };
}

type RecipeContextType = ReturnType<typeof useRecipeContext>;

const initRecipeContext: RecipeContextType = {
  state: [],
  addQuery: (payload: FilterQuery) => { },
  removeQuery: (payload: FilterQuery) => { },
  resetQuery: () => { }
}

export const RecipeContext = createContext<RecipeContextType>(initRecipeContext);



const RecipeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const recipeContextValue = useRecipeContext(initialQueries);

  return (
    <RecipeContext.Provider value={recipeContextValue} >
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeContextProvider;
