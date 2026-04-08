"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { containerVariants, itemVariants } from "./motion";

const faqItems = [
  {
    question: "Does LocalVert upload my files?",
    answer:
      "No, LocalVert is completely private. All file processing, conversions, and resizing happen 100% locally directly inside your browser. Your files never leave your device.",
  },
  {
    question: "Do I need to be online to use the extension?",
    answer:
      "You only need an internet connection to install the extension. Once installed, normal file conversions and tools work entirely offline.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support a wide variety of standard image formats (JPG, PNG, WebP) and document formats.",
  },
  {
    question: "How does the lifetime license work?",
    answer:
      "Our lifetime license is a one-time payment. You get access to all premium features forever, including all future updates and additions. There are no recurring subscription fees.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="faq-item"
      onClick={() => setIsOpen(!isOpen)}
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(42, 44, 52, 0.8)" : "rgba(38, 39, 45, 0.4)" }}
    >
      <div className="faq-question">
        {question}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", marginTop: 12 },
          collapsed: { opacity: 0, height: 0, marginTop: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="faq-answer">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <motion.section
      id="faq"
      className="faq-section viewport-section section-anchor"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        Frequently <span className="text-gradient">Asked Questions</span>
      </motion.h2>
      <motion.p className="section-subtitle faq-subtitle" variants={itemVariants}>
        Everything you need to know about LocalVert.
      </motion.p>

      <motion.div className="faq-list" variants={containerVariants}>
        {faqItems.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </motion.div>
    </motion.section>
  );
}
