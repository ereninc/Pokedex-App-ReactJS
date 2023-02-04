import "../css/Pokedex.css";
import Pokecard from "./Pokecard";

function Pokedex() {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-deck">
        <Pokecard
          name="Charmander"
          imageSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
          type="Fire"
          experiences="62"
        />
        <Pokecard
          name="Squirtle"
          imageSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
          type="Water"
          experiences="63"
        />
        <Pokecard
          name="Metapod"
          imageSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png"
          type="Bug"
          experiences="72"
        />
        <Pokecard
          name="Butterfree"
          imageSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"
          type="Flying"
          experiences="178"
        />
        <Pokecard
          name="Pikachu"
          imageSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"
          type="Electric"
          experiences="112"
        />
        <Pokecard
          name="Jigglypuff"
          imageSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png"
          type="Normal"
          experiences="95"
        />
        <Pokecard
          name="Gengar"
          imageSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png"
          type="Poison"
          experiences="225"
        />
        <Pokecard
          name="Eevee"
          imageSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png"
          type="Normal"
          experiences="65"
        />
      </div>
    </div>
  );
}

export default Pokedex;
