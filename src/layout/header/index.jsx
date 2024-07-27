import logo from '../../assets/logo.png'
import menu from '../../assets/icons/menu.png'
import cart from '../../assets/icons/cart.png'

const Header = () => (
  <header className="header">
    <a href="/">
      <img src={logo} alt="logo" className="logo" />
    </a>
    <nav className="navbar">
      <input type="checkbox" id="menu-toggle" className="display-none" />
      <label for="menu-toggle" className="menu-icon">
        <img src={menu} alt="logo" className="menu-icon__icon" />
      </label>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/cart">
            <img src={cart} alt="cart" width={24} height={20.5} />
            <span>Cart</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
