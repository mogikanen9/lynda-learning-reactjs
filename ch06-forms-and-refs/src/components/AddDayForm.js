import { Component } from 'react'
import { PropTypes } from 'prop-types'

export class AddDayForm extends Component{
    render(){
        return (

            <form className="add-day">
                <label htmlFor="resort">ResortName</label>
                <input id="resort" type="text" required 
                    defaultValue={this.props.resort}/>

                <label htmlFor="resort">Date</label>
                <input id="date" type="date" required 
                    defaultValue={this.props.date}/>

                <div>
                    <input id="powder" type="checkbox" required 
                        defaultChecked={this.props.powder}/>
                    <label htmlFor="powder">Powder Day</label>
                </div>

                <div>
                    <input id="backcountry" type="checkbox" required 
                        defaultChecked={this.props.backcountry}/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>

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
