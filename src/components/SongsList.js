import React from 'react'

export const SongsList = ({songs, loading}) => {
   return (
      <>
         <h2>Songs List</h2>

         <table>
            <tr>
               <th>Song Name</th>
               <th>Play Time</th>
               <th>Artist Name</th>
               <th>Album Name</th>
            </tr>
            {songs && songs.map((song) => {
               return <tr>
                  <td>{song.songName}</td>
                  <td>{song.songPlaytime}</td>
                  <td>{song.artist.artistName}</td>
                  <td>{song.album.albumName}</td>
               </tr>
            })}
         </table>
      </>
   )
}
