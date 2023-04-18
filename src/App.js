import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./routes/Pokedex";
import About from "./routes/About";
import History from "./routes/History";
import Header from "./components/Header";
import PokemonInformation from "./routes/PokemonInformation";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Pokedex />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/history"
          element={<History />}
        />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonInformation />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
