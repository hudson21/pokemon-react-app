import React, {Component} from 'react';
import classes from './PokemonCardActive.module.css';

//Components
import Profile from './Profile/Profile';
import Percentages from './Percentages/Percentages';

class PokemonCardActive extends Component{
    
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.id !== this.props.id)
    }

    render() {
        
        return (
            <div className={classes.PokemonCardActive}>
                <h3><strong>#{this.props.id} - {this.props.name}</strong></h3>
    
                <div className='row'>
                    <div className="col-lg-6">
                        {this.props.image
                            ? <img src={this.props.image} alt='Pokemon' className={classes.Img}/>
                            : <span style={{color: 'red'}}>There is not image of this pokemon</span>}
                        
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
                <Profile {...this.props}/>
            </div>
        );
    }
    
};

export default PokemonCardActive;