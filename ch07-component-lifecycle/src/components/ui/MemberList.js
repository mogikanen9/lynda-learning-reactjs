import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { MainMenu } from './MainMenu'

import { Member } from './Member'

export class MemberList extends Component {

    constructor(props){
        super(props)
        this.state = {
            members: [
                    {
                        name: "Edna Welch",
                        email: "enda.welch@qwe.com",
                        thumbnail: "https://randomuser.me/api/portraits/women/64.jpg",
                        makeAdmin: this.makeAdmin
                    },
                     {
                        name: "Anna Mona",
                        email: "anna.mona@qwe.com",
                        thumbnail: "https://randomuser.me/api/portraits/women/68.jpg",
                        makeAdmin: this.makeAdmin
                    },
                     {
                        name: "Eva Riku",
                        email: "eva.riku@qwe.com",
                        thumbnail: "https://randomuser.me/api/portraits/women/70.jpg",
                        makeAdmin: this.makeAdmin
                    }
            ]
        }
    }

    makeAdmin(){
        alert('It is amdin')
    }

    render() {

        var membersList = this.state.members.map(function(memberInfo){
                        return   <Member name={memberInfo.name}
                            email={memberInfo.email} 
                            makeAdmin = {memberInfo.makeAdmin} 
                            thumbnail={memberInfo.thumbnail} key={memberInfo.email}/>
                      })

        return (
            <div className="page">
                <MainMenu className="main-menu" /> 
                <div className="member-list">
                    <h1>Society Members</h1>
                   <div>
                       {membersList}
                   </div>    
                </div>
             </div>    
        )    
   }     
}
