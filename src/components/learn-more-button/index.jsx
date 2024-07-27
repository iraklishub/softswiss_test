const learnMoreButton = ({ outlined }) => {
  return (
    <a
      href="/products"
      className={`learn_more_button${outlined ? ' learn_more_button--outlined' : ''}`}
    >
      Learn More
    </a>
  )
}

export default learnMoreButton
