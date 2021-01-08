import React from 'react'
import { AlbumsList } from './AlbumsList'
import { ArtistList } from './ArtistsList'
import { SongsList } from './SongsList'

export const Landing = () => {
   return (
      <div>
         <ArtistList />
         <AlbumsList />
         <SongsList />
      </div>
   )
}
