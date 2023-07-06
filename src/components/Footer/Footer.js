/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import { Link } from "react-router-dom";
import StyledFooter from "./FooterStyled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFooter>
    <div >
      <footer >
      <div>
          <h1>Covid ID</h1>
          <p>Developed by Siti Nur Kaffah</p>
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
      </footer>
    </div>
    </StyledFooter>
  );
}

export default Footer;