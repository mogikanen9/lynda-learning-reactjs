import { Component } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component{

        constructor(props){
            super(props)
            this.state = {
                    allSkiDays: [
                                        {
                                            resort: "Snow Vallew",
                                            date: new Date("1/2/2016"),
                                            powder: true,
                                            backcountry: false
                                        },
                                        {
                                            resort: "Blue Mountain",
                                            date: new Date("10/2/2016"),
                                            powder: true,
                                            backcountry: true
                                        },
                                        {
                                            resort: "Kirkwood",
                                            date: new Date("11/2/2016"),
                                            powder: false,
                                            backcountry: false
                                        }
                                    ]
            }
        }

       countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
        }
            
        render(){
            return (
                <div className="app">
                    <Menu />
                    {
                        (this.props.location.pathname === "/") ?
                            <SkiDayCount total={this.countDays()}
                                        powder={this.countDays(
                                            "powder"
                                        )}
                                        backcountry={this.countDays(
                                            "backcountry"
                                        )}  /> :
                        (this.props.location.pathname === "/add-day")?
                            <AddDayForm /> :
                        (this.props.location.pathname === "/list-days")?
                        <SkiDayList days={this.state.allSkiDays}/>:
                        <div/>
                    }
                   
                </div>
            )
        }
}