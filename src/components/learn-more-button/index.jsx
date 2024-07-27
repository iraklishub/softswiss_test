const LearnMoreButton = ({ outlined }) => {
  return (
    <a href="/products">
      <button
        type="button"
        className={`learn_more_button${outlined ? ' learn_more_button--outlined' : ''}`}
      >
        Learn More
      </button>
    </a>
  )
}

export default LearnMoreButton
