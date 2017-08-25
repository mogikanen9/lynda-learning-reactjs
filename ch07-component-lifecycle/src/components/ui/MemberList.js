import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { MainMenu } from './MainMenu'

import { Member } from './Member'

export class MemberList extends Component {

    makeAdmin(){
        alert('It is amdin')
    }

    render() {
        return (
            <div className="page">
                <MainMenu className="main-menu" /> 
                <div className="member-list">
                    <h1>Society Members</h1>
                    <Member name="Edna Welch" email="edna.welch@gmail.com" makeAdmin={this.makeAdmin}/>
                </div>
             </div>    
        )    
   }     
}
