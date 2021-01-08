import './App.css'
import { Landing } from './components/Landing'
import { GlobalProvider } from './context/GlobalState'

function App() {
   return (
      <div className="App">
         <GlobalProvider>
            <Landing />
         </GlobalProvider>
      </div>
   )
}

export default App
