import React from "react";
import macgyver from "./../lib/macgyver.js";

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = { input: [], calculation: 0, theFunction: "" };
  }

  handleButtonClick(event) {
    this.setState({
      calculation: JSON.stringify(macgyver[event.target.value](this.state.input)),
      theFunction: macgyver[event.target.value].toString()
    });
  }

  handleEdit(event) {
    try {
      JSON.parse(event.target.value);
    } catch(e) {
      return;
    }

    this.setState({
      input: JSON.parse(event.target.value)
    });
  }


  render() {

    const methods = Object.keys(macgyver);
          methods.sort();
    const methodItems = methods.map(method => {
      return (
        <input type="button" onClick={ this.handleButtonClick } value={method} />
      );
    });

    return (
      <div className="main">
        <input type="text" placeholder="Enter array here"
               onChange={this.handleEdit }/>
             { methodItems }


        <div className="calculation">
          {this.state.calculation}
        </div>

        <div className="the-function">
          {this.state.theFunction}
        </div>
      </div>
    );
  }

}

export default Root;
