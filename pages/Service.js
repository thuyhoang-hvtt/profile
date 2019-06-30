import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { CardContent, Button } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";


import { LaptopMac, PhoneIphone } from "@material-ui/icons";
import {
  FaGamepad,
  FaLineChart
} from "react-icons/lib/fa";
import { withStyles } from "@material-ui/styles";

const DLIcon = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path d="m500.167 206.346c0-23.49-12.821-45.009-32.788-56.426-1.311-47.561-35.466-88.573-82.21-98.219-12.603-14.751-31.074-23.381-50.7-23.381h-51.636v-13.32c0-8.284-6.716-15-15-15h-31.824c-16.045 0-29.129 12.924-29.386 28.909-19.603 5.271-38.465 13.088-56.075 23.241-5.512-5.343-12.755-8.281-20.449-8.281-7.851 0-15.23 3.057-20.782 8.608l-45.007 45.007c-11.347 11.349-11.456 29.746-.327 41.23-10.153 17.614-17.971 36.474-23.24 56.075-15.985.257-28.909 13.341-28.909 29.386v63.648c0 16.045 12.924 29.129 28.909 29.386 5.271 19.602 13.088 38.464 23.241 56.075-11.131 11.483-11.021 29.881.327 41.231l45.007 45.007c11.346 11.345 29.736 11.456 41.23.326 17.612 10.153 36.473 17.971 56.075 23.24.257 15.986 13.341 28.91 29.386 28.91h31.824c8.284 0 15-6.716 15-15v-13.32h51.636c19.625 0 38.097-8.629 50.699-23.38 46.745-9.644 80.9-50.657 82.211-98.219 19.967-11.417 32.788-32.936 32.788-56.427v-12.482c0-13.388-4.159-26.356-11.704-37.17 7.545-10.813 11.704-23.781 11.704-37.169zm-409.95 152.377c-9.041-15.596-15.976-32.319-20.612-49.705-3.37-12.642-14.737-21.528-27.771-21.797v-62.441c13.034-.27 24.401-9.156 27.771-21.796 4.637-17.385 11.571-34.109 20.612-49.708 6.543-11.289 4.772-25.595-4.266-35.007l44.151-44.151c9.41 9.039 23.716 10.81 35.008 4.266 15.596-9.041 32.319-15.975 49.707-20.612 12.64-3.371 21.526-14.739 21.796-27.772h16.22v85.27c-71.012 7.516-126.525 67.759-126.525 140.73s55.514 133.215 126.525 140.73v85.27h-16.22c-.27-13.032-9.156-24.4-21.797-27.772-17.388-4.637-34.111-11.571-49.707-20.612-11.288-6.539-25.588-4.773-35.007 4.268l-44.152-44.154c9.039-9.41 10.81-23.716 4.267-35.007zm162.616 7.79c-54.427-7.35-96.525-54.104-96.525-110.513s42.099-103.163 96.525-110.513zm217.334-147.682c0 9.901-4.234 19.38-11.616 26.006-3.17 2.845-4.98 6.904-4.98 11.163s1.811 8.317 4.98 11.163c7.382 6.626 11.616 16.105 11.616 26.007v12.483c0 12.67-6.936 24.264-17.719 30.396l-27.678-9.152c-7.871-2.606-16.351 1.668-18.95 9.532-2.602 7.865 1.667 16.35 9.532 18.95l21.982 7.269c-1.552 33.192-25.62 61.616-58.377 68.303-.397.081-.801.133-1.202.201-1.5-.058-2.995.105-4.439.488-5.077.242-10.29-.519-15.337-2.287-7.822-2.738-16.377 1.382-19.114 9.2-1.792 5.117-.632 10.541 2.565 14.452-2.273.439-4.601.673-6.961.673h-51.636v-395.358h51.636c5.762 0 11.338 1.366 16.346 3.862l7.165 20.463c5.054-1.769 10.273-2.53 15.354-2.286 1.253.331 2.543.514 3.842.514.203 0 .406-.014.609-.022.391.067.786.117 1.173.196 32.757 6.688 56.825 35.113 58.377 68.304l-21.982 7.268c-7.865 2.601-12.134 11.085-9.533 18.951 2.084 6.303 7.945 10.295 14.24 10.295 1.561 0 3.148-.246 4.711-.762l27.679-9.152c10.782 6.132 17.718 17.727 17.718 30.395v12.485z" />
    <path d="m373.85 370.183c-11.701 7.673-25.275 11.726-39.263 11.726-.056 0-.109-.001-.166 0-8.27 0-14.983 6.697-14.999 14.972-.016 8.284 6.688 15.013 14.972 15.028h.193c19.848 0 39.11-5.752 55.713-16.638 6.928-4.543 8.86-13.841 4.318-20.77-4.543-6.928-13.844-8.859-20.768-4.318z" />
    <path d="m334.585 134.691c13.989 0 27.566 4.055 39.264 11.725 2.536 1.663 5.39 2.458 8.212 2.458 4.886 0 9.678-2.384 12.558-6.776 4.542-6.928 2.609-16.227-4.318-20.769-16.599-10.885-35.865-16.638-55.715-16.638-8.284 0-15 6.716-15 15s6.715 15 14.999 15z" />
    <path d="m436.894 242.962c-20.157-8.2-42.36-8.2-62.52 0-7.674 3.122-11.363 11.873-8.242 19.546 2.369 5.823 7.979 9.353 13.899 9.353 1.883 0 3.796-.357 5.647-1.11 12.867-5.234 27.041-5.234 39.912 0 7.671 3.122 16.425-.568 19.546-8.242s-.569-16.425-8.242-19.547z" />
    <path d="m304.724 218.694h36.985c8.284 0 15-6.716 15-15s-6.716-15-15-15h-36.985c-8.284 0-15 6.716-15 15s6.715 15 15 15z" />
    <path d="m356.709 308.306c0-8.284-6.716-15-15-15h-36.985c-8.284 0-15 6.716-15 15s6.716 15 15 15h36.985c8.284 0 15-6.716 15-15z" />
  </SvgIcon>
);

