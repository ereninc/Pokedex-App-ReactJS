import React from "react";
import Pokedex from "./Pokedex";
import PokemonData from "../model/PokemonData";
import { totalExperience, checkWinner } from "../helpers/Helper";
import "../css/Pokegame.css";

function Pokegame() {
  let player1 = {};
  let player2 = {};
  const randomPokemons = PokemonData.sort(() => Math.random() - 0.5);
  player1.hand = randomPokemons.slice(0, 4);
  player2.hand = randomPokemons.slice(4, 8);
  player1.dexExperience = totalExperience(player1.hand);
  player2.dexExperience = totalExperience(player2.hand);
  checkWinner(player1, player2);

  return (
    <div>
      <h1>POKEGAME!</h1>
      <button
        className="Pokegame-btn-fight"
        type="submit"
        onClick={(e) => {
          onFight(e);
        }}
      >
        Fight
      </button>
      <h3 style={player1.isWinner ? { color: "green" } : { color: "red" }}>
        {player1.isWinner ? "Winning Hand" : "Losing Hand"}
      </h3>
      <Pokedex pokedex={player1.hand} dexExperience={player1.dexExperience} />
      <h3 style={player2.isWinner ? { color: "green" } : { color: "red" }}>
        {player2.isWinner ? "Winning Hand" : "Losing Hand"}
      </h3>
      <Pokedex pokedex={player2.hand} dexExperience={player2.dexExperience} />
    </div>
  );
}

function onFight(e) {
  //   e.preventDefault();
  window.location.reload(true);
}

export default Pokegame;
