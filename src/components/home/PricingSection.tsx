"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLink from "@/components/ui/SectionLink";
import { containerVariants, itemVariants } from "./motion";

const freeFeatures = [
  "Image Conversion (JPEG, PNG, WebP, PDF)",
  "PDF Conversion (DOCX, TXT)",
  "Webpage Conversion (HTML, PDF, TXT)",
  "File Renaming",
  "Image Resizing",
  "Automatic Download Interception",
  "Manual File Upload",
];

const lifetimeFeatures = [
  "Everything Included in Free",
  "Webpage to Markdown Conversion",
  "PDF Page Extraction",
  "Full Page Screenshot",
  "Webpage Image Extraction",
  "Automated Renaming Rules",
  "Automated Conversion Rules",
];

function PricingFeature({ children }: { children: string }) {
  return (
    <div className="pricing-feature">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      {children}
    </div>
  );
}

export default function PricingSection() {
  return (
    <motion.section
      id="pricing"
      className="pricing-section viewport-section section-anchor"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        Simple, <span className="text-gradient">Transparent</span> Pricing
      </motion.h2>
      <motion.p className="section-subtitle" variants={itemVariants}>
        Start for free, or upgrade once for lifetime access. No recurring fees.
      </motion.p>

      <motion.div className="pricing-grid" variants={containerVariants}>
        <motion.div className="pricing-card" variants={itemVariants}>
          <h3 className="pricing-title">Free</h3>
          <p className="pricing-desc">Essential tools for everyday file tasks</p>
          <div className="pricing-price">
            $0 <span className="pricing-period">/forever</span>
          </div>
          <div className="pricing-features">
            {freeFeatures.map((feature) => (
              <PricingFeature key={feature}>{feature}</PricingFeature>
            ))}
          </div>
          <SectionLink
            href="#"
            className="btn btn-outline"
            style={{ width: "100%", padding: "12px", justifyContent: "center" }}
          >
            Get Started Free 
          </SectionLink>
        </motion.div>

        <motion.div className="pricing-card pro" variants={itemVariants}>
          <div className="pricing-popular-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            Most Popular
          </div>
          <h3 className="pricing-title">Lifetime</h3>
          <p className="pricing-desc">Advanced automation and capture tools with one-time access</p>
          <div className="pricing-price">
            $8 <span className="pricing-original">$15.99</span> <span className="pricing-period">/lifetime</span>
          </div>
          <div className="pricing-features">
            {lifetimeFeatures.map((feature) => (
              <PricingFeature key={feature}>{feature}</PricingFeature>
            ))}
          </div>
          <Link
            href="https://dodo.pe/localvert"
            className="btn btn-primary"
            style={{ width: "100%", padding: "12px", justifyContent: "center" }}
          >
            Upgrade to Lifetime
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
