import React, { createContext, useReducer, useEffect } from "react"
import AppReducer from './AppReducer'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

// Inital State
const initialState = {
   artists: [],
   albums: [],
   songs: []
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   useEffect(() => {
      // Fetch Artists
      axios
         .get("/artists", { crossDomain: true })
         .then((response) => {
            setArtists(response.data)
         })
         .catch((error) => {
            console.log(error)
         })

      // Fetch Albums
      axios
         .get("/albums", { crossDomain: true })
         .then((response) => {
            setAlbums(response.data)
         })
         .catch((error) => {
            console.log(error)
         })

      // Fetch Songs
      axios
         .get("/songs", { crossDomain: true })
         .then((response) => {
            setSongs(response.data)
            console.log(response.data)

         })
         .catch((error) => {
            console.log(error)
         })
   }, [])

   // Actions
   const setArtists = (artists) => {
      dispatch({
         type: 'SET_ARTISTS',
         payload: artists
      })
   }

   const setAlbums = (albums) => {
      dispatch({
         type: 'SET_ALBUMS',
         payload: albums
      })
   }

   const setSongs = (songs) => {
      dispatch({
         type: 'SET_SONGS',
         payload: songs
      })
   }

   return (
      <GlobalContext.Provider value={{
         artists: state.artists,
         albums: state.albums,
         songs: state.songs
      }}>
         {children}
      </GlobalContext.Provider>
   )
}