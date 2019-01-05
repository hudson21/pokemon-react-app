import React from 'react';

import classes from './Logo.module.css';
import pokemonLogo from '../../../assets/images/logo-pokemon.png';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={pokemonLogo} alt='Pokemon Logo' />
        </div>
    );
};

export default Logo;