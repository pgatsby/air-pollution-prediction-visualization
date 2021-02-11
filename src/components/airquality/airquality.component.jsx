import React from "react";

import "./airquality.style.scss";

class AirQuality extends React.Component {
  constructor(props) {
    super(props);
    this.url = "https://api.weatherbit.io/v2.0/current?postal_code=";
    this.key = "fcdc42ccf3e84edbb3f31b586099d417";
    this.state = {
      postalCode: "90012",
      cityName: null,
      stateCode: null,
      aqiCode: null,
      weatherCode: null,
      weatherIcon: null,
    };
  }

  retrieveData(postalCode) {
    fetch(this.url + this.state.postalCode + "&key=" + this.key)
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data[0]);
        console.log(data[0].aqi);
        console.log(data[0].weather.code);
        this.setState({
          postalCode: "",
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
    event.preventDefault();
    console.log(this.state.postalCode)
    try{
      this.retrieveData(this.state.postalCode);
    }catch(e){
      alert("Not a valid Zip Code!")
    }
    this.setState({"postalCode" : ""})
  };   

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="air-quality container w-100">
        <div className="row pt-4 pb-4">
          <div className="col-12 col-lg-6 pb-4">
            <h1 className="align-self-center" id="aq-title">
              {this.state.cityName}<br />
               AIR QUALITY
            </h1>
          </div>
          <div className="col-12 col-lg-6 pb-4">
            <form onSubmit={this.handleSubmit}>
              <label className="form-label">Find Your City!</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Zip Code Here"
                value={this.state.postalCode}
                onChange={this.handleChange}
                name="postalCode"
                id="aq-lookup"
              />
            </form>
            <div className="aq-details mt-3">
              <h2>Current Air Quality</h2>
              <div className="aq-d-location">
                <strong>
                  Location: {this.state.cityName}, {this.state.stateCode}
                </strong>
              </div>
              <div className="aq-d-aqi">
                Air Quality Index: {this.state.aqiCode}
              </div>
              <div className="aq-weather">
                
                <img
                  id="aq-weather-icon"
                  src={"/weather-icons/" + this.state.weatherIcon + ".png"}
                  alt="weather-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AirQuality;
