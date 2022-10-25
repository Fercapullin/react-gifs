import {useState} from 'react'
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {
    // creamos un hook para mantener el estado de la pagina
                                    // valor inicial de nuestro estado
    const [Categories, setCategories] = useState(['Hola']);

    const onAddCategory = (NewCategory) => {
        // Antes de insertar un nuevo valor validamos si existe o no
        if ( Categories.includes(NewCategory)) return;
        // setCategories(Categories.concat('One Piece'));
        setCategories([NewCategory, ...Categories]);
    }

  return (
    <>
          <div className='title'>
                <h1>Encuentra aqui tus gifs mas divertidos</h1>
                 
          </div>
          <AddCategory
          //  setCategories = { setCategories }
                    //    argumento que inmediatamente le mandamos a la funcion
              onNewCategory = { value => onAddCategory(value) }
          />
          
        {/* map permite barre cada elemento del arreglo y regresar algo nuevo */}
        { Categories.map( (category) => 
             <GifGrid 
             key={ category }
             category = {category}/>
        )}
    </>
  )
}
