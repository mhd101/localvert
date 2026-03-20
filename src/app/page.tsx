"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="hero-pill" variants={itemVariants}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          100% Local — Your files never leave your browser
        </motion.div>

        <motion.h1 variants={itemVariants}>
          Convert, Resize & <br />
          <span className="text-gradient">Rename Files</span> <br />
          Right in Your Browser
        </motion.h1>

        <motion.p variants={itemVariants}>
          A powerful Chrome extension that handles file conversions, image resizing, and batch renaming — all locally, instantly, and privately.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#" className="btn btn-primary btn-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Add to Chrome — It&apos;s Free
          </a>
          <a href="#" className="btn btn-outline btn-pill">
            View Demo
          </a>
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

      {/* Features Section */}
      <motion.section
        id="features"
        className="features-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Everything You Need, <span className="text-gradient">Nothing To Upload</span>
        </motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Professional file tools that run entirely in your browser.
        </motion.p>

        <motion.div className="features-grid" variants={containerVariants}>
          {/* Feature Card 1 */}
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="feature-title">File Conversion</h3>
            <p className="feature-desc">Convert between formats with ease. Currently supports images and documents — all processed locally in your browser.</p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h3 className="feature-title">Image Resize</h3>
            <p className="feature-desc">Resize, crop, and compress images with precision. Maintain quality with smart algorithms.</p>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="feature-title">Full Page Screenshot</h3>
            <p className="feature-desc">Capture entire webpages in a single click — including content below the fold. Save as PNG or JPG.</p>
          </motion.div>

          {/* Feature Card 4 */}
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="feature-title">Auto Intercept Download</h3>
            <p className="feature-desc">Automatically intercept and process downloads before they hit your disk. Convert or rename on the fly.</p>
          </motion.div>

          {/* Feature Card 5 */}
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
                <line x1="4" y1="4" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="feature-title">Conversion Rules</h3>
            <p className="feature-desc">Set up persistent rules to auto-convert specific file types. Once configured, it just works in the background.</p>
          </motion.div>

          {/* Feature Card 6 */}
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
            <h3 className="feature-title">Rename Rules</h3>
            <p className="feature-desc">Create powerful rename patterns with regex, sequential numbering, and date stamps. Batch rename on autopilot.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        className="pricing-section"
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
          {/* Free Tier */}
          <motion.div className="pricing-card" variants={itemVariants}>
            <h3 className="pricing-title">Free</h3>
            <p className="pricing-desc">Essential tools for everyday file tasks</p>
            <div className="pricing-price">
              $0 <span className="pricing-period">/forever</span>
            </div>
            <div className="pricing-features">
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Image Conversion (JPEG, PNG, WebP, PDF)
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                PDF Conversion (DOCX, TXT)
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Webpage Conversion (HTML, PDF, TXT)
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                File Renaming
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Image Resizing
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Automatic Download Interception
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Manual File Upload
              </div>
            </div>
            <a href="#" className="btn btn-outline" style={{ width: '100%', padding: '12px', justifyContent: 'center' }}>
              Get Started Free
            </a>
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
              $7.99 <span className="pricing-original">$15.99</span> <span className="pricing-period">/lifetime</span>
            </div>
            <div className="pricing-features">
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Everything Included in Free
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Webpage to Markdown Conversion
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                PDF Page Extraction
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Full Page Screenshot
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Webpage Image Extraction
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Automated Renaming Rules
              </div>
              <div className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Automated Conversion Rules
              </div>
            </div>
            <a href="#" className="btn btn-primary" style={{ width: '100%', padding: '12px', justifyContent: 'center' }}>
              Upgrade to Lifetime
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="faq-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Frequently <span className="text-gradient">Asked Questions</span>
        </motion.h2>
        <motion.p className="section-subtitle" style={{ marginBottom: '20px' }} variants={itemVariants}>
          Everything you need to know about LocalVert.
        </motion.p>

        <motion.div className="faq-list" variants={containerVariants}>
          <FAQItem
            question="Does LocalVert upload my files?"
            answer="No, LocalVert is completely private. All file processing, conversions, and resizing happen 100% locally directly inside your browser. Your files never leave your device."
          />
          <FAQItem
            question="Do I need to be online to use the extension?"
            answer="You only need an internet connection to install the extension. Once installed, normal file conversions and tools work entirely offline."
          />
          <FAQItem
            question="What file formats are supported?"
            answer="We support a wide variety of standard image formats (JPG, PNG, WebP) and document formats. The Pro version unlocks over 50 specific conversions and heavy bulk processing capabilities."
          />
          <FAQItem
            question="How does the lifetime license work?"
            answer="Our lifetime license is a one-time payment. You get access to all Pro features forever, including all future updates and additions. There are no recurring subscription fees."
          />
        </motion.div>
      </motion.section>
    </div >
  );
}

// Simple FAQ Accordion Component
function FAQItem({ question, answer }: { question: string, answer: string }) {
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
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
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
          collapsed: { opacity: 0, height: 0, marginTop: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="faq-answer">{answer}</p>
      </motion.div>
    </motion.div>
  );
}
