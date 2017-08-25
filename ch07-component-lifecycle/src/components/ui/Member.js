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
                
            </div>
        )
    }
}

Member.defaultProps = {
    name: 'Sarah Conor'
}

Member.PropTypes = {
    name: PropTypes.string
}