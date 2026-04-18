import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import logo from "../assets/brand/Logo.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="nx-footer">
      <div className="nx-footer-container">
        <div className="nx-footer-shell">
          <div className="nx-footer-top">
            <div className="nx-footer-col brand">
              <Link to="/" className="nx-footer-brand">
                <img src={logo} alt="Nexora Labs Logo" className="nx-footer-logo" />
              </Link>

              <p>
                Engineering the future through digital innovation. High-performance
                websites, business systems, and AI solutions for modern businesses.
              </p>
            </div>

            <div className="nx-footer-col">
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/solutions">Solutions</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="nx-footer-col">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>

            <div className="nx-footer-col">
              <h4>Contact</h4>

              <a href="mailto:info@nexoralabs.online" className="contact-item">
                {/* <Mail size={16} /> */}
                <span>info@nexoralabs.online</span>
              </a>

              <a
                href="https://wa.me/94XXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                {/* <MessageCircle size={16} /> */}
                <span>WhatsApp Us</span>
              </a>

              <div className="nx-footer-socials">
                <a href="#" aria-label="LinkedIn">
                    LinkedIn
                  {/* <Linkedin size={16} /> */}
                </a>
                <a href="#" aria-label="Facebook">
                    Facebook
                  {/* <Facebook size={16} /> */}
                </a>
                <a href="#" aria-label="Instagram">
                    Instagram
                  {/* <Instagram size={16} /> */}
                </a>
              </div>
            </div>
          </div>

          <div className="nx-footer-bottom">
            <p>© {new Date().getFullYear()} Nexora Labs. All rights reserved.</p>
            <p className="nx-footer-note">Build Your Digital Future</p>
          </div>
        </div>
      </div>
    </footer>
  );
}