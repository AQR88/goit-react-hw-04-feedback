// Оновлений Statistics компонент

import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.stat}>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive feedbacks: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

// import css from './statistics.module.css';
// const Statistics = ({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
//   title,
// }) => {
//   return (
//     <>
//       <div className={css.stat}>
//         <h3 className={css.text}>Good: {good}</h3>
//         <h3 className={css.text}>Neutral: {neutral}</h3>
//         <h3 className={css.text}>Bad: {bad}</h3>
//         <h3 className={css.text}>Total: {total}</h3>
//         <h3 className={css.text}>Positive feedbacks: {positivePercentage}%</h3>
//       </div>
//     </>
//   );
// };

// export default Statistics;
