//----------IMPORT REACT-------(as a JS module)
import _ from 'lodash';
//React Library - Create and manage components - Go find the library called React (React was installed in the application as a dependency (node modules folder) when we ran "npm install")//import React - save it into the variable claled React
import React, {Component} from 'react';
//React DOM - Takes components and renders it into the DOM
import ReactDOM from 'react-dom';
//Allows us to perform Youtube searches
import YTSearch from 'youtube-api-search';
//Import search bar (Note: "SearchBar" is defined here, it doesn't refer to "export default SearchBar;" in "search_bar.js", also note when we create a file we use './', for node_modules we dont use a relative path)
import SearchBar from './components/search_bar';
//We have to define the path for files we create
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Youtube API key
const API_KEY = "AIzaSyC5-JN-0YCtNasuWKd1MWffS54Ei6ZkdSI"; 



//----------CREATE COMPONENT-------
//Creates a type of component (this is a class not an instance, we can have many instances of this component)
class App extends Component {
    //Adds state - (we need state to display reccomened video list and update when user makes new search)
    constructor(props){
        //Calls the "prop" method from "Component" (which is inside 'react')
        super(props)
        //Sets inital state - to be an object containing an empty Array called "videos" (as we will be displaying a list of videos)
        this.state = {
            videos: [], 
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }
    
    //Search method for our app - takes a single string i.e a search term
    videoSearch(term){
        //Searches Youtube for a list of videos - saves result in "(videos)" and execute callback function - Takes an object (containing our API key and a search term) and executes a callback function ( "(videos)" is a new variable and does not refer to "videos:" defined above)
        YTSearch({key: API_KEY, term: term}, (videos) => {
            //Updates state - with results and rerender the page - Refactored, when the key and the property are the same name we only need to write it once, its the same as "{videos: videos}", "selectedVideo: videos[0]" makes the first video in the search the main video "<VideoDetail video={this.state.selectedVideo}/>""
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    //Renders the page
    render(){
        //Slows down/throttles user searches (makes results return smoother) - Creates a new debounched version of the search function that can be called only once every 300 milliseconds - "_.debounce" takes our => function and returns a new function "videoSearch" (we passed the method to search_bar.js under the property "onSearchTermChange" which will execute "the YTSearch")
        const videoSearch = _.debounce((term) => {this.videoSearch(term) },300);
        
        return(
            //<SearchBar /> displays the search bar on screen (uses ".debounced" version), <VideoDetail /> displays the main/selected video, <VideoList /> passes the YTSearch data or "props" (videos) to the video_list.js file which will display a list of videos as a <ul>, we pass a property "onVideoSelect" containing a function to video_list.js, "onVideoSelect" updates the main video with whatever you select (passed as a property to video_list.js), these are examples of callbacks which limit parent <-> child communication overhead
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}


//---------OUTPUT HTML INTO THE DOM----------(so user can see it)
//Renders generated HTML on the page - "<App />" = creates an instance of the class "App" (run each time the page loads), JSX tags (< />) turns App (class) into an instance to be rendered into the DOM, document.querySelector('.container') - the location in the index.html file where the App instance/generated HTML will be rendered, <App /> is the same as <App></App> (works only when there is nothing inside of the tags) 
ReactDOM.render(<App />, document.querySelector('.container'));