import { Component } from 'react'
import { PropTypes } from 'prop-types'

export class AddDayForm extends Component{
    
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(event){
        
        event.preventDefault()

        console.log('resort->',this.refs.resort.value)
        console.log('date->',this.refs.date.value)
        console.log('powder->',this.refs.powder.checked)
        console.log('backcountry->',this.refs.backcountry.checked)
    }
    
    render(){
        return (

            <form className="add-day" onSubmit={this.submit}>
                <label htmlFor="resort">ResortName</label>
                <input id="resort" type="text" required 
                    defaultValue={this.props.resort}
                    ref = "resort"/>

                <label htmlFor="date">Date</label>
                <input id="date" type="date" required 
                    defaultValue={this.props.date}
                    ref="date"/>

                <div>
                    <input id="powder" type="checkbox" 
                        defaultChecked={this.props.powder}
                        ref="powder"/>
                    <label htmlFor="powder">Powder Day</label>
                </div>

                <div>
                    <input id="backcountry" type="checkbox" 
                        defaultChecked={this.props.backcountry}
                        ref="backcountry"/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>
                
                <button>Add Day</button>

            </form>
        )
    }
}

AddDayForm.defaultProps = {
    resort: 'Blue Mountain',
    date: '2017-08-23',
    powder: false,
    backcountry: false
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}
