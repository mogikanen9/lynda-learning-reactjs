'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
    'h1',
    { id: 'title', className: 'header',
        style: {
            backgroundColor: 'orange',
            color: 'white',
            fontFamily: 'Verdana'
        } },
    'Hello World'
), document.getElementById('react-container'));
