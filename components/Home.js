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
      <div className="section sectionOne">
        <Row className="nav-bar" type="flex" justify="start" align="middle">
          <Col span={3}/>
          <Col span={10}>
          <FlexMenu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>Home</Menu.Item>
            <Menu.Item key='2'>About Me</Menu.Item>
            <Menu.Item key='3'>Portforlio</Menu.Item>
            <Menu.Item key='4'>Blog</Menu.Item>
            <Menu.Item key='5'>Contact</Menu.Item>
          </FlexMenu>
          </Col>
          <Col span={9}></Col>
        </Row>
        <div className="parallax-container" onMouseMove={this.mouseMoveHandle}>
          <AnimatedContainer
            top={21}
            left={545}
            mouseX={mouseX} 
            mouseY={mouseY} 
            alpha={-0.1}
          >
            <img src="static/shape/shape-1.png" alt="Shape"/>
          </AnimatedContainer>
          <AnimatedContainer
            top={3}
            left={65}
            mouseX={mouseX} 
            mouseY={mouseY} 
            alpha={-0.1}
          >
            <img src="static/shape/shape-2.png" alt="Shape"/>
          </AnimatedContainer>
          <AnimatedContainer
            top={213}
            left={454}
            mouseX={mouseX} 
            mouseY={mouseY} 
            alpha={-0.1}
          >
            <img src="static/shape/shape-3.png" alt="Shape"/>
          </AnimatedContainer>
          <AnimatedContainer
            top={23}
            left={65}
            mouseX={mouseX} 
            mouseY={mouseY} 
            alpha={-0.1}
          >
            <img src="static/shape/shape-4.png" alt="Shape"/>
          </AnimatedContainer>
          <AnimatedContainer
            top={43}
            left={767}
            mouseX={mouseX} 
            mouseY={mouseY} 
            alpha={-0.1}
          >
            <img src="static/shape/shape-4.png" alt="Shape"/>
          </AnimatedContainer>
          <AnimatedContainer
            top={343}
            left={45}
            mouseX={mouseX} 
            mouseY={mouseY} 
            alpha={-0.1}
          >
            <img src="static/shape/shape-4.png" alt="Shape"/>
          </AnimatedContainer>
        </div>
        <Row type="flex" justify="center" align="bottom">
          <Content span={8} onMouseMove={this.mouseMoveHandle}>
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

const FlexMenu = styled(Menu)`
  background: transparent;
  border-bottom: none;
  display: flex;
  justify-content: space-around;

  .ant-menu-item {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    &.ant-menu-item-active, &.ant-menu-item-selected {
      color: #754ef9;
      border-bottom: 2px solid #754ef9;
    }
  }
`;

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
  top: ${props => props.top + "px"} ;
  left: ${props => props.left + "px"} ;
  transform: translate(${props => (props.mouseX * props.alpha) + "px"}, ${props => (props.mouseY * props.alpha) + "px"});
  transition: transform 0.5s;

`;


