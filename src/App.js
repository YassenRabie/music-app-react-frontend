import Footer from './components/Footer'
import { Landing } from './components/Landing'
import Navbar from './components/Navbar'
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Album from './components/Album'

function App() {
   return (
      <div className="App">
         <GlobalProvider>
            <Router>
               <Navbar />
               <Switch>
                  <Route exact path="/">
                     <Landing />
                  </Route>
                  <Route path="/album/" component={Album}/>
               </Switch>
               <Footer />
            </Router>
         </GlobalProvider>
      </div>
   )
}

export default App
