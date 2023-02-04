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

export { totalExperience, checkWinner };
