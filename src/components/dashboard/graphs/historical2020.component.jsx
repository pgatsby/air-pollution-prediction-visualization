import React, {Component} from 'react';

import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Historical2020 extends Component{

    constructor(props){
        super(props);
        this.url = "https://api.weatherbit.io/v2.0/history/airquality?city=Los%20Angeles&country=United%20States&state=CA&key=";
        this.key = '44fff5c2698043ac8e8946d23fcf6197';
        this.state = {
        pm10: [],
        pm25: [],
        o3: [],
        so2: [],
        no2: [],
        co: [],
        
        }
    }

    retrieveData(){
        fetch(this.url + this.key)
            .then((response) => response.json())
            .then(data => {
                let newPM10 = [];
                let newPM25 = [];
                let newO3 = [];
                let newSO2 = [];
                let newNO2 = [];
                let newCO = [];
                data.data.forEach(e => {
                    newPM10.push({x: Date.parse(e.timestamp_local), y: e.pm10});
                    newPM25.push({x: Date.parse(e.timestamp_local), y: e.pm25});
                    newO3.push({x: Date.parse(e.timestamp_local), y: e.o3});
                    newSO2.push({x: Date.parse(e.timestamp_local), y: e.so2});
                    newNO2.push({x: Date.parse(e.timestamp_local), y: e.no2});
                    newCO.push({x: Date.parse(e.timestamp_local), y: e.co});
                });

                this.setState({
                    pm10: newPM10,
                    pm25: newPM25,
                    o3: newO3,
                    so2: newSO2,
                    no2: newNO2,
                    co: newCO
                });
            });

        
    }

    componentDidMount(){
        console.log("Historical mounted...")
        this.retrieveData();
        this.interval = setInterval(() => {
            this.retrieveData();
            console.log("Refreshing historical data...");
        }, 1000*60*60);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    render(){
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            title: {
                text: "Air Quality Measured in the Past 3 Days in Los Angeles (WeatherBit)"
            },
            axisX:{
                title: "Time",
                interval: 6,
                intervalType: "hour",
                valueFormatString: "MMM DD hh TT K",
                labelAngel: -20,
                labelFontSize: 16,
            },
            axisY:{
                title: "Measured Level of Air Pollutant",
                interval: 25,
                labelFontSize: 12,
                tickLength: 20
            },
            legend:{
                cursor: "pointer",
                verticalAlign: "top",
                horizontalAlign: "center",
                dockInsidePlotArea: false
                },
            toolTip:{
                shared: true
            },
            height: 600,
            
            data: [
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "PM10",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y}",
                    dataPoints: this.state.pm10
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "PM2.5",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y}",
                    dataPoints: this.state.pm25
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "O3",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y}",
                    dataPoints: this.state.o3
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "SO2",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y}",
                    dataPoints: this.state.so2
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "NO2",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y}",
                    dataPoints: this.state.no2
                },
                {
                    type:"spline",
                    xValueType: "dateTime",
                    name: "CO",
                    showInLegend: true,
                    toolTipContent: "Level of {name} Measured: {y}",
                    dataPoints: this.state.co
                }
            ]
        }

        return(
            <div>
                <CanvasJSChart options={options}/>
            </div>
        );
        
    }



}

export default Historical2020;