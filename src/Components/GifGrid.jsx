import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );


    
    return (
    <>
        <div className="title-card">
            <h3>Resultados de: {category}</h3>
        </div>
        {
            // si isLoading esta en true va a ejecutar 
            isLoading && <h2>Cargando....</h2>
        }
        <div className="card-grid" >
            {
                images.map( (image) => (
                    <GifItem 
                    key={image.id}
                    { ...image } // esparciendo todas las properties y luego para ser tomadas en el Gifitem
                    />
                ))
            }
        </div>
        
    
    </>
 )
}
