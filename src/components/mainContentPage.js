import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { Alert } from 'reactstrap';
import NasaImageDetail from "./NasaImageDetail.js";

export default function MainContentPage() {
  const nasaURL =
    "https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb";
  const [imageData, setImageData] = useState({});
  console.log(imageData, "????????????????????????????????????");
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
        }, 500);

        console.log("what we get here", success);
      })
      .catch((error) => {
        console.log(error, "error is happening");
      });
  }, [randomDate]);

  const submitButton = () => {
    setRandomDate(typedDate.date);
  };

  const fetchTodaysImage = () => {
    const todaysDate = new Date().toISOString().slice(0, 10);
    setRandomDate(todaysDate);
  };
  return (
    <div>
      <div>
        <button onClick={fetchTodaysImage}>Click for Today's Image</button>
      </div>
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
          placeholder="Example 2020-19-6"
        />
        <button onClick={submitButton}>Submit Date</button>

        <p>Date must be on or after 1995-6-16</p>
      </div>
      {!imageData.date ? (
        <div>
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
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
    </div>
  );
}
