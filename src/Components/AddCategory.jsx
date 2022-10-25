import { useState } from 'react'
//                     desestructuracion de las props 
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) =>{
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return; // tiene que haber al menos un caracter en el  inputValue 
        // console.log(inputValue);} 
        //setCategories( categories => [ inputValue, ...categories ]); // obtengo las categorias en el estado actual y insertamos el input seguido de la desestructuracion de categories
        onNewCategory(inputValue.trim());// envia el valor sin espacios
        setInputValue("");
    } 

  return (
    <form onSubmit={ onSubmit }>
        <input
           type= 'text'
           placeholder="Buscar Gifs"
           value={ inputValue }
           onChange ={  onInputChange }
        />
        <i id='search' className="fa-solid fa-magnifying-glass" onClick={onSubmit}></i>
       
    </form>
  )
}
