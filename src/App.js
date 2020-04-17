import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
// import { Alert } from 'reactstrap';
import NasaImageDetail from './components/NasaImageDetail.js';
import Section from './components/Section'
import Header from './components/Header'


const api_key ='takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'
const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'
const nasaLogo = 'https://www.stickpng.com/assets/images/58429400a6515b1e0ad75acc.png'
const nasaSeal = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/NASA_seal.svg/1024px-NASA_seal.svg.png'


function App() {
const [imageData, setImageData] = useState(nasaURL);
const [pickDate, setPickDate] = useState(null)

console.log('image data', imageData)
  //https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb
  useEffect (() =>{
    Axios.get(nasaURL)
      .then(success => {
        setImageData(success.data)
        console.log('what we get here',success)
      })
      .catch (error => {
        console.log('error')
      })
  }, [])
  return (
    <Section className="App">
      <Header className = 'App-header'>
        <div >
          <img className= 'nasa-logo' src = {nasaLogo} ></img>
        </div>
        <div>
          <h1 className = 'photoOfTheDay'>NASA Photo of the Day</h1>
        </div>
        <div >
          <img className = 'nasa-seal' src = {nasaSeal}></img>
        </div>
      </Header>
     
     <NasaImageDetail date={imageData.date}
                      url={imageData.url} 
                      title={imageData.title}
                      explanation={imageData.explanation}
                      />

    </Section>
  );
}

export default App;


