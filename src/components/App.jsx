import React, { Component } from 'react';
import FeedBack from './FeedBack/FeedBack';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <FeedBack
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        onAddGood={this.addGood}
        onAddNeutral={this.addNeutral}
        onAddBad={this.addBad}
      />
    );
  }
}

export default App;
