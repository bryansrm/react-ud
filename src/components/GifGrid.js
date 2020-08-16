import React from 'react'

import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category }) => {
    const { data:image, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            { loading && <p className="animate__animated animate__fadeInDown">Loading ...</p>}
            <div className="content_gifs">
            {
                image.map( gif => (
                    <GifGridItem key={gif.id} gif={gif} />
                ))
            }
            </div>
        </>
    )
}