import { CircularProgress } from '@mui/material';
import React, { Component } from 'react'
import { ApiFetch } from './apiFetch'
import Header from './Header';
import WeatherDisplay from './WeatherDisplay';
export default class WeatherData extends Component {
    state={
        
        isLoading:true,
        data:{},

    }
    componentWillMount(){
     let self=this;
    
        ApiFetch.getDAta("Kathmandu").then(response=>
            {
             self.setState({
                 isLoading:false,
                 data:response.data
                
             })

            }).catch(error=>error)
            console.log(this.state.data)
    }
    render() {
        return (
            <div>
                <Header></Header>
                { console.log(this.props.city)}
                {this.state.isLoading ?<CircularProgress></CircularProgress>:
                <WeatherDisplay data={this.state.data}></WeatherDisplay>}
                
                </div>
        )
    }
}
