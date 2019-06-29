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
            <Menu.Item type='home' key='home'>
              <NavLink href="/#home">Home</NavLink>
            </Menu.Item>
            <Menu.Item type='about-me' key='about-me'>
              <NavLink href="/#about-me">About Me</NavLink>
            </Menu.Item>
            <Menu.Item type='portforlio' key='portforlio'>
              <NavLink href="/#portforlio">Portforlio</NavLink>
            </Menu.Item>
            <Menu.Item type='blog' key='blog'>
              <NavLink href="/#blog">Blog</NavLink>
            </Menu.Item>
            <Menu.Item type='contact' key='contact'>
              <NavLink href="/#contact">Contact</NavLink>
            </Menu.Item>
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
    &.ant-menu-item-active , &.ant-menu-item-selected {
      color: #754ef9;
      border-bottom: 2px solid #754ef9;
    }
    &.ant-menu-item-active a , &.ant-menu-item-selected a {
      color: #754ef9;
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
  top: ${props => props.index > 4 ? "-84px" : "0px"};
  transition: all 0.3s ease-in;
`;

const NavLink = styled.a`
`;


const mapStateToProps = state => {
  return {
    section: state.root.section
  }
}

export default connect(mapStateToProps)(NavBar);