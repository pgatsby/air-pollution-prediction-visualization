import React from "react";

import AirQuality from "../../components/airquality/airquality.component.jsx";
import MapForm from "../../components/mapform/mapform.component.jsx";
import Map from "../../components/map/map.component.jsx";
import "./homepage.style.scss";

import Articles from "../../components/articles/articles.component.jsx";
import Dashboard from "../../components/dashboard/dashboard.component.jsx";
import Facts from "../../components/facts/facts.component.jsx";



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
        {/* <AirQuality />
        <MapForm
          id={this.state.id}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        /> */}
        <div className="map-row row h-100 w-100">
          <div className="col-md-12 title" >
            <h2>Air Quality</h2>
            <p>Air pollution remains one of the biggest issues Los Angeles faces. Find current air quality conditions in Los Angeles and other areas by interacting with the map.</p>
          </div>
          <div className="col-12 col-md-2">
            <div
              className="layerlist-content"
              id="layerlist1"
              ref={this.listRef}
            ></div>
          </div>
          <div className="col-12 col-md-10">
            <Map id={1} />
          </div>
          <div className="col-md-12 second-title" >
            <h2>Pollution Sources</h2>
            <p>There are many sources of air pollution and they all contribute in varying degrees. Find current sources by interacting with the map.</p>
          </div>
          <div className="col-12 col-md-2">
            <div
              className="layerlist-content"
              id="layerlist2"
              ref={this.listRef}
            ></div>
          </div>
          <div className="col-12 col-md-10">
            <Map id={2} />
          </div>
          <div className="col-md-12 second-title" >
            <h2>Heart Disease</h2>
            <p>Heart disease is one of the common sideeffects of unhealthy air quality. Find more information on hospitalization and mortality rates by interacting with the map</p>
          </div>
          <div className="col-12 col-md-2">
            <div
              className="layerlist-content"
              id="layerlist3"
              ref={this.listRef}
            ></div>
          </div>
          <div className="col-12 col-md-10">
            <Map id={3} />
          </div>
        </div>
        {/* <div className='graph-container dashboard'>

          <Facts/>
          <br/>
          <div>
          <Dashboard/>
          </div>
        </div>
       
        <div className='article-container dashboard'>
          <Articles/>
        </div> */}
       
       
      </div>
    );
  }
}

export default HomePage;