const AdvisorIcon = props => (
  <SvgIcon {...props} viewBox="0 0 496 496">
    <path d="m452.59375 335.617188-60.59375-13.976563v-15.761719c6.160156-4.941406 11.351562-11.015625 15.34375-17.878906h16.65625c22.054688 0 40-17.945312 40-40 0-13.015625-6.34375-24.488281-16-31.792969v-24.207031c0-52.9375-43.0625-96-96-96s-96 43.0625-96 96v24.207031c-9.65625 7.3125-16 18.785157-16 31.792969 0 22.054688 17.945312 40 40 40h16.65625c3.984375 6.863281 9.183594 12.9375 15.34375 17.878906v15.761719l-60.59375 13.984375c-25.558594 5.894531-43.40625 28.335938-43.40625 54.558594v105.816406h288v-105.816406c0-26.222656-17.847656-48.664063-43.40625-54.566406zm-134.417969 1.015624 19.503907 14.632813-19.71875 11.832031-4.242188-25.433594zm67.648438 0 5.632812 1.304688-5.074219 25.367188-20.0625-12.039063zm38.175781-64.632812h-10.105469c1.328125-5.128906 2.105469-10.464844 2.105469-16v-32h8c13.230469 0 24 10.769531 24 24s-10.769531 24-24 24zm-152-80c0-44.113281 35.886719-80 80-80s80 35.886719 80 80v16.808594c-2.585938-.527344-5.265625-.808594-8-.808594h-8v-16h-16v4.472656c-5.625 4.917969-12.222656 8.34375-19.359375 10.113282.335937-.320313.6875-.601563 1.015625-.929688l-11.3125-11.3125c-6.078125 6.082031-13.566406 10.222656-21.703125 12.242188.335937-.320313.6875-.601563 1.015625-.929688l-11.3125-11.3125c-8.808594 8.808594-20.511719 13.65625-32.96875 13.65625h-1.375v-16h-16v16h-8c-2.734375 0-5.414062.28125-8 .808594zm8 80c-13.230469 0-24-10.769531-24-24s10.769531-24 24-24h8v32c0 5.535156.777344 10.871094 2.105469 16zm24-16v-32h1.375c7.871094 0 15.503906-1.496094 22.625-4.246094v4.246094h9.375c7.871094 0 15.503906-1.496094 22.625-4.246094v4.246094h9.375c10.914062 0 21.378906-2.816406 30.625-8.023438v40.023438c0 5.617188-1.023438 10.984375-2.800781 16h-45.199219v16h35.679688c-8.792969 9.792969-21.503907 16-35.679688 16-26.472656 0-48-21.527344-48-48zm48 64c8.488281 0 16.585938-1.695312 24-4.710938v8.710938l-24 18-24-18v-8.710938c7.414062 3.015626 15.511719 4.710938 24 4.710938zm128 160h-40v-88h-16v88h-144v-88h-16v88h-40v-89.816406c0-18.734375 12.753906-34.757813 31-38.976563l43.105469-9.941406 7.933593 47.636719 45.960938-27.574219 45.617188 27.367187 9.429687-47.167968 41.945313 9.679687c18.253906 4.21875 31.007812 20.242188 31.007812 38.976563zm0 0" />
    <path d="m224 0h-171.3125l-52.6875 52.6875v251.3125h224zm-176 27.3125v20.6875h-20.6875zm160 260.6875h-192v-224h48v-48h144zm0 0" />
    <path d="m128 32h64v16h-64zm0 0" />
    <path d="m128 64h64v16h-64zm0 0" />
    <path d="m32 96h160v16h-160zm0 0" />
    <path d="m120 128h72v16h-72zm0 0" />
    <path d="m32 128h72v16h-72zm0 0" />
    <path d="m32 160h160v16h-160zm0 0" />
    <path d="m32 192h160v16h-160zm0 0" />
    <path d="m120 224h72v16h-72zm0 0" />
    <path d="m32 224h72v16h-72zm0 0" />
    <path d="m32 256h160v16h-160zm0 0" />
    <path d="m167.761719 360.59375 4.886719-9.769531-19.472657-19.472657-9.777343 4.886719c-4.496094-2.535156-9.230469-4.503906-14.183594-5.886719l-3.445313-10.351562h-27.53125l-3.453125 10.351562c-4.953125 1.375-9.695312 3.34375-14.183594 5.886719l-9.777343-4.886719-19.472657 19.472657 4.886719 9.769531c-2.535156 4.484375-4.503906 9.230469-5.878906 14.183594l-10.359375 3.453125v27.539062l10.359375 3.445313c1.375 4.953125 3.34375 9.695312 5.878906 14.183594l-4.886719 9.769531 19.472657 19.472656 9.777343-4.886719c4.496094 2.535156 9.230469 4.503906 14.183594 5.886719l3.445313 10.359375h27.53125l3.453125-10.351562c4.953125-1.375 9.695312-3.34375 14.183594-5.886719l9.777343 4.886719 19.472657-19.472657-4.886719-9.769531c2.535156-4.484375 4.503906-9.230469 5.878906-14.183594l10.359375-3.453125v-27.539062l-10.359375-3.445313c-1.375-4.953125-3.34375-9.707031-5.878906-14.191406zm.238281 33.636719-8.039062 2.679687-.90625 4.554688c-1.222657 6.128906-3.605469 11.878906-7.09375 17.109375l-2.578126 3.867187 3.800782 7.574219-3.160156 3.160156-7.589844-3.792969-3.859375 2.578126c-5.222657 3.488281-10.980469 5.871093-17.109375 7.09375l-4.554688.914062-2.679687 8.03125h-4.46875l-2.671875-8.03125-4.554688-.914062c-6.128906-1.222657-11.878906-3.613282-17.109375-7.09375l-3.859375-2.578126-7.589844 3.792969-3.160156-3.160156 3.800782-7.574219-2.578126-3.867187c-3.488281-5.222657-5.863281-10.980469-7.09375-17.109375l-.90625-4.554688-8.039062-2.679687v-4.460938l8.039062-2.679687.90625-4.554688c1.222657-6.128906 3.605469-11.878906 7.09375-17.109375l2.578126-3.867187-3.800782-7.574219 3.160156-3.160156 7.589844 3.792969 3.859375-2.578126c5.222657-3.488281 10.980469-5.871093 17.109375-7.09375l4.554688-.914062 2.679687-8.03125h4.46875l2.671875 8.03125 4.554688.914062c6.128906 1.222657 11.878906 3.613282 17.109375 7.09375l3.859375 2.578126 7.589844-3.792969 3.160156 3.160156-3.800782 7.574219 2.578126 3.867187c3.488281 5.222657 5.863281 10.980469 7.09375 17.109375l.90625 4.554688 8.039062 2.679687zm0 0" />
    <path d="m112 360c-17.648438 0-32 14.351562-32 32s14.351562 32 32 32 32-14.351562 32-32-14.351562-32-32-32zm0 48c-8.824219 0-16-7.175781-16-16s7.175781-16 16-16 16 7.175781 16 16-7.175781 16-16 16zm0 0" />
  </SvgIcon>
);

