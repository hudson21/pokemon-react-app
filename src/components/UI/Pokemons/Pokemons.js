import React, {Component} from 'react';
import classes from './Pokemons.module.css';

//Components
import Pokemon from './Pokemon/Pokemon';

class Pokemons extends Component {
    
    render() {
        return (
            <div className={classes.PokemonsStyle}>
                {this.props.pokemonsData.map((pokemon, index) => {
                    return <Pokemon
                                pokemonsData={this.props.pokemonsData} 
                                key={index} 
                                url={pokemon}
                                click={this.props.click}/> })}
            </div>
        );
    }
    
};

export default Pokemons;