import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { MainMenu } from './MainMenu'

export class MemberList extends Component {
    render() {
        return (
            <div className="page">
                <MainMenu className="main-menu" /> 
                <div className="member-list">
                    <h1>Society Members</h1>
                </div>
             </div>    
        )    
   }     
}
