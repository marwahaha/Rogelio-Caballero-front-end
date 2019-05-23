import React from 'react';


const SearchBar = props => {
    return (
      <div>
      <h1>YOUR RECIPES</h1>
           <div class="input-field col s6">
           
          <input id="icon_prefix1" type="text"   class="validate"  onKeyDown={props.searchRecipes}/>
          <label for="icon_prefix1"><i class="fas fa-search"></i></label>
        </div>
        </div>
    );
  };
  
  export default SearchBar;

