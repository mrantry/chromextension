import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = ({ handleChange, value, handleFocus, handleBlur }) => {
    return (
        <div className="search">
            <TextField
                id="standard-search"
                label="Search student"
                type="search"
                margin="normal"
                onFocus={handleFocus}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};


export default Search;