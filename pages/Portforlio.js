import React, { Component } from "react";
import styled from "styled-components";
import { Carousel, Affix } from "antd";
import { Grid, Typography, Fab, Slide, Zoom } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Add,
  RemoveRedEyeOutlined,
  Code,
  Alarm,
  Flag
} from "@material-ui/icons";

const StyledFab = withStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    padding: 16,
    margin: 16,
    border: "solid 1px white",
    "&:hover": {
      backgroundColor: "#754ef9",
      border: "solid 1px #754ef9",
      boxShadow: "0 5px 5px 0 rgba(117, 78, 249, 0.3)"
    }
  }
}))(Fab);


// Mock data
const works = [
  {
    direction: 'row',
    img: 'static/test.png',
    title: 'LofiSound',
    subtitle: 'Lofi sounds with noisy background',
    description: 'Improve focus and boost your productivity. Mix different sounds and create your perfect environment.',
    knowledge: 'ReactJS, Redux, Firebase, FIrestore',
    date: 'April 1st, 2019',
    status: true
  },
  {
    direction: 'row-reverse',
    img: 'static/test.png',
    title: 'LofiSound',
    subtitle: 'Lofi sounds with noisy background',
    description: 'Improve focus and boost your productivity. Mix different sounds and create your perfect environment.',
    knowledge: 'ReactJS, Redux, Firebase, FIrestore',
    date: 'April 1st, 2019',
    status: false
  }
]

class Work extends Component {
  state = {
    checked: false
  };

  toggleChecked = () => {
    const { checked } = this.state;
    this.setState({
      checked: !checked
    });
  };

  render() {
    const {
      background,
      direction,
      img,
      title,
      subtitle,
      description,
      knowledge,
      date,
      status
    } = this.props;
    return (
      <Grid
        style={{
          background: `${background}`,
          minHeight: 798
        }}
        container
        justify="center"
        direction={direction}
      >
        <Grid item xs={4}>
          <ImageWrapper
            container
            justify="center"
            alignItems="center"
            img={img}
            onMouseEnter={this.toggleChecked}
            onMouseLeave={this.toggleChecked}
          >
            <div className="overlay" />
            <Zoom
              ref={this}
              in={this.state.checked}
              direction="left"
              timeout={300}
            >
              <StyledFab>
                <Add />
              </StyledFab>
            </Zoom>
            <Zoom in={this.state.checked} direction="right" timeout={300}>
              <StyledFab>
                <RemoveRedEyeOutlined />
              </StyledFab>
            </Zoom>
          </ImageWrapper>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <WorkDetail container alignContent="center">
            <Grid item xs={12}>
              <Title variant="h3" gutterBottom>
                {title}
              </Title>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                {subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography paragraph>
                {description}
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Info variant="body1">
                <Code style={{ fontSize: 16, margin: 8 }} />
                Knowledge:
                <Text>{knowledge}</Text>
              </Info>
            </Grid>
            <Grid xs={12} item>
              <Info variant="body1">
                <Alarm style={{ fontSize: 16, margin: 8 }} />
                Started Date:
                <Text>{date}</Text>
              </Info>
            </Grid>
            <Grid xs={12} item>
              <Info variant="body1">
                <Flag style={{ fontSize: 16, margin: 8 }} />
                Status:
                {
                  status ? <Text>Done</Text> : <Typography color="error" style={{ paddingLeft: 10 }}>Developing</Typography>
                }
              </Info>
            </Grid>
          </WorkDetail>
        </Grid>
      </Grid>
    );
  }
}

export default class Portforlio extends Component {
  render() {
    return (
      <div className="section sectionFour">
        <Grid container justify="center">
          <Grid item xs={9} style={{ margin: "100px 0" }}>
            <Typography variant="h3" gutterBottom>
              My Recent Work
            </Typography>
            <Typography variant="body2">
              "We will have to give your life a reason...
            </Typography>
            <Typography variant="body2">
              Which you can hold when there're no target to keep you moving
              up!!"
            </Typography>
          </Grid>
        </Grid>
        {
          works.map((workProps, id) => (
            <Work
              key={id}
              background={id % 2 === 0 ? '#ffffff' : '#f7f7f7'}
              {...workProps}
            />
          ))
        }
      </div>
    );
  }
}

const ImageWrapper = styled(Grid)`
  min-height: 798px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  transform: scale(0.95);
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: black;
    opacity: 0;
    transition: all ease-in 0.1s;
  }

  :hover .overlay {
    opacity: 0.3;
  }

  :hover {
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.4);
    transform: scale(1);
  }

  svg {
    color: white;
  }

  transition: all ease-in 0.1s;
`;

const WorkDetail = styled(Grid)`
  min-height: 798px;
`;

const Title = styled(Typography)`
  color: #754ef9;
`;

const Info = styled(Typography)`
  display: flex;
  padding: 16px 0;
  align-items: center;
  color: #754ef9;
`;

const Text = styled(Typography)`
  padding-left: 10px;
  color: #84f779;
  font-size: ${props => (props.size ? props.size + "px" : "16px")};
`;
