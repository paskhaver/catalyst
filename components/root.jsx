import React from "react";
import macgyver from "./../lib/macgyver.js";

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = { input: [],
                   calculation: "Enter an array in the box above and click a function",
                   theFunction: "" };
  }

  handleButtonClick(event) {

    // The event.target.value will equal a string representing the method name
    // Use macgyver library to extract the proper method
    // The method is then invoked with the argument of the current state

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
    const methodItems = methods.map((method, idx) => {
      return (
        <input type="button" onClick={ this.handleButtonClick } value={method} key={idx} />
      );
    });

    return (
      <div className="main">
        <input type="text" placeholder="Enter array here"
               onChange={this.handleEdit }/>
             { methodItems }

        <div className="the-pieces">

          <div className="the-calculation">
            <h1>The Results:</h1>
            {this.state.calculation}
          </div>

          <div className="the-function">
            <h1>The Code:</h1>
            {this.state.theFunction}
          </div>

        </div>
      </div>
    );
  }

}

export default Root;
