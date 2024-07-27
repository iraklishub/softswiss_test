import earth from '../../assets/earth.png'
import { LearnMoreButton } from '../../components'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__text">
        <h1>
          Discover the vast expanses of <span>space</span> <br />
          <span>
            Where the possibilities are <span>endless!</span>
          </span>
        </h1>
        <br />
        <LearnMoreButton outlined={false} />
      </div>
      <div className="earth">
        <img src={earth} alt="earth" width={340} />
      </div>
    </section>
  )
}

export default Banner
