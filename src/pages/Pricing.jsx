import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  BadgeCheck,
  ShoppingCart,
  Bot,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/pricing.css";

const websitePlans = [
  {
    name: "Starter",
    subtitle: "Ideal for landing pages and small business websites.",
    price: "LKR 45k–75k",
    features: [
      { text: "3–5 Pages", included: true },
      { text: "Mobile Responsive", included: true },
      { text: "Basic SEO", included: true },
      { text: "Contact Form", included: true },
      { text: "Hosting Guidance", included: true },
    ],
    button: "Choose Starter",
    popular: false,
  },
  {
    name: "Business",
    subtitle: "Robust solutions for growing businesses.",
    price: "LKR 85k–150k",
    features: [
      { text: "5–10 Pages", included: true },
      { text: "Custom UI/UX Design", included: true },
      { text: "SEO Optimization", included: true },
      { text: "Admin Panel", included: true },
      { text: "Performance Optimization", included: true },
    ],
    button: "Choose Business",
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "Fully integrated digital ecosystems.",
    price: "LKR 180k–350k+",
    features: [
      { text: "Fully Custom Design", included: true },
      { text: "Advanced Animations", included: true },
      { text: "CMS / Admin Dashboard", included: true },
      { text: "API Integrations", included: true },
      { text: "High-end Performance", included: true },
    ],
    button: "Contact for Premium",
    popular: false,
  },
];

const solutionPlans = [
  {
    id: "ecommerce-pricing-basic",
    icon: <ShoppingCart size={18} />,
    title: "Basic E-Commerce",
    price: "LKR 120k–200k",
    text: "Product listings, cart & checkout, and payment gateway integration.",
  },
  {
    id: "ecommerce-pricing-advanced",
    icon: <ShoppingCart size={18} />,
    title: "Advanced E-Commerce",
    price: "LKR 250k–500k+",
    text: "Full admin dashboard, inventory system, reports & analytics, and multi-user support.",
  },
  {
    id: "ai-pricing",
    icon: <Bot size={18} />,
    title: "AI Chatbot Integration",
    price: "LKR 50k–120k",
    text: "Website chatbot, FAQ automation, and lead capture.",
  },
  {
    id: "business-automation-pricing",
    icon: <Workflow size={18} />,
    title: "Business Automation",
    price: "LKR 100k–250k",
    text: "CRM integrations and reporting systems for streamlined operations.",
  },
];

const supportPlans = [
  {
    icon: <ShieldCheck size={18} />,
    title: "Basic Support",
    price: "LKR 5,000 / month",
    text: "Bug fixes and basic updates.",
  },
  {
    icon: <Zap size={18} />,
    title: "Standard Support",
    price: "LKR 10,000 / month",
    text: "Performance optimization, security updates, and monthly reports.",
    highlighted: true,
  },
  {
    icon: <BadgeCheck size={18} />,
    title: "Premium Support",
    price: "LKR 20,000+ / month",
    text: "Priority support, feature updates, and continuous improvements.",
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

export default function Pricing() {
  return (
    <>
      <Navbar />

      <main className="pricing-page">
        <div className="pricing-bg-orb pricing-bg-orb-one" />
        <div className="pricing-bg-orb pricing-bg-orb-two" />

        <section className="pricing-hero">
          <div className="container">
            <motion.div
              className="pricing-hero-inner"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span className="pricing-badge" variants={fadeUp}>
                Our Plans
              </motion.span>

              <motion.h1 variants={fadeUp}>Simple, Transparent Pricing</motion.h1>

              <motion.p variants={fadeUp}>
                Scalable plans to fit your business needs. From startups to
                enterprise-grade digital solutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="pricing-plans-section" id="web-pricing">
          <div className="container">
            <motion.div
              className="pricing-plans-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              {websitePlans.map((plan) => (
                <motion.article
                  key={plan.name}
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  {plan.popular && (
                    <span className="popular-badge">Most Popular</span>
                  )}

                  <div className="pricing-card-head">
                    <h3>{plan.name}</h3>
                    <p>{plan.subtitle}</p>
                  </div>

                  <div className="pricing-price">{plan.price}</div>

                  <div className="pricing-feature-list">
                    {plan.features.map((feature) => (
                      <div key={feature.text} className="pricing-feature">
                        <CheckCircle2 size={16} className="yes" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`pricing-btn ${plan.popular ? "primary" : ""}`}
                  >
                    {plan.button}
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="pricing-extra-section" id="solutions-pricing">
          <div className="container">
            <motion.div
              className="pricing-section-heading"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Additional Solutions</h2>
              <p>
                Expand your digital ecosystem with commerce, AI, and automation
                services.
              </p>
            </motion.div>

            <motion.div
              className="pricing-extra-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              {solutionPlans.map((item) => (
                <motion.article
                  key={item.title}
                  id={item.id}
                  className="pricing-extra-card"
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <div className="pricing-extra-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <strong>{item.price}</strong>
                  <p>{item.text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="support-section" id="support-pricing">
          <div className="container">
            <motion.div
              className="pricing-section-heading"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Maintenance & Support</h2>
              <p>Keep your digital assets secure, updated, and high-performing.</p>
            </motion.div>

            <motion.div
              className="support-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              {supportPlans.map((item) => (
                <motion.article
                  key={item.title}
                  className={`support-card ${
                    item.highlighted ? "highlighted" : ""
                  }`}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <div className="support-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <strong>{item.price}</strong>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="pricing-cta-section">
          <div className="container">
            <motion.div
              className="pricing-cta-card"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pricing-cta-copy">
                <h2>Still not sure which plan is right for you?</h2>
                <p>
                  Let’s talk about your vision and recommend the best digital
                  solution stack for your business.
                </p>

                <div className="pricing-cta-actions">
                  <Link to="/contact" className="pricing-cta-primary">
                    Talk to an Expert
                  </Link>
                  <Link to="/services" className="pricing-cta-outline">
                    View Our Services
                  </Link>
                </div>
              </div>

              <div className="pricing-cta-visual">
                <div className="pricing-cta-visual-shell">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
                    alt="Nexora Labs support team"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}