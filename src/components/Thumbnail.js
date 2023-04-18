import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Thumbnail(properties) {
  const [name, setName] = useState(properties.pokemon.name);
  const navigation = useNavigate();
  useEffect(() => {
    styleName();
  });

  function styleName() {
    // Capitalize first char of name
    let prettyName = name.charAt(0).toUpperCase() + name.slice(1);
    // Remove - in names
    if (prettyName.includes("-")) prettyName = prettyName.replace("-", " ");
    setName(prettyName);
  }

  function details() {
    console.log(`Clicked ID# ${properties.pokemon.id}`); //TODO remove
    navigation(`/pokemon/${properties.pokemon.id}`);
  }

  return (
    <>
      <div
        className="block max-w-sm  mb-2 border-4
                 border-gold hover:bg-slate-400 
                 hover:border-8 hover:border-dark-red rounded-2xl"
        onClick={details}
      >
        <p className="mb-2 text-2xl font-bold text-center">#{properties.pokemon.id}</p>
        <img
          src={properties.pokemon.img}
          alt={properties.pokemon.name}
          className="w-28 h-28 mx-auto"
        />
        <h1 className="mb-2 text-2xl font-bold text-center">{name}</h1>
      </div>
    </>
  );
}
