import { Component } from 'react'
import { PropTypes } from 'prop-types'
import FaShiled from 'react-icons/lib/fa/shield'

export class Member extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            thumbnail: this.props.thumbnail,
            email: this.props.email,
            admins: this.props.admins
        }

        this.makeAdmin = this.makeAdmin.bind(this)
        this.removeAdmin = this.removeAdmin.bind(this)
    }

    makeAdmin(email){
         const admins = [
            ...this.state.admins,
            email
        ]
        this.setState({admins})
    }

    removeAdmin(email){
        const admins = this.state.admins.filter(
            adminEmail => adminEmail !== email
        )
        this.setState({admins})
    }

    render(){

        const isAdmin = this.state.admins.indexOf(this.state.email)>-1
        let adminLink = null
        if(isAdmin){
            adminLink = <a onClick={() => this.removeAdmin(this.state.email)}>Remove Admin</a>
        }else{
            adminLink = <a onClick={() => this.makeAdmin(this.state.email)}>Make Admin</a>
        }

        return (
            <div className="memberInfo" >
                <h1>{this.state.name} <FaShiled /></h1>
                <div>
                    <img src={this.state.thumbnail}></img>
                </div>
                <div>
                    <a href="mailto: {this.state.email}">{this.state.email}</a>
                </div>
                <div>
                    {adminLink}
                </div>
            </div>
        )
    }
}

Member.defaultProps = {
    name: 'Sarah Conor',
    thumbnail: 'https://randomuser.me/api/portraits/women/63.jpg',
    email: 'sarah.conor@gmail.com',
    admins: []
}

Member.PropTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    email: PropTypes.email
}