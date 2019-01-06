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

    componentDidUpdate() {
        axios.get(`${this.props.url}`)
             .then(response => this.setState({pokemon: response.data}))
             .catch(error => console.log(error))
    }
    
    render(){
        return (
            <Auxiliar>
                {this.state.pokemon 
                    ? <RenderPokemon 
                        {...this.state.pokemon}
                        click={this.props.click}/> 
                    : null}
            </Auxiliar>
        );
    }
};

export default Pokemon;