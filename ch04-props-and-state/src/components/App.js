import { Component } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'

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
                    <SkiDayList days={this.state.allSkiDays}/>
                    <SkiDayCount total={this.countDays()}
                                  powder={this.countDays(
                                      "powder"
                                  )}
                                  backcountry={this.countDays(
                                      "backcountry"
                                  )}  />
                </div>
            )
        }
}