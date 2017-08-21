import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { AddDayForm } from './components/AddDayForm'
import { BrowserRouter, Route } from 'react-router-dom'

window.React = React

render(
    //<SkiDayCount />,
    //<App />,
    <BrowserRouter>
        <div>
            <Route path = "/" component = { App } />
            <Route path = "list-days" component = { App }/>
            <Route path = "add-day" component = { AddDayForm }/>
            <Route path = "*" component = { Whoops404 }/>
        </div>
    </BrowserRouter>,
    document.getElementById('react-container')
)