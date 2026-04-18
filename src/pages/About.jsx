import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Lightbulb,
  Users,
  TrendingUp,
  Wallet,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/about.css";

const teamImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop";

const valueCards = [
  { icon: <BadgeCheck size={22} />, title: "Quality" },
  { icon: <Lightbulb size={22} />, title: "Innovation" },
  { icon: <Users size={22} />, title: "Client Success" },
  { icon: <TrendingUp size={22} />, title: "Scalability" },
];

const reasons = [
  {
    icon: <Wallet size={18} />,
    title: "Affordability",
    text: "Premium engineering solutions optimized for maximum ROI without compromising on quality.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "High Quality",
    text: "Rigorous testing and architectural precision in every line of code we ship.",
  },
  {
    icon: <Handshake size={18} />,
    title: "Long-term partnerships",
    text: "We don't just build products; we grow with your business as your dedicated technology partner.",
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

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
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

export default function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <div className="about-bg-orb about-bg-orb-one" />
        <div className="about-bg-orb about-bg-orb-two" />

        <section className="about-hero">
          <div className="container">
            <motion.div
              className="about-hero-inner"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.h1 variants={fadeUp}>About Nexora Labs</motion.h1>
              <motion.p variants={fadeUp}>
                Engineering the future through structural fluidity.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="about-vision-section">
          <div className="container">
            <div className="about-vision-grid">
              <motion.div
                className="vision-card vision-main"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
              >
                <span className="vision-label">Our Vision</span>
                <h2>
                  To empower businesses with innovative, scalable, and intelligent
                  systems.
                </h2>
                <span className="vision-line" />
              </motion.div>

              <motion.div
                className="vision-mini-grid"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {valueCards.map((item) => (
                  <motion.article
                    key={item.title}
                    className="vision-mini-card"
                    variants={fadeUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="vision-mini-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="about-why-section">
          <div className="container">
            <motion.div
              className="about-why-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div className="about-why-image" variants={fadeLeft}>
                <motion.img
                  src={teamImage}
                  alt="Nexora Labs team collaboration"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.45 }}
                />
              </motion.div>

              <motion.div className="about-why-content" variants={fadeRight}>
                <h2>Why Nexora?</h2>

                <div className="about-why-list">
                  {reasons.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="about-why-item"
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.12,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ x: 6 }}
                    >
                      <div className="about-why-icon">{item.icon}</div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="about-cta-section">
          <div className="container">
            <motion.div
              className="about-cta-card"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2>Ready to engineer your future?</h2>
              <p>
                Join the ranks of innovative companies leveraging Nexora’s
                structural fluidity for global success.
              </p>

              <div className="about-cta-actions">
                <Link to="/contact" className="about-cta-primary">
                  Get Started
                </Link>
                <Link to="/contact" className="about-cta-outline">
                  Contact Sales
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