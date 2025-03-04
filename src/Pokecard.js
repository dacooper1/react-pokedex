import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{props.name} </div>
            <img className="Pokecard-img" src={imgSrc} alt={`${props.name}'s image`}></img>
            <div className="Pokecard-type"> Type: {props.type} </div>
        </div>
    )
}



export default Pokecard;