const CVDownloadButton = withStyles(theme => ({
  root: {
    display: 'block',
    width: '80%',
    color: '#754ef9',
    background: '#fff',
    boxShadow: 'none',
    borderRadius: '32px',
    padding: '12px 32px',
    '&:hover': {
      background: '#754ef9',
      color: '#fff',
    }
  }
}))(Button);

const HireButton = withStyles(theme => ({
  root: {
    display: 'block',
    width: '80%',
    color: '#fff',
    background: 'transparent',
    boxShadow: 'none',
    border: 'solid 2px #fff',
    borderRadius: '32px',
    padding: '12px 32px',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.4)',
    }
  }
}))(Button);

export default class Service extends Component {
  render() {
    return (
      <div className="section sectionThree">
        <Grid container justify="center" style={{ margin: '120px 0 32px'}}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" gutterBottom>
              My Service
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Sworld Art Online
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              I always be alone cause I scare to lose people around me!!
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item xs={3}>
            <ServiceCard>
              <CardContent>
                <Typography align="center">
                  <LaptopMac style={{ fontSize: 72, color: "#754ef9" }} />
                </Typography>
                <Typography align="center" variant="h5" gutterBottom>
                  Web Development
                </Typography>
                <Typography align="center">
                  There is a reason that I came acrossing this world.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
          <Grid item xs={3}>
            <ServiceCard>
              <CardContent>
                <Typography align="center">
                  <PhoneIphone style={{ fontSize: 72, color: "#754ef9" }} />
                </Typography>
                <Typography align="center" variant="h5" gutterBottom>
                  Mobile Development
                </Typography>
                <Typography align="center">
                  There is a reason that I came acrossing this world.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
          <Grid item xs={3}>
            <ServiceCard>
              <CardContent>
                <Typography align="center">
                  <FaGamepad style={{ fontSize: 72, color: "#754ef9" }} />
                </Typography>
                <Typography align="center" variant="h5" gutterBottom>
                  Unity Development
                </Typography>
                <Typography align="center">
                  There is a reason that I came acrossing this world.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item xs={3}>
            <ServiceCard>
              <CardContent>
                <Typography align="center">
                  <FaLineChart style={{ fontSize: 72, color: "#754ef9" }} />
                </Typography>
                <Typography align="center" variant="h5" gutterBottom>
                  Data Analytics
                </Typography>
                <Typography align="center">
                  There is a reason that I came acrossing this world.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
          <Grid item xs={3}>
            <ServiceCard>
              <CardContent>
                <Typography align="center">
                  <DLIcon style={{ fontSize: 72, color: "#754ef9" }} />
                </Typography>
                <Typography align="center" variant="h5" gutterBottom>
                  Aritificial Intelligence
                </Typography>
                <Typography align="center">
                  There is a reason that I came acrossing this world.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
          <Grid item xs={3}>
            <ServiceCard>
              <CardContent>
                <Typography align="center">
                  <AdvisorIcon
                    style={{ fontSize: 72, color: "#754ef9" }}
                  />
                </Typography>
                <Typography align="center" variant="h5" gutterBottom>
                  Q&A
                </Typography>
                <Typography align="center">
                  There is a reason that I came acrossing this world.
                </Typography>
              </CardContent>
            </ServiceCard>
          </Grid>
        </Grid>
        <Grid container className="cover-resume" alignItems="center">
          <div className="overlay"></div>
          <Grid container justify="center" style={{ zIndex: 1200, color: '#fff' }}>
            <Grid item xs={12}>
              <Typography align="center" variant="h3" gutterBottom color="inherit">
                Have any project on mind?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                No Game No Life
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" style={{ paddingBottom: 48 }}>
                There is a reason that I came across in this world.
              </Typography>
            </Grid>
            <Grid container xs={2} justify="center">
              <CVDownloadButton>Download CV</CVDownloadButton>
            </Grid>
            <Grid container xs={2} justify="center">
              <HireButton>Hire Me</HireButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const ServiceCard = styled(Card)`
  width: 100%;
  min-height: 250px;
  margin-bottom: 16px;
`;

