import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/notfound.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="notfound-page">
        <div className="nf-bg-orb nf-orb-one" />
        <div className="nf-bg-orb nf-orb-two" />

        <section className="notfound-section">
          <div className="container">
            <motion.div
              className="notfound-content"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Big 404 */}
              <motion.h1 className="nf-code" variants={fadeUp}>
                404
              </motion.h1>

              <motion.h2 variants={fadeUp}>
                Page Not Found
              </motion.h2>

              <motion.p variants={fadeUp}>
                The page you’re looking for doesn’t exist or has been moved.
                Let’s get you back on track.
              </motion.p>

              {/* Actions */}
              <motion.div className="nf-actions" variants={fadeUp}>
                <Link to="/" className="nf-btn-primary">
                  <Home size={16} />
                  Go Home
                </Link>

                <Link to="/contact" className="nf-btn-outline">
                  <ArrowLeft size={16} />
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}