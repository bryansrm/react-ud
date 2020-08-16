import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const App = () => {

  const [categories, setCategories] = useState(['homero']);

  
  return (
    <div className="App">
      <h2>Giff Expert App</h2>
      <AddCategory setCategories={setCategories}/>
      {
        <div>
          {
            categories.map( category => (
              <GifGrid key={category} category={category} />
            ))
          }
        </div>
      }
    </div>
  );
}

export default App;
