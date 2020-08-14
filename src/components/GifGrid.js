import React from 'react'

export const GifGrid = ({category }) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=batman&api_key=HR4CUGz4ehFGVwkTEeZq34xYEOeJWGFh';
        const resp = await fetch( url );
        const {data} = await resp.json();
        console.log(data);

        const gifs = await data.map( ({ id, title, images }) => {
            return {
                id,
                title,
                image: images.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    getGifs();


    return (
        <h4>{category}</h4>
    )
}