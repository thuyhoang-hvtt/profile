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
  Flag,
  AppsSharp
} from "@material-ui/icons";
import VideoPlayer from "../components/VideoPlayer";

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
    img: 'static/lofi-poster.png',
    url: 'https://www.youtube.com/watch?v=btq_AlL2EPA',
    title: 'LofiSound',
    subtitle: 'Lofi sounds with noisy background',
    description: 'Improve focus and boost your productivity. Mix different sounds and create your perfect environment.',
    knowledge: 'ReactJS, Redux, Firebase, FIrestore',
    date: 'April 1st, 2019',
    status: true
  },
  {
    direction: 'row-reverse',
    img: 'static/socket-chat.png',
    url: '',
    title: 'Bee Chating',
    subtitle: 'Customer Support Manager',
    description: 'Better handling your customer\'s feedback.',
    knowledge: 'Java core, JavaFX, ReactJS, NodeJS',
    date: 'October 1st, 2019',
    status: true
  },
  {
    direction: 'row',
    img: 'static/cuda-poster.png',
    url: '',
    title: 'CUDA Programing',
    subtitle: 'Parallelzing Recognition CNN Model',
    description: 'Build a digit recognition from scratch with... CUDA in C++',
    knowledge: 'C++, CUDA',
    date: 'November 1st, 2019',
    status: true
  }
]

class Work extends Component {
  state = {
    zoom: false
  };

  render() {
    const {
      background,
      direction,
      img,
      url,
      title,
      subtitle,
      description,
      knowledge,
      date,
      status,
      handleBackdrop
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
            onMouseEnter={() => this.setState({zoom: true})}
            onMouseLeave={() => this.setState({zoom: false})}
          >
            <div className="overlay" />
            <Zoom
              ref={this}
              in={this.state.zoom}
              direction="left"
              timeout={300}
            >
              <StyledFab >
                <AppsSharp />
              </StyledFab>
            </Zoom>
            <Zoom in={this.state.zoom} direction="right" timeout={300}>
              <StyledFab onClick={() => handleBackdrop(url)}>
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
  state = {
    player: {
      open: false,
      url: ''
    }
  }


  handleBackdrop = (url) => {
    const { open } = this.state.player
    this.setState({
      player: {
        open: !open,
        url
      }
    })
  }


  render() {
    const {open, url} = this.state.player
    return (
      <div className="section sectionFour">
        <VideoPlayer 
          open={open}
          url={url}
          handleBackdrop={this.handleBackdrop}
        />
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
              handleBackdrop={this.handleBackdrop}
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
  color: #2e2d2c;
  font-weight: bold;
  font-size: ${props => (props.size ? props.size + "px" : "16px")};
`;
