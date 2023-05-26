import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { Card, Thumb, Text } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const posiriveFeedback = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return posiriveFeedback;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Card>
        <Thumb>
          <Section title={'Please leave feeback'}>
            <FeedbackOptions
              onAddGood={this.addGoodFeedback}
              onAddNeutral={this.addNeutralFeedback}
              onAddBad={this.addBadFeedback}
            />
          </Section>

          {totalFeedback === 0 ? (
            <Text>There is no feedback</Text>
          ) : (
            <Section title={'Statistics'}>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalFeedback}
                percentage={positivePercentage}
              />
            </Section>
          )}
        </Thumb>
      </Card>
    );
  }
}

export default App;
