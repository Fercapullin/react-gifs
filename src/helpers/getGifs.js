export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=mno5t249sx7pzYVSPHSZts6UM3139Igf&q=${category}&limit=10`
    const resp = await fetch(url); // realizamos la peticion http
    const {data} = await resp.json(); // desestructuramos la data
    
    const gifs = data.map( img => ({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url 
    }));
        // console.log(gifs);
        return gifs;
    
    }