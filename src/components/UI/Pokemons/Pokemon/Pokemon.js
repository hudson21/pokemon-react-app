import React, { Component } from 'react';
import axios from 'axios';

import Auxiliar from '../../../../hoc/Auxiliar/Auxiliar';

//Components
import RenderPokemon from './RenderPokemon';

class Pokemon extends Component {

    state = {
        pokemon:null
    }

    componentWillMount() {
        axios.get(`${this.props.url}`)
             .then(response => this.setState({pokemon: response.data}))
             .catch(error => console.log(error))
    }
    
    
    render(){
        console.log(this.state.pokemon)
        return (
            <Auxiliar>
                {this.state.pokemon 
                    ? <RenderPokemon 
                        id={this.state.pokemon.id}
                        name={this.state.pokemon.name}
                        type={this.state.pokemon.types[0].type.name}
                        image={this.state.pokemon.sprites.front_default}/> 
                      
                    : null}
            </Auxiliar>
        );
    }
};

export default Pokemon;