import React from 'react';
import classes from './Pokemons.module.css';

//Components
import Pokemon from './Pokemon/Pokemon';

const Pokemons = (props) => {

    let orderPokemons =  props.pokemonsData.map((pokemon, index) => {
        if(!props.base && !props.final){
            return (index >= 0 && index <= 49) 
                    ? <Pokemon 
                        key={index} 
                        url={pokemon.url}
                        click={props.click}/>
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