import React from 'react';
import classes from './RenderPokemon.module.css';

const RenderPokemon = (props) => {
    return (
        <div className={`${classes.RenderPokemon} col-xs-6 col-lg-3` }>
            <img src={props.image} alt='Pokemon Logo' />
            <span className={classes.Id}>{props.id}</span>
            <div >{props.name}</div>
            <div style={{color: '#999995', fontSize: '18px'}}>Type: {props.type}</div>             
        </div>
    );
};

export default RenderPokemon;