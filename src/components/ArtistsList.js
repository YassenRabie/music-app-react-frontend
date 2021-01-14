import React from 'react'

export const ArtistsList = ({artists}) => {

   return (
      <div className="container artists">
         <h2>Artists List</h2>

         <table>
            <tr>
               <th>Artist Name</th>
               <th>Birthday</th>
            </tr>
            {artists && artists.map((artist) => {
               return <tr>
                  <td>{artist.artistName}</td>
                  <td>{artist.artistBirthday}</td>
               </tr>
            })}
         </table>
      </div>
   )
}
