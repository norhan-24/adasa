
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faMagnifyingGlass,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FontAwesomeIcon icon={faCamera} className="logo-icon" />

          <div>
            <h2>عدسة</h2>
            <p>عالم التصوير الفوتوغرافي</p>
          </div>
        </Link>

        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            المدونة
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            من نحن
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <Link to="/blog" className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>

          <Link to="/blog" className="reading-button">
            ابدأ القراءة
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
