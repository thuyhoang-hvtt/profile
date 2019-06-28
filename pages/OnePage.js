import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

// Style-sheet
import "scss/one-page.scss";

// Components
import Home from "./Home";
import AboutMe from "./AboutMe";

export default class OnePage extends Component {
  render() {
    return (
      <ReactFullpage
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="onepage-container">
              <div className="container-background">
                <div className="bg-top" />
                <div className="bg-bottom"/>
              </div>
              <Home />
              <AboutMe/>
              <div className="section">Haha</div>
              <div className="section">Haha</div>
              <div className="section">Haha</div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    );
  }
}
