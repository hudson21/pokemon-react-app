import React, { Component } from 'react';
import axios from 'axios';

//Components
import Search from '../../components/UI/Search/Search';
import PokemonCardContainer from '../../container/PokemonCardContainer/PokemonCardContainer';
import Pokemons from '../../components/UI/Pokemons/Pokemons';
import Pagination from '../../components/UI/Pagination/Pagination';

class AppContainer extends Component {
    state = {
        pokemons:null,
        pageOfItems: null,
        pokemon:null,
        valueSearch: '',
        pokemonsToRender: null
    }

    componentWillMount() {
        this.fetchAllPokemons();
    }

    fetchAllPokemons = ( ) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
             .then(response => {
                 this.setState({pokemons: response.data.results})
             })
             .catch(error => console.log(error));
    }

    fetchPokemonsToRender = (pokemons) => {        
        let promiseArray = pokemons.map(url => axios.get(url));
        axios.all(promiseArray)
        .then((results) => {
            let temp = results.map(r => r.data);
            return temp
        })
        .then(data => this.setState({pokemonsToRender: data}))
    }

    clickPokemon = ({props}) => {
        this.setState({pokemon:props});
    }

    onChangeSearch = (event) => {
        this.setState({valueSearch: event.target.value})
    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.fetchPokemonsToRender(pageOfItems);
        this.setState({ pageOfItems: pageOfItems });
    }

    render() { 
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
                        <Search 
                            change={this.onChangeSearch}
                            value={this.state.valueSearch}/>
                        {this.state.pageOfItems
                            ? <Pokemons 
                                pokemonsData={this.state.pokemonsToRender}
                                click={this.clickPokemon}
                                />
                            : null}
                       
                        <div className='text-center'>
                            {this.state.pokemons
                                ? <Pagination 
                                    items={this.state.pokemons}
                                    onChangePage={this.onChangePage}/>
                                : null}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default AppContainer;
