import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

render(
    <SkiDayCount />,
    /*<SkiDayList
        days={
            [
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
        } />,*/
    document.getElementById('react-container')
)