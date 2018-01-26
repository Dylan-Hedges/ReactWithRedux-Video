//Import React.Component and save it in the variable "Component"
import React, { Component } from 'react';

//Gives the class added functionality from React.Component
class SearchBar extends Component {
    //Initalizes state - called every time a new instance is created
    constructor(props){
        //Calls the "props" method inside of "Component" (Which is inside of 'react')
        super(props);
        //Sets inital state = object, creates a new object (containing a property called "term") and pass it into "this.state", "term: ''" aka search term, if user serarch term is not blank then record change, updates to be what the user types into the input field, we only ever manually set the state in the "constructor()" function
        this.state = { term: ''};
    }
    render(){
        //Input component - this.setState() ONLY update state using this method, "{term: event.target.value}" to what the user has inputted, the DOM is rerendered each time a change occurs //Create new input + add event handler ("onChange") + arrow function "=>" + action "console.log()", DONT do "this.state.term = event.target.value" to change the state to what the user has inputted, when we rerender our state all children are also rerendered
        return (
            <div className="search-bar">
                <input 
                //Update the user input on screen (only updates after rerendering)
                value={this.state.term}
                //When the user input changes "onInputChange" and is passed the new term
                onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    
    onInputChange(term){
        //Sets components state with the new term and rerenders the page
        this.setState({term});
        //Executes the callback function "onSearchTermChange" in "index.js" with the new term
        this.props.onSearchTermChange(term);
    }
}


//Exports the search bar to be used by other components
export default SearchBar;




//-------------------------OLD CODE-----------------------------------------
 //Update the state to what the user has typed (".setState" also rerenders the component whenever it is called, we never set the state manually e.g "this.state.term = event.target.value")
// onChange = {event => this.setState({term: event.target.value})} 
               

//import React from 'react';
//class SearchBar extends React.Component {

// class SearchBar extends Component {
//     //every class function/method must use the "render ()" method and must have a "return" otherwise errors will occur
//     render(){
//         //Create a new input element and add an event handeler - "onChange" = type of event + the event handler path ("this.onInputChange")
//         return <input onChange={this.onInputChange}/>;
//     }
//     //Declare event handler -"event" can be named anything, contains lots of technical information about what happened above
//     onInputChange(event) {
//         console.log(event.target.value);
//     }
// }


//Functional component
// const SearchBar = () => {
//     //Generates html input that user can type into, React.createElement is executed behind the scenes, without importing React it will return an error
//     return <input />;
// }


// Display user input
//return <input onChange={event => console.log(event.target.value)} />;

//Display changed value on screen
//Value of the input is: {this.state.term}
