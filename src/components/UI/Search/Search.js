import React from 'react';
import classes from './Search.module.css';

const Search = (props) => {
    return (
        <form className={classes.Form} action="action_page.php">
            <button type="submit"><i className="fa fa-search"></i></button>
            <input 
                type="text" 
                placeholder="Search" 
                name="search"
                onChange={props.change}
                value={props.value}/>
        </form>
    );
};

export default Search;