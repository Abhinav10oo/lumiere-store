import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../styles/Products.css'
import products from '../data/products'

const filters = {
  orderBy: ['Newest', 'Price: Low to High', 'Price: High to Low'],
  category: ['Women', 'Men', 'Sale'],
  type: ['Tops', 'Shirts', 'Trousers', 'Skirts', 'Dresses', 'Blazers', 'Coats', 'Jackets', 'Knitwear', 'Shorts', 'Jeans', 'Accessories'],
  collection: ['Spring 2025', 'Summer 2025', 'Winter 2024'],
  cut: ['Regular', 'Slim', 'Oversized', 'Wide', 'Cropped'],
}

function Products() {
  const [searchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    orderBy: '',
    category: searchParams.get('category') || '',
    type: searchParams.get('type') || '',
    collection: searchParams.get('collection') || '',
    cut: '',
    minPrice: 0,
    maxPrice: 200,
  })
  const [openSections, setOpenSections] = useState({
    orderBy: true,
    category: true,
    type: false,
    collection: false,
    cut: false,
    price: false,
  })

  function toggleSection(section) {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  function handleFilter(key, value) {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? '' : value
    }))
  }

  function clearFilters() {
    setSelectedFilters({
      orderBy: '',
      category: '',
      type: '',
      collection: '',
      cut: '',
      minPrice: 0,
      maxPrice: 200,
    })
  }

  // Apply filters
  let filtered = [...products]

  if (selectedFilters.category) {
    filtered = filtered.filter(p => p.category === selectedFilters.category)
  }
  if (selectedFilters.type) {
    filtered = filtered.filter(p => p.type === selectedFilters.type)
  }
  if (selectedFilters.collection) {
    filtered = filtered.filter(p => p.collection === selectedFilters.collection)
  }
  if (selectedFilters.cut) {
    filtered = filtered.filter(p => p.cut === selectedFilters.cut)
  }

  filtered = filtered.filter(p => {
    const price = parseFloat(p.price.replace('€', ''))
    return price >= selectedFilters.minPrice && price <= selectedFilters.maxPrice
  })

  // Apply sorting
  if (selectedFilters.orderBy === 'Price: Low to High') {
    filtered.sort((a, b) => parseFloat(a.price.replace('€', '')) - parseFloat(b.price.replace('€', '')))
  } else if (selectedFilters.orderBy === 'Price: High to Low') {
    filtered.sort((a, b) => parseFloat(b.price.replace('€', '')) - parseFloat(a.price.replace('€', '')))
  }

  const activeFilterCount = Object.entries(selectedFilters).filter(([key, val]) =>
    key !== 'minPrice' && key !== 'maxPrice' && val !== ''
  ).length

  return (
    <div className="products-page">
      {/* Header */}
      <div className="products-page__header">
        <h1 className="products-page__title">
          {selectedFilters.category || 'All Products'}
        </h1>
        <div className="products-page__header-right">
          <p className="products-page__count">{filtered.length} items</p>
          <button
            className="products-page__filter-btn"
            onClick={() => setSidebarOpen(true)}
          >
            Filters {activeFilterCount > 0 && <span>({activeFilterCount})</span>}
          </button>
        </div>
      </div>

      <div className="products-page__body">
        {/* Sidebar */}
        <aside className={`filter-sidebar ${sidebarOpen ? 'filter-sidebar--open' : ''}`}>
          <div className="filter-sidebar__header">
            <h3>Filters & Sorting</h3>
            <button onClick={() => setSidebarOpen(false)}>✕</button>
          </div>

          {activeFilterCount > 0 && (
            <button className="filter-sidebar__clear" onClick={clearFilters}>
              Clear All ({activeFilterCount})
            </button>
          )}

          {/* Order By */}
          <div className="filter-sidebar__section">
            <button
              className="filter-sidebar__section-title"
              onClick={() => toggleSection('orderBy')}
            >
              Order By
              <span>{openSections.orderBy ? '−' : '+'}</span>
            </button>
            {openSections.orderBy && (
              <ul className="filter-sidebar__options">
                {filters.orderBy.map(option => (
                  <li key={option}>
                    <button
                      className={`filter-sidebar__option ${selectedFilters.orderBy === option ? 'active' : ''}`}
                      onClick={() => handleFilter('orderBy', option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Category */}
          <div className="filter-sidebar__section">
            <button
              className="filter-sidebar__section-title"
              onClick={() => toggleSection('category')}
            >
              Category
              <span>{openSections.category ? '−' : '+'}</span>
            </button>
            {openSections.category && (
              <ul className="filter-sidebar__options">
                {filters.category.map(option => (
                  <li key={option}>
                    <button
                      className={`filter-sidebar__option ${selectedFilters.category === option ? 'active' : ''}`}
                      onClick={() => handleFilter('category', option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Product Type */}
          <div className="filter-sidebar__section">
            <button
              className="filter-sidebar__section-title"
              onClick={() => toggleSection('type')}
            >
              Product Type
              <span>{openSections.type ? '−' : '+'}</span>
            </button>
            {openSections.type && (
              <ul className="filter-sidebar__options">
                {filters.type.map(option => (
                  <li key={option}>
                    <button
                      className={`filter-sidebar__option ${selectedFilters.type === option ? 'active' : ''}`}
                      onClick={() => handleFilter('type', option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Collection */}
          <div className="filter-sidebar__section">
            <button
              className="filter-sidebar__section-title"
              onClick={() => toggleSection('collection')}
            >
              Collection
              <span>{openSections.collection ? '−' : '+'}</span>
            </button>
            {openSections.collection && (
              <ul className="filter-sidebar__options">
                {filters.collection.map(option => (
                  <li key={option}>
                    <button
                      className={`filter-sidebar__option ${selectedFilters.collection === option ? 'active' : ''}`}
                      onClick={() => handleFilter('collection', option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cut */}
          <div className="filter-sidebar__section">
            <button
              className="filter-sidebar__section-title"
              onClick={() => toggleSection('cut')}
            >
              Cut
              <span>{openSections.cut ? '−' : '+'}</span>
            </button>
            {openSections.cut && (
              <ul className="filter-sidebar__options">
                {filters.cut.map(option => (
                  <li key={option}>
                    <button
                      className={`filter-sidebar__option ${selectedFilters.cut === option ? 'active' : ''}`}
                      onClick={() => handleFilter('cut', option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Price */}
          <div className="filter-sidebar__section">
            <button
              className="filter-sidebar__section-title"
              onClick={() => toggleSection('price')}
            >
              Price
              <span>{openSections.price ? '−' : '+'}</span>
            </button>
            {openSections.price && (
              <div className="filter-sidebar__price">
                <div className="filter-sidebar__price-labels">
                  <span>€{selectedFilters.minPrice}</span>
                  <span>€{selectedFilters.maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={selectedFilters.maxPrice}
                  onChange={e => setSelectedFilters(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }))}
                  className="filter-sidebar__range"
                />
              </div>
            )}
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div className="filter-sidebar__overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Product Grid */}
        <div className="products-page__grid">
          {filtered.length === 0 ? (
            <div className="products-page__empty">
              <p>No products match your filters.</p>
              <button onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            filtered.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="products-page__card-link">
                <div className="products-page__card">
                  <div className="products-page__image-wrapper">
                    <img src={product.image} alt={product.name} className="products-page__image" />
                    <button className="products-page__wishlist">♡</button>
                  </div>
                  <div className="products-page__info">
                    <p className="products-page__category">{product.category}</p>
                    <h3 className="products-page__name">{product.name}</h3>
                    <p className="products-page__price">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Products