import { useEffect, useState } from "react";
import Thumbnail from "../components/Thumbnail";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [prev, setPrev] = useState(null);
  const [current, setCurrent] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0`
  );
  const [next, setNext] = useState(null);

  useEffect(() => {
    fetchPokemon();
  });

  async function fetchPokemon() {
    const response = await fetch(current);
    if (response.ok) {
      const jsonList = await response.json();
      let pokemonPromises = [];
      jsonList.results.forEach((pokemon) => {
        pokemonPromises.push(getPokemon(pokemon.url));
      });
      setPrev(jsonList.previous);
      setNext(jsonList.next);

      const responses = await Promise.all(pokemonPromises);
      const promises = responses.map((response) => response.json());
      const list = await Promise.all(promises);
      const saved = [];
      list.forEach((pokemon) => saved.push(createPokemon(pokemon)));
      setPokemon(saved);
    }
  }

  function getPokemon(url) {
    return fetch(`${url}`);
  }

  function handleNextPage() {
    setCurrent(next);
  }

  function handlePrevPage() {
    setCurrent(prev);
  }

  function createPokemon(pokemon) {
    return {
      name: pokemon.name,
      type: pokemon.types[0].type.name, //TODO might have more than 1 type!
      img: pokemon.sprites.front_default,
      id: pokemon.id,
    };
  }

  return (
    <>
      <div className="bg-slate-200">
        <h1 className="text-3xl font-bold underline text-center">
          This is the Pokedex page!
        </h1>
        <div className="grid grid-cols-3 px-10">
          {pokemon.map((pokemon) => (
            <Thumbnail key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div className="py-10 flex">
          <button
            className="bg-red hover:bg-dark-red text-gray-800 font-bold py-2 px-4 rounded mx-auto border-4 border-gold"
            onClick={handlePrevPage}
          >
            Previous
          </button>
          <button
            className="bg-yellow hover:bg-gold text-gray-800 font-bold py-2 px-4 rounded mx-auto border-4 border-gold"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
  // TODO bg color for pages?
}
