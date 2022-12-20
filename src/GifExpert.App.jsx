import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Hola' ]);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) )return;

        setCategories([  newCategory, ...categories]);
        // console.log(newCategory);

        // categories.push('Valorant');
        // setCategories(cat => [...cat, 'Valorant']);
    }

  return (
    <>
        <h1>GifExpertApp By SebasCo ♫</h1>

        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
        />

        { 
          categories.map( ( category ) => (
            <GifGrid 
              key={ category } 
              category={ category} />
          ))
        }




    </>

    
  )
}
