import React, {Component} from 'react';

import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Historical2020 extends Component{

    render(){

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            title: {
                text: "Air Quality Trends in the US in 2020"
            },
            axisY:{
                title: "Levels of Air Pollutants",
                interval: 5
            },
            axisX: {
                title: "Month",
                prefix: "M",
                interval: 1,
                stripLines: [
                    {
                        value: 8.5,
                        label: "Fires",
                        thickness: 5,
                        color: "red",
                        labelFontColor: "black"

                    },
                    {
                        value: 11,
                        thickness: 5,
                        color: "red"
                    },
                    {
                        value: 3,
                        label: "Lockdown Started",
                        thickness: 5,
                        color: "darkgrey",
                        labelFontColor: "black"
                    }

                ]
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
            data:[

                {
                    type: "line",
                    toolTipContent: "Level of {name} Produced during M{x}: {y}",
                    name: "PM2.5",
                    showInLegend: true,
                    dataPoints: [
                        {x: 1, y: 53.9},
                        {x: 2, y: 47.9},
                        {x: 3, y: 30.8},
                        {x: 4, y: 40.0},
                        {x: 5, y: 46.4},
                        {x: 6, y: 40.1},
                        {x: 7, y: 55.9},
                        {x: 8, y: 60.6},
                        {x: 9, y: 83.5},
                        {x: 10, y: 74.1},
                        {x: 11, y: 56.2},
                        {x: 12, y: 56.0}
                    ]
                },
                {
                    type: "line",
                    toolTipContent: "Level of {name} Produced during M{x}: {y}",
                    name: "PM10",
                    showInLegend: true,
                    dataPoints: [
                        {x: 1, y: 30.5},
                        {x: 2, y: 32.2},
                        {x: 3, y: 17.4},
                        {x: 4, y: 22.3},
                        {x: 5, y: 26.4},
                        {x: 6, y: 22.8},
                        {x: 7, y: 29.5},
                        {x: 8, y: 29.9},
                        {x: 9, y: 44.0},
                        {x: 10, y: 44.2},
                        {x: 11, y: 35.0},
                        {x: 12, y: 32.9}
                    ]
                },
                {
                    type: "line",
                    toolTipContent: "Level of {name} Produced during M{x}: {y}",
                    name: "O3",
                    showInLegend: true,
                    dataPoints: [
                        {x: 1, y: 18.6},
                        {x: 2, y: 26.9},
                        {x: 3, y: 24.6},
                        {x: 4, y: 30.5},
                        {x: 5, y: 33.8},
                        {x: 6, y: 37.2},
                        {x: 7, y: 39.8},
                        {x: 8, y: 40.3},
                        {x: 9, y: 51.3},
                        {x: 10, y: 53.3},
                        {x: 11, y: 31.5},
                        {x: 12, y: 28.9}
                    ]
                },
                {
                    type: "line",
                    toolTipContent: "Level of {name} Produced during M{x}: {y}",
                    name: "NO2",
                    showInLegend: true,
                    dataPoints: [
                        {x: 1, y: 24.0},
                        {x: 2, y: 20.9},
                        {x: 3, y: 10.3},
                        {x: 4, y: 10.2},
                        {x: 5, y: 8.7},
                        {x: 6, y: 7.9},
                        {x: 7, y: 9.4},
                        {x: 8, y: 11.8},
                        {x: 9, y: 18.6},
                        {x: 10, y: 20.8},
                        {x: 11, y: 22.0},
                        {x: 12, y: 12.6}
                    ]
                },
                {
                    type: "line",
                    toolTipContent: "Level of {name} Produced during M{x}: {y}",
                    name: "SO2",
                    showInLegend: true,
                    dataPoints: [
                        {x: 1, y: 1},
                        {x: 2, y: 1},
                        {x: 3, y: 1},
                        {x: 4, y: 1.1},
                        {x: 5, y: 1.1},
                        {x: 6, y: 1},
                        {x: 7, y: 1},
                        {x: 8, y: 1},
                        {x: 9, y: 1},
                        {x: 10, y: 1},
                        {x: 11, y: 1},
                        {x: 12, y: 1}
                    ]
                },
                {
                    type: "line",
                    toolTipContent: "Level of {name} Produced during M{x}: {y}",
                    name: "CO",
                    showInLegend: true,
                    dataPoints: [
                        {x: 1, y: 5.9},
                        {x: 2, y: 4.8},
                        {x: 3, y: 2.5},
                        {x: 4, y: 2.5},
                        {x: 5, y: 2},
                        {x: 6, y: 1.57},
                        {x: 7, y: 2.3},
                        {x: 8, y: 3.1},
                        {x: 9, y: 6.2},
                        {x: 10, y: 5.5},
                        {x: 11, y: 5.8},
                        {x: 12, y: 5.2}
                    ]
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