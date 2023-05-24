import React, { Component } from 'react';
import FeedBack from './FeedBack/FeedBack';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      percentage: Math.round((prevState.good * 100) / prevState.total),
    }));
  };

  render() {
    return (
      <FeedBack
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.state.total}
        percentage={this.state.percentage}
        onAddGood={this.addGoodFeedback}
        onAddNeutral={this.addNeutralFeedback}
        onAddBad={this.addBadFeedback}
      />
    );
  }
}

export default App;
