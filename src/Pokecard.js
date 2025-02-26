import React from 'react';

const Pokecard = (props) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

    return (
        <>
            <div> Name: {props.name} </div>
            <img src={imgSrc} alt={`${props.name}'s image `}></img>
            <div> Type: {props.type} </div>
        </>
    )
}

export default Pokecard;