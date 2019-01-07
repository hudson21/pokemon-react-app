import React from 'react';
import classes from './Pokemons.module.css';

//Components
import Pokemon from './Pokemon/Pokemon';

const Pokemons = (props) => {

    return (
        <div className={classes.PokemonsStyle}>
            {props.pokemonsData 
                ? props.pokemonsData.map((pokemon, index) => {
                    return <Pokemon
                            {...pokemon} 
                            key={index} 
                            click={props.click}/> })
                : null }
        </div>
    );
};

export default Pokemons;