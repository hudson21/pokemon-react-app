import React from 'react';
import Auxiliar from '../../../../hoc/Auxiliar/Auxiliar';

const Profile = (props) => { 
    
    const transformedAbilities = props.abilities.map((a, index) => 
    <span key={index} style={{fontSize: '12px'}}>{a.ability.name}  </span>
    );

    const transformedTypes = props.types.map((t, index) => (
    <span key={index} style={{fontSize: '12px'}}>{t.type.name}  </span>
    ));

    return (
        <Auxiliar>
        <div className='row' style={{marginBottom: '10px'}}>
            <div className="col-lg-3 col-xs-3" >
                <strong>Height:</strong> 
            </div>
            <div className="col-lg-3 col-xs-3" style={{textAlign: 'left'}}>
                <span>{props.height} m</span>
            </div>
            <div className="col-lg-3 col-xs-3">
                <strong>Weight:</strong> 
            </div>
            <div className="col-lg-3 col-xs-3">
                <span>{props.weight} kg</span>
            </div>
        </div>

        <div className='row' style={{marginBottom: '10px'}}>
            <div className="col-lg-3 col-xs-3" >
                <strong>Abilities:</strong> 
            </div>
            <div className="col-lg-3 col-xs-3" style={{textAlign: 'left'}}>
                <span>{transformedAbilities}</span>
            </div>
            <div className="col-lg-3 col-xs-3">
                <strong>Types:</strong> 
            </div>
            <div className="col-lg-3 col-xs-3">
                <span>{transformedTypes}</span>
            </div>
        </div>

        <div className='row' style={{marginBottom: '10px'}}>
            <div className="col-lg-3 col-xs-3" >
                <strong>Experience:</strong> 
            </div>
            <div className="col-lg-3 col-xs-3" style={{textAlign: 'left'}}>
                <span>{props.experience}</span>
            </div>
            <div className="col-lg-3 col-xs-3">
                <strong>Order:</strong> 
            </div>
            <div className="col-lg-3 col-xs-3">
                <span>{props.order}</span>
            </div>
        </div>


        </Auxiliar>
        
    );
};

export default Profile;