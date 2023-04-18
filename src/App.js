import "./App.css";
import { Outlet, Route, RouterProvider, Routes, createHashRouter } from "react-router-dom";
import Pokedex from "./routes/Pokedex";
import About from "./routes/About";
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
          path: "/about",
          element: <About />     
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
