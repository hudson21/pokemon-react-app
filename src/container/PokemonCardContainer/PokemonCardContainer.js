import React from 'react';
import classes from './PokemonCardContainer.module.css';


//Components
import PokemonCardActive from '../../components/UI/PokemonCardActive/PokemonCardActive';
import PokemonCardEmpty from '../../components/UI/PokemonCardEmpty/PokemonCardEmpty';

const PokemonCardContainer = (props) => {
    
    return (
        <div className={classes.PokemonCardContainer}>
            {props.id 
                ?<PokemonCardActive 
                    {...props}/>
                :<PokemonCardEmpty />}
        </div>
    );
};

export default PokemonCardContainer;