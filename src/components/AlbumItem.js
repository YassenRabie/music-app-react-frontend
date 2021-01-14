import React from 'react'
import { Link } from 'react-router-dom'

const AlbumItem = ({album}) => {
    return (
        <Link to={{pathname:`/album`, albumProps:{ album: album}}}>
            <div className="album">
              <img src={`http://127.0.0.1:8000/media/${album.albumCover}`}/>
              <div className="glass-effect"></div>
            </div>
        </Link>
    )
}

export default AlbumItem
