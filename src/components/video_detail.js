import React from 'react';

//Pass in only the props.video object for our functional component
const VideoDetail = ({video}) => {
    //Checks to see if video has loaded before rendering the page - aka checks to see if the "video" property exists before rendering the component, if no video has been loaded it return a loading screen and exit the code execution (because of "return"), if a video has been loaded it will proceed to the next block
    if (!video){
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    //Shows a youtube video player inside of our app (we use string interpolation (` ${videoId} `) instead of adding variable to end of string)
    const url = `https://www.youtube.com/embed/${videoId}` ;
    
    return(
        <div className="video-detail col-md-8">
            <div className ="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;