import React from 'react';

import classes from './Percentages.module.css';

const Percentages = (props) => {
    return (
        <div className='row'>
            <div className="col-xs-4 col-lg-4">
                <span className={classes.Title}>{props.title}</span>
            </div>
            <div className="col-xs-8 col-lg-8">
                <div className="progress" style={{float:'right'}}>
                    <div className="progress-bar progress-bar-striped" role="progressbar"
                     aria-valuemin="0" aria-valuemax="100" style={{width:`${props.value}%`}}>
                        {`${props.value}`}% Complete (success)
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Percentages;