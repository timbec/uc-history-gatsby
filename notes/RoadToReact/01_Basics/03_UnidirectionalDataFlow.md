- The local state is static, so the component that contains it is static as well. 
- A good way to experience state manipulation is to engage in component interaction. In our component we add a button to dismiss (delete) items (could also be useful for 'mark as read'): 

`
<button onClick={() => 
    this.onDismiss(item.objectID)} type="button">
    Dismiss
    </button>
`
this uses a method 'onDismiss()' that will be defined just below the 'this.state' section. 'item.objectID' identifies the object to be deleted. 

Generally, multiline and indentation for inline elements like above are considered a best practice for readability and general cleanliness. 

The 'onDismiss()' method has to be bound to the class method (the local component). The 'this' object is the class instance(ie attached to the 'App' component). The 'onDismiss()' method mst be bound (bind) to the constructor (and included within the constructor): 

`
this.onDismiss = this.onDismiss.bind(this)
`

Outside of the constructor, we define the business logic of our method. The method takes one parameter (id). Its objective is to remove the item identified by the id from the list, and store the updated list to the local state. The updated list will then be used to re-run the render() method. 

##Question: if it takes in 'id', what does it return exactly? 
takes in 'id', checks for a match with 'item.objectID', if there is a match, the item is removed from the list. function then returns the updated list. 

an item can be removed from the list by using the JS built in filter function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

The filter function returns a new list instead of mutating the old one, therefore supporting the React convention of immutable data structures. 
`
onDismiss(id) {

    function isNotId(item) {
        return item.objectID !== id; 
    }
    const updatedList = this.state.list.filter(isNotId);
}
`
which can be made more concise by using the ES6 arrow function: 
` 
const isNotId = item => item.objectID !== id; 
const updatedList = this.state.list.filter(isNotId);
`
inside the method, we then update the state withouth changing the original state list: 
`
this.setState({ list: updatedList });
`