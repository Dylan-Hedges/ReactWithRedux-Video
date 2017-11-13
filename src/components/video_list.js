import React from 'react';
import VideoListItem from './components/video_list_item';

//(props) refers to "videos={this.state.videos}" passed in from index.js
const VideoList = (props) => {
    return (
        //We use className="" instead of class="" because of naming conflicts when we define "class" components
        <ul className="col-md-4 list-group">
            
        </ul>
    );
}


export default VideoList;