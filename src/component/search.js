import React from 'react';
import { TextField } from '@material-ui/core';
const Search = (props) =>{
    return(
        <form onSubmit={props.submit} style={{margin:'2rem 0'}}>
          <TextField onChange={props.change} fullWidth label='Type something to search for image'
          />  
        </form>
    )
};

export default Search;