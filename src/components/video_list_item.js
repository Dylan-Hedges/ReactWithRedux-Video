import React from 'react';

//Instead of brining in (props) then doing "const video = props.video;" using ES6 we can directly take props.video and save it in a variable called "video"
const VideoListItem = ({video}) => {
    //Saves image thumbail URL returned from Youtube (we reference it below with {imageUrl} as it a JS variable inside our JSX)
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li className="list-group-item">
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