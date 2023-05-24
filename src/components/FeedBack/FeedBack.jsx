import {
  Section,
  Thumb,
  Title,
  Button,
  StatisticsList,
  ListItem,
} from './FeedBack.styled';

const FeedBack = ({
  good,
  neutral,
  bad,
  onAddGood,
  onAddNeutral,
  onAddBad,
}) => {
  return (
    <Section>
      <Thumb>
        <Title>Please leave feeback</Title>
        <Button type="button" onClick={() => onAddGood()}>
          Good
        </Button>
        <Button type="button" onClick={() => onAddNeutral()}>
          Neutral
        </Button>
        <Button type="button" onClick={() => onAddBad()}>
          Bad
        </Button>

        <h2>Statistics</h2>

        <StatisticsList>
          <ListItem> Good: {good} </ListItem>
          <ListItem> neutral: {neutral} </ListItem>
          <ListItem> Bad: {bad} </ListItem>
        </StatisticsList>
      </Thumb>
    </Section>
  );
};

export default FeedBack;
