ES6 allows for greater concision in how you initialize objects. 
`
//ES5
const name = 'Yoga For Your Brain'

const program = {
    name: name
}

//ES6
const program = {
    name,
}; 
`

Inside the application, process is the same: 
`
//ES5
this.state = {
    list: list, 
}
//ES6
this.state = {
    list,
}
`

Can also use shorthand for method names (before you would have preceded with 'function'): 
`
//ES6
const userService = {
    getUserName(user) {
        return user.firstname + ' ' + user.lastname;
    }
}
`

Can also use computed property names: 

const key = 'name';
const program = {
    [key]: 'Yoga For the Brain'
};
