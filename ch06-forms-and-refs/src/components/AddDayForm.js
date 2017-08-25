import { Component } from 'react'
import { PropTypes } from 'prop-types'

const myResorts = [
    "Blue Mountain",
    "Snow Valley",
    "Horse Shoe",
    "Mount St. Louis",
    "Mount Pakenham"
]

class Autocomplete extends Component{

    get value() {
		return this.refs.inputResort.value
	}

	set value(inputValue) {
		this.refs.inputResort.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputResort"
					   type="text" 
					   list="my-resorts" />
				<datalist id="my-resorts">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}

export class AddDayForm extends Component{

    constructor(props){
        super(props)
        console.log('onNewDay->'+props.onNewDay)
        this.submit = this.submit.bind(this)
    }

    submit(event){

        event.preventDefault()

        var newDay = ({
            resort: this.refs.resort.value,
            date: this.refs.date.value,
            powder: this.refs.powder.checked,
            backcountry: this.refs.backcountry.checked
        })

        console.log('newDay->',newDay)
        this.props.onNewDay(newDay)

        this.refs.resort.value = ''
        this.refs.date.value = ''
        this.refs.powder.checked = false
        this.refs.backcountry.checked = false
    }
    
    render(){
        return (

            <form className="add-day" onSubmit={this.submit}>
                <label htmlFor="resort">ResortName</label>
                <Autocomplete options={myResorts} 
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
