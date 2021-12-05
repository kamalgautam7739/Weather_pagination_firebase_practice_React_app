import { Card } from '@mui/material';

import React, { Component } from 'react'

export default class WeatherDisplay extends Component {
    
    render() {
        let weather=this.props.data;
        let dateRise = new Date(weather.sys.sunrise * 1000);
        let dateSet = new Date(weather.sys.sunset * 1000);
        return (
            <div>
            <Card>
                <div style={{color:"red"}}>{new Date().toDateString()}</div>
                <div style={{fontSize:"25px", fontFamily:"cursive"} }> {weather.name} {weather.sys.country}</div>
                <div style={{fontSize:"25px", fontFamily:"fantasy"}}>{weather.main.temp} &deg;C</div>
                <div style={{fontSize:"15px", fontFamily:"cursive"}}> Feels Like: {weather.main.feels_like} &deg;C</div>
                <div><span style={{ fontFamily:"sans-serif"}}>Sun Rise:</span>{
                dateRise.getHours()}:{dateRise.getMinutes()}:{dateRise.getSeconds()} <span style={{ fontFamily:"sans-serif"}}>    Sun Set:</span>{
                    dateSet.getHours()}:{dateSet.getMinutes()}:{dateSet.getSeconds()}</div>
                
            </Card>
            </div>
        )
    }
}
