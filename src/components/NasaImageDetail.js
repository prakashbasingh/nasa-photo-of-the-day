import React from "react";
import BodyContainer from './BodyContainer'

// const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'
// const api_key ='takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'



const NasaImageDetail = (props)=> {
    // const {url, title, explanation} =  props

    console.log('any data???', props)
        return(
            <BodyContainer class = 'bodyContainer'>
                <p className = 'date '>Date: {props.date}</p>
                <img className = 'image' src = {props.url} alt = "nasa todays cosmos"/>
                <h3 className = 'title' > Title: {props.title}  </h3>
                <p className = 'explanation'>Explanation: {props.explanation} </p>
                <h6 className = 'copyright'>Copyright: {props.copyright}</h6>
             </BodyContainer>
    );

}
export default NasaImageDetail;