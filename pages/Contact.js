import React, { Component } from "react";
import {
  Grid,
  Typography,
  Paper,
  Card,
  FormControl,
  InputLabel,
  FilledInput,
  TextField
} from "@material-ui/core";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { deepPurple } from "@material-ui/core/colors";
import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  EmailOutlined
} from "@material-ui/icons";
import styled from "styled-components";
import GoogleMaps from "../components/GoogleMaps";

const StyledText = withStyles(theme => ({
  root: {
    "& label.Mui-focused": {
      color: "#754ef9"
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#754ef9"
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "#fcfafa",
      "&:hover": {
        backgroundColor: "#fcfcfc"
      }
    }
  }
}))(TextField);

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  onChangeHandle = e => {
    console.log(e);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <Grid container alignItems="center" className="contact-form">
        <Grid item xs={12} style={{ marginBottom: 16 }}>
          <StyledText
            id="name"
            label="Name"
            margin="dense"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 16 }}>
          <StyledText
            id="emmail"
            label="Email"
            margin="dense"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledText
            id="message"
            label="Message"
            margin="dense"
            variant="filled"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    );
  }
}

export default class Contact extends Component {
  render() {
    return (
      <div className="section sectionFive">
        <Grid container justify="center" alignItems="center" spacing={3} style={{ marginTop: 100 }}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom align="center">
              Get In Touch
            </Typography>
            <Typography align="center">Re:Zero</Typography>
            <Typography align="center">
              I'll travel through the time until you beside me, by all means!
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <ContactCard>
              <Typography align="center">
                <LocalPhoneOutlined
                  style={{ fontSize: 56, color: "#754ef9" }}
                />{" "}
              </Typography>
              <Typography
                align="center"
                style={{ fontSize: 18, marginBottom: 24 }}
              >
                <strong>Phone</strong>
              </Typography>
              <Typography align="center">(+84) 0353 71 17 71</Typography>
            </ContactCard>
          </Grid>
          <Grid item xs={3}>
            <ContactCard>
              <Typography align="center">
                <LocationOnOutlined
                  style={{ fontSize: 56, color: "#754ef9" }}
                />
              </Typography>
              <Typography
                align="center"
                style={{ fontSize: 18, marginBottom: 24 }}
              >
                <strong>Location</strong>
              </Typography>
              <Typography align="center">
                Phu Nhuan District, HCM City
              </Typography>
            </ContactCard>
          </Grid>
          <Grid item xs={3}>
            <ContactCard>
              <Typography align="center">
                <EmailOutlined style={{ fontSize: 56, color: "#754ef9" }} />
              </Typography>
              <Typography
                align="center"
                style={{ fontSize: 18, marginBottom: 24 }}
              >
                <strong>Email</strong>
              </Typography>
              <Typography align="center" noWrap>
                thuyhoang.hvtt@gmail.com
              </Typography>
              <Typography align="center" noWrap>
                thuy.hoang_bkuer17@hcmut.edu.vn
              </Typography>
            </ContactCard>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={4} style={{ margin: '64px 0', minHeight: 400 }}>
          <Grid item xs={5}>
            <ContactForm />
          </Grid>
          <Grid item xs={4}>
            <GoogleMaps style={{ top: '-50px'}} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const ContactCard = styled(Card)`
  width: 100%;
  min-height: 230px;
  padding: 32px;
`;
