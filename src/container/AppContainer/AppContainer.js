import React, { Component } from 'react';
import axios from 'axios';

//Components
import Search from '../../components/UI/Search/Search';
import PokemonCardContainer from '../../container/PokemonCardContainer/PokemonCardContainer';
import Pokemons from '../../components/UI/Pokemons/Pokemons';

class AppContainer extends Component {
    state = {
        pokemons:null,
        pokemon:null
    }

    componentWillMount() {
        this.fetchPokemons();
    }

    fetchPokemons = ( ) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
             .then(response => {
                 this.setState({pokemons: response.data.results})
             })
             .catch(error => console.log(error));
    }

    clickPokemon = ({props}) => {
        this.setState({pokemon:props});
    }

    render() {
        console.log(this.state.pokemon)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-4">
                    {this.state.pokemon
                        ? <PokemonCardContainer
                            id={this.state.pokemon.id}
                            name={this.state.pokemon.name}
                            image={this.state.pokemon.sprites.front_default}
                            experience={this.state.pokemon.base_experience}
                            height={this.state.pokemon.height}
                            weight={this.state.pokemon.weight}
                            abilities={this.state.pokemon.abilities}
                            types={this.state.pokemon.types}
                            order={this.state.pokemon.order}
                            />   
                        :<PokemonCardContainer/>}
                        
                    </div>
                    
                    <div className="col-xs-12 col-lg-8">
                        <Search />
                        {this.state.pokemons ? 
                            <Pokemons 
                                pokemonsData={this.state.pokemons}
                                click={this.clickPokemon}/>
                        : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default AppContainer;
