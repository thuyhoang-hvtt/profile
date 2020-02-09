import React, { Component } from "react";
import { Row, Col } from "antd";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles, lighten } from '@material-ui/core/styles';

import { 
  MailOutline, 
  PhoneAndroidOutlined, 
  LocationCityOutlined, 
  CalendarTodayOutlined 
} from "@material-ui/icons";

const StyledProgress = withStyles({
  root: {
    height: 7,
    backgroundColor: lighten('#754ef9', 0.5),
    margin: 10,
  },
  bar: {
    backgroundColor: '#754ef9',
  },
})(LinearProgress);

export default class AboutMe extends Component {
  render() {
    return (
      <div className="section sectionTwo">
        <Row
          style={{ minHeight: 700 }}
          type="flex"
          justify="space-around"
          align="bottom"
          gutter={64}
        >
          <Col span={8}>
            <Knowledge>
              <Text>Web Front-end (ReactJS, NextJS, etc.)</Text>
              <StyledProgress
                variant="determinate"
                color="primary"
                value={77}
              />
            </Knowledge>
            <Knowledge>
              <Text>Web Back-end (NodeJS, NestJS)</Text>
              <StyledProgress
                variant="determinate"
                color="primary"
                value={60}
              />
            </Knowledge>
            <Knowledge>
              <Text>Photoshop/Illustrator</Text>
              <StyledProgress
                variant="determinate"
                color="primary"
                value={72}
              />
            </Knowledge>
            <Knowledge>
              <Text>Mathematics</Text>
              <StyledProgress
                variant="determinate"
                color="primary"
                value={80}
              />
            </Knowledge>
            <Knowledge>
              <Text>Programing Skills</Text>
              <StyledProgress
                variant="determinate"
                color="primary"
                value={85}
              />
            </Knowledge>
          </Col>
          <Content span={12}>
            <Title variant="h1" gutterBottom>About Me</Title>
            <Text variant="h4" gutterBottom >Hi there...</Text>
            <Text align="justify" paragraph>
              I've been dealing with a lot of projects while I'm a student 
              at HCMC University of Technology: Music App, Chatting App, Porforlio,
              etc. See my porforlio!!
            </Text>
            <Text align="justify" paragraph>
              Beside, I'm very interested in Machine Learning and Big Data. 
              I already worked with Spark, Hadoop. 
              Implementing well-known model using Keras, Tensorflow, etc.
            </Text>
            <Row type="flex" justify="center" align="middle">
              <Content span={12}>
                <Info variant="body1">
                  <CalendarTodayOutlined style={{ fontSize: 16, margin: 8 }} />Birth:
                  <Text>July 7th, 1999</Text>
                </Info>
                <Info variant="body1">
                  <LocationCityOutlined style={{ fontSize: 16, margin: 8 }} />Address:
                  <Text>Tan Binh District, HCM City</Text>
                </Info>
              </Content>
              <Content span={12}>
                <Info variant="body1">
                  <MailOutline style={{ fontSize: 16, margin: 8 }} />Email:
                  <Text>thuyhoang.hvtt@gmail.com</Text>
                </Info>
                <Info variant="body1">
                  <PhoneAndroidOutlined style={{ fontSize: 16, margin: 8 }} />Phone:
                  <Text>(+84) 353 71 17 71</Text>
                </Info>
              </Content>
            </Row>
          </Content>
        </Row>
        <Blank height={64}/>
      </div>
    );
  }
}

const Knowledge = styled.div`
  background: transparent;
  width: 100%;
  padding-bottom: 16px ;
  display: block;
`;

const Blank = styled(Row)`
  ${props =>  `
    height: ${props.height}px;
  `}
`;

const Content = styled(Col)`
  padding-left: 16px;
`;

const Title = styled(Typography)`
  color: #754ef9;
  display: flex;
  flex-direction: row;
`;

const Info = styled(Typography)`
  display: flex;
  padding: 16px 0;
  align-items: center;
  color: #754ef9;
`;

const Text = styled(Typography)`
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.65);
  font-size: ${props => props.size ? props.size + "px" : "16px"}
`;
