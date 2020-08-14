import React, { useState, useEffect } from 'react'

import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category }) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs( category )
            .then( gifs => setImages(gifs) )
    }, [ category ]);

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