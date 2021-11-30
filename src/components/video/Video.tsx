import { Fullscreen, Pause, PlayArrow, Settings, VolumeOff } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'

import './Video.css'

interface Props {
    src: string;
    duration: number;
}

function Video({ src, duration }: Props) {
    const [time, setTime] = useState(0);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const video = document.getElementById("video-player") as HTMLVideoElement;
    
        const slider = document.getElementById("video-slider") as HTMLInputElement;
    
        video.addEventListener("timeupdate", (e) => {
          let time = (100 / video.duration) * video.currentTime;
    
          setTime(Math.round(video.currentTime));
    
          slider.value = `${time}`;
        });
    
        slider.addEventListener("change", (e) => {
          let sliderValue: number = parseInt(slider.value);
    
          let time = sliderValue / (100 / video.duration);
    
          video.currentTime = time;
        });
      }, []);
    

    useEffect(() => {
        const video = document.getElementById("video-player") as HTMLVideoElement;

        if (video) {
            if (!playing) {
                video.pause();
            } else {
                video.play();
            }
        }
    }, [playing]);

    return (
        <div id="video-container">
            <video id="video-player" src={src} />
            <div id="video-controls">
                <div className="video-controls-background"></div>
                <button className="video-button video-control">
                    <img className="reddit-logo" src="assets/images/reddit_logo.jpg" alt="" />
                </button>
                <button onClick={(e) => setPlaying(value => !value)} className="video-button video-control">
                    {playing ? <Pause /> : <PlayArrow/>}
                </button>
                <span className="video-control">{time}</span>
                <input id="video-slider" className="video-control" type="range" />
                <span className="video-control">{duration}</span>
                <button className="video-button video-control">
                    <Settings/>
                </button>
                <button className="video-button video-control">
                    <Fullscreen/>
                </button>
                <button className="video-button .video-control-always-present">
                    <VolumeOff/>
                </button>
            </div>
        </div>
    );
}

export default Video
