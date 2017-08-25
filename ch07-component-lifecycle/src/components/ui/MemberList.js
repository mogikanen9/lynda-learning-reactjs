import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { MainMenu } from './MainMenu'

import { Member } from './Member'

export class MemberList extends Component {
    render() {
        return (
            <div className="page">
                <MainMenu className="main-menu" /> 
                <div className="member-list">
                    <h1>Society Members</h1>
                    <Member name="Edna Welch"/>
                </div>
             </div>    
        )    
   }     
}
