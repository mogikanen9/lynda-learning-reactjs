const {createElement} = React

const {render} = ReactDOM

const myStyle = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Verdana'
}

const title = createElement(
    'h1',
    {id: 'title', className:'header', style: myStyle},
    'Hello World!'
)

render(
    title,
    document.getElementById('react-container') 
)