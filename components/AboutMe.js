import React, { Component } from "react";
import { Row, Col } from "antd";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";

import { 
  MailOutline, 
  PhoneAndroidOutlined, 
  LocationCityOutlined, 
  CalendarTodayOutlined 
} from "@material-ui/icons";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="section sectionTwo">
        <Row
          style={{ minHeight: 741 }}
          type="flex"
          justify="center"
          align="bottom"
        >
          <Picture span={8} />
          <Content span={12}>
            <Title variant="h1">About Me</Title>
            <Text variant="h4">Hi there, I'm Shin.</Text>
            <Row type="flex" justify="center" align="middle">
              <Content span={12}>
                <Info variant="body1">
                  <CalendarTodayOutlined style={{ fontSize: 16, margin: 8 }} /> Birth:
                  <Text>July 7th, 1999</Text>
                </Info>
                <Info variant="body1">
                  <LocationCityOutlined style={{ fontSize: 16, margin: 8 }} />{" "}
                  Address:
                  <Text>Phu Nhuan District, HCM City</Text>
                </Info>
              </Content>
              <Content span={12}>
                <Info variant="body1">
                  <MailOutline style={{ fontSize: 16, margin: 8 }} /> Email:
                  <Text>thuyhoang.hvtt@gmail.com</Text>
                </Info>
                <Info variant="body1">
                  <PhoneAndroidOutlined style={{ fontSize: 16, margin: 8 }} />{" "}
                  Phone:
                  <Text>(+84) 353 711 771</Text>
                </Info>
              </Content>
            </Row>

            <Info variant="body1" />
          </Content>
        </Row>
      </div>
    );
  }
}

const Picture = styled(Col)``;

const Content = styled(Col)`
  padding-left: 16px 32px;
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
