use `componentDidMount()` to fetch data. 

`
    const DEFAULT_QUERY = 'fiction'; 
    const PATH_BASE = 'https://timbbeckett-writing.com/wp/v2/posts';
    const PATH_SEARCH = '?search'; 
    const PARAM_SEARCH = '?search=';
`

## Have to look up query strings for WP REST API. 
Some resources: 
https://wordpress.stackexchange.com/questions/271877/how-to-do-a-meta-query-using-rest-api-in-wordpress-4-7
https://stackoverflow.com/questions/38084765/wordpress-rest-api-global-search-api-v2

But above should work for now. 

This function controls what is searched. Current it is only the title: 

        function isSearched(searchTerm) {
            return function (item) {
                return item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase());
            }
        }

##Need to go back over this chapter, catch up on notes. 