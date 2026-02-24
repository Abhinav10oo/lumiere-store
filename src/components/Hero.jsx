import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
          alt="Hero"
          className="hero__image"
        />
      </div>

      <div className="hero__content">
        <p className="hero__subtitle">New Collection</p>
        <h1 className="hero__title">LUMIÈRE<br />SPRING 2025</h1>
        <a href="#" className="hero__cta">Explore Now</a>
      </div>
    </section>
  )
}

export default Hero