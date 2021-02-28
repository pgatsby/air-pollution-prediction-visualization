import React from "react";

import AirQuality from "../../components/airquality/airquality.component.jsx";
import MapForm from "../../components/mapform/mapform.component.jsx";
import Map from "../../components/map/map.component.jsx";
import PieChart from "../../components/graphs/piechart.component.jsx";
import "./homepage.style.scss";
import AirQualityLineChart from "../../components/graphs/airqualitylinechart.component.jsx";
import EmissionsLinechart from "../../components/graphs/emissionlinechart.component.jsx";
import Historical2020 from "../../components/graphs/historical2020.component.jsx";
import Articles from "../../components/articles/articles.component.jsx";
import LiveAirQuality from "../../components/graphs/liveairquality.component.jsx";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      id: 1,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.listRef.current.innerHTML = "";
  };

  handleClick = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value.type === "number" ? value : parseInt(value),
    });
  };

  render() {
    return (
      <div className="home-page">
        <AirQuality />
        <MapForm
          id={this.state.id}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        />
        <div className="map-row row h-100 w-100">
          <div className="col-12 col-md-2">
            <div
              className="layerlist-content"
              id="layerlist"
              ref={this.listRef}
            ></div>
          </div>
          <div className="col-12 col-md-10">
            <Map id={this.state.id} />
          </div>
        </div>
        <div class='graph-container dashboard'>
          <LiveAirQuality/>
          <br/>
          <Historical2020/>
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
          <AirQualityLineChart/>
          <br/>
          <EmissionsLinechart/>
        </div>
        <div class='article-container dashboard'>
          <Articles/>
        </div>
       
      </div>
    );
  }
}

export default HomePage;
