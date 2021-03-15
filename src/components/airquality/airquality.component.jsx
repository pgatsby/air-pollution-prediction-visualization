import React from "react";

import "./airquality.style.scss";

class AirQuality extends React.Component {
  constructor(props) {
    super(props);
    this.ForecastUrl =
      "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=";
    //this.AqiUrl = "https://api.weatherbit.io/v2.0/current/airquality?postal_code=";
    this.AqiUrl = "https://api.weatherbit.io/v2.0/current?postal_code=";
    this.key = process.env.REACT_APP_WEATHERBIT_KEY;
    this.state = {
      postalCode: "90012",
      cityName: null,
      stateCode: null,
      aqiCode: null,
      weatherCode: null,
      weatherIcon: [null, null, null, null, null],
      weatherTemp: [null, null, null, null, null],
      weatherMinTemp: [null, null, null, null, null],
      weatherMaxTemp: [null, null, null, null, null],
      date: [null, null, null, null, null],
    };
  }

  retrieveData(postalCode) {
    fetch(
      this.ForecastUrl +
        this.state.postalCode +
        "&days=5&units=I&key=" +
        this.key
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          postalCode: "",
          //cityName: data.city_name,
          //stateCode: data.state_code,

          weatherTemp: [
            data.data[0].temp,
            data.data[1].temp,
            data.data[2].temp,
            data.data[3].temp,
            data.data[4].temp,
          ],
          weatherMinTemp: [
            data.data[0].min_temp,
            data.data[1].min_temp,
            data.data[2].min_temp,
            data.data[3].min_temp,
            data.data[4].min_temp,
          ],
          weatherMaxTemp: [
            data.data[0].max_temp,
            data.data[1].max_temp,
            data.data[2].max_temp,
            data.data[3].max_temp,
            data.data[4].max_temp,
          ],
          weatherIcon: [
            data.data[0].weather.icon,
            data.data[1].weather.icon,
            data.data[2].weather.icon,
            data.data[3].weather.icon,
            data.data[4].weather.icon,
          ],
          date: [
            data.data[0].datetime,
            data.data[1].datetime,
            data.data[2].datetime,
            data.data[3].datetime,
            data.data[4].datetime,
          ],
        });
      });

    fetch(this.AqiUrl + this.state.postalCode + "&key=" + this.key)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          cityName: data.data[0].city_name,
          stateCode: data.data[0].state_code,
          aqiCode: data.data[0].aqi,
        });
      });
  }

  componentWillMount() {
    this.retrieveData();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.postalCode);
    try {
      this.retrieveData(this.state.postalCode);
    } catch (e) {
      alert("Not a valid Zip Code!");
    }
    this.setState({ postalCode: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="air-quality container w-100">
        <div className="row pt-4 pb-4">
          <div className="col-lg-6 pb-4 d-flex justify-content-center align-items-center">
            <h1 id="aq-title">
              {this.state.cityName}
              <br />
              AIR QUALITY
            </h1>
          </div>
          <div className="col-lg-6 pb-4">
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
              <div className="weather-search-results">
                <div className="row" id="row">
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[0]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[0] + ".png"
                      }
                      alt="weather-icon"
                    />

                    <div>Temp: {this.state.weatherTemp[0]}</div>
                    <div>Min Temp: {this.state.weatherMinTemp[0]}</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[0]}</div>
                  </div>
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[1]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[1] + ".png"
                      }
                      alt="weather-icon"
                    />
                    <div>Temp:{this.state.weatherTemp[1]}</div>
                    <div>Min Temp: {this.state.weatherMinTemp[1]}</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[1]}</div>
                  </div>
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[2]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[2] + ".png"
                      }
                      alt="weather-icon"
                    />
                    <div>Temp:{this.state.weatherTemp[2]}</div>
                    <div>Min Temp: {this.state.weatherMinTemp[2]}</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[2]}</div>
                  </div>
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[3]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[3] + ".png"
                      }
                      alt="weather-icon"
                    />
                    <div>Temp:{this.state.weatherTemp[3]}</div>
                    <div>Min Temp: {this.state.weatherMinTemp[3]}</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[3]}</div>
                  </div>
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[4]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[4] + ".png"
                      }
                      alt="weather-icon"
                    />
                    <div>Temp:{this.state.weatherTemp[4]}</div>
                    <div>Min Temp: {this.state.weatherMinTemp[4]}</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[4]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AirQuality;
