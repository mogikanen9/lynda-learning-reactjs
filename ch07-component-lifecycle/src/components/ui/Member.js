import { Component } from 'react'
import { PropTypes } from 'prop-types'
import FaShiled from 'react-icons/lib/fa/shield'

export class Member extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="memberInfo">
                <h1>{this.props.name} <FaShiled /></h1>
                <div>
                    <img src={this.props.thumbnail}></img>
                </div>
                <div>
                    <a href="mailto: {this.props.email}">{this.props.email}</a>
                </div>
                <div>
                    <a onClick={this.props.makeAdmin}>Make Admin</a>
                </div>
            </div>
        )
    }
}

Member.defaultProps = {
    name: 'Sarah Conor',
    thumbnail: '',
    email: 'sarah.conor@gmail.com',
    makeAdmin: function(){
        alert('kuku');
    }
}

Member.PropTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    email: PropTypes.email
}