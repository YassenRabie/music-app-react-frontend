import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ArtistList = () => {
   const { artists } = useContext(GlobalContext)

   return (
      <div className="container">
         <h2>Artists List</h2>

         <table>
            <tr>
               <th>Artist Name</th>
               <th>Birthday</th>
            </tr>
            {artists.map((artist) => {
               return <tr>
                  <td>{artist.artist_name}</td>
                  <td>{artist.artist_birthday}</td>
               </tr>
            })}
         </table>
      </div>
   )
}
