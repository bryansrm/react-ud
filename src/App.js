import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory'

export const App = () => {

  const [categories, setCategories] = useState(['Cateogria 1', 'Categoria 2', 'Categoria 3']);

  
  return (
    <div className="App">
      <h2>Giff Expert App</h2>
      <AddCategory setCategories={setCategories}/>
      {
        <ul>
          {
            categories.map( category =>  <li key={category}> {category} </li> )
          }
        </ul>
      }
    </div>
  );
}

export default App;
