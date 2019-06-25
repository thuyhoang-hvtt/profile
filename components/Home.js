import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const StyledButton = withStyles(theme => ({
  root: {
    color: '#fff',
    backgroundColor: '#754ef9',
    borderRadius: '32px',
    boxShadow: '0 1px 5px 0 rgb(117, 78, 249, 0.6)',
    padding: '12px 32px',
    '&:hover': {
      backgroundColor: '#fff',
      border: '1px solid #754ef9',
      color: '#754ef9'
    }
  }
}))(Button);


export default class Home extends Component {
  render() {
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


