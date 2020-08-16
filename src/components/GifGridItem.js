import React from 'react'

export const GifGridItem = ({ gif }) => {

    return (
        <div className="cardGif animate__animated animate__fadeIn">
            <p>{ gif.title }</p>
            <img src={gif.url} alt={gif.title} />
        </div>
    )

}