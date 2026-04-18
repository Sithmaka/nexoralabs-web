import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/brand/Logo.png";
import "../styles/navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Solutions", path: "/solutions" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="nx-navbar">
        <div className="nx-nav-container">
          <Link to="/" className="nx-logo" onClick={closeMenu}>
            <img src={logo} alt="Nexora Labs Logo" />
          </Link>

          <nav className="nx-nav-links">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nx-nav-right">
            <div className="nx-nav-cta">
              <Link to="/contact" className="nx-btn-primary">
                Start Your Project
              </Link>
            </div>

            <button
              className="nx-menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nx-mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`nx-mobile-sidebar ${menuOpen ? "active" : ""}`}>
        <div className="nx-mobile-top">
          <Link to="/" className="nx-mobile-logo" onClick={closeMenu}>
            <img src={logo} alt="Nexora Labs Logo" />
          </Link>

          <button
            className="nx-mobile-close"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="nx-mobile-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nx-mobile-cta">
          <Link to="/contact" className="nx-btn-primary" onClick={closeMenu}>
            Start Your Project
          </Link>
        </div>
      </aside>
    </>
  );
}