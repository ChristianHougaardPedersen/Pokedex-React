import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PokemonInformation({ id }) {
  // https://pokeapi.co/api/v2/pokemon-species/{id or name}/
  // FLAVOUR TEXT!
  const [pokemon, setPokemon] = useState([]);
  const [flavorText, setFlavorText] = useState([]);
  let { pokemonId } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    fetchPokemon();
  });

  function fetchPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((info) => {
        setPokemon({
          name: capitalizeFirstChar(info.name),
          type:
            info.types[0].type.name.charAt(0).toUpperCase() +
            info.types[0].type.name.slice(1),
          secondType:
            info.types[1]?.type.name.charAt(0).toUpperCase() +
            info.types[1]?.type.name.slice(1),
          height: info.height * 10,
          weight: info.weight * 0.1,
          hp: info.stats[0].base_stat,
          attack: info.stats[1].base_stat,
          defense: info.stats[2].base_stat,
        });
      });
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((response) => response.json())
      .then((info) => {
        setFlavorText({
          ft: info.flavor_text_entries[0].flavor_text,
        });
      });
  }

  let fancyPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  function back() {
    navigation("/");
  }

  function capitalizeFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function types() {
    if (pokemon.secondType) {
      return `${pokemon.type}/${pokemon.secondType}`;
    } else return pokemon.type;
  }

  // inspired by https://github.com/veekun/pokedex/issues/218#issuecomment-339841781
  function cleanFlavorText(flavortext) {
    console.log(flavortext);
    let updatedFT = flavortext;
    updatedFT = updatedFT.replace("\f", "\n");
    updatedFT = updatedFT.replace("\u00ad\n", "");
    updatedFT = updatedFT.replace("\u00ad", "");
    updatedFT = updatedFT.replace(" -\n", " - ");
    updatedFT = updatedFT.replace("-\n", "-");
    updatedFT = updatedFT.replace("\n", " ");
    return updatedFT;
  }

  return (
    <>
      <div className="block h-fit w-2/6 bg-slate-200 mx-auto my-6 rounded-2xl border-8 border-yellow">
        <div className="flex">
          <h1 className="mb-2 text-xl font-bold w-5/12 text-left">
            Name: {pokemon.name}
          </h1>
          <span className="w-1/3"></span>
          <h1 className="mb-2 text-2xl font-bold w-1/3 text-right px-2">HP: {pokemon.hp}</h1>
        </div>
        <img
          src={fancyPicture}
          alt={pokemon.name}
          className="mx-auto border-4 border-black rounded-2xl bg-white w-96"
        />
        <div className="block h-fit w-4/6 bg-slate-100 mx-auto my-1 rounded-2xl border-2 border-gold">
          <p className="mb-2 text-m font-bold text-center">
            {flavorText.ft}
          </p>
        </div>
        <div className="block h-fit w-4/6 bg-slate-100 mx-auto my-1 rounded-2xl border-2 border-gold">
          <h1 className="mb-2 text-m font-bold text-center">Type: {types()}</h1>
          <h1 className="mb-2 text-m font-bold text-center">Height: {pokemon.height} cm</h1>
          <h1 className="mb-2 text-m font-bold text-center">Weight: {pokemon.weight} kg</h1>
          <h1 className="mb-2 text-m font-bold text-center">Attack: {pokemon.attack}</h1>
          <h1 className="mb-2 text-m font-bold text-center">Defense: {pokemon.defense}</h1>
        </div>
      </div>
      <div className="flex w-2/6 mx-auto">
      <button
        className="w-full font-bold py-2 mx-auto
                         px-4 border-2 border-black 
                         rounded bg-dark-red hover:bg-red"
        onClick={back}
      >
        Back
      </button>
      </div>

    </>
  );
}
// TODO Fix flavortext convert - or remove it...
