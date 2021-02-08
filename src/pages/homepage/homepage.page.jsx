import React from "react";

import Map from "../../components/map/map.component.jsx";
import MapForm from "../../components/mapform/mapform.component.jsx";
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

  render() {
    return (
      <div className="home-page">
        <MapForm
          id={this.state.id}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        />
        <Map id={this.state.id} />
      </div>
    );
  }
}

export default HomePage;
