import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const SongsList = () => {
   const { songs } = useContext(GlobalContext)

   return (
      <div className="container">
         <h2>Songs List</h2>

         <table>
            <tr>
               <th>Song Name</th>
               <th>Play Time</th>
               <th>Artist Name</th>
               <th>Album Name</th>
            </tr>
            {songs.map((song) => {
               return <tr>
                  <td>{song.song_name}</td>
                  <td>{song.song_playtime}</td>
                  <td>{song.artist.artist_name}</td>
                  <td>{song.album.album_name}</td>
               </tr>
            })}
         </table>
      </div>
   )
}
