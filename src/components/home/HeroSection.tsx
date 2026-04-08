"use client";

import { motion } from "framer-motion";
import SectionLink from "@/components/ui/SectionLink";
import { containerVariants, itemVariants } from "./motion";

export default function HeroSection() {
  return (
    <motion.section
      id="top"
      className="hero viewport-section section-anchor"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="hero-pill" variants={itemVariants}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Your files never leave your browser
      </motion.div>

      <motion.h1 variants={itemVariants}>
        Convert, Resize & <br />
        <span className="text-gradient">Rename Files</span> <br />
        Right in Your Browser
      </motion.h1>

      <motion.p variants={itemVariants}>
        A powerful Chrome extension that handles file conversions, image resizing, and renaming before downloads - all locally, instantly, and privately.
      </motion.p>

      <motion.div className="hero-actions" variants={itemVariants}>
        <SectionLink href="#pricing" align="center" className="btn btn-primary btn-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Add to Chrome - It&apos;s Free
        </SectionLink>
        <SectionLink href="#features" className="btn btn-outline btn-pill">
          View Features
        </SectionLink>
      </motion.div>

      <motion.div className="hero-features" variants={itemVariants}>
        <motion.div className="hero-feature-item" variants={itemVariants}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Instant processing
        </motion.div>
        <motion.div className="hero-feature-item" variants={itemVariants}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          No uploads
        </motion.div>
        <motion.div className="hero-feature-item" variants={itemVariants}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          Works offline
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
