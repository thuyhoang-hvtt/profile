import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { callbackify } from 'util';

const StyledButton = withStyles(theme => ({
  root: {
    color: '#fff',
    backgroundColor: '#754ef9',
    border: '1px solid #754ef9',
    borderRadius: '32px',
    boxShadow: '0 1px 5px 0 rgb(117, 78, 249, 0.6)',
    padding: '12px 32px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#754ef9'
    }
  }
}))(Button);


export default class Home extends Component {
  state = {
    mouseX: 0,
    mouseY: 0
  }

  mouseMoveHandle = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { mouseX, mouseY } = this.state;
    if ((Math.abs(offsetX - mouseX) > 20) || (Math.abs(offsetY - mouseY) > 20)) {
      this.setState({ 
        mouseX: offsetX, 
        mouseY: offsetY
      });
    }
    
  }

  render() {
    const { mouseX, mouseY } = this.state;

    return (
      <div className="section sectionOne" onMouseMove={this.mouseMoveHandle}>
        
        <div className="parallax-container">
          <AnimatedContainer
            style={{
              transform: `translate(${mouseX * -0.01 + "px"}, ${mouseY * -0.01 + "px"})`,
              top: 20,
              left: 20
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
              transform: `translate(${mouseX * -0.04 + "px"}, ${mouseY * -0.03 + "px"})`,
              top: 20,
              left: 20
            }}
          >
            
            <Shape style={{ top: 0, left: 500 }} src="static/shape/shape-2.png" alt="Shape"/>
            <Shape style={{ bottom: 150, left: "calc(50% - 150px)" }} src="static/shape/shape-1.png" alt="Shape"/>
            <Shape style={{ bottom: "calc(50% + 70px )", left: "calc(50% + 90px)" }} src="static/shape/shape-4.png" alt="Shape"/>
            <Shape style={{ top: 0 , right: 20 }} src="static/shape/shape-3.png" alt="Shape"/>
            <Shape style={{ top: 250, left: 64 }} src="static/shape/shape-6.png" alt="Shape"/>
            
          </AnimatedContainer>
        </div>
        <Row type="flex" justify="center" align="bottom">
          <Content span={8}>
            <Blank></Blank>
            <Greeting>Hello, I'm</Greeting>
            <Name>Thuy Hoang</Name>
            <Description>A Freelance Web Developer & Data Scientist</Description>
            <StyledButton variant="contained" color="primary">View My Work</StyledButton>
          </Content>
          <Col span={8}></Col>
        </Row>
        <Blank></Blank>

      </div>
    )
  }
}



const Greeting = styled.h4`
  font-size: 30px;
  color: #754ef9;
  text-transform: uppercase;
  margin: 0;
  font-weight: 600;
`;

const Name = styled.h2`
  font-size: 60px;
  text-transform: uppercase;
  margin: 0;
  font-weight: 900;
`;

const Description = styled.p`
  font-size: 16px;
  text-transform: capitalize;
  padding-bottom: 16px;
`;

const Blank = styled.div`
  min-height: 200px;
`;

const Content = styled(Col)`
  padding-left: 10px;
`;

const AnimatedContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  /* top: ${props => props.top + "px"} ;
  left: ${props => props.left + "px"} ;
  transform: translate(${props => (props.mouseX * props.alpha) + "px"}, ${props => (props.mouseY * props.alpha) + "px"}); */
  transition: transform 0.5s;
  transform-style: preserve-3d;
  display: flex;
  width: 90%;
  height: 90%;
`;


const Shape = styled.img`
  position: absolute;
`;

