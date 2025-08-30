import './App.css'
import Navbar from './components/Nav.jsx'
import Home from './components/Home.jsx'

//Default function
//Content Not being displayed, find the fix.
function App() {
  

  return (
    <>
    {/**Exporting components*/}
      <div>
        <Navbar/>
        <div>
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
