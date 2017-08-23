import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/ui/Home'
import  { Whoops404  } from './components'
import { About } from './components/ui/About'

const routes = (
    <Router>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="*" component={Whoops404} />
        </Switch>    
    </Router>
)

export default routes