import React, { Component } from 'react'
import { Dialog, DialogContent, makeStyles, withStyles } from '@material-ui/core'
import ReactPlayer from 'react-player'
import styled from 'styled-components'


const VideoWrapper = withStyles({
    paper: {
      height: '70%',
      width: '80%',
    },
})(Dialog);

export default class VideoPlayer extends Component {
    render() {
        const { open, handleBackdrop, url } = this.props
        return (
            <VideoWrapper
                maxWidth='xl'
                open={open} onClick={handleBackdrop}
            >
                <DialogContent>
                    <ReactPlayer 
                        url={url}
                        width='100%'
                        height='100%'
                    />
                </DialogContent>
            </VideoWrapper>
        )
    }
}
