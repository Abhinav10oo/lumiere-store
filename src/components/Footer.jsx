import '../styles/Footer.css'

const footerLinks = {
  Help: ['FAQs', 'Track Order', 'Returns', 'Contact Us'],
  Company: ['About Us', 'Careers', 'Press', 'Sustainability'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Settings'],
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2 className="footer__logo">LUMIÈRE</h2>
          <p className="footer__tagline">Timeless style, modern design.</p>
        </div>

        <div className="footer__links">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="footer__column">
              <h4 className="footer__column-title">{section}</h4>
              <ul>
                {links.map(link => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__newsletter">
          <h4 className="footer__column-title">Stay Updated</h4>
          <p>Get new arrivals and exclusive offers.</p>
          <div className="footer__newsletter-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 LUMIÈRE. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer