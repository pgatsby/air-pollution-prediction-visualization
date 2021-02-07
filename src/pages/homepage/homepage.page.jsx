import React from "react";

import Map from "../../components/map/map.component";
import BaseNav from "../../components/basenav/basenav.component";
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
      id: 2,
    });
    console.log(this.state);
  };


  render() {
    const {id} = this.state
    console.log(id)
    return (
      <div className="home-page">
        <button type="submit" onClick={this.handleClick}>Click Me</button>
        <Map id={id} />
      </div>
    );
  }
}

export default HomePage;
