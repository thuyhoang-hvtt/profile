import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { mouseMove } from '../redux/actions';

import Paralllax from '../components/Paralllax';


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


class Home extends Component {

  mouseMoveHandle = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { mouseX, mouseY } = this.props.parallax;
    if ((Math.abs(offsetX - mouseX) > 10) || (Math.abs(offsetY - mouseY) > 10)) {
      this.props.mouseMove({X: offsetX, Y: offsetY});
    }
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
   
  componentDidUpdate(prevProps, prevState) {
    console.log('[HOME] updated!!');
  }
  

  render() {

    return (
      <div className="section sectionOne" onMouseMove={this.mouseMoveHandle}>
        
        <Paralllax/>
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

const mapStateToProps = state => {
  return {
    parallax: state.root.parallax
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ mouseMove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

