The binding step is necessary because class methods don't automatically bind `this` to the class instance. Without this binding, `this` will not be accessible inside class methods. 

You can bind `this` in the render() method itself, but will bind the class method each time the render() method runs. Binding the class in the constructor is only done once, when the constructor is initiated. 

Avoid binding the class method in your constructor. The constructor only exists to instantiate the class and its properties, so the business logic of class methods should stay out of the constructor. 

Class methods can be auto-bound using ES6 arrow functions: 

`
onClickMe = () => {
    console.log(this);
}
`
However, the official React docs still use class method bindings in the constructor so recommended 