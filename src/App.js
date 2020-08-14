import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const App = () => {

  const [categories, setCategories] = useState(['Categoria 1']);

  
  return (
    <div className="App">
      <h2>Giff Expert App</h2>
      <AddCategory setCategories={setCategories}/>
      {
        <ul>
          {
            categories.map( category => (
              <GifGrid key={category} category={category} />
            ))
          }
        </ul>
      }
    </div>
  );
}

export default App;
