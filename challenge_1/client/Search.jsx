import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input type="text" onChange={props.handleChange} />
      <button onClick={props.handleSubmit}>Search</button>
    </div>
  )
}

export default Search;

