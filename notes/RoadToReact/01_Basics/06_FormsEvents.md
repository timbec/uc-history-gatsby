In this step, we put in a search form. 

Step 1, include search form with input inside JSX (inside render() method): 
`
<form>
    <input type="text" />
</form>
`

by typing into the input field and temporarily filter the list by the search term in the input field. To filter the list based on the value in the input field, the value of the input field will be stored in the local state. Synthetic events in Reach are used to access a value in an event payload. 

Step 2: include an onChange handler for the input field: 
`
<form>
    <input type="text" 
    onChange={this.onSearchChange}
    />
</form>
`

then bind the method (in the constructor): 

`
this.onSearchChange = this.onSearchChange.bind(this); 
`
and the method outside the constructor: 
`
onSearchChange(event) {

}
`
The `event` has the value of the input field in its target object, so the local state can be updated with a search term using `this.setState()`
`
onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
}
`

searchTerm has to be defined in the initial state in the constructor. The input field should be empty in the beginning. 
`
this.state = {
    list, 
    searchTerm: '',
}
`
The input value is stored to local state every time the value in the input field changes. 
We then need to temporarily filter the list based on the `searchTerm` by applying a filter before mapping over the list. The filter will only evaluate if the searchTerm matches the title property of the item. 
The `filter` function returns a new array, so the map function can be used. 
`
{this.state.list.filter(...).map(item=> 
    ...
)}
`
This utilizes something called a 'higher order function' which I don't understand. I'm sure it's actually simple, but badly explained, but will have to look it up further. 
We have to define the higher order function outside the App component: 
`
function isSearched(searchTerm) {
    return function(item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}
`
This function takes the `searchTerm` and returns another function. The returned function has access to the item object, because it is the one passed to the filter function. 
##QUESTION: what is a higher order function and how is this working in plain English? 
one explanation in the book: higher order functions are functions that return other functions. 
this matches the incoming searchTerm pattern with the title property of the item. `includes` is a built in JS functionality. When the pattern matches, it returns true and stays on the list; when the pattern doesn't match, the item is removed from the list. 
`
//ES5
string.indexOf(pattern) !== -1
//ES6
string.includes(pattern)
`
Also with ES6: 
`
//ES5
function isSearched(searchTerm) {
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}
//ES6
const isSearched = searchTerm => item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase());
`

use the defined isSearched() function to filter lists by passing it the searchTerm property from the local state, so that it returns the filter's input function and filters the list based on the filter condition. After that it maps over the filtered list to display an element for each list item: 

`
{this.state.list.filter(isSearched(this.state.searchTerm)).map(
    ...
)}
`