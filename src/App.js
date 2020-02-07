import React from 'react';

function Food({fav}) { // Food(props) === Food({fav})
  return (
  <h2 > I like {fav} </h2> // {props.fav} 
  )
}

function App() {
  return ( 
    <div>
    <h1 > hello React </h1> 
    <Food fav = "Kim" />
    </div>
  );
}

export default App;
