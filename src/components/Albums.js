import React from 'react'
import AlbumItem from './AlbumItem'

const Albums = ({albums}) => {
    return (
        <>
            {albums && albums.map((album) => {
                    return <AlbumItem album={album}/>
                })}
        </>
    )
}

export default Albums
