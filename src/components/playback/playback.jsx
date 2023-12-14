import React from 'react'
import ReactPlayer from 'react-player'
import web from '../../assets/web.webm'
import mp4 from '../../assets/webvideosmall.mp4'
import './playback.css'

export default function Playback() {
  return (
    <div>
        <div className='player'>
            <ReactPlayer
                className='react-player'
                url= {mp4}
                width='100%'
                height='100%'
                controls = {false}
                loop = {true}
                playing = {true}
            />
          </div>
    </div>
  )
}
