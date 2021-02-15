import React from "react";

import AirQuality from "../../components/airquality/airquality.component.jsx";
import MapForm from "../../components/mapform/mapform.component.jsx";
import Map from "../../components/map/map.component.jsx";
import PieChart from "../../components/graphs/piechart.component.jsx";
import "./homepage.style.scss";


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
          <PieChart title="Greenhouse Gas Emissions By Sectors" dataPoints={
            [
              { y: 21, label: "Industry" },
              { y: 14, label: "Transport" },
              { y: 35, label: "Energy" },
              { y: 6, label: "Buildings" },
              { y: 24, label: "Agriculture" }
            ]
          }/>
          <br/>
          <PieChart title="Deaths Caused by Ambient Air Pollution" dataPoints={
            [
              { y: 40, label: "Ischemic Heart Disease"},
              { y: 40, label: "Stroke"},
              { y: 11, label: "Chronic Obstructive Pulmonary Disease"},
              { y: 6, label: "Lung Cancer"},
              { y: 3, label: "Acute Lower Respiratory Infections in Children"}
            ]
          }/>
        </div>
        <div class='article-container dashboard'>
          Articles go here
        </div>
       
      </div>
    );
  }
}

export default HomePage;
