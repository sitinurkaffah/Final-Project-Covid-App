/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import StyledNavbar from "./NavbarStyled";

import { Link } from "react-router-dom";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
    <div>
      <nav>
        <div>
          <h1>Covid ID</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/covid/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/covid/provinsi">Provinsi</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </StyledNavbar>
  );
}

export default Navbar;