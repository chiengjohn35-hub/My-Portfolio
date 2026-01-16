import React, { useState } from 'react';
import { FaBars, FaTimes,} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand fw-bold fs-2">ChiengTech</div>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          {!nav ? <FaBars className="text-white" /> : <FaTimes className="text-white" />}
        </button>

        <div className={nav ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to='home' smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='about' smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='skills' smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='contact' smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
