import "../css/Pokedex.css";
import Pokecard from "./Pokecard";

function Pokedex(props) {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Total experience: {props.dexExperience}</h1>
      <div className="Pokedex-deck">
        {props.pokedex.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            name={pokemon.name}
            imageSource={pokemon.imageSource}
            type={pokemon.type}
            experiences={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
