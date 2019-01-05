import React from 'react';
import classes from './Pokemons.module.css';

//Components
import Pokemon from './Pokemon/Pokemon';

const Pokemons = (props) => {

    let orderPokemons =  props.pokemonsData.map((pokemon, index) => {
        if(!props.base && !props.final){
            return (index >= 0 && index <= 49) 
                    ? <Pokemon key={index} name={pokemon.name} url={pokemon.url}/>
                    : null;
        }
    });
    
    return (
        <div className={classes.PokemonsStyle}>
            {orderPokemons}
        </div>
    );
};

export default Pokemons;