import React from 'react';

//Instead of bringing in (props) then doing "const video = props.video;" using ES6 we can directly take "props.video" and save it in a variable called "video", "onVideoSelect" is the same and passed in from video_list.js (when an item is clicked call that function defined in index.js with whatever ever video i was passed from Youtube)
const VideoListItem = ({video, onVideoSelect}) => {
    //Saves image thumbail URL returned from Youtube (we reference it below with {imageUrl} as it a JS variable inside our JSX)
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li onClick={() => onVideoSelect(video)}className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;