//----------IMPORT REACT-------(as a JS module)
//React Library - Create and manage components - Go find the library called React (React was installed in the application as a dependency (node modules folder) when we ran "npm install")//import React - save it into the variable claled React
import React, {Component} from 'react';
//React DOM - Takes components and renders it into the DOM
import ReactDOM from 'react-dom';
//Allows us to perform Youtube searches
import YTSearch from 'youtube-api-search';
//Import search bar (Note: "SearchBar" is defined here, it doesn't refer to "export default SearchBar;" in "search_bar.js")
import SearchBar from './components/search_bar';
//We have to define the path for files we create
import VideoList from './components/video_list';
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
        this.state = {videos: [] };
        //Performs Youtube search - save result in "(videos)" and execute callback function - Takes an object (containing our API key and a search term) and executes a callback function ( "(videos)" is a new variable and does not refer to "videos:" defined above)
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            //Updates state - with results and rerender the page - Refactored, when the key and the property are the same name we only need to write it once, its the same as "{videos: videos}"
            this.setState({videos});
        });
    }
    
    //Renders the page
    render(){
        return(
            // Pass the YTSearch data or "props" (videos) to the video_list.js file which will display it as a <ul>
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


//---------OUTPUT HTML INTO THE DOM----------(so user can see it)
//Renders generated HTML on the page - "<App />" = creates an instance of the class "App" (run each time the page loads), JSX tags (< />) turns App (class) into an instance to be rendered into the DOM, document.querySelector('.container') - the location in the index.html file where the App instance/generated HTML will be rendered, <App /> is the same as <App></App> (works only when there is nothing inside of the tags) 
ReactDOM.render(<App />, document.querySelector('.container'));