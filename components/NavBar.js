import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    console.log(this.props.section);
    const { index, anchor } = this.props.section;
    return (
      <NavigationContainer className="nav-bar" type="flex" justify="start" align="middle" index={index}>
          <Col span={3}/>
          <Col span={10}>
          <FlexMenu mode="horizontal" selectedKeys={[anchor]}>
            <Menu.Item key='home'>Home</Menu.Item>
            <Menu.Item key='about-me'>About Me</Menu.Item>
            <Menu.Item key='portforlio'>Portforlio</Menu.Item>
            <Menu.Item key='blog'>Blog</Menu.Item>
            <Menu.Item key='contact'>Contact</Menu.Item>
          </FlexMenu>
          </Col>
          <Col span={9}></Col>
        </NavigationContainer>
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


const NavigationContainer = styled(Row)`
  position: absolute;
  width: 100%;
  z-index: 1100;
  height: ${props => props.index > 0 ? (props.index > 4 ? '0px' : '84px') : '108px'};
  box-shadow: 0 7px 7px 0 rgb(117, 78, 249, 0.2);
  background: rgb(255, 255, 255, 0.4);
  visibility: ${props => props.index > 4 ? "hidden" : "visible"};
  transition: all 0.3s ease-in;
`;


const mapStateToProps = state => {
  return {
    section: state.root.section
  }
}

export default connect(mapStateToProps)(NavBar);