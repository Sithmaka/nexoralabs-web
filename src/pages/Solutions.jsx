import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Bot,
  Workflow,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "../styles/pages/solutions.css";

const solutions = [
  {
    icon: <ShoppingCart size={22} />,
    title: "E-Commerce Platforms",
    text: "Scalable online stores with secure payments, inventory management, and seamless customer experiences.",
    link: "/pricing#ecommerce-pricing-basic",
  },
  {
    icon: <Bot size={22} />,
    title: "AI Chatbot Systems",
    text: "Automated customer support, lead generation, and smart responses powered by AI.",
    link: "/pricing#ai-pricing",
  },
  {
    icon: <Workflow size={22} />,
    title: "Business Automation",
    text: "Streamline workflows with CRM systems, reporting tools, and process automation.",
    link: "/pricing#business-automation-pricing",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Analytics & Dashboards",
    text: "Real-time dashboards and reporting tools to drive data-based decision making.",
    link: "/pricing#business-automation-pricing",
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

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions"
        description="Explore Nexora Labs digital solutions including e-commerce, AI chatbots, business automation, and analytics systems."
        keywords="ecommerce development Sri Lanka, AI chatbot systems, business automation solutions"
        url="https://www.nexoralabs.site/solutions"
      />

      <Navbar />

      <main className="solutions-page">
        {/* Background Orbs */}
        <div className="solutions-bg-orb orb-one" />
        <div className="solutions-bg-orb orb-two" />

        {/* HERO */}
        <section className="solutions-hero">
          <div className="container">
            <motion.div
              className="solutions-hero-inner"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span className="solutions-badge" variants={fadeUp}>
                Our Solutions
              </motion.span>

              <motion.h1 variants={fadeUp}>
                Smart Digital <span>Solutions</span>
              </motion.h1>

              <motion.p variants={fadeUp}>
                Tailored systems designed to solve real business challenges and
                accelerate growth through technology.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="solutions-grid-section">
          <div className="container">
            <motion.div
              className="solutions-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              {solutions.map((item) => (
                <motion.article
                  key={item.title}
                  className="solution-card"
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="solution-icon">{item.icon}</div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <Link to={item.link} className="solution-link">
                    View Pricing
                    <ArrowRight size={16} />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FEATURE HIGHLIGHT */}
        <section className="solutions-highlight">
          <div className="container">
            <motion.div
              className="highlight-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="highlight-text">
                <h2>Built for Scalability</h2>
                <p>
                  Every solution we build is modular, scalable, and ready to
                  evolve with your business. Start small, expand without limits.
                </p>

                <Link to="/contact" className="highlight-btn">
                  Start Your Solution
                </Link>
              </div>

              <div className="highlight-image">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
                  alt="Business dashboard"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="solutions-cta">
          <div className="container">
            <motion.div
              className="cta-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Need a custom solution?</h2>
              <p>
                Let’s design a system tailored to your business goals and
                operational needs.
              </p>

              <Link to="/contact" className="cta-btn">
                Talk to Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}