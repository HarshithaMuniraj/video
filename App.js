import React, { useState, useRef } from 'react';
import VideoThumbnail from 'react-video-thumbnail';
import { Cloudinary } from '@cloudinary/url-gen';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgress = () => {
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    };
    return (
        <div>
            <video
                onTimeUpdate={handleProgress}
                ref={videoRef}
                width="50%"
                height="80%"
                controls
            >
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                <ngx-video-controls></ngx-video-controls>
             </video>
            <div>
                <button onClick={togglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <progress value={progress} max="100" />
            </div>
            <div>
              <VideoThumbnail
             videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
              thumbnailHandler={(thumbnail) => console.log(thumbnail)}
              width={300}
              height={200}
              />
            </div>
          
        </div>
    )
}

export default Player;