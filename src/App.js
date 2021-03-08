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

const nasaLogo = "https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=GMERCHb905g";
const nasaSeal =
  "https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_nasa_emblem.jpg";

function App() {
  const [imageData, setImageData] = useState({});
  const [randomDate, setRandomDate] = useState("");

  const [typedDate, setTypedDate] = useState("");
  console.log(typedDate, "{{{{{{{{[][[[[[[[[[[[[]]]]]]]]]]]]}}}}}}}}");

  const dateInputChange = (event) => {
    setTypedDate({
      ...typedDate,
      [event.target.name]: event.target.value,
    });
  };

  const randomDateGenerator = (event) => {
    event.preventDefault();
    function date(
      initialYear,
      currentYear,
      initialMonth,
      currentMonth,
      initialDay,
      currentDay
    ) {
      const year = Math.floor(
        Math.random() * (currentYear - initialYear) + initialYear
      );
      const month = Math.floor(
        Math.random() * (currentMonth - initialMonth) + initialMonth
      );
      const day = Math.floor(
        Math.random() * (currentDay - initialDay) + initialDay
      );
      const newDate = `${year}-${month}-${day}`;
      return newDate;
    }

    setRandomDate(date(1995, 2020, 6, 12, 16, 28));
  };

  // console.log("image data", imageData);
  useEffect(() => {
    Axios.get(`${nasaURL}&date=${randomDate}`)
      .then((success) => {
        // console.log(success, "?/???////????????????????????");
        setTimeout(() => {
          setImageData(success.data);
        }, 1000);

        // console.log("what we get here", success);
      })
      .catch((error) => {
        console.log(error, "error is happening");
      });
  }, [randomDate]);

  const submitButton = () => {
    setRandomDate(typedDate.date);
  };

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
      <div>
        <button onClick={randomDateGenerator}>Click For Random image</button>
      </div>
      <div>
        <label>Enter a date</label>
        <input
          type="text"
          name="date"
          value={typedDate.date}
          onChange={dateInputChange}
          placeHolder="Example 2020-19-6"
        />
        <button onClick={submitButton}>Submit Date</button>
      </div>
      {!imageData.data ? (
        <div>
          <div
            class="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
          <div
            class="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <NasaImageDetail
            date={imageData.date}
            url={imageData.url}
            title={imageData.title}
            explanation={imageData.explanation}
            copyright={imageData.copyright}
          />
        </div>
      )}
    </Section>
  );
}

export default App;
