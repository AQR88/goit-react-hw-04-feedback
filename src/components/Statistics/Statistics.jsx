import css from './statistics.module.css';
const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <>
      <div className={css.stat}>
        <h3 className={css.text}>Good: {good}</h3>
        <h3 className={css.text}>Neutral: {neutral}</h3>
        <h3 className={css.text}>Bad: {bad}</h3>
        <h3 className={css.text}>Total: {total}</h3>
        <h3 className={css.text}>Positive feedbacks: {positivePercentage}%</h3>
      </div>
    </>
  );
};

export default Statistics;
