import React from "react";

import "./airquality.style.scss";

class AirQuality extends React.Component {
    constructor(props){
        super(props)
    }

    handleSubmit = (event) => {
        console.log("we made it here")
        event.preventDefault();
    }

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
          </div>
        </div>
        
        <div className="row pt-4 pb-4"></div>
      </div>
    );
  }
}
export default AirQuality;
