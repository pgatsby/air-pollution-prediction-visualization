import React, {Component} from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

require('dotenv').config()

export default class LiveAirQuality extends Component{

    constructor(props){
        super(props);
        this.url = "https://api.weatherbit.io/v2.0/current/airquality?city=Los%20Angeles&country=US&key=";
        this.key = process.env.REACT_APP_WEATHERBIT_KEY;
        this.state={
            pm25:0,
            pm10:0,
            o3:0,
            so2:0,
            co:0,
            no2:0
        }
    }

    retrieveData(){
        fetch(this.url + this.key)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    pm25: data.data[0].pm25,
                    pm10: data.data[0].pm10,
                    o3: data.data[0].o3,
                    so2: data.data[0].so2,
                    no2: data.data[0].no2,
                    co: data.data[0].co
                })
            })

        
    }

    componentDidMount(){
        this.retrieveData();
        this.interval = setInterval(() => {
            this.retrieveData();
            console.log("Refreshing live data...")
        }, 1000*60*60);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const options = {
            title: {
                text:"Current Air Quality Measured in Los Angeles (WeatherBit)"
            },
            data: [
                {
                    type: "column",
                    dataPoints: [
                        {label: "PM2.5", y: this.state.pm25},
                        {label: "PM10", y: this.state.pm10},
                        {label: "O3", y: this.state.o3},
                        {label: "CO", y: this.state.co},
                        {label: "NO2", y: this.state.no2},
                        {label: "SO2", y: this.state.so2},
                    ]
                }
            ]

            
        }

        return(
            <div>
                <CanvasJSChart options={options}/>
            </div>
        )
    }
}