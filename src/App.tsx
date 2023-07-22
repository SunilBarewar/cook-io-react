import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import DetailPage from './pages/Detail';
import SavedRecipes from './pages/Saved-Recipes';
import Layout from './components/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
