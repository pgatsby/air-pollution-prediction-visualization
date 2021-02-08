import React from "react";

import AirQuality from "../../components/airquality/airquality.component.jsx";
import MapForm from "../../components/mapform/mapform.component.jsx";
import Map from "../../components/map/map.component.jsx";
import "./homepage.style.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleClick = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value.type === "number" ? value : parseInt(value),
    });
  };

  scrollUp(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="home-page">
        <AirQuality />
        <MapForm
          id={this.state.id}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        />
        <Map id={this.state.id} />
        <div className="home-page-footer"><button className="btn btn-dark" id="scroll-up" onClick={this.scrollUp}><i className="fas fa-chevron-double-up"></i></button></div>
      </div>
    );
  }
}

export default HomePage;
