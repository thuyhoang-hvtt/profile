import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Parallax extends Component {
  render() {
    const { mouseX, mouseY } = this.props.parallax;
    return (
      <div className="parallax-container">
          <AnimatedContainer
            style={{
              transform: `translate(${mouseX * -0.03 + "px"}, ${mouseY * -0.03 + "px"})`,
              top: 30,
              left: 30
            }}
          >
            <Shape style={{ top: 30, left: 40 }} src="static/shape/shape-1.png" alt="Shape"/>
            <Shape style={{ bottom: 30 , left: "calc(50% + 100px)"}} src="static/shape/shape-6.png" alt="Shape"/>
            <Shape style={{ bottom: 50 , left: 100 }} src="static/shape/shape-3.png" alt="Shape"/>
            <Shape style={{ bottom: 100, right: 10 }} src="static/shape/shape-2.png" alt="Shape"/>
            <Shape style={{ top: 70, right: '25%' }} src="static/shape/shape-4.png" alt="Shape"/>
          </AnimatedContainer>
          
          <AnimatedContainer
            style={{
              transform: `translate(${mouseX * -0.07 + "px"}, ${mouseY * -0.06 + "px"})`,
              top: 40,
              left: 50
            }}
          >
            
            <Shape style={{ top: 0, left: 500 }} src="static/shape/shape-2.png" alt="Shape"/>
            <Shape style={{ bottom: 150, left: "calc(50% - 150px)" }} src="static/shape/shape-1.png" alt="Shape"/>
            <Shape style={{ bottom: "calc(50% + 70px )", left: "calc(50% + 90px)" }} src="static/shape/shape-4.png" alt="Shape"/>
            <Shape style={{ top: 0 , right: 0 }} src="static/shape/shape-3.png" alt="Shape"/>
            <Shape style={{ top: 250, left: 64 }} src="static/shape/shape-6.png" alt="Shape"/>
            
          </AnimatedContainer>
        </div>
    )
  }
}

const AnimatedContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  display: flex;
  width: 90%;
  height: 90%;
`;


const Shape = styled.img`
  position: absolute;
`;


const mapStateToProps = state => {
  return {
    parallax: state.root.parallax
  }
}

export default connect(mapStateToProps)(Parallax);
