import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import DetailPage from './pages/Detail';
import SavedRecipes from './pages/Saved-Recipes';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/recipes",
      element: <Recipes />
    },
    {
      path: "/detail",
      element: <DetailPage />
    },
    {
      path: "/saved-recipes",
      element: <SavedRecipes />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
