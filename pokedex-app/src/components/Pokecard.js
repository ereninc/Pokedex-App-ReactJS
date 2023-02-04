import "../css/Pokecard.css";

function Pokecard(props) {
  return (
    <div className="Pokecard">
      <div className="Pokecard-stats">
        <div className="Pokecard-image">
          <img src={props.imageSource} alt="Pokeimage" />
        </div>
        <div className="Pokecard-text">
          <p className="Pokecard-title">{props.name}</p>
          <p className="Pokecard-type">Type: {props.type}</p>
          <p className="Pokecard-exp">Exp: {props.experiences}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokecard;
