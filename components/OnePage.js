import React, { Component } from 'react'
import 'scss/one-page.scss'

import Home from './Home'

export default class OnePage extends Component {
  render() {
    return (
      <div className="onepage-container">
        <div className="container-background">
          <div className="bg-top"/>
          {/* <div className="bg-bottom"/> */}
        </div>
        <Home/>
      </div>
    )
  }
}
