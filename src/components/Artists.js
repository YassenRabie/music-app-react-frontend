import React,{useState, useEffect} from 'react'
import {gql, useQuery} from '@apollo/client'
import { ArtistsList } from './ArtistsList'

const Artists = () => {
    const [artists, setArtists] = useState(null)

    // querys
    const query = gql`
    query allArtists{
        allArtists{
          artistName
          artistBirthday
        }
      }
    `
 
    const {loading, data} = useQuery(query)
 
     useEffect(() => {
         if(data){
             setArtists(data.allArtists)
         }
     }, [loading])

    return (
        <div>
            <ArtistsList artists={artists}/>
        </div>
    )
}

export default Artists
