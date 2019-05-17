The `children ` prop is used to pass elements to a component from above. The elements are unknown to the component. 
    <Search
        value={searchTerm}
        onChange={this.onSearchChange}
    >Search</Search> //text to be passed down. 

The Search component can now destructure the children property from the `props` object, and specify where it should be displayed.
In Search component: 
`
    const {value, onChange, value } = this.props;
    return (
        <form>
            {children} <input
            ...
            
            >
        </form>
    )

different entities can be passed down: elements, element trees, that can be encapsulated as children. The `children` propery makes it possible to weave components into each other. 