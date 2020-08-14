import React from 'react'

export const GifGridItem = ({ gif }) => {

    return (
        <>
            <p>{ gif.title }</p>
            <img src={gif.url} alt={gif.title} />
        </>
    )

}