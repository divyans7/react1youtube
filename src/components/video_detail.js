import React from 'react'; 
import YouTube from 'react-youtube'

const VideoDetail = ({video}) => {
    
    if (!video) {
        console.log("no video found")
        return <div>Loading... </div>;
    
    } 
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
    };
    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;

    console.log(videoID, video, "this is video id")
    return(
        <div className="video-detail col-md-8">
            {/* <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>

            </div> */}
            <YouTube
                videoId={videoID}
                opts={opts}
                // onReady={this._onReady}
            />

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div> 
            </div>
        </div>


    );


}

export default VideoDetail;