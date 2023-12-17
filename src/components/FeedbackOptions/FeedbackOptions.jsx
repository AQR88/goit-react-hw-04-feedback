import css from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      {options.map((option, key) => (
        <button
          type="button"
          key={key}
          onClick={() => onLeaveFeedback(option)}
          className={css.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

// import css from './feedback.module.css';

// const FeedbackOptions = ({ option, onLeaveFeedback }) => {
//   return (
//     <div className={css.btn_div}>
//       {option.map((elem, key) => {
//         return (
//           <button
//             type="button"
//             key={key}
//             onClick={() => onLeaveFeedback(elem)}
//             className={css.button}
//           >
//             {elem}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default FeedbackOptions;
// Оновлений FeedbackOptions компонент
