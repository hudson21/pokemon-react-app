import React, { Component } from 'react';
import axios from 'axios';

//Components
import Search from '../../components/UI/Search/Search';
import PokemonCardContainer from '../../container/PokemonCardContainer/PokemonCardContainer';
import Pokemons from '../../components/UI/Pokemons/Pokemons';

class AppContainer extends Component {
    state = {
        pokemons:null
    }

    componentWillMount() {
        this.fetchPokemons();
    }

    fetchPokemons = ( ) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
             .then(response => {
                 console.log(response.data);
                 this.setState({pokemons: response.data.results})
             })
             .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.pokemons);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-4">
                        <PokemonCardContainer/>
                    </div>
                    
                    <div className="col-xs-12 col-lg-8">
                        <Search />
                        {this.state.pokemons ? 
                            <Pokemons 
                                pokemonsData={this.state.pokemons}/>
                        : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default AppContainer;
