import { Link } from "react-router-dom";
import {
  MonitorSmartphone,
  BriefcaseBusiness,
  Sparkles,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/services.css";

const services = [
  {
    icon: <MonitorSmartphone size={22} />,
    title: "Web Development",
    text: "High-performance web applications built with scalable architectures and modern frameworks for seamless user experiences.",
    cta: "Explore Pricing",
    link: "/pricing",
  },
  {
    icon: <BriefcaseBusiness size={22} />,
    title: "Business Systems",
    text: "Custom ERP and CRM solutions that integrate your core business processes into a single, cohesive digital ecosystem.",
    cta: "View System Pricing",
    link: "/pricing",
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI & Automation",
    text: "Leveraging machine learning and intelligent workflows to automate repetitive tasks and unlock data-driven insights.",
    cta: "See AI Pricing",
    link: "/pricing",
  },
  {
    icon: <LayoutGrid size={22} />,
    title: "UI/UX Design",
    text: "User-centric design systems that prioritize accessibility, aesthetics, and structural fluidity for modern interfaces.",
    cta: "View Web Pricing",
    link: "/pricing",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    text: "Understanding your business goals and technical requirements.",
    active: true,
  },
  {
    number: "2",
    title: "Design",
    text: "Mapping out architecture and crafting high-fidelity prototypes.",
  },
  {
    number: "3",
    title: "Development",
    text: "Engineering the solution with clean code and rigorous testing.",
  },
  {
    number: "4",
    title: "Launch",
    text: "Final deployment and continuous optimization for peak performance.",
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

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="services-page">
        <div className="services-bg-orb services-bg-orb-one" />
        <div className="services-bg-orb services-bg-orb-two" />

        <section className="services-hero">
          <div className="container">
            <motion.div
              className="services-hero-inner"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span className="services-badge" variants={fadeUp}>
                Expertise Overview
              </motion.span>

              <motion.h1 variants={fadeUp}>Our Services</motion.h1>

              <motion.p variants={fadeUp}>
                Technology solutions designed for growth. We build structural
                foundations for digital excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="services-grid-section">
          <div className="container">
            <motion.div
              className="services-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
            >
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  className="service-card"
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="service-icon">{service.icon}</div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <Link to={service.link} className="service-link">
                    {service.cta}
                    <ArrowRight size={16} />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <motion.div
              className="process-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="process-heading">
                <span className="process-label">How We Work</span>
                <h2>Our Process</h2>
              </div>

              <div className="process-steps">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="process-step"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.45 }}
                  >
                    <div
                      className={`process-step-top ${
                        step.active ? "active" : ""
                      }`}
                    >
                      <div
                        className={`process-number ${
                          step.active ? "active" : ""
                        }`}
                      >
                        {step.number}
                      </div>
                      {index !== processSteps.length - 1 && (
                        <span className="process-line" />
                      )}
                    </div>

                    <div className="process-step-body">
                      <h4>{step.title}</h4>
                      <p>{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="services-cta-section">
          <div className="container">
            <motion.div
              className="services-cta-card"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2>Ready to start your next project?</h2>
              <p>
                Let’s collaborate to build technology that propels your business
                into the future.
              </p>

              <div className="services-cta-actions">
                <Link to="/contact" className="services-cta-primary">
                  Get a Custom Quote
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