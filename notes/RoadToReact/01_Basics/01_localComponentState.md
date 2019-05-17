##These are notes from the 'road to react' course. For now, I'll stick to the course basics, using Axios to bring in data, just to reinforce concepts. 

The App Component is a subclass of Component, 'extends' is in the component declaration. 'App' component extends Component. 

It is mandatory to call super(props). It sets this.props in your constructor in case you want to access them there. 

to start, the initial state of the component is a list of items. 
`
class App extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            list: list,
        }
    }
}
`
the state is bound to the class using the this object, so you can access the local state of the component. You can now use the list from local state inside your component (thus transferring the data from outside to inside the component)

`
render() {
    return (
        {this.state.list.map(item => 
            <div key={item.objectID}> //need to have key
                {item.title}
            </div>
        )}
    )
}
`

Every time you change your component state, the render() method will run again. The local component state will update, and component will re-render with the correct (updated) data. 

You cannot mutate (change) local component state directly. Instead, you use: 
`setState()`