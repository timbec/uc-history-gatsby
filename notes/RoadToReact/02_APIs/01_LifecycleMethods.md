Lifecycle methods are used in ES6 Class components NOT in functional stateless components. 

Covered two in basics: 
- constructor()
- render()

the mounting process has 4 lifecycle methods: 
`
constructor()
getDerivedFromProps()
render()
componentDidMount()
`

For the update lifecycle (when state or props change), there are 5: 
`
getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
`

Lastly, there is the unmounting lifecycle: 
`
componentWillUnmount()
`

Also, introduced in React 16: 
`
componentDidCatch(error, info)
`
to catch errors in components. 

