import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { AddDayForm } from './components/AddDayForm'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 

window.React = React

render(
    //<SkiDayCount />,
    //<App />,
    <Router>
        <Switch>
            <Route path = "/" component = { App } />
            <Route path = "list-days" component = { App } />
            <Route path = "list-days/:filter" component = { App } />
            <Route path = "add-day" component = { AddDayForm }/>
            <Route component = { Whoops404 }/>
        </Switch>
    </Router>,
    document.getElementById('react-container')
)