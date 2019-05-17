Markdown Basic Syntax: https://www.markdownguide.org/basic-syntax/
Might want to look into this: https://www.docz.site/docs/getting-started

the difference between <strong>Controlled</strong> and <strong>Uncontrolled</strong> componentst, is in the controlled component, form data is handled by the React component. In an uncontrolled component, form data is controlled by the DOM itself. 

To make an input field a <em>Controlled</em>Component, we need to set the value attribute, which is already saved in the `searchTerm` state property:
    ...
    value={searchTerm}
    ...

The local component state is the single source of truth for the input field. 