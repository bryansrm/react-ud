import React, { useState, useEffect } from 'react'

import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category }) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs()
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=batman&api_key=HR4CUGz4ehFGVwkTEeZq34xYEOeJWGFh';
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = await data.map( ({ id, title, images }) => {
            return {
                id,
                title,
                url: images.downsized_medium.url
            }
        })

        setImages(gifs);
    }


    return (
        <>
            <h3>{category}</h3>
            {
                images.map( gif => (
                    <GifGridItem key={gif.id} gif={gif} />
                ))
            }
        </>
    )
}