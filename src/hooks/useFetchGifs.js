
// Haremos un CustomHook

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// HOOK es una simple funcion que regresa algo
export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const NewImages = await getGifs( category ) // instruccion que manda a hacer la peticio http
        setImages( NewImages );
        setIsLoading(false)
    }

    // useEffect( Hook ) sirve para disparar efectos secundarios
    useEffect( () =>{
        getImages();   
    },[]);

    return{
        images,
        isLoading
    }

}

