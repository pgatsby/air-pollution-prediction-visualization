import React from "react";

import "./airquality.style.scss";

class AirQuality extends React.Component {
  constructor(props) {
    super(props);
    this.url = "https://api.weatherbit.io/v2.0/current?postal_code=";
    this.key = "fcdc42ccf3e84edbb3f31b586099d417";
    this.state = {
      postal_code: "90037",
      cityName: null,
      stateCode: null,
      aqiCode: null,
      weatherCode: null,
      weatherIcon: null,
    };
  }

  retrieveData(postal_code) {
    fetch(this.url + this.state.postal_code + "&key=" + this.key)
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data[0]);
        console.log(data[0].aqi);
        console.log(data[0].weather.code);
        this.setState({
          cityName: data[0].city_name,
          stateCode: data[0].state_code,
          aqiCode: data[0].aqi,
          weatherCode: data[0].weather.code,
          weatherIcon: data[0].weather.icon,
        });
        console.log(this.state);
      });
  }

  componentWillMount() {
    this.retrieveData();
  }

  handleSubmit = (event) => {
    console.log("we made it here");
    event.preventDefault();
  };

  render() {
    return (
      <div className="air-quality container w-100">
        <div className="row pt-4 pb-4">
          <div className="col-12 col-lg-6 pb-4">
            <h1 className="align-self-center" id="aq-title">
              LOS ANGELES <br />
              AIR QUALITY
            </h1>
            <button className="btn btn-dark" id="explore">
              Explore <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-12 col-lg-6 pb-4">
            <form onSubmit={this.handleSubmit}>
              <label className="form-label">Find Your City!</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Zip Code Here"
                id="aq-lookup"
              />
            </form>
            <div className="aq-details mt-3">
              <h2>Current Air Quality</h2>
              <div className="aq-d-location">
                <strong>{this.state.cityName}, {this.state.stateCode}</strong>
              </div>
              <div className="aq-d-aqi">
                AQI: {this.state.aqiCode} 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AirQuality;
