import React from 'react';

import pokeball from '../../../assets/images/pokeball.png';
import classes from './PokemonCardEmpty.module.css';

const PokemonCardEmpty = () => {
    return (
        <div className={classes.PokemonCardEmpty}>  
            <h3><strong>Empty State</strong></h3>
            <img src={pokeball} alt='Pokemon Logo' />
        </div>
    );
};

export default PokemonCardEmpty;