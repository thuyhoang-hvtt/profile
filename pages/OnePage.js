import React, { Component } from "react";
import { bindActionCreators } from 'redux';


// Style-sheet
import "scss/one-page.scss";

// Components
import Home from "./Home";
import AboutMe from "./AboutMe";
import Service from "./Service";

import { changeSection } from '../redux/actions';
import { connect } from "react-redux";

import ReactFullpage from "@fullpage/react-fullpage";
import Contact from "./Contact";
import Portforlio from "./Portforlio";


class OnePage extends Component {
  onLeave(origin, destination, direction) {
    const { index, anchor } = destination;
    this.props.changeSection({ prevIndex: origin.index, index, anchor });
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      require('fullpage.js/vendors/scrolloverflow');
    }
  }

  render() {
    return (
      <ReactFullpage
        anchors={["home", "about-me", "service", "portforlio", "contact", "footer"]}
        onLeave={this.onLeave.bind(this)}
        scrollOverflow={true}
        navigation
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="onepage-container">
              <div className="container-background">
                <div className="bg-top" />
              </div>
              <Home/>
              <AboutMe />
              <Service/>
              <Portforlio/>
              <Contact/>
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
