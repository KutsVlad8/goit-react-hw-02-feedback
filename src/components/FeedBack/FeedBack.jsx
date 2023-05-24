// import css from './FeedBack.styled';

const FeedBack = ({ text }) => {
  return (
    <section>
      <h1>Please leave feeback</h1>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>

      <h2>Statistics</h2>

      <ul>
        <li> Good:0 </li>
        <li> neutral:0 </li>
        <li> Bad:0 </li>
      </ul>
    </section>
  );
};

export default FeedBack;
