import React, { Component } from "react";
import { Row, Col, Menu } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";

class NavBar extends Component {

  render() {
    const { prevIndex, index, anchor } = this.props.section;

    return (
      <NavigationContainer
        className="nav-bar"
        type="flex"
        justify="start"
        align="middle"
        index={index}
        visible={prevIndex >= index}
      >
        <Col span={3} />
        <Col span={12}>
          <FlexMenu
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            selectedKeys={[anchor]}
          >
            <Menu.Item type="home" key="home">
              <NavLink href="/#home">Home</NavLink>
            </Menu.Item>
            <Menu.Item type="about-me" key="about-me">
              <NavLink href="/#about-me">About Me</NavLink>
            </Menu.Item>
            <Menu.Item type="service" key="service">
              <NavLink href="/#service">My Service</NavLink>
            </Menu.Item>
            <Menu.Item type="portforlio" key="portforlio">
              <NavLink href="/#portforlio">Portforlio</NavLink>
            </Menu.Item>
            <Menu.Item type="contact" key="contact">
              <NavLink href="/#contact">Contact</NavLink>
            </Menu.Item>
          </FlexMenu>
        </Col>
        <Col span={9} />
      </NavigationContainer>
    );
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
    &.ant-menu-item-active,
    &.ant-menu-item-selected {
      color: #754ef9;
      border-bottom: 2px solid #754ef9;
    }
    &.ant-menu-item-active a,
    &.ant-menu-item-selected a {
      color: #754ef9;
    }
  }
`;

const NavigationContainer = styled(Row)`
  position: absolute;
  width: 100%;
  z-index: 1100;
  background: transparent;

  ${props =>
    props.index > 0
      ? `
    height: 84px;
    box-shadow: 0 7px 7px 0 rgb(117, 78, 249, 0.2);
    ::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      filter: blur(16px);
      box-shadow: inset 0 0 0 3000px rgba(255, 255, 255);
      z-index: -1;
    };
  `
      : `
    height: 108px;
  `}

  ${props => props.visible ? `top: 0px;` : `top: -100px;`}
  overflow: hidden;
  transition: all 0.3s ease-in;
`;

const NavLink = styled.a``;

const mapStateToProps = state => {
  return {
    section: state.root.section
  };
};

export default connect(mapStateToProps)(NavBar);
