import {
  Section,
  Thumb,
  Title,
  Button,
  StatisticsList,
  ListItem,
  Text,
} from './FeedBack.styled';

const FeedBack = ({
  good,
  neutral,
  bad,
  total,
  percentage,
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

        {total === 0 ? (
          <Text>No feedBack given</Text>
        ) : (
          <StatisticsList>
            <ListItem> Good: {good} </ListItem>
            <ListItem> neutral: {neutral} </ListItem>
            <ListItem> Bad: {bad} </ListItem>
            <ListItem> Total: {total} </ListItem>
            <ListItem> Possitive feadback: {percentage}% </ListItem>
          </StatisticsList>
        )}
      </Thumb>
    </Section>
  );
};

export default FeedBack;
