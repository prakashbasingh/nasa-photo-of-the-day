import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Section from "./components/Section";
import Header from "./components/Header";

import LoginPage from "./components/login";
import SignupPage from "./components/signup";
import MainContentPage from "./components/mainContentPage";

// const api_key ='takBkO9usLbQrDWvPcvd3IKuviGcJ3xtkT5FP2Hb'

const nasaLogo = "https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=GMERCHb905g";
const nasaSeal =
  "https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_nasa_emblem.jpg";

function App() {
  // document
  //   .getElementsByClassName("backgroundColor")
  //   .addEventListener("mouseover", mouseOver);
  // document
  //   .getElementsByClassName(".links")
  //   .addEventListener("mouseover", mouseOver);

  // function mouseOver() {
  //   document.getElementById("backgroundColor").style.color = "red";
  // }
  return (
    <Router>
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
        <Switch>
          <Route exact path="/">
            <div>
              <h1> Home Page</h1>
            </div>

            <nav className="nav">
              <div className="backgroundColor">
                <div className="links">
                  <div className="linkName">
                    <a href="/mainContentPage">Main Page</a>
                  </div>

                  <div className="spanDiv">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="backgroundColor">
                <div className="links">
                  <div className="linkName">
                    <a href="/signupPage">Signup Page</a>
                  </div>

                  <div className="spanDiv">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="backgroundColor">
                <div className="links">
                  <div className="linkName">
                    <a href="/loginPage">Login Page</a>
                  </div>

                  <div className="spanDiv">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </nav>
          </Route>

          <Route exact path="/signupPage" component={SignupPage} />
          <Route exact path="/loginPage" component={LoginPage} />
          <Route exact path="/mainContentPage" component={MainContentPage} />
        </Switch>
      </Section>
    </Router>
  );
}

export default App;
