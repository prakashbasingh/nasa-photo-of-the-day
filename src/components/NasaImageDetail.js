import React from "react";

// const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'
// const api_key ='takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'



const NasaImageDetail = (props)=> {
    // const {url, title, explanation} =  props

    console.log('any data???', props)
        return(
            <div>
                <img src = {props.url} />
                <h3> Title: {props.title}  </h3>
                <p>Explanation: {props.explanation} </p>
             </div>
    );

}
export default NasaImageDetail;