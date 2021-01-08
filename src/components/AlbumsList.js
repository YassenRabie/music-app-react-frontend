import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AlbumsList = () => {
   const { albums } = useContext(GlobalContext)

   return (
      <div className="container">
         <h2>Albums List</h2>

         <table>
            <tr>
               <th>Album Name</th>
               <th>Rlease Date</th>
               <th>Artist Name</th>
            </tr>
            {albums.map((album) => {
               return <tr>
                  <td>{album.album_name}</td>
                  <td>{album.publish_date}</td>
                  <td>{album.artist.artist_name}</td>
               </tr>
            })}
         </table>
      </div>
   )
}
