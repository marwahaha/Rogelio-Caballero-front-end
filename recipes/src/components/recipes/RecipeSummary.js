import React from 'react';


const RecipeSummary =(props)=>{
return (
    <div>
    <div style={{width:"600px"}}>
         <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src={props.recipe.img}/>
          <span class="card-title">{props.recipe.title}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">go</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
    </div>
   </div>

)

}
export default RecipeSummary;

