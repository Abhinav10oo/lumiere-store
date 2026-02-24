import '../styles/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import products from '../data/products'

const navItems = [
  {
    label: 'New In',
    columns: [
      { title: 'Women', links: ['Dresses', 'Tops', 'Trousers', 'Skirts', 'Knitwear'] },
      { title: 'Men', links: ['Shirts', 'Trousers', 'Knitwear', 'Blazers', 'Jackets'] },
    ]
  },
  {
    label: 'Women',
    columns: [
      { title: 'Clothing', links: ['Dresses', 'Tops', 'Shirts', 'Blazers', 'Coats'] },
      { title: 'Bottoms', links: ['Trousers', 'Skirts', 'Shorts', 'Jeans'] },
      { title: 'Knitwear', links: ['Sweaters', 'Cardigans', 'Vests'] },
    ]
  },
  {
    label: 'Men',
    columns: [
      { title: 'Clothing', links: ['Shirts', 'Tops', 'Blazers', 'Jackets', 'Coats'] },
      { title: 'Bottoms', links: ['Trousers', 'Jeans', 'Shorts'] },
      { title: 'Knitwear', links: ['Sweaters', 'Cardigans'] },
    ]
  },
  {
    label: 'Collections',
    columns: [
      { title: 'Current', links: ['Spring 2025', 'Summer 2025'] },
      { title: 'Archive', links: ['Winter 2024', 'Fall 2024'] },
    ]
  },
  {
    label: 'Sale',
    columns: [
      { title: 'Sale', links: ['Tops', 'Bottoms', 'Outerwear', 'Accessories'] },
    ]
  },
]

function Navbar() {
  const { totalItems } = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeNav, setActiveNav] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  const results = query.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.type.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : []

  function handleResultClick(id) {
    setSearchOpen(false)
    setQuery('')
    navigate(`/product/${id}`)
  }

  function getLinkPath(label, link) {
    if (label === 'Collections') return `/products?collection=${encodeURIComponent(link)}`
    if (label === 'Sale') return `/products?category=Sale&type=${encodeURIComponent(link)}`
    return `/products?category=${encodeURIComponent(label)}&type=${encodeURIComponent(link)}`
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  return (
    <>
      <div className="navbar__wrapper" onMouseLeave={() => setActiveNav(null)}>
        <nav className="navbar">
          {/* Desktop links */}
          <ul className="navbar__links">
            {navItems.map(item => (
              <li
                key={item.label}
                className={`navbar__item ${activeNav === item.label ? 'active' : ''}`}
                onMouseEnter={() => setActiveNav(item.label)}
              >
                <Link to={`/products?category=${item.label}`}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger - mobile only */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(true)}
          >
            <span /><span /><span />
          </button>

          <Link to="/" className="navbar__brand" onMouseEnter={() => setActiveNav(null)}>LUMIÈRE</Link>

          <div className="navbar__icons" onMouseEnter={() => setActiveNav(null)}>
            <button
              className={`navbar__search-btn ${searchOpen ? 'active' : ''}`}
              onClick={() => { setSearchOpen(!searchOpen); setQuery('') }}
            >
              Search
            </button>
            {user ? (
              <button onClick={() => logout()}>Sign Out</button>
            ) : (
              <Link to="/auth" className="navbar__account">Account</Link>
            )}
            <Link to="/cart" className="navbar__cart">
              Cart {totalItems > 0 && <span className="navbar__cart-count">{totalItems}</span>}
            </Link>
          </div>

          {/* Desktop Dropdown */}
          {activeNav && (
            <div className="navbar__dropdown">
              {navItems.find(i => i.label === activeNav)?.columns.map(col => (
                <div key={col.title} className="navbar__dropdown-col">
                  <h4 className="navbar__dropdown-title">{col.title}</h4>
                  <ul>
                    {col.links.map(link => (
                      <li key={link}>
                        <Link
                          to={getLinkPath(activeNav, link)}
                          onClick={() => setActiveNav(null)}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
          <div className="mobile-menu__header">
            <span className="mobile-menu__brand">LUMIÈRE</span>
            <button className="mobile-menu__close" onClick={closeMobile}>✕</button>
          </div>

          <ul className="mobile-menu__links">
            {navItems.map(item => (
              <li key={item.label} className="mobile-menu__item">
                <button
                  className="mobile-menu__item-btn"
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  {item.label}
                  <span>{mobileExpanded === item.label ? '−' : '+'}</span>
                </button>

                {mobileExpanded === item.label && (
                  <div className="mobile-menu__submenu">
                    {item.columns.map(col => (
                      <div key={col.title} className="mobile-menu__col">
                        <p className="mobile-menu__col-title">{col.title}</p>
                        <ul>
                          {col.links.map(link => (
                            <li key={link}>
                              <Link
                                to={getLinkPath(item.label, link)}
                                onClick={closeMobile}
                              >
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <li className="mobile-menu__item">
              <Link to="/products" className="mobile-menu__item-btn" onClick={closeMobile}>
                All Products
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link to="/cart" className="mobile-menu__item-btn" onClick={closeMobile}>
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
            </li>
            <li className="mobile-menu__item">
              {user ? (
                <button className="mobile-menu__item-btn" onClick={() => { logout(); closeMobile() }}>
                  Sign Out
                </button>
              ) : (
                <Link to="/auth" className="mobile-menu__item-btn" onClick={closeMobile}>
                  Account
                </Link>
              )}
            </li>
          </ul>
        </div>

        {mobileOpen && <div className="mobile-menu__overlay" onClick={closeMobile} />}
      </div>

      {/* Search Bar */}
      <div className={`search-bar ${searchOpen ? 'search-bar--open' : ''}`}>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus={searchOpen}
          className="search-bar__input"
        />
        <button className="search-bar__close" onClick={() => { setSearchOpen(false); setQuery('') }}>✕</button>

        {results.length > 0 && (
          <div className="search-bar__results">
            {results.map(product => (
              <div
                key={product.id}
                className="search-bar__result-item"
                onClick={() => handleResultClick(product.id)}
              >
                <img src={product.image} alt={product.name} className="search-bar__result-image" />
                <div className="search-bar__result-info">
                  <p className="search-bar__result-name">{product.name}</p>
                  <p className="search-bar__result-category">{product.category} · {product.type}</p>
                  <p className="search-bar__result-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="search-bar__no-results">
            <p>No products found for "{query}"</p>
          </div>
        )}
      </div>

      {searchOpen && <div className="search-bar__overlay" onClick={() => { setSearchOpen(false); setQuery('') }} />}
      {activeNav && <div className="navbar__overlay" onClick={() => setActiveNav(null)} />}
    </>
  )
}

export default Navbar