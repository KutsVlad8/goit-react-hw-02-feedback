import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onAddGood, onAddNeutral, onAddBad }) => {
  return (
    <>
      <Button type="button" onClick={() => onAddGood()}>
        Good
      </Button>
      <Button type="button" onClick={() => onAddNeutral()}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onAddBad()}>
        Bad
      </Button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onAddGood: PropTypes.func,
  onAddNeutral: PropTypes.func,
  onAddBad: PropTypes.func,
};

export default FeedbackOptions;
