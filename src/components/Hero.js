import React, { useEffect, useState } from 'react'
import {gql, useQuery} from '@apollo/client'
import Albums from './Albums'

export const Hero = () => {
    const [albums, setAlbums] = useState(null)

   // querys
   const query = gql`
   query allAlbums{
      allAlbums{
        albumId
        albumName
        albumCover
        publishDate
        artist{
            artistId
            artistName
            artistBirthday
        }
      }
    }
   `

   const {loading, data} = useQuery(query)

    useEffect(() => {
        if(data){
            setAlbums(data.allAlbums)
        }
    }, [loading])

    return (
        <section className="hero container flex">
            <div className="info">
                <h1>AMP UP <br/> THOSE DBS</h1>
                <p>MAKE MUSIC ON THE GO.</p>
                <a>
                    {/* <img src="../images/hit it-02.png" width="100" /> */}
                    <button className="hitit-btn">
                        Hit it
                    </button>
                </a>
            </div>
            <div className="albums">
                {loading ?
                <p>loading...</p> 
                : 
                <Albums albums={albums}/>}
            </div>
        </section>
    )
}
