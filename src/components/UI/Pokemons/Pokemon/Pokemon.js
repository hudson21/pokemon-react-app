import React from 'react';

import classes from './Pokemon.module.css';


const Pokemon = (props) =>  {

    const pokemon = props;

    return (
        
        <div onClick={()=> props.click({pokemon})} 
            className={`${classes.RenderPokemon} col-xs-6 col-lg-3`}>
            {props.sprites.front_default 
                ? <img src={props.sprites.front_default} alt='Pokemon Logo' />
                : <span style={{color: 'red'}}>There is not image of this pokemon</span>}
            
            {!props.sprites.front_default
                ? <br/>
                : null}
            <span className={classes.Id}>{props.id}</span>
            <div >{props.name}</div>
            <div >
                Type: {props.types[0].type.name}
            </div>             
        </div>
    );
    
};

export default Pokemon;