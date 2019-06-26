import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import styled from 'styled-components'

export default class NavBar extends Component {
  render() {
    return (
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
