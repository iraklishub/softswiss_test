import { LearnMoreButton } from '..'

const Card = ({ title, subTitle }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <br />
      <p>{subTitle}</p>
      <br />
      <LearnMoreButton outlined={true} />
    </div>
  )
}

export default Card
