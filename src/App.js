import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";




const api_key ='takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'
const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'
const nasaLogo = 'https://www.stickpng.com/assets/images/58429400a6515b1e0ad75acc.png'
const nasaSeal = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/NASA_seal.svg/1024px-NASA_seal.svg.png'


function App() {
const [imageData, setImageData] = useState(null);
const [date, setDate] = useState('')

  //https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb
  useEffect (() =>{
    Axios.get(nasaURL)
      .then(success => {
        console.log(success)
        debugger
      })
      .catch (error => {
        console.log('error')
      })
  }, [])
  return (
    <div className="App">
      <header className = 'App-header'>
        <div >
          <img className= 'nasa-logo' src = {nasaLogo} ></img>
        </div>
        <div>
          <h1>NASA Photo of the Day</h1>
        </div>
        <div >
          <img className = 'nasa-seal' src = {nasaSeal}></img>
        </div>
      </header>
      
      {/* <ImageTitle/> */}
      {/* <NasaImage/> */}
      {/* <NasaDate/> */}
      {/* NasaExplanation/> */}
      {/* NasaCopyRight */}
           <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        </p>
        </footer>
       


     
    </div>
  );
}

export default App;
