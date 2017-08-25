import { Component } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'
import { Whoops404} from './Whoops404'


export class App extends Component{

        constructor(props){
            
            super(props)
            console.log('App.props->'+props)

            this.state = {
                    allSkiDays: [
                                        {
                                            resort: "Snow Vallew",
                                            date: "2016-12-03",
                                            powder: true,
                                            backcountry: false
                                        },
                                        {
                                            resort: "Blue Mountain",
                                            date: "2016-12-14",
                                            powder: true,
                                            backcountry: true
                                        }
                                    ]              
            }

            this.addNewDay = this.addNewDay.bind(this)
        }

       countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
        }
           
        addNewDay(newDay){
            this.setState(
                {
                    allSkiDays:[
                       ...this.state.allSkiDays,
                       newDay 
                    ]
                }
            )
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
                        <AddDayForm {...this.props} onNewDay={this.addNewDay} /> :
                        <SkiDayList days={this.state.allSkiDays} filter={this.props.match.params.theFilter} />
                    }
                   
                </div>
            )
        }
}