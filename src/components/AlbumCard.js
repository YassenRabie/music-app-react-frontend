import React, { useEffect } from 'react'


const AlbumCard = ({album}) => {

    return (
        <>
        {album && <div className="album-card">
            <img src={`http://127.0.0.1:8000/media/${album.albumCover}`}/>
            <p>{album.albumName}</p>
            <p>Relase Date<br/>{album.publishDate}</p>
            <div className="artist flex">
            <h3>Artist Name</h3>
            <p>{album.artist.artistName}</p>
            </div>
        </div>}
        </>
    )
}

export default AlbumCard