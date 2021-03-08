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
        <div className='graph-container dashboard'>

          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Did You Know?</h5>
              <div className='card-text'>
                <ul>
                  <li>6% of global deaths are attributed to air pollution</li>
                  <li>Outdoor air pollution is one of the leading factors for premature deaths and accounts for 3.4 million deaths each year</li>
                  <li>95% of the global population is exposed to mean concentrations of particulate matter that exceed the recommended limit</li>
                </ul>
              </div>
            </div>
          </div>
          <br/>
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
        <div className='article-container dashboard'>
          <Articles/>
        </div>
       
       
      </div>
    );
  }
}

export default HomePage;
