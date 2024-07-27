import { Card } from '../../components'

const Main = () => {
  const cards = [
    {
      id: 1,
      title: 'Move the borders of reality!',
      subTitle: 'Go on a space adventure '
    },
    {
      id: 2,
      title: 'Space is not just stars and planets',
      subTitle: 'it is a majestic journey to '
    },
    {
      id: 3,
      title: 'For those who dream of stars',
      subTitle: 'Our offer: make your dream come true'
    },
    {
      id: 4,
      title: 'Fulfill your fantastic dreams',
      subTitle: 'Space has never been so close'
    }
  ]
  return (
    <main className="main">
      <section className="main__cardList">
        <h2>Offers</h2>
        <div>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>
      <section className="main__description">
        <h2>Embark on a space journey</h2>
        <p>
          Traveling into space is one of the most exciting and unforgettable adventures that can
          change your life forever. And if you have ever dreamed of exploring stars, planets and
          galaxies, then our company is ready to help you realize this dream. We offer a unique
          experience that will allow you to go on a space journey and see all the secrets of the
          universe. We guarantee that every moment in space will be filled with incredible
          impressions, excitement and new discoveries. Our team of professionals takes care of your
          safety and comfort so that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <a href="/products">Read more</a>
      </section>
    </main>
  )
}

export default Main
