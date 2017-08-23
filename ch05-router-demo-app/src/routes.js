import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/ui/Home'
import  { Whoops404  } from './components'
import { About } from './components/ui/About'
import { MemberList } from './components/ui/MemberList'

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/members" component={MemberList} />
            <Route path="*" component={Whoops404} />
        </Switch>    
    </Router>
)

export default routes