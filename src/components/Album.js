import React, {useEffect} from 'react'
import AlbumCard from './AlbumCard'
import {Redirect} from 'react-router-dom'

const Album = (props) => {

    const album = props.location.albumProps.album
    return (
         <AlbumCard album={album}/>
    )
}

export default Album
