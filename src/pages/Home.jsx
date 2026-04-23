import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  Cog,
  Bot,
  Zap,
  Shield,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/home.css";
import SEO from "../components/SEO";

const heroDashboard =
  "/icons.svg";

const featureImg1 =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop";
const featureImg2 =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop";
const featureImg3 =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop";
const featureImg4 =
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=900&auto=format&fit=crop";

const partners = ["Stellar", "Nexus", "DataFlow", "HexaCore", "CoinBase"];

const expertise = [
  {
    icon: <Monitor size={22} />,
    title: "Web Experiences",
    text: "Immersive, fast, and responsive digital interfaces that convert visitors into loyal customers.",
  },
  {
    icon: <Cog size={22} />,
    title: "Business Systems",
    text: "Scalable ERP and CRM solutions designed to streamline operations and maximize efficiency.",
  },
  {
    icon: <Bot size={22} />,
    title: "AI Solutions",
    text: "Leveraging AI and automation to optimize workflows and drive innovation.",
  },
];

const reasons = [
  {
    icon: <Zap size={18} />,
    title: "Architectural Fluidity",
    text: "Modular systems that grow with your business.",
  },
  {
    icon: <Shield size={18} />,
    title: "Security by Design",
    text: "Enterprise-level security built into every solution.",
  },
  {
    icon: <Gauge size={18} />,
    title: "Performance Obsessed",
    text: "Fast, optimized systems with seamless UX.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Web Development & AI Solutions"
        description="Nexora Labs provides high-performance web development, business systems, and AI solutions for startups and enterprises."
        keywords="web development Sri Lanka, AI chatbot Sri Lanka, POS system, ERP system, Nexora Labs"
        url="https://www.nexoralabs.site/"
        image="https://images.unsplash.com/photo-1551434678-e076c223a692"
      />
      <Navbar />

      <main className="home-page">
        <section className="home-hero">
          <div className="container home-hero-grid">
            <motion.div
              className="home-hero-copy"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.span className="hero-badge" variants={fadeUp}>
                Innovation Hub
              </motion.span>

              <motion.h1 className="home-hero-title" variants={fadeUp}>
                Build Your <span>Digital Future</span>
              </motion.h1>

              <motion.p className="home-hero-text" variants={fadeUp}>
                High-performance websites, business systems, and AI solutions for
                modern businesses.
              </motion.p>

              <motion.div className="home-hero-actions" variants={fadeUp}>
                <Link to="/contact" className="primary-btn">
                  Start Your Project
                </Link>

                <Link to="/services" className="text-link-btn">
                  View Portfolio
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="home-hero-visual"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-glow" />
              <motion.div
                className="hero-visual-card"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img src={heroDashboard} alt="Dashboard preview" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* <motion.section
          className="partners-strip"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="container partners-row">
            {partners.map((item, index) => (
              <motion.div
                key={item}
                className="partner-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <span className="partner-dot" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        <section className="expertise-section">
          <div className="container">
            <motion.div
              className="section-heading center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Our Core Expertise</h2>
              <span className="section-line" />
            </motion.div>

            <motion.div
              className="expertise-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {expertise.map((item) => (
                <motion.article
                  key={item.title}
                  className="expertise-card"
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="expertise-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="why-section">
          <div className="container">
            <motion.div
              className="why-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="why-content">
                <h2>
                  Why Modern Leaders <br />
                  Choose <span>Nexora Labs</span>
                </h2>

                <div className="why-list">
                  {reasons.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="why-item"
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12, duration: 0.55 }}
                    >
                      <div className="why-icon">{item.icon}</div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="why-gallery">
                <div className="why-gallery-grid">
                  {[featureImg1, featureImg2, featureImg3, featureImg4].map(
                    (src, index) => (
                      <motion.img
                        key={src}
                        src={src}
                        alt="Nexora Labs feature visual"
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.45 }}
                        whileHover={{ scale: 1.04 }}
                      />
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="cta-section-home">
          <div className="container">
            <motion.div
              className="cta-home-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75 }}
            >
              <h2>Ready to architect your success?</h2>
              <p>
                Join businesses transforming their digital systems with Nexora
                Labs.
              </p>

              <div className="cta-home-actions">
                <Link to="/contact" className="cta-white-btn">
                  Schedule a Consultation
                </Link>

                <Link to="/pricing" className="cta-outline-btn">
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}