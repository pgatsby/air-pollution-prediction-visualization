import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';


import AirQualityLineChart from "./graphs/airqualitylinechart.component.jsx";
import EmissionsLinechart from "./graphs/emissionlinechart.component.jsx";
import OpenWeatherMapHistorical from './graphs/historical/openweathermap-historical.component.jsx';
import BroadwayHistorical from './graphs/historical/broadway-historical.component.jsx';
import MemorialColiseumHistorical from './graphs/historical/memorialcoliseum-historical.component'
import OpenWeatherMapLive from './graphs/live/openweathermap-live.component.jsx';
import BroadwayLive from './graphs/live/broadway-live.component.jsx';
import MemorialColiseumLive from './graphs/live/memorialcoliseum-live.component.jsx';
import PieChart from "./graphs/piechart.component.jsx";


export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: 'General'
        }
    }

    changeKey(newKey) {
        this.setState({key: newKey})
    }

    render() {
        return (
            <div>
                <div>
                    <Tabs defaultActiveKey={
                            this.state.key
                        }
                        activeKey={
                            this.state.key
                        }
                        onSelect={
                            (k) => this.changeKey(k)
                    }>
                        <Tab eventKey='General' title='General Los Angeles'><OpenWeatherMapLive/></Tab>
                        <Tab eventKey='Broadway' title='3rd and Broadway'><BroadwayLive/></Tab>
                        <Tab eventKey='Coliseum' title='Memorial Coliseum'><MemorialColiseumLive/></Tab>
                    </Tabs>
                </div>

                <br/>

                <div>
                    <Tabs defaultActiveKey={
                            this.state.key
                        }
                        activeKey={
                            this.state.key
                        }
                        onSelect={
                            (k) => this.changeKey(k)
                    }>
                        <Tab eventKey='General' title='General Los Angeles'><OpenWeatherMapHistorical/></Tab>
                        <Tab eventKey='Broadway' title='3rd and Broadway'><BroadwayHistorical/></Tab>
                        <Tab eventKey='Coliseum' title='Memorial Coliseum'><MemorialColiseumHistorical/></Tab>
                    </Tabs>
                </div>

                <PieChart title="Greenhouse Gas Emissions By Sectors (EPA)"
                    dataPoints={
                        [
                            {
                                y: 22,
                                label: "Industry"
                            },
                            {
                                y: 28,
                                label: "Transport"
                            },
                            {
                                y: 27,
                                label: "Electricity"
                            },
                            {
                                y: 12,
                                label: "Commercial and Residential"
                            }, {
                                y: 10,
                                label: "Agriculture"
                            }
                        ]
                    }/>
                <br/>

                <div>
                    <Tabs defaultActiveKey={"Ambient"}>
                        <Tab eventKey='Ambient' title='Ambient Air Pollution'>
                            <PieChart title="Deaths Caused by Ambient Air Pollution (WHO)"
                                dataPoints={
                                    [
                                        {
                                            y: 40,
                                            label: "Ischemic Heart Disease"
                                        },
                                        {
                                            y: 40,
                                            label: "Stroke"
                                        },
                                        {
                                            y: 11,
                                            label: "Chronic Obstructive Pulmonary Disease"
                                        },
                                        {
                                            y: 6,
                                            label: "Lung Cancer"
                                        }, {
                                            y: 3,
                                            label: "Acute Lower Respiratory Infections in Children"
                                        }
                                    ]
                                }/>
                        </Tab>
                        <Tab eventKey='Indoor' title='Indoor Air Pollution'>
                            <PieChart title="Deaths Caused by Indoor Air Pollution (WHO)"
                           
                                dataPoints={
                                    [
                                        {
                                            y: 27,
                                            label: "Pneumonia"
                                        },
                                        {
                                            y: 18,
                                            label: "Stroke"
                                        },
                                        {
                                            y: 27,
                                            label: "Ischaemic Heart Disease"
                                        },
                                        {
                                            y: 20,
                                            label: "Chronic Obstructive Pulmonary Disease"
                                        }, {
                                            y: 8,
                                            label: "Lung Cancer"
                                        }
                                    ]
                                }/>
                        </Tab>
                    </Tabs>
                </div>
                <br/>

                <div>
                    <Tabs defaultActiveKey={"Air Quality"}>
                        <Tab eventKey='Air Quality' title='Air Quality Trends'>
                            <AirQualityLineChart/>
                        </Tab>
                        <Tab eventKey='Emissions' title='Emission Trends'>
                            <EmissionsLinechart/>
                        </Tab>
                    </Tabs>
                </div>

            </div>
        );
    }
}
