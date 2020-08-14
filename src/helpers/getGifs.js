
export const getGifs = async ( category ) => {
    console.log(`categoria: ${category}`)
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=HR4CUGz4ehFGVwkTEeZq34xYEOeJWGFh`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = await data.map( ({ id, title, images }) => {
        return {
            id,
            title,
            url: images.downsized_medium.url
        }
    })

    return gifs;
}