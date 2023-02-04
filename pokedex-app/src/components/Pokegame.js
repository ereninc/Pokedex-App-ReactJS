import React from "react";
import Pokedex from "./Pokedex";
import PokemonData from "../model/PokemonData";

function Pokegame() {
  let player1 = {};
  let player2 = {};
  const randomPokemons = PokemonData.sort(() => Math.random() - 0.5);
  let firstHand = randomPokemons.slice(0, 4);
  let secondHand = randomPokemons.slice(4, 8);
  player1.dexExperience = totalExperience(firstHand);
  player2.dexExperience = totalExperience(secondHand);
  checkWinner(player1, player2);

  return (
    <div>
      <h1>POKEGAME</h1>
      <h3 style={player1.isWinner ? { color: "green" } : { color: "red" }}>
        {player1.isWinner ? "Winning Hand" : "Losing Hand"}
      </h3>
      <Pokedex pokedex={firstHand} dexExperience={player1.dexExperience} />
      <h3 style={player2.isWinner ? { color: "green" } : { color: "red" }}>
        {player2.isWinner ? "Winning Hand" : "Losing Hand"}
      </h3>
      <Pokedex pokedex={secondHand} dexExperience={player2.dexExperience} />
    </div>
  );
}

function totalExperience(pokedex) {
  return pokedex.reduce((total, pokemon) => total + pokemon.base_experience, 0);
}

function checkWinner(player1, player2) {
  if (player1.dexExperience > player2.dexExperience) {
    player1.isWinner = true;
    player2.isWinner = false;
  } else {
    player1.isWinner = false;
    player2.isWinner = true;
  }
}

export default Pokegame;
