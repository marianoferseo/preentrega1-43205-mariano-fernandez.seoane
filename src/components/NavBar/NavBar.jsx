import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img className='img' src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.35/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg" alt="nike" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          Home
        </li>
        <li className="nav-item">
          Calzado
        </li>
        <li className="nav-item">
          Indumentaria
        </li>
        <li className="nav-item">
          Deporte
        </li>
      </ul>
    </nav>

<CartWidget/>

  </div>
</header>

    )
}

export default NavBar