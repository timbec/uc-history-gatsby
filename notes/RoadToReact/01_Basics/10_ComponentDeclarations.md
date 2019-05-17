<b>Functionless State Components</b> are functions that take input and return an output. The inputs are the props, and the output is component instance in JSX. In this, they are similar to regular components, however they differ in that they are functions (functional) and have no local state (stateless). You cannot access or update state with `this.state` or `this.setState()` because there is no `this` object. 

Additionally, they have no lifecycle methods except for `render()`. Thus far, we have used two lifecycle methods: 
`constructor()` and `render()`. 

The `constructor()` runs only once in the lifetime of a component, where `render()` runs once in the beginning, thene every time the component updates. 

<b>ES6 Class Components</b> extend the React component. The `extend` hooks all lifecycle methods available in the React component API to the component. You can also store and manipulate state in ES6 class components using `this.state()` and `this.setState()`

A rule of thumb when deciding when to use functionless stateless components over ES6 class components is to use functional stateless components when you don't need local state or component lifecycle methods. 