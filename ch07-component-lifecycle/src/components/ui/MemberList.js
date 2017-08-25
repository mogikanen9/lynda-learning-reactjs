import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { MainMenu } from './MainMenu'

import { Member } from './Member'

export class MemberList extends Component {

    constructor(props){
        super(props)
        this.state = {
            members: [],
            loading: false
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch('https://api.randomuser.me/?nat=CA&results=10')
            .then(response => response.json())
            .then(json => json.results)
            .then(members => this.setState({
                members,
                loading: false
            }))
    }

    makeAdmin(){
        alert('It is amdin')
    }

    render() {

         {(this.state.loading) ?
                    <span>loading...</span> :
                    <span>{this.state.members.length} members</span>
                }


        let membersList = <span>Currently 0 Members</span>
        
        if(this.state.members.length>0){
            membersList = this.state.members.map(function(memberInfo){
                            return   <Member name={memberInfo.name.first+' '+memberInfo.name.last}
                                email={memberInfo.email} 
                                makeAdmin = {memberInfo.makeAdmin} 
                                thumbnail={memberInfo.picture.thumbnail} 
                                key={memberInfo.email}/>
                        })
        }
     

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
