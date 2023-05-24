import React, { Component } from 'react';
import FeedBack from './FeedBack/FeedBack';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return <FeedBack />;
  }
}

export default App;
