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
