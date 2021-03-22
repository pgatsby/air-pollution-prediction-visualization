import React, {Component} from 'react';


import AirQualityLineChart from "./graphs/airqualitylinechart.component.jsx";
import EmissionsLinechart from "./graphs/emissionlinechart.component.jsx";
import OpenAQHistorical from './graphs/openaq-historical.component.jsx';
import OpenAQLive from './graphs/openaq-live.component.jsx';
import OpenWeatherMapHistorical from './graphs/openweathermap-historical.component.jsx';
import OpenWeatherMapLive from './graphs/openweathermap-live.component.jsx';
import PieChart from "./graphs/piechart.component.jsx";

export default class Dashboard extends Component {

    render(){
        return(
            <div>
            <OpenWeatherMapLive/>
            <br/>
            <OpenAQLive/>
            <br/>
            <OpenWeatherMapHistorical/>
            <br/>
            <OpenAQHistorical/>
            <br/>
          <PieChart title="Greenhouse Gas Emissions By Sectors (EPA)" dataPoints={
            [
              { y: 22, label: "Industry" },
              { y: 28, label: "Transport" },
              { y: 27, label: "Electricity" },
              { y: 12, label: "Commercial and Residential" },
              { y: 10, label: "Agriculture" }
            ]
          }/>
          <br/>
          <PieChart title="Deaths Caused by Ambient Air Pollution (WHO)" dataPoints={
            [
              { y: 40, label: "Ischemic Heart Disease"},
              { y: 40, label: "Stroke"},
              { y: 11, label: "Chronic Obstructive Pulmonary Disease"},
              { y: 6, label: "Lung Cancer"},
              { y: 3, label: "Acute Lower Respiratory Infections in Children"}
            ]
          }/>
          <br/>
          <PieChart title="Deaths Caused by Indoor Air Pollution (WHO)" dataPoints={
            [
              { y: 27, label: "Pneumonia"},
              { y: 18, label: "Stroke"},
              { y: 27, label: "Ischaemic Heart Disease"},
              { y: 20, label: "Chronic Obstructive Pulmonary Disease"},
              { y: 8, label: "Lung Cancer"}
            ]
          }/>
          <br/>
          <AirQualityLineChart/>
          <br/>
          <EmissionsLinechart/>
          </div>
        );
    }
}