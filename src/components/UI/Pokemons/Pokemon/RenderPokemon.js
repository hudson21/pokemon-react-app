import React from 'react';
import classes from './RenderPokemon.module.css';

const RenderPokemon = (props) => {
    return (
        <div onClick={() => props.click({props})} 
            className={`${classes.RenderPokemon} col-xs-6 col-lg-3` }>
            <img src={props.sprites.front_default} alt='Pokemon Logo' />
            <span className={classes.Id}>{props.id}</span>
            <div >{props.name}</div>
            <div style={{color: '#999995', fontSize: '18px'}}>
                Type: {props.types[0].type.name}
            </div>             
        </div>
    );
};

export default RenderPokemon;