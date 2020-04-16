import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
const api_key ='takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'
const url = 'https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'


function App() {
  //https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb
  useEffect (() =>{
    Axios.get(url)
      .then(success => {
        console.log(res)
      })
      .catch (error => {
        console.log('error')
      })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
