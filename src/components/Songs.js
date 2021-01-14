import React,{useState, useEffect} from 'react'
import {gql, useQuery} from '@apollo/client'
import { SongsList } from './SongsList'

const Songs = () => {
    const [songs, setSongs] = useState(null)

    // querys
    const query = gql`
    query allSongs{
        allSongs{
          songName
          songPlaytime
          artist{
            artistName
          }
          album{
            albumName
          }
        }
      }
    `
 
    const {loading, data} = useQuery(query)
 
     useEffect(() => {
         if(data){
             setSongs(data.allSongs)
         }
     }, [loading])

    return (
        <section className="container songs">
            <SongsList songs={songs} loading={loading}/>
        </section>
    )
}

export default Songs
