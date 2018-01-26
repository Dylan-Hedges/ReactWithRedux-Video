import React from 'react';
import VideoListItem from './video_list_item';

//(props) refers to "videos={this.state.videos}" passed from the parent "App" in index.js, the function onVideoSelect is passed in from index.js "props.onVideoSelect" can now be done
const VideoList = (props) => {
    //Using ".map" we can loop through the videos and execute a function for each iteration (built in iterator and alternative to for loops)
    const videoItems = props.videos.map((video) => {
        //Passes properties to video_list_item.js - key={video.etag} - takes the "etag" for each video (as returned by the YouTube API) and assigns it to each video as its key (removes error messages), the key allows React to update the records efficently, "onVideoSelect={props.onVideoSelect}" passes the onVideoSelect prop from index.js into video_list_item.js
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} video={video} />
        );
    });
    
    return (
        //We use className="" instead of class="" because of naming conflicts when we define "class" components, React can see it is an array of items and try to render all the <li> inside of the <ul>
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}


export default VideoList;