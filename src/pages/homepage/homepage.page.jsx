import React from "react";

import Map from "../../components/map/map.component";
import "./homepage.style.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
    };
  }

  handleClick = () => {
    this.setState({
      id: this.state.id + 1,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="home-page">
        <button onClick={this.handleClick}>
          Change State of Map
        </button>
        <Map id={this.state.id} />
      </div>
    );
  }
}

export default HomePage;
