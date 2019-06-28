import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { bindActionCreators } from 'redux';

// Style-sheet
import "scss/one-page.scss";

// Components
import Home from "./Home";
import AboutMe from "./AboutMe";

import { changeSection } from '../redux/actions';
import { connect } from "react-redux";


class OnePage extends Component {
  onLeave(origin, destination, direction) {
    const { index, anchor } = destination;
    this.props.changeSection({ index, anchor });
  }
  afterLoad(origin, destination, direction) {
    
  }

  render() {
    return (
      <ReactFullpage
        navigation
        anchors={["home", "about-me", "portforlio", "blog", "contact", "footer"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="onepage-container">
              <div className="container-background">
                <div className="bg-top" />
                <div className="bg-bottom" />
              </div>
              <Home />
              <AboutMe />
              <div className="section">Haha</div>
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

const mapDispatchToProps = dispatch => bindActionCreators(
  { changeSection },
  dispatch
)

export default connect(null, mapDispatchToProps)(OnePage);
