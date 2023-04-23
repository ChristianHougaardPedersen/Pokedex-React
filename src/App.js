import "./App.css";
import { Outlet,  RouterProvider, createHashRouter } from "react-router-dom";
import Pokedex from "./routes/Pokedex";
import History from "./routes/History";
import Header from "./components/Header";
import PokemonInformation from "./routes/PokemonInformation";

function App() {

  const layout = (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </>
  )

  const router = createHashRouter([
    {
      element: layout,
      children: [
        {
          path: "/",
          element: <Pokedex />
        },
        {
          path: "/history",
          element: <History />
        },
        {
          path: "/pokemon/:pokemonId",
          element: <PokemonInformation />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )

}

export default App;
