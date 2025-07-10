import './App.css'
import Pet from './Pet.jsx'
function App() {


  return (
    <div>
      <h1>Pet Component</h1>
      <Pet name={"Luna"} age={12} breed={"German Shepherd"} />
      <Pet name={"Buldog"} age={29} breed={"German Shepherd"} />
      <Pet name={"Bullet"} age={9} breed={"German Shepherd"} />
    </div>
  )
}


export default App
