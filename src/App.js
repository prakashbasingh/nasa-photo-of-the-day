import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
// import { Alert } from 'reactstrap';
import NasaImageDetail from "./components/NasaImageDetail.js";
import Section from "./components/Section";
import Header from "./components/Header";

// const api_key ='takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'
const nasaURL =
  "https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb";
const nasaLogo =
  "data:image/jpeg;base64,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";
const nasaSeal =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/NASA_seal.svg/1024px-NASA_seal.svg.png";

function App() {
  const [imageData, setImageData] = useState({});

  console.log("image data", imageData);
  useEffect(() => {
    Axios.get(nasaURL)
      .then((success) => {
        console.log(success, "?/???////????????????????????");
        setImageData(success.data);
        console.log("what we get here", success);
      })
      .catch((error) => {
        console.log(error, "error is happening");
      });
  }, []);
  return (
    <Section className="App">
      <Header className="App-header">
        <div>
          <img className="nasa-logo" src={nasaLogo} alt="logo of nasa" />
        </div>
        <div>
          <h1 className="photoOfTheDay">NASA Photo of the Day</h1>
        </div>
        <div>
          <img className="nasa-seal" src={nasaSeal} alt="seal of nasa" />
        </div>
      </Header>

      <NasaImageDetail
        date={imageData.date}
        url={imageData.url}
        title={imageData.title}
        explanation={imageData.explanation}
        copyright={imageData.copyright}
      />
    </Section>
  );
}

export default App;
