import React from 'react';
import classes from './SearchResults.module.css';

const SearchResults = (props) =>{
    
    const {value, pokemons} = props;
    let filteredPokemons = null

    filteredPokemons = pokemons.filter(pokemon => {
        return (pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) ||
                (pokemon.id.toString().toLowerCase().indexOf(value.toLowerCase()) !== -1)
    })
    return (
        
        <div className={filteredPokemons.length > 0 ? classes.SearchResults : classes.Span}>
                { filteredPokemons.length > 0 
                    ? filteredPokemons.map(pokemon => {
                    return <div onClick={()=> props.click({pokemon})} 
                                key={pokemon.id}>
                            <img src={pokemon.sprites.front_default} alt="pokemon"/>
                            <span>{pokemon.id} - {pokemon.name}</span>
                        </div>})
                    : <span >There are not results for that word</span>
                }
        </div>
    );
    
};

export default SearchResults;