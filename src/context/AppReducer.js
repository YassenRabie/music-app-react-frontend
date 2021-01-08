export default (state, action) => {

   switch (action.type) {
      case 'SET_ARTISTS':
         return (
            {
               ...state,
               artists: action.payload
            }
         )

      case 'SET_ALBUMS':
         return (
            {
               ...state,
               albums: action.payload
            }
         )

      case 'SET_SONGS':
         return (
            {
               ...state,
               songs: action.payload
            }
         )

      default:
         return state
   }
}