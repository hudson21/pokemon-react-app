import React from 'react';
import classes from './PokemonCardActive.module.css';

//Components
import Profile from './Profile/Profile';
import Percentages from './Percentages/Percentages';

const PokemonCardActive = (props) => {
    
    return (
        <div className={classes.PokemonCardActive}>
            <h3><strong>#{props.id} - {props.name}</strong></h3>

            <div className='row'>
                <div className='col-lg-6'>
                    <img src={props.image} alt='Pokemon' />
                </div>
                <div className='col-lg-6'>
                    <Percentages 
                        value={Math.floor((Math.random() * 100) + 1)} 
                        title="HP"/>
                    <Percentages 
                        value={Math.floor((Math.random() * 100) + 1)} 
                        title="Attack"/>
                    <Percentages 
                        value={Math.floor((Math.random() * 100) + 1)} 
                        title="Defense"/>
                    <Percentages 
                        value={Math.floor((Math.random() * 100) + 1)} 
                        title="Spped"/>
                    <Percentages 
                        value={Math.floor((Math.random() * 100) + 1)} 
                        title="Sp Atk"/>
                    <Percentages 
                        value={Math.floor((Math.random() * 100) + 1)}
                        title="Sp Def"/>
                </div>  
            </div>
        
            <hr/>
            
            <h4><strong>Profile</strong></h4>
            <Profile {...props}/>
        </div>
    );
};

export default PokemonCardActive;