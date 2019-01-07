import React from 'react';
import classes from './SearchResults.module.css';

const SearchResults = (props) =>{
    
    const {value, pokemons} = props;
    const filteredPokemons = pokemons.filter(pokemon => {
        return (pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) ||
                (pokemon.id.toString().toLowerCase().indexOf(value.toLowerCase()) !== -1)
    })
    return (
        <div className={classes.SearchResults}>
                {filteredPokemons.map(pokemon => {
                return <div onClick={()=> props.click({pokemon})} 
                            key={pokemon.id}>
                        <img src={pokemon.sprites.front_default} alt="pokemon"/>
                        <span>{pokemon.id} - {pokemon.name}</span>
                    </div>
                })}
        </div>
    );
    
};

export default SearchResults;