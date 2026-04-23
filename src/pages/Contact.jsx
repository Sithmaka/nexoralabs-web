import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquareText, MapPin } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/contact.css";
import SEO from "../components/SEO";

const mapImage =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop";

const WHATSAPP_NUMBER = "94770000000"; // replace with your real WhatsApp number

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

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Nexora Labs,

Full Name: ${form.fullName || "-"}
Email: ${form.email || "-"}
WhatsApp: ${form.whatsapp || "-"}
Message: ${form.message || "-"}

I would like to discuss my project.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Nexora Labs to build your website, business system, or AI solution."
        keywords="contact web developer Sri Lanka, Nexora Labs contact"
        url="https://www.nexoralabs.site/contact"
      />
      <Navbar />

      <main className="contact-page">
        <div className="contact-bg-orb contact-bg-orb-one" />
        <div className="contact-bg-orb contact-bg-orb-two" />

        <section className="contact-hero">
          <div className="container">
            <motion.div
              className="contact-hero-inner"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.h1 variants={fadeUp}>Get in Touch</motion.h1>
              <motion.p variants={fadeUp}>
                Let’s build your digital future together.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="contact-main-section">
          <div className="container">
            <div className="contact-main-grid">
              <motion.div
                className="contact-form-card"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <form onSubmit={handleWhatsAppSubmit} className="contact-form">
                  <div className="field-group full">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field-row">
                    <div className="field-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@nexora.io"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="field-group">
                      <label htmlFor="whatsapp">WhatsApp</label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="text"
                        placeholder="+94 77 000 0000"
                        value={form.whatsapp}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="field-group full">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    Send Message
                  </button>
                </form>
              </motion.div>

              <motion.div
                className="contact-info-wrap"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="contact-info-list">
                  <motion.div
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08, duration: 0.45 }}
                    whileHover={{ x: 6 }}
                  >
                    <div className="contact-info-icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span>Email Us</span>
                      <h4>info@nexoralabs.site</h4>
                    </div>
                  </motion.div>

                  <motion.div
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.16, duration: 0.45 }}
                    whileHover={{ x: 6 }}
                  >
                    <div className="contact-info-icon">
                      <MessageSquareText size={20} />
                    </div>
                    <div>
                      <span>WhatsApp</span>
                      <h4>+94 77 000 0000</h4>
                    </div>
                  </motion.div>

                  <motion.div
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.24, duration: 0.45 }}
                    whileHover={{ x: 6 }}
                  >
                    <div className="contact-info-icon">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span>Studio</span>
                      <h4>Sri Lanka & Remote</h4>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="contact-map-card"
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                >
                  <img src={mapImage} alt="Nexora Labs location visual" />
                  <span className="map-pin" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}