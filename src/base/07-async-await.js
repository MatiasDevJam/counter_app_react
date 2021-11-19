export const getImagen = async() => {

    try{

        const apiKey = '5mznYJWgxwZ4C4gC8yVXkRdg1tV41xof';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
        
    } catch ( error ){

        // console.log( error );
        return 'No existe';
    }
}