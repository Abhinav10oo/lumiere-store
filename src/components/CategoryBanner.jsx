import '../styles/CategoryBanner.css'

const categories = [
  {
    id: 1,
    title: 'Women',
    subtitle: 'New Season',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
    align: 'left'
  },
  {
    id: 2,
    title: 'Men',
    subtitle: 'New Season',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800',
    align: 'right'
  }
]

function CategoryBanner() {
  return (
    <section className="category-banner">
      {categories.map(cat => (
        <div key={cat.id} className="category-banner__item">
          <img src={cat.image} alt={cat.title} className="category-banner__image" />
          <div className={`category-banner__content category-banner__content--${cat.align}`}>
            <p className="category-banner__subtitle">{cat.subtitle}</p>
            <h2 className="category-banner__title">{cat.title}</h2>
            <a href="#" className="category-banner__cta">Shop Now</a>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CategoryBanner